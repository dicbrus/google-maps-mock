(function(){
  window.google = window.google || {
    maps: {
      Map: function() {
        this.fitBounds = (bounds, padding) => {};
        this.addListener = () => {};
      },
      OverlayView : function () {},
      Geocoder: function() {},
      Marker:  function() {
        this.addListener = () => {};
        this.setPosition = () => {};
        this.setMap = () => {};
      },
      InfoWindow : function() {
        this.setContent = () => {};
        this.close = () => {};
      },
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
        Autocomplete: function() {
          this.addListener = () => {};
          this.setFields = () => {};
          this.setComponentRestrictions = () => {};
          this.getPlace = () => {};
        },
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
      },
      GeocoderStatus: {
        OK: 'OK'
      }
    }
  };
})();
