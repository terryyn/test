$(window).on('resize', function() {
    if($(window).width() < 100) {
        $('.div').attr('data-placement','left');
        $('#body').removeClass('limit400');
    }
})
