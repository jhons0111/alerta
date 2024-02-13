const Loader = (()=>{

    const _LoaderConfig = ()=>{
        const loader = document.querySelector('.loader');
        setTimeout(()=>{
            loader.classList.add('line-animate');
        },1500);
        setTimeout(()=>{
            loader.classList.add('hidden');
        },2250);
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _LoaderConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadLoaderHandlers = ()=>{
    Loader.setHandleEvent();
}

export { loadLoaderHandlers }