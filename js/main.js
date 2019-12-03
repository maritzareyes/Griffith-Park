
var apiKey= "x4cevMTheuR8DSd5wX8cMA"
var cartoDBURL_GeoJSON = "https://mlreyes.carto.com/api/v2/sql?format=GeoJSON&q=";


//Toggling elements
var boundary = L.featureGroup(),
	trails = L.featureGroup(),
	mountainPeaks = L.featureGroup(),
	restaurants = L.featureGroup(),
	majorAttractions = L.featureGroup(),
	userData = L.featureGroup()

var restaurantLocations =null;
var trailLocations = null;
var poiData = null;
var cartoDBPoints = null;

var poiLayers = L.layerGroup([
	trails, mountainPeaks, majorAttractions, restaurants
		])

streets=L.esri.basemapLayer('Streets');
topo=L.esri.basemapLayer('Topographic');

// Highlighting on selection for trails
function style(feature) {
    return {
        // fillColor: 'yellow',
        // fillOpacity: 0.5,
        weight: 3,
        // opacity: 1,
        color: 'brown',
        dashArray: '3'
    };
}
var highlight = {
		'color': 'yellow',
		'weight': 3,
		'opacity': 1,
		'dashArray': '3'
};


var dehighlight = {
		'color': 'brown',
		'weight': 3,
		'opacity': 1,
		'dashArray': '3'
};

var icon_majorattr = L.icon ({
	iconUrl: 'img/star.png',
	// shadowUrl: 'img/marker-shadow.png',
	iconAnchor: [13, 41]
});

var icon_restaurant = L.icon ({
	iconUrl: 'img/restaurant3.png',
	iconAnchor: [13, 41]
});

var icon_mountain = L.icon ({
	iconUrl: 'img/mountain.png',
	// shadowUrl: 'img/marker-shadow.png',
	iconAnchor: [13, 41]
});

var icon_review = L.icon ({
	iconUrl: 'img/review.png',
	iconAnchor: [13, 41]
});

// // load GeoJSON layers
$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM griffith_park",function(data){
  L.geoJson(data).addTo(boundary);
});


function showAlltrails(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails",function(data){
	 trailLocations=L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});

}


function trailsEasy(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails WHERE difficulty='Easy'",function(data){
	 trailLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});
}

function trailsModerate(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails WHERE difficulty='Moderate' ",function(data){
	 trailLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});

}

function trailsHard(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails WHERE difficulty='Hard'",function(data){
	 trailLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});

}

function trailsLengthOne(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails WHERE length BETWEEN 0.00000 AND 0.999999",function(data){
	 trailLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});
}

function trailsLengthTwo(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails WHERE length BETWEEN 1.000000 AND 1.999999",function(data){
	 trailLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});

}

function trailsLengthThree(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails WHERE length BETWEEN 2.000000 AND 2.999999",function(data){
	 trailLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});

}

function trailsLengthMoreThree(){
	if(map.hasLayer(trailLocations)){
			map.removeLayer(trailLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM trails WHERE length BETWEEN 3.000000 AND 6.000000",function(data){
	 trailLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Difficulty: " + feature.properties.difficulty + '<br/>' +
																	"Length: " + (feature.properties.length).toFixed(2) + ' miles'+'</p>'	);
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setStyle({
										color: 'brown',
										dashArray: '3',
										weight: '3'
									})
	                layer.on("click", function (e) {
	                  trails.setStyle(style); //resets layer colors
	                  layer.setStyle(highlight);  //highlights selected.
	                });
	            }
	  }).addTo(trails)
	});

}

// Run showAll function automatically when document loads
$( document ).ready(function() {
  showAlltrails();
});

function trailDifficulty(){
	var difficultyLevel = document.getElementById('trail_level').value;
	if(difficultyLevel === 'showAlltrails'){
		showAlltrails();
	}
	if(difficultyLevel === 'easy'){
		trailsEasy();
	}
	if(difficultyLevel === 'moderate'){
		trailsModerate();
	}
	if(difficultyLevel === 'hard'){
		trailsHard();
	}
}

function trailLength(){
	var lengthValue = document.getElementById('trail_length').value;
	if(lengthValue === 'showAlltrails'){
		showAlltrails();
	}
	if(lengthValue === 'lessOne'){
		trailsLengthOne();
	}
	if(lengthValue === 'OnetoTwo'){
		trailsLengthTwo();
	}
	if(lengthValue === 'TwotoThree'){
		trailsLengthThree();
	}
	if(lengthValue  === 'moreThree'){
		trailsLengthMoreThree();
	}
 }


$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM mountain_peaks",function(data){
  L.geoJson(data,{
		onEachFeature: function (feature, layer) {
				layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + "Elevation: " + feature.properties.elevation +'</p>');
				layer.cartodb_id=feature.properties.cartodb_id;
				layer.setIcon(icon_mountain);
			}
	})
	.addTo(mountainPeaks);
});

