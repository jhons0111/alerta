const Example = (()=>{

    const _exampleConfig = ()=>{
        console.log('example runing')
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _exampleConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadExampleHandlers = ()=>{
    Example.setHandleEvent();
}

export { loadExampleHandlers }