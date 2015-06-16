function initialize() {

  var myLatlng = new google.maps.LatLng(59.542655, 10.617651);
  var mapOptions = {
    zoom: 9,
    center: myLatlng
  };


  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  for(var i = 0;i<local.length;i++ ){
  
    var lola = new google.maps.LatLng(local[i].latitude, local[i].longitude);

    
    var con = '<div id="content">' + 
      '<div id="' + local[i].name + '">' + 
      '<h1 id="firsteHeading" class="firstHeading">' + local[i].name + '</h1>' + 
      '<div id="bodyContent">' +
      '<table>' +
      '<tr><td>RETNING</td><td>GRADER</td><td>STYRKE(m/s)</td><td>KLOKKA</td></tr>' +
      '<tr><td>'  + local[i].dir[1] + '</td><td>' + local[i].dir_deg[1] + '</td><td>' + local[i].force[1] + '</td><td><a href="#" onclick=update(1);>' + new Date(local[i].time[1]).getHours() + ':00</a></td></tr>' +
      '<tr><td>'  + local[i].dir[2] + '</td><td>' + local[i].dir_deg[2] + '</td><td>' + local[i].force[2] + '</td><td><a href="#" onclick=update(2);>' + new Date(local[i].time[2]).getHours() + ':00</a></td></tr>' +
      '<tr><td>'  + local[i].dir[3] + '</td><td>' + local[i].dir_deg[3] + '</td><td>' + local[i].force[3] + '</td><td><a href="#" onclick=update(3);>' + new Date(local[i].time[3]).getHours() + ':00</a></td></tr>' +
      '<tr><td>'  + local[i].dir[4] + '</td><td>' + local[i].dir_deg[4] + '</td><td>' + local[i].force[4] + '</td><td><a href="#" onclick=update(4);>' + new Date(local[i].time[4]).getHours() + ':00</a></td></tr>' +
      '<tr><td>'  + local[i].dir[5] + '</td><td>' + local[i].dir_deg[5] + '</td><td>' + local[i].force[5] + '</td><td><a href="#" onclick=update(5);>' + new Date(local[i].time[5]).getHours() + ':00</a></td></tr>' +
      '<tr><td>'  + local[i].dir[6] + '</td><td>' + local[i].dir_deg[6] + '</td><td>' + local[i].force[6] + '</td><td><a href="#" onclick=update(6);>' + new Date(local[i].time[6]).getHours() + ':00</a></td></tr>' +
      '</table></div></div>';
      

    var infowindow = new google.maps.InfoWindow({
      content:con
    });

    

    marker[local[i].name] = new google.maps.Marker({
      position: lola,
      map: map,
      title: local[i].name,
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 6,
        fillColor: color_code(local[i].force[1]),
        fillOpacity: 0.8,
        strokeWeight: 2,
        rotation: ((parseInt(local[i].dir_deg[1], 10)) + 180) % 360
      }
    });

    bindMarkerInfoWin(local[i].name, con, infowindow);

  }

  function bindMarkerInfoWin(mid, contentString, infowindow){

    google.maps.event.addListener(marker[mid], 'click', function() {
      infowindow.setContent(contentString);
      infowindow.open(map, marker[mid]);//marker);
      //marker[mid].infowindow = infowindow;
    });

    google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
    });


  }


}  //end initialize

var map = null;
var marker = {};

function update(hour){
  //marker["Larkollen"].setPosition(new google.maps.LatLng(59.524247, 10.465002));
  for(var i = 0; i < local.length;i++){
    marker[local[i].name].icon.rotation = ((parseInt(local[i].dir_deg[hour], 10)) + 180) % 360;
    marker[local[i].name].icon.fillColor = color_code(local[i].force[hour]);
    marker[local[i].name].setMap(null);
    marker[local[i].name].setMap(map);
  }
}

function color_code(ms){
  

  if(ms < 8){
    return "blue";
  } else if(ms >= 8 && ms < 10) {
    return "green";
  } else if(ms > 10 && ms < 12){
    return "yellow";
  } else if(ms >= 12){
    return "red";
  }
  
  
}




google.maps.event.addDomListener(window, 'load', initialize);