import * as AOS from 'aos';
import 'aos/dist/aos.css';

const Aos = (()=>{

    const _AosConfig = ()=>{
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
            });
        }, 2250);
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _AosConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadAosHandlers = ()=>{
    Aos.setHandleEvent();
}

export { loadAosHandlers }