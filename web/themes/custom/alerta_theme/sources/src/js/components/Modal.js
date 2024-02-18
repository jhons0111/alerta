const Modal = (()=>{

    const _ModalConfig = ()=>{
        const btnModal = document.querySelector('#open-form');

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