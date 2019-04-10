<?php
if (isset($_GET['grizzly'])){
    $nom = $_GET['grizzly'];
    

    $superfile = fopen("./superfile.txt", 'w'); //ouvre un fichier

    if ($superfile){
        fwrite ($superfile,$nom."\n"); //"\n" = new line  
        echo "file written";
    }


}elseif(isset($_GET["brazil"])){  // There is always a post and get array in php file they are SUPERGLOBAL variable

    include ("superfile.txt");


}


?>

