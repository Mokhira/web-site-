$(document).ready(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');
        }
    );

    $('#media').carousel({
        pause: true,
        interval: 40000
    });
});


<!--caruselnavigation -->
$('.collapse').on('shown.bs.collapse', function (e) {
    $('.collapse').not(this).removeClass('in');
});

$('[data-toggle=collapse]').click(function (e) {
    $('[data-toggle=collapse]').parent('li').removeClass('active');
    $(this).parent('li').toggleClass('active');
});

$('[data-toggle=subselect]').click(function (e) {
    $('[data-toggle=subselect]').parent('li').removeClass('subactive');
    $(this).parent('li').toggleClass('subactive');
});

//    popover

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
//trigger : 'hover',
        html : true,
        content : '<div class="media"><a href="#" class="pull-right"></a><div class="media-body"></br><h4 class="media-heading">WEST Web</h4><p >Excellent Bootstrap popover! I really love it.</p></div></div>'
    });
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});