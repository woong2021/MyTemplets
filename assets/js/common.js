$(function(){
    $('#tabList article').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('#tabList article').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('#jqueryList article').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('#jqueryList article').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    //카운터 검색
    $(".btn-num").on({
        "click" : function(){
            const firstnum = $(".firstnum").val();
            const lastnum = $(".lastnum").val();
            let str ='';

            for (let i= firstnum; i <= lastnum; i++){
                
                str += "<li style='list-style-type: none'>"+ i +"</li>";
                console.log(str);
            };
            
            $('.num-list').html(str);
        }
    }); 

    // 토글형 버튼 (기본)
    $("#toggleBtn").on({
        "click" : function(){
            $(".greetings").toggle();
        }
    })
    // 토글형 버튼 (슬라이드)
    $("#toggleSlide").on({
        "click" : function(){
            $(".greetings").slideToggle();
        }
    })

    $(".source").on({
        "click" : function(){
            $(this).next(".colorscripter-code").slideToggle();
        }
    })

    // 토글형 버튼 (클래스)
    $("#toggleClass").on({
        "click" : function(){
            $(".greetings").toggleClass('active');
        }
    })

    // LNB 메뉴 (Sample)
    $(".menu-example li").on({
        "mouseenter" : function(){
            $(this).children('.sub-menu-example').stop().slideDown();
        }
    })
    $(".menu-example li").on({
        "mouseleave" : function(){
            $(this).children('.sub-menu-example').stop().slideUp();
        }
    })
})