 // :: 4.0 Search Active Code
 var searchwrapper = $('.search-wrapper');
 $('.search-btn').on('click', function () {
     searchwrapper.toggleClass('on');
 });
 $('.close-btn').on('click', function () {
     searchwrapper.removeClass('on');
 });