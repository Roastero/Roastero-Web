$(function(){
    var apiurl = 'https://api.github.com/repos/tldrcode/tldrcode.com/contributors';
    var outhtml = "";
    requestJSON(apiurl, function(json){
        var contributors = json;
        var counter = 0;
        outhtml = outhtml + '<ul>'
        $.each(contributors, function(index) {
            outhtml = outhtml + '<li>';
            outhtml = outhtml + '<div class="user-card">'
            outhtml = outhtml + '<div class="user-card-top">';
            outhtml = outhtml + '<img src="'+encodeURI(contributors[index].avatar_url)+'" alt="user avatar" class="round-image"></a>';
            outhtml = outhtml + '<h3><a href="'+encodeURI(contributors[index].html_url)+'">'+encodeURI(contributors[index].login)+'</a></h3>';
            outhtml = outhtml + '</div>';
            outhtml = outhtml + '<div class="user-card-bottom">';
            outhtml = outhtml + '<h6>Commits: '+encodeURI(contributors[index].contributions)+'</h6>';
            outhtml = outhtml + '</div>';
            outhtml = outhtml + '</div>';
            outhtml = outhtml + '</li>';
            counter++;
        });
        outhtml = outhtml + '</ul>';
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
