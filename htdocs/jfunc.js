$('#name').keyup(function () { 
    var mot = $('#name').val();
    
    $.get('./process_name.php',  // ask the server to give the file 
        { grizzly: mot },    // data transferée
        function (echorev) {  // 
            $('#name_feedback').html(echorev);
        })
});

setInterval(function () {
    $.get('./process_name.php',
        { brazil: '' },
        function (data) {
            //data  = data.replace(/\n/g, "<br/>"); 
            $('#name_feedback').html(data);



        }
    );

},100);





