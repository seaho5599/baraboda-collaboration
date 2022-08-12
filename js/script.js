$(document).ready(function () {
  // 모바일메뉴
  let mbWrapClose = $('.mb-wrap-close');
  let mbMoreMenu = $('.mb-more-menu');
  let mbDim = $('.mb-dim');
  mbMoreMenu.click(function(){
    $('.mb-wrap').addClass('mb-wrap-open');
    mbDim.show();
    $('.header').hide();
  });
  function mbClose(){
    $('.mb-wrap').removeClass('mb-wrap-open');
    mbDim.hide();
    $('.header').show();
  }
  mbWrapClose.click(function(){
    mbClose();
  })
  mbDim.click(function(){
    mbClose();
  })
  // 모바일메뉴 클릭
  let shopBtn = $('.shop-btn');
  shopBtn.click(function(){
    $('.mb-depth2-open').slideToggle();
    shopBtn.toggleClass('shop-btn-open');
    $('.shop-orange').toggleClass('shop-orange-open');
  });

  // 반응형 모바일메뉴
  $(window).resize(function(){
    let temp = $(window).width()
    if(temp > 1000){
    mbClose();
    $('.mb-depth2-open').stop().slideUp();
    shopBtn.removeClass('shop-btn-open');
    $('.shop-orange').removeClass('shop-orange-open');
    }
  });

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
  });
  
  $('.mainmenu').click(function (event) {
    event.preventDefault();
  })
  $('.password-img').click(function () {
    alert("검색어를 입력해주세요")
  })
});

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

  // 유지보수 용이
  let popLi = $('.pop-up>ul>li');
  let popTotal = popLi.length;
  let popShowIndex = 0;
  let popShowTime = 4000;

  function showPop() {
    popShowIndex++; // index를 증가 시켜야지 li나옴
    if (popShowIndex >= popTotal) {
      popShowIndex = 0;
    }
    $.each(popLi, function (index, item) {
      popLi.show()
      popLi.eq(popShowIndex).hide()
    })
  }

  setInterval(showPop, popShowTime);


  // 비주얼 슬라이드
  new Swiper('.sw-visual', {
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    },

    pagination: {
      el: '.sw-visual-pg',
      clickable: true
    }
  });

  // 공지사항 슬라이드
  let sw_notice = new Swiper('.sw-notice', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.sw-notice-prev',
      nextEl: '.sw-notice-next'
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // 아이템 리스트 배열
  let itemGoodsArr = [{
    link: '#',
    pic: 'item-goods-0.png',
    title: '바라보다 콜롬비아 아구아 프레스카 핑크버번 내추럴',
    info: '바나나, 히비스커스, 쥬시, 슈가케인',
    price: '21,000원',
    color: '#ecba19'
  }, {
    link: '#',
    pic: 'item-goods-1.png',
    title: '바라보다 에티오피아 구지 G1 담비 우도 워시드',
    info: '플로럴, 얼그레이, 살구, 패션후르츠',
    price: '15,000원',
    color: '#d06a4f'
  }, {
    link: '#',
    pic: 'item-goods-2.png',
    title: '바라보다 WEEK 블렌드',
    info: '초콜렛, 슈가 브라운, 너트',
    price: '13,000원',
    color: '#aaa'
  }, {
    link: '#',
    pic: 'item-goods-3.png',
    title: '바라보다 ANNI 블렌드',
    info: '베리류, 시트러스, 슈가 브라운',
    price: '15,000원',
    color: '#f5601f'
  }];

  // 아이템 리스트 데이터 화면 출력
  let itemGoods = $('.item-goods-list > li');
  let itemTotal = itemGoods.length;
  for (let i = 0; i < itemTotal; i++) {
    let temp = itemGoods[i];
    let htmlTxt = `
    <a href="${itemGoodsArr[i].link}">
      <img src="images/${itemGoodsArr[i].pic}" art="${itemGoodsArr[i].title}">
    </a>
    <div class="item-goods-txt">
      <a href="${itemGoodsArr[i].link}" class="item-goods-title">${itemGoodsArr[i].title}</a>
      <span class="item-goods-info" style="color:${itemGoodsArr[i].color}">${itemGoodsArr[i].info}</span>
      <span class="item-goods-price">${itemGoodsArr[i].price}</span>
    </div>
  `;
    temp.innerHTML = htmlTxt;
  };
};