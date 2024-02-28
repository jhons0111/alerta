const TemplateTeam = (indice, id, image)=>{

    return `<picture data-colaborator="${id}" style="--left: ${indice * 70}px; --index: 0.${indice}s">
                <img src="${image}" alt="">
            </picture>`
}


const TemplateModal = (picture, name, position, description, habilities)=>{
    return `
    <div class="item">
        <picture>
            <img src="${picture}" alt="">
        </picture>
        <picture>
            <img src="/themes/custom/alerta_theme/sources/dist/assets/img/jpg/bg-modal.jpg" alt="">
        </picture>
        <div class="modal__name">
            <p>${name}</p>
        </div>
    </div>
    <div class="item">
        <div class="modal__close close-modal">
            <picture>
                <img src="/themes/custom/alerta_theme/sources/dist/assets/img/svg/star-modal.svg" alt="">
            </picture>
        </div>
        <div class="modal__dsc">
            <h4>${position}</h4>
            <p>${description}</p>
        </div>
        <div class="block">
            ${habilities.map(function(image){ return `<picture><img src="${image}" alt="categories"></picture>` })}
        </div>
    </div>
    `;
}

export { TemplateTeam, TemplateModal }