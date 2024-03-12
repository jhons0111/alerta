const ScrollSmoth = (()=>{

    const ScrollSmoth = ()=>{
        const ReuseScrollSmoth = ()=>{
            const body = document.body;
            const main = document.querySelector('.dialog-off-canvas-main-canvas');
            const scrollDown = document.querySelector('.scroll-down');
            const parallax = document.querySelectorAll('.parallax');
            let sx = 0, // For scroll positions
                sy = 0;
            let dx = sx, // For container positions
                dy = sy;
            body.style.height = main.clientHeight + 'px';
            
            main.style.position = 'fixed';
            main.style.top = 0;
            main.style.left = 0;
            window.addEventListener('scroll', easeScroll);

            window.addEventListener('scroll', ()=>{
                body.style.height = main.clientHeight + 'px';
            });
            
            window.addEventListener('resize', ()=>{
                body.style.height = main.clientHeight + 'px';
            });

            function easeScroll() {
                sx = window.pageXOffset;
                sy = window.pageYOffset;
            }
            
            window.requestAnimationFrame(render);

            function render() {
                //We calculate our container position by linear interpolation method
                dx = li(dx, sx, 0.1);
                dy = li(dy, sy, 0.1);

                dx = Math.floor(dx * 100) / 100;
                dy = Math.floor(dy * 100) / 100;

                main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
                parallax[0] && (parallax[0].style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`);
                parallax[1] && (parallax[1].style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`);
                scrollDown && (scrollDown.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`);
                window.requestAnimationFrame(render);
            }

            function li(a, b, n) {
                return (1 - n) * a + n * b;
            }
        }

        setTimeout(()=>{
            window.screen.width >= 992 && ReuseScrollSmoth();
        },2000);

    }

    return {
        setHandleEvent: function(){
            try{ ScrollSmoth(); }catch(err){  };
        }
    }

})();

const loadScrollHandlers = ()=>{ 
    ScrollSmoth.setHandleEvent(); 
}

export { loadScrollHandlers }