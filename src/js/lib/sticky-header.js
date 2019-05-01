function showStickyNavigation () {
    window.addEventListener('scroll', () => {
        const stickyNavigation = document.querySelector('.sticky-nav');
        stickyNavigation.classList.toggle('sticky-nav--active', window.pageYOffset >= 300);
    })
}

export default showStickyNavigation;
