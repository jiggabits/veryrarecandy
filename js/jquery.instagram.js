(function($){
  $.fn.instagram = function(options) {
    var that = this,
        apiEndpoint = "https://api.instagram.com/v1",
        settings = {
          id: '29689228',
          hash: '99centbrains',
          accessToken: '173496.1fb234f.a6f090b2f6704616a8c4b797c40422bb',
          clientId: null,
          show: null,
          onLoad: null,
          onComplete: null,
          maxId: null,
          minId: null
        };
        
    options && $.extend(settings, options);

    function createPhotoElement(photo) {

      var shareLink = photo['link'];
      var photoURL = photo.images.standard_resolution.url;

      var url = photo.images.standard_resolution.url;
      return $('<div>')
            .addClass('insta')
            .addClass('span4')
            .append($('<a></a>')
              .attr('href', shareLink)
              .attr('target', '_blank')
              .addClass('instaLink')
              .attr('data-toggle', 'modal')
              .append($('<img>')
              .attr('src', photo.images.standard_resolution.url)
              .addClass('instagram-thumb')));
    };

    function composeRequestURL() {
      var url = apiEndpoint,
          params = {};
      
      if(settings.id != null) {
        url += "/users/" + settings.id + "/media/recent";
      }
      else {
        url += "/media/popular";
      };
      
      settings.accessToken != null && (params.access_token = settings.accessToken);
      settings.clientId != null && (params.client_id = settings.clientId);

      url += "?" + $.param(params);
      return url;
    };
    
    settings.onLoad != null && typeof settings.onLoad == 'function' && settings.onLoad();
    
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: composeRequestURL(),
      success: function(res) {
        settings.onComplete != null && typeof settings.onComplete == 'function' && settings.onComplete(res.data);
        
        var limit = settings.show == null ? res.data.length : settings.show;
        
        for(var i = 0; i < limit; i++) {
          if(i == 0 || i == 3) {
           that.append('<div class="row-fluid span12">');
           $('#instagram-container > .span12:last-child').append(createPhotoElement(res.data[i]));
          } else {
           $('#instagram-container > .span12:last-child').append(createPhotoElement(res.data[i]));
          }
        }
      }
    });
    return this;
  };
})(jQuery);
