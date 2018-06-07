$(document).ready(function () {

    //Modals for the recipes page
    $('#exampleModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    //Microgreens 101 Page
    $('#harvestWash').hide();
    $('#useThem').hide();

    //Show info for first slide
    $('#firstSlide').on('click', function() {
        $('#knowMicrogreens').show();
        $('#harvestWash').hide();
        $('#useThem').hide();
    });

    //Show info for second slide
    $('#secondSlide').on('click', function() {
        $('#knowMicrogreens').hide();
        $('#harvestWash').show();
        $('#useThem').hide();
    });

    //Show info for third slide
    $('#thirdSlide').on('click', function() {
        $('#knowMicrogreens').hide();
        $('#harvestWash').hide();
        $('#useThem').show();
    });
});