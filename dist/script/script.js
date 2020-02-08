$('.friends__slider').slick();

$(function () {
    $('.toogle__input').on('click', function () {
        $('#menu:checked').toggle('menu--open');
    });
});