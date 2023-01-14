const pt_br = {
    "content": {
        "init_txt": "Início",
        "about_txt": "Sobre",
        "services_txt": "Serviços",
        "area_txt": "Áreas",
        "tec_txt": "Tecnologias",
        "contact_txt": "Contato"
    }
}

const en_us = {
    "content": {
        "init_txt": "Begin",
        "about_txt": "About",
        "services_txt": "Services",
        "area_txt": "Areas",
        "tec_txt": "Tecnologies",
        "contact_txt": "Contact"
    }
}

$("#document").ready(function () {



    $("#button_br").click(function () {

        // PT_BR

        $("#init_txt").html(pt_br.content.init_txt);
        $("#about_txt").html(pt_br.content.about_txt);
        $("#services_txt").html(pt_br.content.services_txt);
        $("#area_txt").html(pt_br.content.area_txt);
        $("#tec_txt").html(pt_br.content.tec_txt);
        $("#contact_txt").html(pt_br.content.contact_txt);

    })

     $("#button_us").click(function () {

        // EN_US 

        $("#init_txt").html(en_us.content.init_txt);
        $("#about_txt").html(en_us.content.about_txt);
        $("#services_txt").html(en_us.content.services_txt);
        $("#area_txt").html(en_us.content.area_txt);
        $("#tec_txt").html(en_us.content.tec_txt);
        $("#contact_txt").html(en_us.content.contact_txt);
        
    }) 

});
