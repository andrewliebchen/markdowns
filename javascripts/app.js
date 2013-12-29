$(document).ready(function(){

  // Parse URL
  // Hide hidden sections
  if('hide' in urlParams){
    var hideSections = urlParams['hide'];
    var hideIds = hideSections.split(",");
    
    for(var i=0; i < hideIds.length; i++){
      $('#' + hideIds[i]).hide();
    }
  }

  // Link back to source
  if('title' in urlParams) {
    var sourceTitle = urlParams['title'];
    var sourceUrl = urlParams['url'];

    $('[data-link="source"]').attr('href', sourceUrl).children('strong').text(sourceTitle);
  }

  // Show show secondary
  if('show' in urlParams){
    $('body').addClass('show-secondary');

    $('[data-button="cancel"]').click(function(){
      $('body').removeClass('show-secondary');
    });
  }
});
