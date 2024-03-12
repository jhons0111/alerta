const Line = (()=>{

    /**
     * Reuse function for animation in lines
     * 
     * @param {HTMLElement} element 
     */
    const ReuseLine = (element)=>{
        const length1 = element.getTotalLength();
        element.style.strokeDasharray = length1;
        element.style.strokeDashoffset = length1;
    }

    const _LineConfig = ()=>{
        const path1 = document.querySelector('.loader #path1');
        const path2 = document.querySelector('.loader #path2');
        path1 && ReuseLine(path1);
        path2 && ReuseLine(path2);
    }

    const _LineHover = ()=>{

        function interpolateBezier(p0, p1, t) {
            return p0 + (p1 - p0) * t;
        }

        document.body.addEventListener('mousemove', (event)=>{
            const svg = document.querySelector('#line-animate-home svg');
            const path = document.querySelectorAll('#line-animate-home path');
        
            const svgWidth = svg.getBoundingClientRect().width;
            const svgHeight = svg.getBoundingClientRect().height;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
        
            const offsetX = (mouseX / window.innerWidth - 0.5) * 2;
            const offsetY = (mouseY / window.innerHeight - 0.5) * 2;
        
            const deformAmountX = offsetX * 20;
            const deformAmountY = offsetY * 20;
        
            const d = `M${interpolateBezier(-72.7156, 59.765 + deformAmountX, 0)} ${interpolateBezier(179.428, 10.5541 + deformAmountY, 0)} C${interpolateBezier(-65.717, 59.765 + deformAmountX, 0.5)} ${interpolateBezier(106.475, 10.5541 + deformAmountY, 0.5)} -29.4229 -29.4339 ${59.765 + deformAmountX} ${10.5541 + deformAmountY} C171.25 ${60.539 + deformAmountY} 150.554 433.401 398.922 369.621 C647.291 305.842 699.782 44.8742 ${941.535 + deformAmountX} ${207.174 + deformAmountY} C1183.29 369.474 1344.98 732.223 1602.09 639.019 C1859.21 545.815 1828.09 292.223 1955.58 304.453`;


            path[0] && path[0].setAttribute('d', d);
            path[1] && path[1].setAttribute('d', d);
        })
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _LineConfig(); } catch (error) { }
            try { _LineHover(); } catch (error) { }
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