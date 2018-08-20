(function(){
  window.google = window.google || {
    maps: {
      Map: function(){},
      OverlayView : function () {
      },
      Marker : function () {
      },
      InfoWindow : function () {
      },
      LatLng: function(lat, lng){
        return [lat, lng];
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
