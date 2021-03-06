$(function(){

  // Sort product divs by random sort / popularity / low to high price / high to low price

  var $badge = $('span') ;
  var $productList = $('#productList');



  $badge.click(function() {
    switch (true) {

      case $(this).hasClass('random'):
      // Sort #productList children randomly
      console.log('i clicked on random');

      // Randomly display product divs

      var parent = $("#productList");
      var divs = parent.children('.product');
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }

      break;

      case $(this).hasClass('popular'):
      // Sort #productList children randomly
      console.log('i clicked on popular');

      // Sort product divs by ranking

      var parent = $("#productList");
      var divs = parent.children('.product');

      divs.sort(function(a,b) {
        a = Number($(a).attr('data-popularity'));
        b = Number($(b).attr('data-popularity'));
        return b - a;
      }).appendTo('#productList');

      break;

      case $(this).hasClass('price-low'):
      // Sort products from price low to high
      console.log('See cheap products first');

      var parent = $("#productList");
      var divs = parent.children('.product');

      divs.sort(function(a,b) {
        a = Number($(a).attr('data-pricing'));
        b = Number($(b).attr('data-pricing'));
        return a - b;
      }).appendTo('#productList')

      break;

      case $(this).hasClass('price-high'):
      // Sort products from price high to low
      console.log('See expensive products first');

      // function callback - sort high to low

      var parent = $("#productList");
      var divs = parent.children('.product');

      divs.sort(function(a,b) {
        a = Number($(a).attr('data-pricing'));
        b = Number($(b).attr('data-pricing'));
        return b - a;
      }).appendTo('#productList');

      break;

      default:
      var parent = $("#productList");
      var divs = parent.children();
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      };
    }

  }); // End of ranking function

// --------------------------------------------------------------------------------------------------------
// Event: Create modal based  <Nav> that expands from left to right on click


  $('#nav > aside').css("background-color", "white");
  $('#nav > aside').hide();

  $('#nav').click(function(){
    $('#nav > aside').animate({width: 'toggle'});
  });


}) // END