function showAllrestaurants(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants",function(data){
	   restaurantLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);

								}
							})
		.addTo(restaurants);
	});

}

function restaurantsThree(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE rating BETWEEN 3.5 AND 3.9",function(data){
	  restaurantLocations=L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);
								}
							})
		.addTo(restaurants);
	});
}

function restaurantsFour(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE rating BETWEEN 4.0 AND 4.4",function(data){
	  restaurantLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);
								}
							})
		.addTo(restaurants);
	});
}

function restaurantsFive(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE rating BETWEEN 4.5 AND 5.0",function(data){
	   restaurantLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);

								}
							})
		.addTo(restaurants);
	});
}



function restaurantsAmerican(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE type='American'",function(data){
	  restaurantLocations=L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);
								}
							})
		.addTo(restaurants);
	});
}

function restaurantsAsian(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE type IN ('Thai', 'Japanese')",function(data){
	  restaurantLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);
								}
							})
		.addTo(restaurants);
	});
}

function restaurantsItalian(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE type='Italian'",function(data){
	   restaurantLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);

								}
							})
		.addTo(restaurants);
	});
}

function restaurantsMexican(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE type='Mexican'",function(data){
	   restaurantLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);

								}
							})
		.addTo(restaurants);
	});
}

function restaurantsMediterranean(){
	if(map.hasLayer(restaurantLocations)){
			map.removeLayer(restaurantLocations);
	};
	$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM restaurants WHERE type='Mediterranean'",function(data){
	   restaurantLocations = L.geoJson(data,{
	            onEachFeature: function (feature, layer) {
	                layer.bindPopup('<p><b>' + feature.properties.name + '</b><br/>' + 'Rating: ' + feature.properties.rating + '<br/>'+
									'Type: ' +  feature.properties.type + '<br/>' + 'Price: ' + feature.properties.price + '</p>');
	                layer.cartodb_id=feature.properties.cartodb_id;
									layer.setIcon(icon_restaurant);

								}
							})
		.addTo(restaurants);
	});
}

// Run showAll function automatically when document loads
$( document ).ready(function() {
  showAllrestaurants();
});

function restuarantsRating(){
     var ratingValue = document.getElementById('rating').value;
		 if(ratingValue === 'showAllrestaurants'){
			 showAllrestaurants();
		 }
		 if(ratingValue === 'Three'){
			 restaurantsThree();
		 }
		 if(ratingValue === 'Four'){
			 restaurantsFour();
		 }
		 if(ratingValue === 'Five'){
			 restaurantsFive();
		 }
	 }

function restaurantType(){
	var typeValue = document.getElementById('type').value;

	if(typeValue === 'showAllrestaurants'){
		showAllrestaurants();
	}
	if(typeValue === 'American'){
		restaurantsAmerican();
	}
	if(typeValue === 'Asian'){
		restaurantsAsian();
	}
	if(typeValue === 'Italian'){
		restaurantsItalian();
	}
	if(typeValue === 'Mexican'){
		restaurantsMexican();
	}
	if(typeValue === 'Mediterranean'){
		restaurantsMediterranean();
	}
}


$.getJSON(cartoDBURL_GeoJSON+"SELECT*FROM major_attractions",function(data){
	L.geoJson(data,{
		onEachFeature: function (feature, layer) {
				layer.bindPopup('<p><b>' + feature.properties.name + '</b>' + '</p>');
				layer.cartodb_id=feature.properties.cartodb_id;
				layer.setIcon(icon_majorattr);
			}
	})
	.addTo(majorAttractions);
});

var map = L.map('map', {
    center: [34.1366, -118.3132],
    zoom: 14,
    layers: [streets,topo,boundary,trails]
});

var baseMaps = {
    "Streets": streets,
    "Topographic":topo
};
var overlayMaps = {
    "Boundary": boundary,
    "Trails": trails,
    "Mountain Peaks": mountainPeaks,
    "Restaurants": restaurants,
    "Major Attractions": majorAttractions,
		"Park Reviews": userData
};

