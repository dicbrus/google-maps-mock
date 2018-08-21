(function(){
  window.google = window.google || {
    maps: {
      Map: function(){},
      OverlayView : function () {},
      Geocoder: function() {},
      Marker:  function() {
        this.addListener = () => {}
      },
      InfoWindow : function() {},
      LatLng: function(lat, lng){
        this.lat = () => lat;
        this.lng = () => lng;
      },
      Size: function() {},
      Animation: {
        DROP: ''
      },
      MapTypeId: {ROADMAP: true},
      places: {
        AutocompleteService: function() {},
        PlacesService: function(obj){
          return {
            PlacesServiceStatus: {
              OK: true
            },
            textSearch: function(query){
              return [];
            },
            nearbySearch: function(query){
              return [];
            }
          };
        }
      }
    }
  };
})();
