
$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  });

  $('#login').click(function(){
    _500px.getAuthorizationStatus(function (status) {
      if (status == 'not_logged_in' || status == 'not_authorized') {
        _500px.login();
      }
    });
  });

  _500px.on('authorization_obtained', function () {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          // console.log('long:' + long)
          // console.log('lat:' + lat)
          var radius = '25mi'
          var searchOptions = {
            geo: lat+ ',' + long + ',' + radius,
            only: "Landscapes",
            image_size: 3,
            sort: "highest_rating"
          }
          _500px.api('/photos/search', searchOptions, function(response){
            if (response.data.photos.length === 0){
              // console.log("No photos returned");
            } else {
              // console.log("Request succeeded");
              console.log(response.data.photos);
              console.log(response.data);
              $.each(response.data.photos, function(index, value){
                // console.log(value["image_url"]);
                $('.images').append("<img src="+value.image_url+">");
              });
            };
          });
      });
      navigator.geolocation.getCurrentPosition(function(position){
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          // console.log('long:' + long)
          // console.log('lat:' + lat)
          var radius = '25mi'
          var searchOptions = {
            geo: lat+ ',' + long + ',' + radius,
            only: "Landscapes",
            image_size: 3,
            sort: "highest_rating",
            page: "2"
          }
          _500px.api('/photos/search', searchOptions, function(response){
            if (response.data.photos.length === 0){
              // console.log("No photos returned");
            } else {
              // console.log("Request succeeded");
              // console.log(response.data.photos);
              console.log(response.data);
              // console.log("second call worked")
              $.each(response.data.photos, function(index, value){
                // console.log(value["image_url"]);
                if (index < 8){
                  $('.images').append("<img src="+value.image_url+">");
                } else {
                  // console.log("nothing happens");
                };
              });
            };
          });
        });
    } else {
      $('.images').append("Sorry, your browser is not support geolocation and is incompatible with our app")
    };
  });
});

// sort by rating, done
// return 28 photoes
// display user info on the site after successful login
// readme for project feedr
