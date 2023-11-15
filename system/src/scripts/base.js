export const lazyload = () => {
    setTimeout(() => {    
        const lazyload = $('.lazyload');

        $(lazyload)
            .removeClass('lazyload')
            .addClass('lazyloaded');
    }, 1500);
};

export const redirectToMenu = () => {
    // let buttonMenu = $('.content-secondary .content-middle .dir-menu');
    let buttonNavigationMenu = $('.navbar .nav-items li:nth-child(3)');

    $(buttonNavigationMenu).trigger('click');
}

export const redirectToReservations = () => {
    // let buttonMenu = $('.content-secondary .content-middle .dir-menu');
    let buttonNavigationReservation = $('.navbar .nav-items li:nth-child(4)');

    $(buttonNavigationReservation).trigger('click');
}