function showSections(){
    $("#sections ul").css('display', 'flex');
}

$(document).ready(function(){
    $("#section-selector ul li:not(.section-link)").on('click', function(){
        $(this).addClass("selected-section");
        $(this).siblings().removeClass("selected-section");
        showSections();
    });
    $(window).scroll(function(){
        showSections();
    });
});
