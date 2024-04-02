//Styles
import '../sass/main.scss';
//Layout
import { loadLoaderHandlers } from './layout/Loader';
import { loadHeaderHandlers } from './layout/Header';
//Components
import { loadScrollHandlers } from './components/Scroll';
import { loadModalHandlers } from './components/Modal';
import { loadFormHandlers } from './components/Form';
import { loadBlobHandlers } from './components/Blob';
import { loadPaginatorHandlers } from './components/Paginator';
import { stars } from './components/Stars';
//Animations
import { loadLineHandlers } from './animations/Line';
//Libs
import { loadAosHandlers } from './libs/Aos';
import { loadSwiperHandlers } from './libs/Swiper';
//Modules
import { disableScroll } from './modules/DisabledScroll';
//Api
import { loadTeamHandlers } from './api/Team';

//Disable scroll
disableScroll();

//Load modules
window.addEventListener('load', ()=>{
    loadScrollHandlers();
    loadLoaderHandlers();
    loadLineHandlers();
    loadHeaderHandlers();
    loadModalHandlers();
    loadFormHandlers();
    loadAosHandlers();
    loadBlobHandlers();
    loadTeamHandlers();
    loadSwiperHandlers();
    loadPaginatorHandlers();
    stars();
    initLine();
    //Enable scroll
    window.onscroll = null;
});