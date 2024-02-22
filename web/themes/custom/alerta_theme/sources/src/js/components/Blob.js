const Blob = (()=>{

    const _BlobConfig = ()=>{
        const cursor = document.querySelector('.blob');
        document.addEventListener('mousemove', function(e){
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        });
    }

    /*
    *Return child functions in a objects
    */
    return{
        setHandleEvent: function(){
            try { _BlobConfig(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadBlobHandlers = ()=>{
    Blob.setHandleEvent();
}

export { loadBlobHandlers }