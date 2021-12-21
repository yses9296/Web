        //버튼을 클릭하면 전체 메뉴 Show Up                           
        $(".tit .btn").click(function(e){
            e.preventDefault(); //초점이 (0,0)으로 자동 이동을 차단 예) 하단에서 실행시켰는데 새로 고침처럼 상단부터
            //1. $("#cont_nav").css("display","block");
            //2. $("#cont_nav").show(); //위와 동일한 방법
            //3. $("#cont_nav").fadeIn();
            //4. $("#cont_nav").slideDown();//애니메이션 한 번만 사용가능
            //5. $("#cont_nav").toggle(); // toggle 반복적 가능
            //6. $("#cont_nav").fadeToggle();
            $("#cont_nav").slideToggle(200);
            //$(".tit_btn").addClass("on"); //클릭했을 때 클래스명에 on추가됨 --> css에서 별도로 편집 가능
            $(this).toggleClass("on");
        });
        
        //배너
        //html 마크업 세팅 -> css 연동 -> JQuery 연동 -> JQuery 호줄
        $(".ban").slick({
           infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 1500,
            dots:true
        });
        
        //갤러리
            $(".gallery_img").slick({
                arrows:false,
                fade: true,
                pauseOnHover: true,
                arrows: false,
                infinite:true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 200,
                slidesToShow: 1
            }
            );
            //04.28
            $(".play").click(function(){
                $(".gallery_img").slick("slickPlay");
            });
            $(".pause").click(function(){
                $(".gallery_img").slick("slickPause");
            });
            $(".prev").click(function(){
                $(".gallery_img").slick("slickPrev");
            });
            $(".next").click(function(){
                $(".gallery_img").slick("slickNext");
            });
            
        //탭메뉴 04.24
        var $tab_list = $(".tab_menu");
            
        $tab_list.find("ul ul").hide();
        $tab_list.find("li.active > ul").show();
        
        function tabMenu(e){
            e.preventDefault();
            var $this = $(this);
            $this.next("ul").show().parent("li").addClass("active").siblings ("li").removeClass("active").find(">ul").hide();
            //
        }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
        
        //레이어 팝업 04.29
        $(".layer").click(function(e){
             e.preventDefault();
//            $("#layer").css("display","block");
//            $("#layer").show();
//            $("#layer").fadeIn();
            $("#layer").slideDown();
        });
        $("#layer .close").click(function(e){
             e.preventDefault();
//            $("#layer").css("display","none");
//            $("#layer").hide();
//            $("#layer").fadeOut();
            $("#layer").slideUp();
        });
            
        //윈도우 팝업 04.29
        $(".window").click(function(e){
            e.preventDefault();
            //window.open("파일명", "팝업이름", "옵션설정");
            //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
            window.open("sample_popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
        });
        
        //라이트박스 04.29
        $(".lightgallery").lightGallery({
            thembnail: true,
            autoplay: true,
            pause: 3000,
            progressBar: true
        });
            