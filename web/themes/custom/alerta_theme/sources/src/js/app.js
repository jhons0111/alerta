//Styles
import '../sass/main.scss';
//Layout
import { loadLoaderHandlers } from './layout/Loader';
import { loadHeaderHandlers } from './layout/Header';
//Components
import { loadScrollHandlers } from './components/Scroll';
import { loadModalHandlers } from './components/Modal';
import { loadFormHandlers } from './components/Form';
//Animations
import { loadLineHandlers } from './animations/Line';


//Load modules
window.addEventListener('load', ()=>{
    loadLoaderHandlers();
    loadLineHandlers();
    loadHeaderHandlers();
    loadScrollHandlers();
    loadModalHandlers();
    loadFormHandlers();
});