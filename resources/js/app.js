$(document).ready(() => {
    // setTimeout(() => {
    //     $(".load-cover").fadeOut();
    // }, 2000)

    $('.load-cover').fadeOut();
    $('#home-btn').click((event) => {
        event.preventDefault();
        console.log('you pushed the button')
        $('.home-page').toggleClass('left-screen')
        setTimeout(() => {
                $(".load-cover").fadeIn();
            }, 2000)
    });
    $('#about-btn').click((event) => {
        event.preventDefault();
        console.log('you pushed the button')
    })
    $('#portfolio-btn').click((event) => {
        event.preventDefault();
        console.log('you pushed the button')
    })
    $('#contact-btn').click((event) => {
        event.preventDefault();
        console.log('you pushed the button')
    })
});