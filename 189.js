/**
 * Created by Administrator on 2016/8/10.
 */
//头部显示隐藏效果
$(function(){
       $("#head-top-right ul li>div").hover(
           function(){
               $(this).find("div").css("display","block");
           },
           function(){
               $(this).find("div").css("display","none");
           }
       );
});
//窗帘效果
$(function(){
    $("#head-ad").slideDown(1000);
    $("#head-ad-content img").click(function(){
       $("#head-ad").slideUp();
    });
});
//城市的显示隐藏
$(function(){
   $("#city").hover(
       function(){
           $("#city").find("div").css("display","block");
       },
       function(){
           $("#city").find("div").css("display","none");
       }
   );
});
//搜索栏效果
$(function(){
   $("#head-bottom #head-bottom-content #search p:first-child>a").click(function(){
       $("#head-bottom #head-bottom-content #search p:first-child>a").css({color:"#333",backgroundColor:"white"});
       $(this).css({color:"white",backgroundColor:"#FF8201"});
   });
    $("input[type='text']").bind({
        focus: function(){
            $("input[type='text']").removeAttr("placeholder");
        },
        blur: function(){
            $("input[type='text']").attr("placeholder","无线上网卡");
        }
    });
});
//导航栏悬浮效果
$(function(){
   $("#head-login ul li a").hover(
       function(){
           $(this).addClass("hover1");
       },
       function(){
           $(this).removeClass("hover1");
       });
});
//图片轮播效果
$(function(){
    var index=0;
    var number=$("#banner-content img").length;
    function show(){
        $("#banner-content img").eq(index).show();
        $("#banner-content img").eq(index).siblings().hide();
        $("#img-btn input[type='button']").eq(index).addClass("btn");
        $("#img-btn input[type='button']").eq(index).siblings().removeClass("btn");
        if(index==number)
        {
            index=0;
        }
        else
        {
            index++;
        }

    }
    var time=setInterval(show,3000);
    $("#img-btn input[type='button']").click(function(){
        index=$(this).index();
        show();
        //$(this).addClass("btn");
    });
  /* $("#banner-content img").bind({
        mouseover:function(){
            clearInterval(time);
        },
        mouseout:function(){
            time=setInterval(show,3000);
        }
    });*/
    $("#photo").bind({
        mouseover:function(){
            clearInterval(time);
        },
        mouseout:function(){
            time=setInterval(show,3000);
        }
    });
});
//左侧产品服务显示隐藏效果
$(function(){
   $("#photo-content #photo-left ul li").hover(
       function(){
           $(this).find("div").css("display","block");
       },
       function(){
           $(this).find("div").css("display","none");
       }
   );
});
//右侧欢享服务和超值购切换效果
$(function(){
   $("#photo-right #head1").bind(
       {
           mouseover: function(){
               $(this).find("#photo-top-leftContent1").css("display","block");
               $("#photo-top-rightContent1").css("display","none");
               $(this).removeClass("hover2");
               $("#photo-right #head2").removeClass("hover3");
           }
       }
   );
    $("#photo-right #head2").bind(
        {
            mouseover:function() {
                $(this).find("#photo-top-rightContent1").css("display", "block");
                $("#photo-top-leftContent1").css("display","none");
                $(this).addClass("hover3");
                $("#photo-right #head1").addClass("hover2");
            }
        }
    );
    $(" .btn-left, .btn-right").click(
        function(){
            $(" .btn-left~.btn-left-content").toggle();
            $(".btn-left~.btn-right-content").toggle();
        }
    );
});
//手机 流量 宽带 固话切换
$(function(){
   $("#number").hover(
       function(){
           $("#jin").slideDown(1000);
       },
       function(){
           $("#jin").slideUp(1000);
       }
   );
    $("#number1").hover(
        function(){
            $("#jiner").slideDown(1000);
        },
        function(){
            $("#jiner").slideUp(1000);
        }
    );
    $("#number2").hover(
        function(){
            $("#jine").slideDown(1000);
        },
        function(){
            $("#jine").slideUp(1000);
        }
    );
    $("#shouji").click(function(){
        $("#phone").css("display","block");
        $("#ll").css("display","none");
        $("#line").css("display","none");
        $("#word").css("display","none");
        $("#shouji").css("color","orange");
        $("#liuliang").css("color","gray");
        $("#kuandai").css("color","gray");
        $("#guhua").css("color","gray");
    });
    $("#liuliang").click(function(){
        $("#ll").css("display","block");
        $("#phone").css("display","none");
        $("#line").css("display","none");
        $("#word").css("display","none");
        $("#liuliang").css("color","orange");
        $("#shouji").css("color","gray");
        $("#kuandai").css("color","gray");
        $("#guhua").css("color","gray");
    });
    $("#kuandai").click(function(){
        $("#line").css("display","block");
        $("#ll").css("display","none");
        $("#phone").css("display","none");
        $("#word").css("display","none");
        $("#kuandai").css("color","orange");
        $("#liuliang").css("color","gray");
        $("#shouji").css("color","gray");
        $("#guhua").css("color","gray");
    });
    $("#guhua").click(function(){
        $("#word").css("display","block");
        $("#line").css("display","none");
        $("#ll").css("display","none");
        $("#phone").css("display","none");
        $("#guhua").css("color","orange");
        $("#kuandai").css("color","gray");
        $("#liuliang").css("color","gray");
        $("#shouji").css("color","gray");
    });
});
//跑马灯效果
$(function(){
    var photoBottom=document.getElementById("photo-bottom-right");
    var information1=document.getElementById("information1");
    var information2=document.getElementById("information2");
    var move=function(){
        if(photoBottom.scrollLeft<information1.offsetWidth)
        {
            photoBottom.scrollLeft++;
        }
        else
        {
            photoBottom.scrollLeft=0;
        }
    };
    var clearTime=setInterval(move,20);
    var gonggao=document.getElementsByName("gonggao");
    for(var i=0;i<gonggao.length;i++)
    {
        gonggao[i].onmouseover =function(){
            clearInterval(clearTime);
            this.style.color="orange";
        };
        gonggao[i].onmouseout=function(){
            clearTime=setInterval (move,20);
            this.style.color="gray";
        };
    }
});
//图片切换
$(function(){
    $(".picScroll-left").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        scroll: "1",
        vis: "3",
        easing: "swing",
        delayTime: "500",
        trigger:"click"
    });
});
//欢go网和合作伙伴的切换
$(function(){
    $("#go-left").click(
        function(){
            $("#go-left-content").css("display","block");
            $("#go-right-content").css("display","none");
            $("#go-left").css("fontWeight","bold");
            $("#go-right").css("fontWeight","normal");
        }
    );
    $("#go-right").click(
        function(){
            $("#go-right-content").css("display","block");
            $("#go-left-content").css("display","none");
            $("#go-right").css("fontWeight","bold");
            $("#go-left").css("fontWeight","normal");
        }
    );
});
