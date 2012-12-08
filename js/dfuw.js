jQuery(function($){
    if($(".accordion").length){
      $('.accordion').accordion({ collapsible: true });
      //$(".accordion").tabs(".pane", {tabs: 'h4', effect: 'slide'});
    }

    //$('input[placeholder], textarea[placeholder]').placeholder();

    if($('#expand-all').length){
      $('.accordion-header').click(function(e){
        // e.preventDefault();
        var _this = $(this);
        if($('#expand-all i').hasClass('icon-minus-sign')){
          $('#expand-all span').text('Expand All');
          $('#expand-all i').removeClass('icon-minus-sign').addClass('icon-plus-sign');
          $('.accordion').accordion('destroy').accordion({ collapsible: true });
        }
      });
    }

    var schools = {
      init: function(){
        $('#expand-all').click(function(){
          if($('#expand-all span').text() == "Expand All"){
            $('.accordion .pane').show();
            $('#expand-all span').text('Collapse All');
            $('#expand-all i').removeClass('icon-plus-sign').addClass('icon-minus-sign');
          }else{
            $('.accordion-header').removeClass('current');
            $('#expand-all span').text('Expand All');
            $('#expand-all i').removeClass('icon-minus-sign').addClass('icon-plus-sign');
            $('.accordion').accordion('destroy').accordion({ collapsible: true });
          }
        });
          $('#school_selector').change(function(){
            window.location = $(this).val();
          });
      }
    }

    var video = {
      init: function(){
        $('.video h2, .video p').ellipsis();
      }
    }

    if($('.post-type-archive-role, .post-type-archive-school, .post-type-archive-spell, .single-school').length)
      schools.init();

    if($('.page-template-archive-video-php').length)
      video.init();

    if($('h2').length)
      $('h2').ellipsis();
});
