//固定栏
$('.switch').click(function() {
	$('.icons').animate({
		'right': -50 + 'px'
	}, 500);
	$(this).css('display', 'none');
	$('.off').css('display', 'block');

})
$('.off').click(function() {
	$('.icons').animate({
		'right': 0 + 'px'
	}, 500);
	$(this).css('display', 'none');
	$('.switch').css('display', 'block');

})
//根据窗口大小刷新
$(window).resize(function(event) {
	location.reload()
});

//第一页
$(function() {
	var a = $(window).width();
	var b = $(window).height();
	$('.boxOne li').css('width', a);
	$('.boxOne li').css('height', b);
	$('.boxOneOne').css('width', a);
	$('.boxOO').css('top', 50 + '%');
	$('.boxThreeThree').css('width', a);
})
$(function() {
	var timer;
	var num = 0;
	var aa = 0;
	var yy = 0;

	function gogo() {
		clearInterval(timer)
		timer = setInterval(function() {
			num++;
			if(num > 4) {
				num = 0;
				$('.boxOne').css('left', -num * 100 + '%');
				num = 1;
			}
			$('.boxOne').animate({
				'left': -num * 100 + '%'
			}, 500);
			aa++;
			if(aa > 3) {
				aa = 0;
			}
			$('.listOne li').eq(aa).addClass('bgcccc');
			$('.listOne li').eq(aa).siblings().removeClass('bgcccc');
			//动画
			if(aa == 1) {
				$('.boxTt').addClass('fadeInLeft');
				$('.screen').css('animation', 'move 1.2s linear');
			}
			if(aa == 2) {
				$('.boxTr').addClass('fadeInUp');
			}
			if(aa == 3) {
				$('.boxFo .top').addClass('fadeInDown');
				$('.boxFo .mid').addClass('fadeInDown');
				$('.boxFo .bottom').addClass('fadeInUp');
			}
			//动画结束
		}, 5000)
	}
	gogo();
	$('.listOne li').hover(function(event) {
		clearInterval(timer)
		num = $(this).index();
		$('.boxOne').animate({
			'left': -num * 100 + '%'
		}, 500);
		//                  动画
		if(num == 1) {
			$('.boxTt').addClass('fadeInLeft');
			$('.screen').css('animation', 'move 1.2s linear');
		}
		if(num == 2) {
			$('.boxTr').addClass('fadeInUp');
		}
		if(num == 3) {
			$('.boxFo .top').addClass('fadeInDown');
			$('.boxFo .mid').addClass('fadeInDown');
			$('.boxFo .bottom').addClass('fadeInUp');
		}
		//动画结束
		$(this).addClass('bgcccc');
		$(this).siblings().removeClass('bgcccc');

	}, function() {
		gogo();
		num = $(this).index();
		aa = $(this).index();
	});
})

//主要内容

$(function() {
	var numm = 0;
	$(document).mousewheel(function(e, d) {
		numm -= d;
		if(numm > 7) {
			numm = 7
		}
		if(numm < 0) {
			numm = 0
		}
		$('.Content').stop().animate({
			top: -numm * 100 + '%'
		}, 800);
		$('.nav .list li').eq(numm).addClass('sizeColor').siblings().removeClass();
	});
	$('.nav .list li').click(function(e) {
		var index = $(this).index();
		$(this).addClass('sizeColor').siblings().removeClass();
		$('.Content').stop().animate({
			top: (-index) * 100 + '%'
		}, 800);
		numm = index;
	});
})
//第七页    
$(function() {
	var timer;
	var num = 0;
	var aa = 0;

	function gogo() {
		clearInterval(timer)
		timer = setInterval(function() {
			num++;
			if(num > 3) {
				num = 0;
				$('.containersevenol').css('left', -num * 480 + 'px');
				num = 1;
			}
			$('.containersevenol').animate({
				'left': -num * 480 + 'px'
			}, 500);
			aa++;
			if(aa > 2) {
				aa = 0;
			}
			$('.menuseven li').eq(aa).addClass('active');
			$('.menuseven li').eq(aa).siblings().removeClass('active');
		}, 3000)
	}
	gogo();
	$('.menuseven li').hover(function(event) {
		clearInterval(timer)
		num = $(this).index();
		$('.containersevenol').animate({
			'left': -num * 480 + 'px'
		}, 500);
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	}, function() {
		gogo();
		num = $(this).index();
		aa = $(this).index();
	});
})
//手机端第三页
var num = 0;
var timer;

function gogo() {
	timer = setInterval(function() {
		num++;
		if(num > 3) {
			num = 0;
			$('.phoneThree').css('left', -num * 260 + 'px');
			num = 1;
		}
		$('.phoneThree').animate({
			'left': -num * 260 + 'px'
		}, 2000);
	}, 4000)
}
gogo();

