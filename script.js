$(document).ready(function() {
    // Change color of navigation links on hover
    $('.navbar ul li a').hover(
        function() {
            $(this).css('color', '#ff6347');
        },
        function() {
            $(this).css('color', '#fff');
        }
    );
});