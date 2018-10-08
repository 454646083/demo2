
//导航栏
$('.move').click(function(){
	$('.smnone').animate({'right':-14+'px'},500);

})
$('#show').click(function(){
	$('.smnone').animate({'right':-97+'px'},500);
})
//根据窗口大小刷新
$(window).resize(function(event) {
			location.reload()
});

//第一页
$(function(){
	var a=$(window).width();
	var b=$(window).height();
	$('.boxOne li').css('width',a);
	$('.boxOne li').css('height',b);
	$('.boxOneOne').css('width',a);
	$('.boxOO').css('top',50+'%');
	$('.boxThreeThree').css('width',a);
})

         
         $(function(){
                var timer;
                var num=0;
                var aa=0;
                var yy=0;
                function gogo(){
                    clearInterval(timer)
                    timer=setInterval(function(){
                 num++;
				if(num>4){
					num=0;
					$('.boxOne').css('left',-num*100+'%');
					num=1;
					
				}
				$('.boxOne').animate({'left':-num*100+'%'},500);
				
				aa++;
				if(aa>3){
					aa=0;
				}
				$('.listOne li').eq(aa).addClass('bgcccc');
                $('.listOne li').eq(aa).siblings().removeClass('bgcccc');
			},5000)
                }
                gogo();
                $('.listOne li').hover(function(event) {
                	clearInterval(timer)
                    num=$(this).index();
                    $('.boxOne').animate({'left':-num*100+'%'},500);
                    $(this).addClass('bgcccc');
                    $(this).siblings().removeClass('bgcccc');
                }, function() {
                    gogo();
                    num=$(this).index();
                    aa=$(this).index();
                });
            })
         
         
//主要内容
$(function(){	
	var numm=0;
	$(document).mousewheel(function(e,d){
		    numm-=d;
			if( numm>7){ numm=7 }
			if( numm<0 ){ numm=0 }
			$('.Content').stop().animate({ top:-numm*100+'%' },500);
	});		
})
//第七页    
$(function(){
                var timer;
                var num=0;
                var aa=0;
                function gogo(){
                    clearInterval(timer)
                    timer=setInterval(function(){
                        num++;
				if(num>3){
					num=0;
					$('.containersevenol').css('left',-num*480+'px');
					num=1;
				}
				$('.containersevenol').animate({'left':-num*480+'px'},500);
				aa++;
				if(aa>2){
					aa=0;
				}
				$('.menuseven li').eq(aa).addClass('active');
                $('.menuseven li').eq(aa).siblings().removeClass('active');
			},3000)
                }
                gogo();
                $('.menuseven li').hover(function(event) {
                	clearInterval(timer)
                    num=$(this).index();
                    $('.containersevenol').animate({'left':-num*480+'px'},500);
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                }, function() {
                    gogo();
                    num=$(this).index();
                    aa=$(this).index();
                });
            })
//手机端第三页
    		var num=0;
    		var timer;
			function gogo(){
      timer=setInterval(function(){			
				num++;
				if(num>3){
					num=0;
					$('.phoneThree').css('left',-num*260+'px');
					num=1;
				}
				$('.phoneThree').animate({'left':-num*260+'px'},2000);
			},4000)
			}
			gogo();	
			
			$('.threeleft').click(function(){
				clearInterval(timer)
				num--;
				if(num<0){
					num=3;
					$('.phoneThree').css('left',-num*260+'px');
					num=3;
				}
				$('.phoneThree').animate({'left':-num*260+'px'},2000);
				gogo();
			})
			 $('.threeright').click(function(){
			 	clearInterval(timer)
				num++;
				if(num>3){
					num=0;
					$('.phoneThree').css('left',-num*260+'px');
					num=1;
				}
				$('.phoneThree').animate({'left':-num*260+'px'},2000);
				gogo();
			})
	//手机端第5页
    		var numfive=0;
    		var timerfive;
			function gogofive(){
      timerfive=setInterval(function(){			
				numfive++;
				if(numfive>3){
					numfive=0;
					$('.phoneFive').css('left',-numfive*240+'px');
					numfive=1;
				}
				$('.phoneFive').animate({'left':-numfive*240+'px'},2000);
			},4000)
			}
			gogofive();	
			
			$('.fiveleft').click(function(){
				clearInterval(timerfive)
				numfive--;
				if(numfive<0){
					numfive=3;
					$('.phoneFive').css('left',-numfive*240+'px');
					numfive=3;
				}
				$('.phoneFive').animate({'left':-numfive*240+'px'},2000);
				gogofive();
			})
			 $('.fiveright').click(function(){
			 	clearInterval(timerfive)
				numfive++;
				if(numfive>3){
					numfive=0;
					$('.phoneFive').css('left',-numfive*240+'px');
					numfive=1;
				}
				$('.phoneFive').animate({'left':-numfive*240+'px'},2000);
				gogofive();
			})	
			//媒体查询
			var result1 = window.matchMedia('(min-width:992px)');
            var result2 = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
            var result3 = window.matchMedia('(max-width: 767px');
            if(result1.matches) {
                console.log(">=pc");
            }else if(result2.matches){
                console.log("pad");
            }else if(result3.matches){
               $(function(){
                var timer;
                var num=0;
                var aa=0;
                function gogo(){
                    clearInterval(timer)
                    timer=setInterval(function(){
                        num++;
				if(num>3){
					num=0;
					$('.containersevenol').css('left',-num*230+'px');
					num=1;
				}
				$('.containersevenol').animate({'left':-num*230+'px'},500);
				aa++;
				if(aa>2){
					aa=0;
				}
				$('.menuseven li').eq(aa).addClass('active');
                $('.menuseven li').eq(aa).siblings().removeClass('active');
			},3000)
                }
                gogo();
                $('.menuseven li').hover(function(event) {
                	clearInterval(timer)
                    num=$(this).index();
                    $('.containersevenol').animate({'left':-num*230+'px'},500);
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                }, function() {
                    gogo();
                    num=$(this).index();
                    aa=$(this).index();
                });
            })
            }else{
                console.log("超小设备 手机");
            }