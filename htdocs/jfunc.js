var indexImg = 0;
var myOnLoadFunction = function () {
    $('#Peanut').mousemove(function (event) {  // le onmouse du html déclanchait des pb de loading donc on l'a passé en javascript"
        getCoords(event);
    });

    $("#but_upload").click(function(){

        
        var fd = new FormData();
        var inputElement = $('#inputFile')[0]; 
        
         // $(" exemple ") means we are looking at a jQuery object array of every elements  named as  " exemple " (a class, an ID, or a created tag)
        var image = inputElement.files[0];
        fd.append('file',image); // 

        

        // send image to upload.php
        $.ajax({
            
            url:'upload.php',
            type:'post',
            data:fd,
            contentType: false,       // All these variables are AJAX settings, ajax understand their name.  
            processData: false,
            success:function(response){
                if(response != 0){
                    indexImg=indexImg+1;
                  //  var  newImage = $('<img id="newImage '+indexImg+'">');
                   
                    var  newImage = $('<img id="newImage'+indexImg+'" class="uploadedImage" >');
                    newImage.attr('src', response);
                    newImage.attr('width', '200');
                    newImage.attr('height', '200');
                    var newDivImage = $('<div id="divNewImage'+indexImg+'"></div>');
                    $(".preview").append(newDivImage);
                    newDivImage.append(newImage);

                    
                                  
                    console.log(indexImg);
                   //$("#newImage").resizable();
                  
                   $( "#divNewImage"+indexImg ).draggable();
                   $( "#newImage"+indexImg ).resizable();
                   
                   
                   
             
            
                   // $(".previewImage").attr("src",response); //
                  //  $('.previewImage').show();  // this means "select every img tag inside preview class
                }else{
                    alert('File not uploaded');
                }
            }
        });


        //request image from upload.php
        


    });

}


$(myOnLoadFunction); // This executes when everything in the DOM is loaded 
//$.get('./upload.php',
 //   {
     //   url: "",
     //   imgX: "",
     //   imgY: "",
     //   imgWidth: "",
     //   imgHeight: "",
     //   uID: "",

  //  },
    
//)


function getCoords( nn,) {
        var x = event.clientX; // position de la souris
        var y = event.clientY;                                      // Envoi dans le serveur de x et y de la souris
        var JQPeanut = document.getElementById("Peanut");  
        
        $.get('./process_name.php',  // ask the server to give the file 
            { cursorS: [x, y] },    // data transferée
        
        );

    }

setInterval(function () {
        $.get('./process_name.php',
            { cursorR: "" },
            function (data) {
                //data  = data.replace(/\n/g, "<br/>");            // Reccuperation de x et y de la souris pour les reutiliser et les reinjecter dans des attributs HTML
                $('#coordonees').html(data[0] + "  " + data[1]);
                $("#verysimplebox").css(
                    {
                        'top': data[1] + 'px',
                        'left': data[0] + 'px'
                    }

                );

            var vert = data[0]/3;
                $('#coordonees').css(
                    {
                        'font-size': data[1]+'px',
                        'color':'rgb(23,'+vert+',230)',
                        'top': data[1] + 'px',
                        'left': data[0] + 'px'
                    }
                )
            },

            'json'
        );

    }, 100);





