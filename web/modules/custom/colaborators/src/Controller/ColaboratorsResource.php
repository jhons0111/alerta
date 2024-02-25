<?php

namespace Drupal\colaborators\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\node\NodeStorageInterface;

/**
 * Controller for Colaborators.
 */
class ColaboratorsResource extends ControllerBase {

  /**
   * The node storage.
   *
   * @var \Drupal\node\NodeStorageInterface
   */
  protected $nodeStorage;

  /**
   * ColaboratorsResource constructor.
   *
   * @param \Drupal\node\NodeStorageInterface $node_storage
   *   The node storage.
   */
  public function __construct(NodeStorageInterface $node_storage) {
    $this->nodeStorage = $node_storage;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')->getStorage('node')
    );
  }

  /**
   * Returns JSON response for Colaborators data.
   */

  public function get() {

    // Load colaborators nodes and extract the required fields.
    $query = $this->nodeStorage->getQuery()
      ->condition('type', 'collaborator');
    $nids = $query->execute();
    $nodes = $this->nodeStorage->loadMultiple($nids);
    $data = [];

    foreach ($nodes as $node) {
      $media_entity = $node->get('field_picture')->entity;

      if ($media_entity) {

        $file_entity = $media_entity->field_media_image->entity;
      }

      // Check if the field_habilities is present in the node.
      if ($node->get('field_habilities')) {
        $taxonomy_term_entities = $node->get('field_habilities')->referencedEntities();

        // Loop through referenced taxonomy term entities.
        foreach ($taxonomy_term_entities as $taxonomy_term) {
          $icon_field = $taxonomy_term->get('field_icon')->first();

          if ($icon_field && $icon_field->entity) {
            // Assuming field_icon is a reference field to an image entity.
            $file_entity = $icon_field->entity->get('field_media_image')->entity;

            $dataItem['habilities'][] = [
              'term_name' => $taxonomy_term->label(),
              'icon' => ($file_entity) ? file_create_url($file_entity->getFileUri()) : '',
            ];
          }
        }
      }

      //Set the array values
      $data[] = [
        'name' => $node->get('field_name')->value,
        'position' => $node->get('field_position')->value,
        'description' => $node->get('field_description')->value,
        'picture' => ($file_entity) ? file_create_url($file_entity->getFileUri()) : '',
        'habilities' => !empty($dataItem['habilities']) ? $dataItem['habilities'] : ''
      ];

      unset($dataItem['habilities']);      
      $file_entity = '';
    }

    //Return the collaborators data.
    return new JsonResponse($data);
  }

}
