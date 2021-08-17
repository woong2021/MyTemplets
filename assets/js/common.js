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

    //response nav
    var select_attr = $('header#responsive nav a, header#responsive nav button');

    $(window).on('resize load', function(){
        var width = $(window).width();

        if (width < 721){
            attrs();
        }else{
            removeAttrs();
            $('.dim').fadeOut();
            $('header#responsive nav').removeClass('on');
        }
    });

    $('.btn_nav').on({
        "click" : function(){
            var width = $(window).width();
            if(width < 721){
                $('header#responsive nav').addClass('on');
                $('header#responsive nav a:first').focus();
                $('.dim').fadeIn();

                removeAttrs();
            }
        }
    });

    $('header#responsive .close').on({
        "click" : function(){
            $(this).parent().removeClass('on');
            $('.dim').fadeOut();
            
            attrs();
        }
    });

    function attrs(){
        select_attr.attr({
            'aria-hidden' : 'true',
            'tabindex' : '-1'
        });
    }

    function removeAttrs(){
        select_attr.removeAttr('aria-hidden').removeAttr('tabindex');
    }
});