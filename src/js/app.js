$('.tab').on('click', function() {
  clickTab(true, $(this));
  return false;
});

$(window).on('hashchange', function(e) {
  var link = {};
  if (location.hash !== '') {
    link = $('.tab[href="' + location.hash + '"]');
  } else {
    link = $('.tab.first');
  }
  clickTab(false, link);
});

function clickTab(real, link) {
  if (link.hasClass('tab')) {
    var id = link.attr('href');
    link.addClass('is-active')
      .siblings().removeClass('is-active');
    $(id).removeClass('is-hidden')
      .siblings().addClass('is-hidden');
    if (real) {
      history.pushState(null, null, id);
    }
  } else {
    return false;
  }
}
