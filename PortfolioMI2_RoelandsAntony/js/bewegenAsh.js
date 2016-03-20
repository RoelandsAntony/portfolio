$(document).ready(function(){
    beweegAsh();
})

function beweegAsh()
{
    $(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('#ash').animate({
            left: '-5px'
        }); //left arrow key
        break;
    case 38:
       $('#ash').animate({
            top: '-5px'
        }); //up arrow key
        break;
    case 39:
        $('#ash').animate({
            left: '+5px'
        }); //right arrow key
        break;
    case 40:
        $('#ash').animate({
            top: '+5px'
        }); //bottom arrow key
        break;
    }
})
}