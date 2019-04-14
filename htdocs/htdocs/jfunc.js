var myOnLoadFunction = function () {
    $('#Peanut').mousemove(function (event) {  // le onmouse du html déclanchait des pb de loading donc on l'a passé en javascript"
        getCoords(event);
    });

    $("#but_upload").click(function(){

        var fd = new FormData();
        var inputElement = $('#inputFile')[0]; // $(" exemple ") means we are looking at a jQuery object array of every elements  named as  " exemple " (a class, an ID, or a created tag)
        var image = inputElement.files[0];
        fd.append('file',image); // 

    
        $.ajax({
            url:'upload.php',
            type:'post',
            data:fd,
            contentType: false,       // All these variables are AJAX settings, ajax understand their name.  
            processData: false,
            success:function(response){
                if(response != 0){
                    $("#img").attr("src",response);
                    $('.preview img').show();
                }else{
                    alert('File not uploaded');
                }
            }
        });
    });
}


$(myOnLoadFunction); // This executes when everything in the DOM is loaded 



function getCoords(event) {
        var x = event.clientX;
        var y = event.clientY;
        var JQPeanut = document.getElementById("Peanut");
        var ctx = JQPeanut.getContext("2d");
        ctx.font = "30px Arial";

        $.get('./process_name.php',  // ask the server to give the file 
            { cursorS: [x, y] },    // data transferée
            function (echorev) {

            },
            
        );

    }

setInterval(function () {
        $.get('./process_name.php',
            { cursorR: "" },
            function (data) {
                //data  = data.replace(/\n/g, "<br/>"); 
                $('#coordonees').html(data[0] + "  " + data[1]);
                $("#verysimplebox").css(
                    {
                        'top': data[1] + 'px',
                        'left': data[0] + 'px'
                    }
                );
            },

            'json'
        );

    }, 100);





