$(document).ready(() => {
    let inTransition = false;
    $('.load-cover').fadeOut();
    
    $('.nav-panel').on('click', 'a', (event) => {
        event.preventDefault();
        let pages = [ 'home', 'about', 'portfolio', 'resume', 'contact' ]
        if(!inTransition && $(`.${event.target.id.split('-')[0]}-page`).hasClass('left-screen')) {
            inTransition = true;
            pages.forEach((page) => {
                if(page !== `${event.target.id.split('-')[0]}`) {
                    $(`.${page}-page`).removeClass('front').addClass('back');
                    $(`#${page}-btn`).removeClass('slided-right');
                }
            });

            $(`.${event.target.id.split('-')[0]}-page`).removeClass('left-screen back').addClass('front');
            $(`#${event.target.id.split('-')[0]}-btn`).addClass('slided-right');

            setTimeout(() => {
                pages.forEach((page) => {
                    if(page !== `${event.target.id.split('-')[0]}`) {
                        $(`.${page}-page`).addClass('left-screen');
                    }
                    inTransition = false;
                });
            }, 2000);
        }
    });
});