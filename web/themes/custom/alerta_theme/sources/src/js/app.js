//Styles
import '../sass/main.scss';
//Layout
import { loadLoaderHandlers } from './layout/Loader';
import { loadHeaderHandlers } from './layout/Header';
//Components
import { loadScrollHandlers } from './components/Scroll';
//Animations
import { loadLineHandlers } from './animations/Line';


//Load modules
window.addEventListener('load', ()=>{
    loadLoaderHandlers();
    loadLineHandlers();
    loadHeaderHandlers();
    loadScrollHandlers();
});