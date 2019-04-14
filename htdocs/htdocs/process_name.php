<?php
if (isset($_GET["cursorS"])){
    $cursorS =  $_GET['cursorS'];
    $x = $cursorS[0];
    $y = $cursorS[1];
    $superfile = fopen("./superfile.txt", 'w'); //ouvre un fichier

    if ($superfile){
        $jsonCoords = json_encode($cursorS);
        fwrite ($superfile,$jsonCoords); //"\n" = new line  
        
    }


}elseif(isset($_GET["cursorR"])){  // There is always a post and get array in php file they are SUPERGLOBAL variable

    include ("superfile.txt");
   


}


?>

