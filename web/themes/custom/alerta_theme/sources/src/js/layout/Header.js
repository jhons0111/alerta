const Header = (()=>{

    const _HeaderConfig = ()=>{
        let lastScrollTop = 0;
        //Event scroll
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const header = document.querySelector('.header');
            //Validate scroll
            if (scrollTop > lastScrollTop) {
                header.classList.add('scroll');
            } else if (scrollTop < lastScrollTop) {
                header.classList.remove('scroll');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _HeaderConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadHeaderHandlers = ()=>{
    Header.setHandleEvent();
}

export { loadHeaderHandlers }