$(document).ready(function(){
    goPika();
    pikaVerdwijn();
    console.log("klaar");
    vangPika();
})

function goPika() {
    $( "#pika" ).animate( { left : '5px' }, 25000);
}

function pikaVerdwijn()
{
    var coorX = $("#pika").position();
   
}

function vangPika()
{
    $('body').keyup(function(e){
   
   if(e.keyCode == 32){
       console.log("spatie");
   }
});
}