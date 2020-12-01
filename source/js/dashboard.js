
// Hide submenus
$('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
$('#collapse-icon').addClass('+-fa-angle-double-right'); 

// Collapse click
$('.sidebar-colapse').click(function() {
    SidebarCollapse();
});

(function($) {
    "use strict";

function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
 $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
     if (this.href === path) {
         $(this).addClass("active");
     }
 });

// Toggle the side navigation
$("#sidebarToggle").on("click", function(e) {
 e.preventDefault();
 $("body").toggleClass("sb-sidenav-toggled");
});
})(jQuery);
