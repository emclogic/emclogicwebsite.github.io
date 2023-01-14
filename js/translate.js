$.getJSON("./pt_br", function (data) {
    const pt_br = data
});

$.getJSON("./en_us", function (data) {
    const en_us = data
});


$("#document").ready(function () {

    if ( $( "#button_br" ).click(function () {

        $("#init_txt").val(pt_br[content][init_txt]);

    }) );

    else ( $("#english_br").click(function () {

        $("#init_txt").val(en_us[content][init_txt]);

    }) ); 

});
