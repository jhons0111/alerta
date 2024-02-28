const Form = (()=>{

    const _FormConfig = ()=>{
        const getForm = document.querySelector('#join-form-ctn');
        const getHeader = document.querySelector('.header');
        const getBlob = document.querySelector('.blob');
        const getStars = document.querySelector('.stars__container');
        const getModal = document.querySelector('#modal-content');
        const getBody = document.body;
        setTimeout(()=>{
            getBody.appendChild(getHeader);
            getBody.appendChild(getForm);
            getBody.appendChild(getBlob);
            getBody.appendChild(getStars);
            getBody.appendChild(getModal);
        }, 2500);
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _FormConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadFormHandlers = ()=>{
    Form.setHandleEvent();
}

export { loadFormHandlers }