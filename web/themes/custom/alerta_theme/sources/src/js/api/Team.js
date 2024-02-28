//Component request
import { requestGet } from '../components/ConfigConex';
//COmponent template
import { TemplateTeam , TemplateModal} from '../components/Templates';

const Team = (()=>{

    const _TeamConfig = ()=>{
        const containerTeam = document.querySelector('#render-team');
        //Render team images and names
        requestGet('/api/colaborators')
            .then(res=>{
                res.forEach((data, indice)=>{
                    const { colaborator_id, picture } = data;
                    const template = TemplateTeam(indice, colaborator_id, picture);
                    containerTeam.innerHTML += template;
                    //Enable event button
                    _TeamModal();
                });
            });
    }


    const _TeamModal = ()=>{
        const buttons = document.querySelectorAll('#render-team picture');
        const modalContent = document.querySelector('#modal-content .modal');

        //Buttons
        buttons.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                //Request
                requestGet(`/api/colaborator/${e.target.dataset.colaborator}`)
                    .then(res=>{
                        const { picture, name, position, description, habilities  } = res;
                        console.log(res);
                        const templateModal = TemplateModal(picture, name, position, description, habilities);
                        modalContent.classList.add('active');
                        modalContent.querySelector('.modal__content').innerHTML = templateModal;
                        //Close modal
                        _TeamCloseModal();
                    });
            });
        })
    }

    const _TeamCloseModal = ()=>{
        const closeModal = document.querySelectorAll('.close-modal');

        closeModal.forEach((modal)=>{
            modal.addEventListener('click', (e)=>{
                e.target.closest('.modal').classList.remove('active');
            });
        })
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _TeamConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadTeamHandlers = ()=>{
    Team.setHandleEvent();
}

export { loadTeamHandlers }