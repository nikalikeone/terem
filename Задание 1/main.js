$(document).ready(function () {
    $(".close").click(function () {
        $(".modal").toggle();
    });

    $(".btn-warning").click(function () {
        $(".top").toggle();
    })

    let chenged = false;

    $(".btn-success").click(function () {
        if (chenged) {
            $("#block-1").removeClass("second").addClass("first");
            $("#block-2").removeClass("first").addClass("second");
        } else {
            $("#block-1").removeClass("first").addClass("second");
            $("#block-2").removeClass("second").addClass("first");
        }
        chenged = !chenged;
    });
});