window.onload = function() {
	$(document).ready(function() {

	      // Initialize Firebase
	  	var config = {
	    	apiKey: "AIzaSyDRp3qiKLYKU0_NWhxeaDckqlH1Ai8Mc40",
	    	authDomain: "geomapsight.firebaseapp.com",
	    	databaseURL: "https://geomapsight.firebaseio.com",
	    	projectId: "geomapsight",
	    	storageBucket: "geomapsight.appspot.com",
	    	messagingSenderId: "1044816508288"
	  	};
	  	firebase.initializeApp(config);

	    var regionInput;
	    var nameInput;
	    var configurationInput;
	    var capacityPlantInput;
	    var engineTypeInput;
	    var customerInput;
	    var contractTermInput;	
	    var locationInput;
	    var latitudeInput;
	    var longituteInput;
	    var startDateInput;	    
	    var contractTypeInput;	    
	    var siteManagerInput;
	    var pmInput;
	    var salesInput;
	    var salesDirectorInput;


		$("#run-submit").on("click",function(event){

			event.preventDefault();

			regionInput = $("#siteRegionId").val().trim();
			console.log(regionInput);

			nameInput = $("#siteNameId").val().trim();
			console.log(nameInput);

			configurationInput = $("#confPlantId").val().trim();
			console.log(configurationInput);

			capacityPlantInput = $("#plantCapacityId").val().trim();
			console.log(capacityPlantInput);

			engineTypeInput = $("#engineTypeId").val().trim();
			console.log(engineTypeInput);

			customerInput = $("#customerId").val().trim();
			console.log(customerInput);

			contractTermInput = $("#contractTermId").val().trim();
			console.log(contractTermInput);

			locationInput = $("#locationId").val().trim();
			console.log(locationInput);

			latitudeInput = $("#latitudeId").val().trim();
			console.log(latitudeInput);

			longituteInput = $("#longitudeId").val().trim();
			console.log(longituteInput);

			startDateInput = $("#startDateId").val().trim();
			console.log(startDateInput);

			contractTypeInput = $("#contractTypeId").val().trim();
			console.log(contractTypeInput);

			siteManagerInput = $("#siteManagerId").val().trim();
			console.log(siteManagerInput);

			pmInput = $("#pmManagerId").val().trim();
			console.log(pmInput);

			salesInput = $("#salesId").val().trim();
			console.log(salesInput);

			salesDirectorInput = $("#salesDirectorId").val().trim();
			console.log(salesDirectorInput);



			//firebase.database().ref().on("child_added",function(snapshot){

						//console.log(snapshot.val().searchMovieInput);

						//var nextTime = moment(firstTimeMoment.add(lapse)).format();
						//$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

			//})


			

			//firebase.database().ref().push({
				//searchMovieInput: searchMovieInput,
				//dateAdded: firebase.database.ServerValue.TIMESTAMP
			//});



		});


		function addMarker(location) {
			
	        marker = new google.maps.Marker({
	            position: location,
	            map: map
	        });
	    }




		var top3Movies = [];


		firebase.database().ref().on("child_added",function(snapshot){

			top3Movies.push(snapshot.val().searchMovieInput);

			console.log(snapshot.val().searchMovieInput);

			//console.log(top3Movies);




			//var nextTime = moment(firstTimeMoment.add(lapse)).format();
			$("#movieSelected").append("<div>" + snapshot.val().searchMovieInput + "</div>");

		})


		for (var i = 0; i < 2; i++) {
			var aux = top3Movies [i];
			console.log(aux);
		}		
	    

	});	
	//document
}
//window 