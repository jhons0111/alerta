//Styles
import '../sass/main.scss';
//Layout
import { loadLoaderHandlers } from './layout/Loader';
//Animations
import { loadLineHandlers } from './animations/Line';


//Load modules
window.addEventListener('load', ()=>{
    loadLoaderHandlers();
    loadLineHandlers();
});