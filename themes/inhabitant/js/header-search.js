$(document).ready(function(){

  console.log('hello!');

  $('.main-navigation svg').on('click', function() {
    console.log('you clicked the search!');
    $('.header-search').toggleClass('header-display');
    $('.search-field').focus();
  })

})