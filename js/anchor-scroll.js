$(function() {

  //ANCHOR SCROLL
  scrollTo = function(id) {
    $('html,body').animate({scrollTop: $('#'+ id).offset().top}, 1000);
  }

  //Initiatie **.panel-title** stickies
  function sticky_relocate() {
    var window_top = $(window).scrollTop();

    var apps_anchor = $('#containerAnchor').offset().top;
    if (window_top > apps_anchor) {
      $('#top-anchor, #nav-left, #nav-right').show('fast', 'linear');
      $('#top-anchor').addClass('stick');
    } else {
      $('#top-anchor, #nav-left, #nav-right').hide('fast', 'linear');
      $('#top-anchor').removeClass('stick');
    }

    var apps_anchor = $('#appsAnchor').offset().top;
    if (window_top > apps_anchor) {
      $('#apps-title').addClass('stick');
    } else {
      $('#apps-title').removeClass('stick');
    }

    var wtf_anchor = $('#wtfAnchor').offset().top;
    if (window_top > wtf_anchor) {
      $('#wtf-title').addClass('stick');
    } else {
      $('#wtf-title').removeClass('stick');
    }

    var wtf_anchor = $('#igAnchor').offset().top;
    if (window_top > wtf_anchor) {
      $('#ig-title').addClass('stick');
    } else {
      $('#ig-title').removeClass('stick');
    }
  }

  $(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });

});