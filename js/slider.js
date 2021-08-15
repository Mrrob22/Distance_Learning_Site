$(function() {
    // console.log('slider')
    var sldr = $('.sldr'),
        sldrContent = sldr.html(),
        slideWidth = $('.sl_ctr').outerWidth(),
        slideCount = $('.sldr ').length,
        prv_b = $('.prv_b'),
        nxt_b = $('.nxt_b'),
        sldrInterval = 5000,
        animateTime = 1000,
        course = 1,
        margin = - slideWidth

    $('.sldr img:last').clone().prependTo('.sldr')
    $('.sldr img:first').clone().appendTo('.sldr')
    $('.sldr').css('margin-left',-slideWidth)

    function nxt_bSlide(){
        interval=window.setInterval(animate,sldrInterval)
    }
    function animate(){
        // console.log('slideWidth =', slideWidth)
        // console.log('margin =', margin)
        // console.log('course =', course)
        // console.log('slideCount =', slideCount)
        // console.log('animateTime =', animateTime)
        console.log('margin =', margin)
        // console.log('slideCount =', slideCount)
        // console.log('course =', course)
        if (margin == -(slideCount + 1) * slideWidth){
            // console.log(1)
            sldr.css({'marginLeft':-slideWidth})
            margin = -slideWidth * 2
        } else if (margin==0&&course==-1){
            // console.log(2)
            sldr.css({'marginLeft':-slideWidth*slideCount})
            margin = -slideWidth * slideCount + slideWidth
        } else {
            // console.log(3)
            margin = margin - slideWidth * course
        }
        console.log('margin = ', margin)
        sldr.animate({'marginLeft':margin},animateTime)
    }
    // function sldrStop(){window.clearInterval(interval)}

    // prv_b.click(function(){
    //     if(sldr.is(':animated')){return false}
    //     let course2=course;
    //     =-1;
    //     animate();
    //     course=course2});
    // nxt_b.click(function(){
    //     if(sldr.is(':animated')){return false}
    //     let course2=course;
    //     course=1;
    //     animate();
    //     course=course2});

    // sldr.add(nxt_b).add(prv_b).hover(function(){
    //         sldrStop()
    //     },nxt_bSlide)

    nxt_bSlide()
})
