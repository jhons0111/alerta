const Form = (()=>{

    const _FormConfig = ()=>{
        const getForm = document.querySelector('#join-form-ctn');
        const getHeader = document.querySelector('.header');
        const getBody = document.body;
        setTimeout(()=>{
            getBody.appendChild(getHeader);
            getBody.appendChild(getForm);
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