$('.threeleft').click(function() {
	clearInterval(timer)
	num--;
	if(num < 0) {
		num = 3;
		$('.phoneThree').css('left', -num * 260 + 'px');
		num = 3;
	}
	$('.phoneThree').animate({
		'left': -num * 260 + 'px'
	}, 2000);
	gogo();
})
$('.threeright').click(function() {
	clearInterval(timer)
	num++;
	if(num > 3) {
		num = 0;
		$('.phoneThree').css('left', -num * 260 + 'px');
		num = 1;
	}
	$('.phoneThree').animate({
		'left': -num * 260 + 'px'
	}, 2000);
	gogo();
})
//手机端第5页
var numfive = 0;
var timerfive;

function gogofive() {
	timerfive = setInterval(function() {
		numfive++;
		if(numfive > 3) {
			numfive = 0;
			$('.phoneFive').css('left', -numfive * 240 + 'px');
			numfive = 1;
		}
		$('.phoneFive').animate({
			'left': -numfive * 240 + 'px'
		}, 2000);
	}, 4000)
}
gogofive();

$('.fiveleft').click(function() {
	clearInterval(timerfive)
	numfive--;
	if(numfive < 0) {
		numfive = 3;
		$('.phoneFive').css('left', -numfive * 240 + 'px');
		numfive = 3;
	}
	$('.phoneFive').animate({
		'left': -numfive * 240 + 'px'
	}, 2000);
	gogofive();
})
$('.fiveright').click(function() {
	clearInterval(timerfive)
	numfive++;
	if(numfive > 3) {
		numfive = 0;
		$('.phoneFive').css('left', -numfive * 240 + 'px');
		numfive = 1;
	}
	$('.phoneFive').animate({
		'left': -numfive * 240 + 'px'
	}, 2000);
	gogofive();
})
//媒体查询
var result1 = window.matchMedia('(min-width:992px)');
var result2 = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
var result3 = window.matchMedia('(max-width: 767px');
if(result1.matches) {
	console.log(">=pc");
	//动画
	$(function() {
		var nu = 0;
		$(document).mousewheel(function(e, d) {
			nu -= d;
			if(nu == 1) {
				setInterval(function() {
					$('.PT .cl').css('animation', 'cll 0.7s linear');
					$('.PT .cr').css('animation', 'crr 0.7s linear');
				}, 500)
			}
			if(nu == 2) {
				setInterval(function() {
					$('.Animation1').addClass('bounceIn');
					$('.kk1').addClass('bounceInUp');
					$('.phoneThree').addClass('bounceInUp');
				}, 500)
			}
			if(nu == 3) {
				setInterval(function() {
					$('.Animation2').addClass('fadeIn');
					$('.fourconter .cctv').addClass('bounceInUp');
					$('.fourconter .bsec').addClass('bounceInUp');
					$('.fourconter .sipo').addClass('bounceInUp');
					$('.fourconter .apple').addClass('bounceInUp');
					$('.fourconter .hunantv').addClass('bounceInUp');
					$('.fourconter .report').addClass('bounceInUp');
					$('.fourconter .unicom').addClass('bounceInDown');
					$('.fourconter .cas').addClass('bounceInDown');
					$('.fourconter .das').addClass('bounceInDown');
					$('.fourconter .sino').addClass('bounceInDown');
				}, 500)
			}
			if(nu == 4) {
				setInterval(function() {
					$('.Animation3').addClass('fadeIn');
					$('.Animation4').addClass('fadeInLeft');
					$('.Animation5').addClass('fadeInUp');
					$('.Animation6').addClass('fadeInRight');
				}, 500)
			}
			if(nu == 5) {
				setInterval(function() {
					$('.Animation8').addClass('fadeIn');
					$('.Animation7').addClass('fadeInUp');
				}, 500)
			}
			if(nu == 6) {
				setInterval(function() {
					$('.containerseven').addClass('fadeInLeftBig');
					$('.Sevenbottom').addClass('fadeInUp');
				}, 500)
			}
			if(nu == 7) {
				setInterval(function() {
					$('.Eight .above').addClass('bounceInDown');
					$('.Eight .hint').addClass('fadeInUp');
				}, 500)
			}
		});
	})
	//动画结束
} else if(result2.matches) {
	console.log("pad");
	//动画
	$(function() {
		var nu = 0;
		$(document).mousewheel(function(e, d) {
			nu -= d;
			if(nu == 1) {
				setInterval(function() {
					$('.Animation1pp').addClass('fadeIn');
				}, 500)
			}
			if(nu == 2) {
				setInterval(function() {
					$('.Animation1').addClass('fadeIn');
					$('.Animation1pp').addClass('fadeIn');
					$('.threeleft').addClass('bounceInDown');
					$('.kk1').addClass('bounceInUp');
					$('.threeright').addClass('bounceInDown');
				}, 500)
			}
			if(nu == 3) {
				setInterval(function() {
					$('.Animation2').addClass('fadeIn');
					$('.fourconter .cctv').addClass('bounceInUp');
					$('.fourconter .bsec').addClass('bounceInUp');
					$('.fourconter .sipo').addClass('bounceInUp');
					$('.fourconter .apple').addClass('bounceInUp');
					$('.fourconter .hunantv').addClass('bounceInUp');
					$('.fourconter .report').addClass('bounceInUp');
					$('.fourconter .unicom').addClass('bounceInDown');
					$('.fourconter .cas').addClass('bounceInDown');
					$('.fourconter .das').addClass('bounceInDown');
					$('.fourconter .sino').addClass('bounceInDown');
				}, 1000)
			}
			if(nu == 4) {
				setInterval(function() {
					$('.Animation3').addClass('fadeIn');
					$('.fiveleft').addClass('bounceInDown');
					$('.fiveright').addClass('bounceInDown');
				}, 1000)
			}
			if(nu == 5) {
				setInterval(function() {
					$('.Animation8').addClass('fadeIn');
					$('.Animation7').addClass('fadeInUp');
				}, 1000)
			}
			if(nu == 6) {
				setInterval(function() {
					$('.containerseven').addClass('fadeInRightBig');
					$('.Sevenbottom').addClass('fadeInUp');
				}, 2000)
			}
			if(nu == 7) {
				setInterval(function() {
					$('.Eight .above').addClass('bounceInDown');
					$('.Eight .hint').addClass('fadeInUp');
				}, 2000)
			}
		});
	})
	//动画结束
} else if(result3.matches) {
	$(function() {
		var timer;
		var num = 0;
		var aa = 0;

		function gogo() {
			clearInterval(timer)
			timer = setInterval(function() {
				num++;
				if(num > 3) {
					num = 0;
					$('.containersevenol').css('left', -num * 230 + 'px');
					num = 1;
				}
				$('.containersevenol').animate({
					'left': -num * 230 + 'px'
				}, 500);
				aa++;
				if(aa > 2) {
					aa = 0;
				}
				$('.menuseven li').eq(aa).addClass('active');
				$('.menuseven li').eq(aa).siblings().removeClass('active');
			}, 3000)
		}
		gogo();
		$('.menuseven li').hover(function(event) {
			clearInterval(timer)
			num = $(this).index();
			$('.containersevenol').animate({
				'left': -num * 230 + 'px'
			}, 500);
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		}, function() {
			gogo();
			num = $(this).index();
			aa = $(this).index();
		});
	})
	//动画
	$(function() {
		var nu = 0;
		$(document).mousewheel(function(e, d) {
			nu -= d;
			if(nu == 1) {
				setInterval(function() {
					$('.Animation1pp').addClass('fadeIn');
				}, 500)
			}
			if(nu == 2) {
				setInterval(function() {
					$('.Animation1').addClass('fadeIn');
					$('.Animation1pp').addClass('fadeIn');
					$('.threeleft').addClass('bounceInDown');
					$('.kk1').addClass('bounceInUp');
					$('.threeright').addClass('bounceInDown');
				}, 500)
			}
			if(nu == 3) {
				setInterval(function() {
					$('.Animation2').addClass('fadeIn');
					$('.fourconter .cctv').addClass('bounceInUp');
					$('.fourconter .bsec').addClass('bounceInUp');
					$('.fourconter .sipo').addClass('bounceInUp');
					$('.fourconter .apple').addClass('bounceInUp');
					$('.fourconter .hunantv').addClass('bounceInUp');
					$('.fourconter .report').addClass('bounceInUp');
					$('.fourconter .unicom').addClass('bounceInDown');
					$('.fourconter .cas').addClass('bounceInDown');
					$('.fourconter .das').addClass('bounceInDown');
					$('.fourconter .sino').addClass('bounceInDown');
				}, 1000)
			}
			if(nu == 4) {
				setInterval(function() {
					$('.Animation3').addClass('fadeIn');
					$('.fiveleft').addClass('bounceInDown');
					$('.fiveright').addClass('bounceInDown');
				}, 1000)
			}
			if(nu == 5) {
				setInterval(function() {
					$('.Animation8').addClass('fadeIn');
					$('.Animation1ss').addClass('fadeIn');
				}, 1000)
			}
			if(nu == 7) {
				setInterval(function() {
					$('.Animation3ss').addClass('fadeIn');
					$('.Eleft').addClass('bounceInDown');
					$('.Animation2ss').addClass('bounceInDown');

				}, 500)
			}
		});
	})
	//动画结束
} else {
	console.log("超小设备 手机");
}