const disableScroll = ()=> {
    // Get actual scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    //Fix bug scroll
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    // Position actual
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

export { disableScroll }