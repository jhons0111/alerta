const Paginator = (()=>{

    const _PaginatorConfig = ()=>{
        const projects = document.querySelectorAll('#grid-projects .item');
        const button = document.querySelector('#show-more');
        //Hidden elements
        projects.forEach((project, indice)=>{
            indice > 7 && project.classList.add('disabled');
        });
        //Show elements in event
        button.addEventListener('click', (e)=>{
            button.style.display = "none";
            projects.forEach((project, indice)=>{
                project.classList.remove('disabled');
                project.classList.add('enabled');
                if(indice == 8){
                    project.setAttribute('style', '--index: 0.10s');
                }
            });
        });
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _PaginatorConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadPaginatorHandlers = ()=>{
    Paginator.setHandleEvent();
}

export { loadPaginatorHandlers }