//form
$(function(){
	$('#rfm').submit(function(){
		function createTxt(target,msg){
			var txt= new Array();
		    target ='#'+target;
		    txt[0] = "약관에 동의하세요.";
			txt[1] = "아이디를 입력해주세요.";
		    txt[2] = "아이디는 영문과 숫자만 입력가능합니다.";
		    txt[3] = "비밀번호를 입력해주세요.";
		    txt[4] = "비밀번호는 최소 8자,숫자,특수문자 하나 이상 포함해야 합니다.";
		    txt[5] = "동일한 비밀번호를 입력해주세요.";
		    txt[6] = "이름을 입력해주세요.";
			txt[7] = "이름은 한글과 영문만 입력가능합니다.";
			txt[8] = "생년월일를 정확히 입력해주세요.";
			txt[9] = "이메일 형식에 맞게 입력해주세요.";
			txt[10] = "연락처형식에 맞게 입력하세요.";
		    if(!$(target).next().hasClass('on')){
				$(target).after('<p>'+txt[msg]+'</p>').next().addClass('on');
			}
		}
		//정규식
		var reg_id = /(?=.*[a-z])(?=.*[0-9])/;//문자와수치만사용시
		var reg_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
		var reg_name =  /^[가-힣|a-z|A-Z]+$/;
		var reg_birth = /^[0-9]{6,}$/;
		var reg_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		var reg_num = /^[0-9]{9,}$/;
		
		//체크박스
		if(!$('#agree:checked').val()){
			createTxt('agr',0);
			return false;
		}else{
			$('.on').css('display','none');
		}
		//id 체크
		if(!$('#id').val()){ 
			createTxt('id',1);
			return false;
		}
		if(!reg_id.test($('#id').val())){
			createTxt('id',2);
			return false;
		}
		//비밀번호 체크
		if(!$('#pw').val()){
			createTxt('pw',3);
			return false;
		}
		if(!reg_pw.test($('#pw').val())){
			createTxt('pw',4);
			return false;
		}
		if(!$('#rpw').val()){
			createTxt('rpw',5);
			return false;
		}
		if($('#pw').val() != $('#rpw').val()){
			createTxt('rpw',5);
			return false;
		}
		//이름 체크
		if(!$('#userName').val()){
			createTxt('userName',6);
			return false;
		}
		if(!reg_name.test($('#userName').val())){
			createTxt('userName',7);
			return false;
		}
		//생년월일
		if(!$('#birth').val()){
			createTxt('birth',8);
			return false;
		}
		if(!reg_birth.test($('#birth').val())){
			createTxt('birth',8);
			return false;
		}
		//이메일
		if(!$('#email').val()){
			createTxt('email',9);
			return false;
		}
		if(!reg_email.test($('#email').val())){
			createTxt('email',9);
			return false;
		}
		//연락처
		if(!$('#hp').val()){
			createTxt('hp',10);
			return false;
		}
		if(!reg_num.test($('#hp').val())){
			createTxt('hp',10);
			return false;
		}
	});
	$('#rfm tr td input').focus(function(){
		$(this).next().remove();
	});
});