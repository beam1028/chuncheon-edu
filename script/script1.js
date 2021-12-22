   /*slider*/
    $(function(){
		  var cp = 0; 
		  var photo = $('.photo');
		  var pNums = photo.length; 	  
		  var speed = 350;
		
		  $('.photo').eq(0).show();
		  
		  function move(){
			
			var np = (cp + 1) % pNums;
			photo.eq(cp).fadeOut(speed);
			photo.eq(np).fadeIn(speed);
			cp = np;
		  }
		  setInterval(move,4000);
    })
   
   /*cont_slider*/
	$(function() {
 
	var slideCount = $('#cont_slider ul li').length;
	var slideWidth = $('#cont_slider ul li').width();
	var slideHeight = $('#cont_slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#cont_slider').css({ width: slideWidth, height: slideHeight });
	
	$('#cont_slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#cont_slider ul li:last-child').prependTo('#cont_slider ul');

    function moveLeft() {
        $('#cont_slider ul').animate({
            left: + slideWidth
        }, 350, function () {
            $('#cont_slider ul li:last-child').prependTo('#cont_slider ul');
            $('#cont_slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#cont_slider ul').animate({
            left: - slideWidth
        }, 350, function () {
            $('#cont_slider ul li:first-child').appendTo('#cont_slider ul');
            $('#cont_slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
   
    setInterval(function() {
		moveRight();}, 4000);
   });

   /* gallery tab */
   $(function(){
	
	var $tabs = $('.gtab');
	
	$tabs.find('ul ul').hide(); //서브 모두감추기
	$tabs.find('li li.active').parents('li').addClass('active');
	$tabs.find('li.active>ul').show(); //서브 active만 보이기
	
	function TabToggle(event){
		var $this = $(this);
		
		$this.next('ul').show()
		.parent('li').addClass('active')
		.siblings('li').removeClass('active')
		.find('>ul').hide();

		if($this.attr('href') === '#'){
			return false;
		}
	}

	$tabs.find('>ul>li>a').click(TabToggle).focus(TabToggle);
});
	
	/* pop up */
	$(window).on('load',function(){
	  $('.popup').show();
	});
	$('.close').click(function(){
	  $('.popup').hide();
	});