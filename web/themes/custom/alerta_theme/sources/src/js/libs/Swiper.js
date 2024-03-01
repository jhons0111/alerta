import Swiper, {Pagination, Autoplay, Parallax, Navigation } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const SwiperLib = (()=>{

    const configSwiperHome = ()=>{
        var swiper = new Swiper(".swiper-home", {
            modules: [Autoplay, Navigation],
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                576: {
                    slidesPerView: 3.2,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                1500: {
                    slidesPerView: 7,
                    spaceBetween: 50,
                },
            }
    
        });
    }

    return {
        setHandleEvent: function(){
            try {configSwiperHome();}catch(err){  }
        }
    }

})();


const loadSwiperHandlers = ()=>{
    SwiperLib.setHandleEvent();
}


export { loadSwiperHandlers }