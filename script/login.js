function form_login(){
	//변수 선언
	var fid=document.fm.id;
	var fpw=document.fm.pw;

	if(fid.value==""){
		alert('아이디를 입력하세요.');
		fid.focus();
		return false;
	}
	if(fpw.value==""){
		alert('비밀번호를 입력하세요.');
		fpw.focus();
		return false;
	}
	fm.submit(); //login.php로 이동
}