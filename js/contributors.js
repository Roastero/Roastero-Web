$(function(){
  var apiurl = 'https://api.github.com/repos/roastero/openroast/contributors';
  var outhtml = "";
  requestJSON(apiurl, function(json)
{
  var contributors = json;
  var counter = 0;
  outhtml = outhtml + '<div class="row">'
  $.each(contributors, function(index) {
    if(counter % 4 == 0 && counter != 0){
      outhtml = outhtml + '</div>'
      outhtml = outhtml + '<div class="row">'
    }
    outhtml = outhtml + '<div class="3u align-center">';
    outhtml = outhtml + '<a href="'+encodeURI(contributors[index].html_url)+'"><img src="'+encodeURI(contributors[index].avatar_url)+'" alt="user avatar" class="circular"></a>';
    outhtml = outhtml + '<h2><a href="'+encodeURI(contributors[index].html_url)+'">'+encodeURI(contributors[index].login)+'</a></h2>';
    outhtml = outhtml + '<p>Contributions: '+encodeURI(contributors[index].contributions)+'</p>';
    outhtml = outhtml + '</div>';
    counter++;
  });
  outhtml = outhtml + '</div>';
  $('#contributors').html(outhtml);
});
function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}
});