L.control.layers(baseMaps,overlayMaps).addTo(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

map.on("click", function(e){
	trails.setStyle(dehighlight);
})

//Search bar
var searchControl = new L.Control.Search({
	container: 'search',
	layer: poiLayers,
	propertyName: 'name',
	marker: false,
	// initial: false,
	// collapsed: false,
	moveToLocation: function(latlng, title, map) {
		var zoom =map.setView(latlng, zoom); // access the zoom
	}
});

var redIcon = L.icon({
    iconUrl: 'img/redIcon.png',
    shadowUrl: 'img/marker-shadow.png',
    iconAnchor: [13, 41]
});

locationMarker = null;

searchControl.on('search:locationfound', function(e) {
	if (locationMarker !== null) {
		map.removeLayer(locationMarker);
	}
	locationMarker = L.marker(e.latlng, {icon: redIcon}).addTo(map);

}).on('search:collapsed', function(e) {
	map.on('click', function (e){
		map.removeLayer(locationMarker)
	})
});

map.addControl( searchControl );

//Routing
var control = L.Routing.control({
    waypoints: [
    ],
    routeWhileDragging: true,
		geocoder: L.Control.Geocoder.nominatim()
})
// .addTo(map);

var routeBlock = control.onAdd(map);
document.getElementById('findDest').appendChild(routeBlock);

// Function that will locate the user when called
function findUser(){
	map.locate({setView: true, maxZoom: 15});
};

function resetMap () {
	map.setView([34.1366, -118.3132]);
};



//User enter review
// Get CartoDB selection as GeoJSON and Add to Map
function getGeoJSON(){
  $.getJSON(cartoDBURL_GeoJSON+"SELECT * FROM reviews", function(data) {
    cartoDBPoints = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng, {icon: icon_review});
        marker.bindPopup('<p><b>' + feature.properties.review + '</b><br/>' + "By: " + feature.properties.frstname + '<br/>' +
												"Date: " + (feature.properties.date).split('T')[0]+ '</p>');
        return marker;
      }
    }).addTo(userData);
  });
};

$( document ).ready(function() {
  getGeoJSON();
});

// Create Leaflet Draw Control for the draw tools and toolbox
var drawControl = new L.Control.Draw({
  draw : {
    polygon : false,
    polyline : false,
    rectangle : false,
    circle : false
  },
  edit : false,
  remove: false
});

// Boolean global variable used to control visiblity
var controlOnMap = false;

// Create variable for Leaflet.draw features
var drawnItems = new L.FeatureGroup();


// Function to add the draw control to the map to start editing
function startEdits(){
  if(controlOnMap == true){
    map.removeControl(drawControl);
    controlOnMap = false;
  }
  map.addControl(drawControl);
  controlOnMap = true;
};

// Function to remove the draw control from the map
function stopEdits(){
  map.removeControl(drawControl);
  controlOnMap = false;
};

// Function to run when feature is drawn on map
map.on('draw:created', function (e) {
  var layer = e.layer;
  map.addLayer(drawnItems);
  drawnItems.addLayer(layer);
  dialog.dialog("open");
});



// Use the jQuery UI dialog to create a dialog and set options
var dialog = $("#dialog").dialog({
  autoOpen: false,
  height: 300,
  width: 350,
  modal: true,
  position: {
    my: "center center",
    at: "center center",
    of: "#map"
  },
  buttons: {
    "Submit": setData,
    Cancel: function() {
      dialog.dialog("close");
      map.removeLayer(drawnItems);
    }
  },
  close: function() {
    form[ 0 ].reset();
    console.log("Dialog closed");
  }
});

// Create the form, but prevent it from default functions
var form = dialog.find("form").on("submit", function(event) {
  event.preventDefault();
});

// Create a function that sets an INSERT statement based on the information entered by the user in the form
function setData() {
  var enteredFirstname = firstname.value;
	var enteredLastname = lastname.value
	var enteredCategory = category.value
	var enteredDate = date.value
  var enteredReview = review.value;
  drawnItems.eachLayer(function (layer) {
    var sql = "INSERT INTO reviews (the_geom, review, frstname, latitude, longitude, category, date, lstname) VALUES (ST_SetSRID(ST_GeomFromGeoJSON('";
    var a = layer.getLatLng();
    console.log(a);
    var sql2 ='{"type":"Point","coordinates":[' + a.lng + "," + a.lat + "]}'),4326),'" + enteredReview + "','" + enteredFirstname + "','" + a.lat + "','" + a.lng  + "','" + enteredCategory + "','" + enteredDate + "','" + enteredLastname + "')";
    var pURL = sql+sql2;
    console.log(pURL);
    submitToProxy(pURL);
    console.log("Feature has been submitted to the Proxy");
  });
  map.removeLayer(drawnItems);
  drawnItems = new L.FeatureGroup();
  console.log("drawnItems has been cleared");
  dialog.dialog("close");
};

// Submit data to the PHP using a jQuery Post method
var submitToProxy = function(q){
  $.post("php/callProxy.php", { //Put path to your PHP file here
    qurl:q,
    cache: false,
    timeStamp: new Date().getTime()
  }, function(data) {
    console.log(data);
    refreshLayer();
  });
};

// refresh the layers to show the updated dataset
function refreshLayer() {
  if (map.hasLayer(cartoDBPoints)) {
    map.removeLayer(cartoDBPoints);
  };
  getGeoJSON();
};

// https://bl.ocks.org/ramiroaznar/0e911e3a8690de483854c197f908d087
