document.addEventListener('DOMContentLoaded', () => {

    // let controller = new ScrollMagic.Controller();
    // let scrollScene = new ScrollMagic.Scene()

    // let scene = new ScrollMagic.Scene({
    //     triggerElement: '.search-section',
    //     duration: '100%',
    //     triggerHook: 0,
    //     offset: '0'
    // })


    // let timeline = new TimelineMax()
    // timeline
    //     .from('.search', .25, {
    //         x: 300,
    //         opacity: 0,
    //         offset: -300
    //     })


    // scene.setTween(timeline)
    //     .setPin('.search-section')
    //     .addTo(controller)





    let start = new TimelineMax({})


    start

        .from('.hero-animation', 1, {
            x: -1000,
            opacity: 0
        })
        .from('.e1', 1, {
            x: -150,
            opacity: 0
        })
        .from('.e2', 1, {
            y: 200,
            x: 200,
            rotation: 90,
            opacity: 0
        }, '-=1')
        .from('.e3', 1, {
            y: -200,
            x: 200,
            rotation: 90,
            opacity: 0
        }, '-=1')
        .from('.e4', 1, {
            y: -150,
            x: 500,
            rotation: 90,
            opacity: 0
        }, '-=1')
        .to('.e4', .4, {
            x: 100
        })
        .to('.e4', .125, {
            x: 0
        }, 'ww')
        .from('.animation-text', .125, {
            x: -50,
            opacity: 0
        }, 'ww')

})