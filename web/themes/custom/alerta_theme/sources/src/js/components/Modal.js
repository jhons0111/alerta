const Modal = (()=>{

    const _ModalConfig = ()=>{
        const btnModal = document.querySelector('#open-form');
        const buttonOpenModalHeader = document.querySelectorAll('nav .menu-item');
        const bgModal = document.querySelector('#join-form-ctn .join-us__bg');


        buttonOpenModalHeader[1].addEventListener('click', (e)=>{
            e.preventDefault();
            document.querySelector('.join-us').classList.add('active');
        });

        bgModal.addEventListener('click', (e)=>{
            console.log('click');
            e.target.closest('.join-us').classList.remove('active');
        });

        btnModal.addEventListener('click', (e)=>{
            e.target.closest('.join-us').classList.toggle('active');
        });
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _ModalConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadModalHandlers = ()=>{
    Modal.setHandleEvent();
}

export { loadModalHandlers }