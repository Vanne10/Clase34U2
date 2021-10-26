<?php
printf("Abriendo archivo");
$archivo_url=fopen("el_quijote.txt", "r");

$texto="";

while ($frgmento = fgets($archivo_url)){
    $texto .=$frgmento;
}

printf($texto);
printf("<br>Haciendo otra cosa");
?>
