$(document).ready(function () {
    // 헤더 픽스하기
    let headerBottom = $('.header-bottom')
    let headerTop = $('.header-top')
    let logoFix = $('.logo-fix')
    let headerBottomFix = $('.header-bottom-fix')


    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        console.log(temp);
        if (temp > 50) {
            headerTop.hide()
            headerBottom.addClass('header-bottom-fix')
            logoFix.css({
                'width': '196px',
                'opacity': '1',
                'visibility': 'visible',
                'margin-right': '56px',
                'margin-top': '15px'
            });
        } else {
            headerTop.show()
            headerBottom.removeClass('header-bottom-fix')
            logoFix.css({
                'width': '0',
                'opacity': '0',
                'visibility': 'hidden',
                'margin-right': '0',
                'margin-top': '0'
            });
            headerBottomFix.hide()
        }
    })
})

window.onload = function () {
    AOS.init();


    //     $("#wrapper").dotdotdot({
    //         wrapper  : 'div',  /*  콘텐트를 감쌀 요소. */
    //         ellipsis: '... ',  /*  말줄임표를 뭘로 할지 */
    //         wrap  : 'word',    /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
    //         after  : null,     /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
    //         watch  : false,    /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
    //         height  : null,     /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
    //         tolerance: 0       /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    //       });

    // 팝업 무한 반복 전광판 같음
    // setInterval(function(){
    //     $('.pop-up ul').delay(1000);
    //     $('.pop-up ul').animate({marginTop: "0px"})
    //     $('.pop-up ul').delay(1000);
    //     $('.pop-up ul').animate({marginTop: "-40px"})
    // });
    
    $('.pop-up>ul>li').hide();
    $('.pop-up>ul>li:first-child').show();
    
    setInterval(function(){
        $('.pop-up>ul>li:first-child').hide()
        .next().show().end(1000)
        .appendTo('.pop-up>ul');
    },5000);


    // 스와이퍼
    new Swiper('.sw-visual',{
        loop: true,
        effect : 'fade',
        speed: 500,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".sw-next-bt",
            prevEl: ".sw-prev-bt",
        },
    })
}