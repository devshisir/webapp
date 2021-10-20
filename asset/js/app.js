$(document).ready(function() {

    $("input").prop("checked",false);
    $("#bg01").prop("checked",true);
    

    // background select functions 
    $('#main_bg_content').addClass('bg_aquamarine');
    $('input[type=radio][name=backgroundSelect]').change(function() {
        bg_value = $(this).data('bg-class');
        $('#main_bg_content').removeClass().addClass(bg_value);
    });

    // fur slect functions
    $('input[type=radio][name=furselectOption]').change(function() {
        let fur_value = $(this).data('image-src');
        $('#fur_image').attr('src',fur_value);
    });

    // earrings select functions 
    $('input[type=radio][name=earringselectOption]').change(function() {
        let earrings_value = $(this).data('image-src');
        $('#earring_style').attr('src',earrings_value);
    });

    // cloth select functions 
    $('input[type=radio][name=clothselectOption]').change(function() {
        let cloth_value = $(this).data('image-src');
        $('#clothes_style').attr('src',cloth_value);
    });

    // hat select function 
    $('input[type=radio][name=hatSelectOption]').change(function() {
        let hat_value = $(this).data('image-src');
        $('#hat_style').attr('src',hat_value);
    });

    // eye select function 
    $('input[type=radio][name=eyeSelectOption]').change(function() {
        let eye_value = $(this).data('image-src');
        $('#eye_style').attr('src',eye_value);
    });

    // mouth select function 
    $('input[type=radio][name=mouthSelectOption]').change(function() {
        let mouth_value = $(this).data('image-src');
        $('#mouth_style').attr('src',mouth_value);
    });

    $('.sidebar_asset_select button').on('click',function(){
        $('#asset_tab_wrapper').addClass('show_tab');
    })

    $('.mobile_tab_select_close button').on('click',function(){
        $('#asset_tab_wrapper').removeClass('show_tab');
    })

    
    
    

    
});