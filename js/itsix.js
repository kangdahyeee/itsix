$(function(){
    // logo 클릭시 최상단으로 이동 
    // "click", function = 로고 클릭시 함수실행
    // scrollTop 는 스크롤 위치 이동을 위한 jQuery 애니메이션 함수
    // .stop() = 예상치못한 동작을 방지하기 위함
    $("h1.logo").on("click", function(){
        $("html,body").stop().animate({        
        scrollTop:0 //수직스크롤 위치 0
    }, 400); //0.4초
    });
    // pc + mobile 메뉴 클릭시 애니메이션으로 위치 이동
    // .menu와 .m_menu의 a 태그 속성 중 href의 #으로 시작하는 요소 클릭시!!
    $(".menu li a[href^='#'], .m_menu li a[href^='#']").on("click", function(){
        var target = $(this).attr("href");
        var targetPosition = $(target).offset().top;
        // 스크롤 애니메이션 설정 - 0.8초동안 상단으로 스크롤 
        $("html,body").animate({
            scrollTop:targetPosition
        },800); //0.8초
        // html, body 동시에 잡아주는 이유는 웹호환성 때문에 - 일관된 동작 보장위해 두개 다 잡아줌

    });





    // 햄버거버튼 클릭시 - 모바일 메뉴 보기/가리기
    // 스토리 : 햄버거버튼 클릭시 메뉴박스와 x버튼 보여짐
    // .eq() - jQuery 메서드 - 특정 인덱스 선택시 사용
    $(".rightmenu li").eq(2).click(function(){
        $(".m_menu").show(); // 보기
        $(".rightmenu").hide(); // 가리기
        $(".m_menu li").eq(3).show(); // x버튼
    });
    // x 클릭시 메뉴박스 사라짐
    $(".m_menu li").eq(3).click(function(){
        $(".m_menu").hide();
        $("this").hide();
        $(".rightmenu").show();
    });
    // 배경 스크롤 이벤트
    // 스크롤이 위로 올라갈수록 li에 배경 이미지들이 동적으로 이동되는 스크립트
    // li - 첫번째 요소는 0 ,두번째 1 
    // window - 웹브라우저창을 뜻함
     $(window).scroll(function(){   //.scroll 스크롤 이벤트
        // scroll 위치값을 scr에 넣어줌 //this = 스크롤이 일어난 웹브라우저
        // 현재 스크롤의 위치 scr에 넣어줌
        var scr = $(this).scrollTop(); // .scrollTop() - 수직스크롤위치를 나타내는 메서드
        $("ul.center_bg li").eq(0).css({
            "top": -100 + (scr / 2) // -100은 기존 요소에서 위치를 100px만큼 상단으로 올려줌
            // (scr / 2) : 현재 스크롤 위치를 2로 나눈 값 
            // 스크롤 위치에 따라 동적으로 계산된 값에 따라 위치 이동이 이루어짐
            // 때문에 스크롤 위치가 증가하면 (scr / 2) 값도 증가 , 감소하면 값도 감소. 그래서 동적으로 보임
        });
        $("ul.center_bg li").eq(1).css({
            "top": -100 + (scr / 1.7)
        });
        $("ul.center_bg li").eq(2).css({
            "top": 80 + (scr / 3)
        });
        $("ul.center_bg li").eq(3).css({
            "top": 60 + (scr / 5)
        });
        $("ul.center_bg li").eq(4).css({
            "top": 10 + (scr / 5)
        });
        $("ul.center_bg li").eq(5).css({
            "top": -60 + (scr / 2)
        });
        $("ul.center_bg li").eq(6).css({ // X좌표값은 중앙, Y좌표값은 동적으로
            //Y(수직)위치값을 초기 위치보다 위로 올라가도록 효과줌
            "transform": "translate(-50%," + (-50 - (scr / 100)) + "%)"
        });
     
// 육각형 위치 이동
        $(".hexagon").css({
            "transform": "translate(-50%," + (-50 - (scr / 99.5)) + "%)"
        });
// 레드카펫 위치 이동
        $("#redcarpet").css({
            // 위로 올라가는 효과 구현
            "transform": "translateY(" + (-100 - (scr / 2.5)) + "px)"
        });
// 폿폴배경 위치 이동
        $(".port_bg li").eq(0).css({
            "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
        });
        $(".port_bg li").eq(1).css({
            "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
        });
        $(".port_bg li").eq(2).css({
            "transform": "translateY(" + (0 - (scr / 2)) + "px)"
        });
// 레드카펫2
        // 스크롤 위치가 1630픽셀 이상인 경우 추가 스타일 적용 (if문)
        // scr 1630픽셀보다 큰지 확인 후 해당 조건이 참이면 scr에서 1630픽셀 빼줌
        // ㄴ> 상단의 레드카펫 구조와 동일하기 동작해주기 위함
        if (scr > 1630) {
            scr -= 1630;
            $("#redcarpet2").css({
                "transform": "translateY(" + (0 - (scr / 2.5)) + "px)"
            });
    
        }

    });

});
