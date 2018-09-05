checkHash('.main__tabs');

$('.tab').on('click', function() {
  clickTab(true, $(this));
  // return false;
});

$(window).on('hashchange', function(e) {
  checkHash('.main__tabs');
});

function clickTab(real, hash) {
  if (hash.hasClass('tab')) {
    var id = hash.data('link');
    hash.addClass('is-active')
      .siblings().removeClass('is-active');
    $(id).addClass('is-visible')
      .siblings().removeClass('is-visible');
    if (real) {
      history.pushState(null, null, id);
    }
  } else {
    return false;
  };
};

function checkHash(tabs) {
  var hash = {};

  $(tabs).each(function(i, e) {
    e = $(e);
    if (location.hash !== '') { 
      hash = e.find('.tab[data-link="' + location.hash + '"]');
      if (hash.length === 0 ) {
        hash = e.find('.tab.first');
      }
    } else {
      hash = e.find('.tab.first');
    }
        
    clickTab(false, hash);
  });

};


// $('.tab').on('click', function() {
//   clickTab(true, $(this));
//   return false;
// });

// $(window).on('load hashchange', function(e) {
//   var hash = {};
//   if (location.hash !== '') {
//     hash = $('.tab[data-link="' + location.hash + '"]');
//   } else {
//     hash = $('.tab.first');
//   }
//   clickTab(false, hash);
// });

// function clickTab(real, hash) {
//   if (hash.hasClass('tab')) {
//     var id = hash.data('link');
//     hash.addClass('is-active')
//       .siblings().removeClass('is-active');
//     $(id).removeClass('block')
//       .siblings().addClass('block');
//     $(id).addClass('is-active')
//       .siblings().removeClass('is-active');
//     if (real) {
//       history.pushState(null, null, id);
//     }
//   } else {
//     return false;
//   }
// }
