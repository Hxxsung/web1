(function($){

  //접근성 
  //포커스 focusin => 탭키 접근성  mouseenter => 마우스 접근성

  //객체(Object) 형식의 이벤트 
  //ES5
  // $('.main-btn').on({
  // mouseenter: function(){
 
  // },
  // focusin: function(){
  // 
  // }
  // });
  // 
  //ES6
  //$('.main-btn').on({
  // mouseenter(){
  // 
  // },
  // focusin(){
  // 
  // }
  // });

  $('.main-btn').on({
    mouseenter: function(){
      $('.sub').stop().fadeOut(0);
      $(this).next().stop().fadeIn(300);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    },
    focusin: function(){
      $('.sub').stop().fadeOut(0);
      $(this).next().stop().fadeIn(300);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    }
  });



  //네비게이션 초보용
  // $('#nav').mouseleave(function(){
  //   $('.sub').stop().fadeOut(300)
  //   $('.main-btn').removeClass('hover');
  // });

  //네비게이션 실무용
  $('#nav').on({
      mouseleave: function(){
        $('.sub').stop().fadeOut(300)
        $('.main-btn').removeClass('on');
      }
  });

  //메인슬라이드
  let cnt=0;
  const slideWrap = $('.slide-wrap'); 
  const n = 3; 

  //1.메인슬라이드함수
  function mainSlide(){
    slideWrap.animate({left: `${-100*cnt}%`}, 600, function(){
      cnt>n-1?cnt=0:cnt;
      slideWrap.animate({left: `${-100*cnt}%`}, 0);
    })
  }

  //2.다음카운트함수
  function nextCount(){
    cnt++;
    mainSlide();
  }

  //3.자동타이머함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();

  //공지사항 & 갤러리 탭메뉴 클릭 이벤트
  //갤러리버튼 클릭 초보용
  // $('.gallery-btn').click(function(){
  //     $('.notice-btn').addClass('on');
  //     $('.gallery-btn').addClass('on');
  //     $('.notice-box').addClass('on');
  //     $('.gallery-box').addClass('on');
  // });

  //갤러리버튼 클릭 실무용 
  $('.gallery-btn').on({ //마우스 클릭 그리고 키보드는 엔터(enter)
      click: function(){
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');
      }
  });

  //공지사항버튼 클릭 초보용
  // $('.notice-btn').click(function(){
  //     $('.notice-btn').removeClass('on');
  //     $('.gallery-btn').removeClass('on');
  //     $('.notice-box').removeClass('on');
  //     $('.gallery-box').removeClass('on');
  // });

  //공지사항버튼 클릭 실무용
  $('.notice-btn').on({
      click: function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');
      }
  });


  //레이어팝업창(모달창) 초보용
  // $('.link-btn').click(function(){
  //     $('#popup').stop().fadeIn(300);
  // });

  //레이어팝업창(모달창) 실무용
  $('.link-btn').on({
      click: function(){
        $('#popup').stop().fadeIn(300);
      }
  });

  //창 닫기 초보용
  // $('.close-btn').click(function(){
  //     $('#popup').stop().fadeOut(300);
  // });

    //창 닫기 실무용
    $('.close-btn').on({
      click: function(){
        $('#popup').stop().fadeOut(300);
      }
  });


})(jQuery);