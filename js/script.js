$(document).ready(function(){
    $("#mycarousel").carousel( { 
        interval: 2000,
    });
    // triggering modals
    $("#loginButon").click(function(){
        $('#loginModal').modal();
    });
    $("#reserveButton").click(function(){
        $('#tableReserve').modal();
    });
    // hiding modals on click
    $("#hideLoginModal").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#hideReserveModal").click(function(){
        $("#tableReserve").modal("hide");
    });
    

    $("#carouselButton").click(function(){
        if ($("#carousel-button-icon").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button-icon").removeClass('fa-pause');
            $("#carousel-button-icon").addClass('fa-play');
        }
        else if ($("#carousel-button-icon").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button-icon").removeClass('fa-play');
            $("#carousel-button-icon").addClass('fa-pause');                    
        }
    });
});