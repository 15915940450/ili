<?php
$x=6; // 全局作用域
if($x===5){
  $y=99;
}else{
  $y=98;
}

echo $x;
echo $y;
?>
