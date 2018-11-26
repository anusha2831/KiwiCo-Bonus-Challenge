$(document).ready(function() {
    $('.kiwico-item').on("click",function(){
        $('.item-desc,.kiwico-item').removeClass('selected');
        $(this).next('.item-desc').addClass('selected');
        $(this).addClass('selected');
    })

})