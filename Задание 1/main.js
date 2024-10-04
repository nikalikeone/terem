$(document).ready(function () {
    $(".close").click(function () {
        $(".modal").toggle();
    });

    $(".btn-warning").click(function () {
        $(".top").toggle();
    })

    $(".btn-success").click(function () {
        $('.second').toggleClass('order');
    });
});