// zd JavaScript Document
$(function(){
	$('#banner a.down').click(function(){
		$('html,body').animate({scrollTop:$('.row1_bg').position().top});
	});
	$('#hanger li a').each(function(i) {
        $(this).click(function(){
			$('#hanger li a').removeClass('cur');
			$(this).addClass('cur');
			if(i==0){$('html,body').animate({scrollTop:$('#container').children().eq(1).position().top});}else{$('html,body').animate({scrollTop:$('#container').children().eq(i+2).position().top});}
		});
    });
	
	
});

var btn=true;
var s_first=true;
var r_first=true;
$(window).scroll(function(){
	var point1=$('.banner_bg').position().top;
	var point2=$('.row2_bg').position().top-200;
	var point3_scale=$('.row3_bg').position().top-100;
	var point4_rotate=$('.row4_bg').position().top-200;
	var point5=point4_rotate+340;
	
	var st= $('html,body').scrollTop() || $(document).scrollTop();
	//alert(st)
	
	
	if(st>point1){
		$('#hanger li a').removeClass('cur');
		$('#hanger li a').eq(0).addClass('cur');
	}
	if(st>point2){
		$('#hanger li a').removeClass('cur');
		$('#hanger li a').eq(1).addClass('cur');
	}
    if(st>point3_scale){
		$('#hanger li a').removeClass('cur');
		$('#hanger li a').eq(2).addClass('cur');
		if(s_first){
			$('.a_scale').addClass('appear');
			s_first=false;
		}
	}
	if(st>point4_rotate){
		$('#hanger li a').removeClass('cur');
		$('#hanger li a').eq(3).addClass('cur');
		if(r_first){
			$('a.kf').addClass('ro');
			$('#jt img').eq(0).addClass('su');
			setTimeout(function(){
				$('#jt img').eq(1).addClass('su');
			},150);
			setTimeout(function(){
				$('#jt img').eq(2).addClass('su');
			},300);
			r_first=false;
		}
	}
	if(st>point5){
		$('#hanger li a').removeClass('cur');
		$('#hanger li a').eq(4).addClass('cur');
		
		var today=new Date();		//110121
		var baseday=new Date(2014,2,27);
		var dayAddNum= parseInt((today.getTime()-baseday.getTime())/34917)
	
		var base=0;
		var shangxian=110121+dayAddNum;
		if(btn){
		Timer=setInterval(function(){
				$('#footer h2').html(base);
				base+= parseInt(Math.random()*748)
				if(base>shangxian){
					clearInterval(Timer);
				}
			},4)
		btn=false;
		}
	}
});