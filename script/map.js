/* map */
function initialize() { 
	var myLatlng = new google.maps.LatLng(37.849644,127.7437126,21); // y, x좌표값        
	var mapOptions = { 
		zoom: 15, 
		center: myLatlng, 
		mapTypeId: google.maps.MapTypeId.ROADMAP 
	} 
	  
	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var marker = new google.maps.Marker({ 
			position: myLatlng, 
			map: map, 
			title: "춘천평생학습관" 
	}); 
	  
	var infowindow = new google.maps.InfoWindow( 
		{ 
			content: "<h1>춘천평생학습관</h1>", 
			maxWidth: 300 
		} 
	); 

	  google.maps.event.addListener(marker, 'click', function() { 
	  infowindow.open(map, marker); 
	  }); 
} 