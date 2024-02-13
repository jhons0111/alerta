const Line = (()=>{

    /**
     * Reuse function for animation in lines
     * 
     * @param {HTMLElement} element 
     */
    const ReuseLine = (element)=>{
        const length1 = path1.getTotalLength();
        const length2 = path2.getTotalLength();
        path1.style.strokeDasharray = length1;
        path1.style.strokeDashoffset = length1;
        path2.style.strokeDasharray = length2;
        path2.style.strokeDashoffset = length2;
    }

    const _LineConfig = ()=>{
        const path1 = document.querySelector('.loader #path1');
        const path2 = document.querySelector('.loader #path2');
        ReuseLine(path1);
        ReuseLine(path2);
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _LineConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadLineHandlers = ()=>{
    Line.setHandleEvent();
}

export { loadLineHandlers }