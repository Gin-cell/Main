$(document).ready(function () {
    $(".btn").click(function (e) {
        e.preventDefault();
        let num = parseFloat($(this).html());
        $(".screen").append(num);
        $(".input").val($(".input").val() + num);
    });

    $(".op").click(function (e) {
        e.preventDefault();
        let op = $(this).html();
        $(".screen").append(op);
        $(".input").val($(".input").val() + op);
    });

    $(".eq").click(function () {
        $(".input").val(eval($(".input").val()));
        $(".screen").html(eval($(".input").val()));
    });

    $(".calc__c").click(function () {
        $(".input").val("");
        $(".screen").html("");
    });
});