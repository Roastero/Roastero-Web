$.getJSON( "http://openroast.ite.bz/v0.1/recipes", function(data) {
  $.each( data['data'], function( key, val ) {
      var recipeID = val;
      url = "http://openroast.ite.bz/v0.1/recipes/" + recipeID;
      $.getJSON( url, function(data, recipeID) {
        $.each( data['data'], function( key, val ) {
          var recipeFile = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data.data[0]).replace(/'/g, ""));
          $("#recipes").append("<h2><a href='data:" + recipeFile + "' download='" + val['roastName'].replace("'", "") + ".json'>" + val['roastName'] + "</a></h2>" + "<p>" + val['roastDescription']['description'] + "</p>");
        });
      });
  });
});
