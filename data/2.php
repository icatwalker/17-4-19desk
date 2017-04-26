<?php
    header("Content-Type:application/json;charset=UTF-8");
    $output=[];
    $output[]=["id"=>"d0","top"=>"5px","left"=>"247px","chairName"=>"总经理"];
	$output[]=["id"=>"d1","top"=>"2px","left"=>"460px","chairName"=>"副总经理"];
	$output[]=["id"=>"d2","top"=>"6px","left"=>"667px","chairName"=>"理事"];
	$output[]=["id"=>"d3","top"=>"64px","left"=>"878px","chairName"=>"常务理事"];
	$output[]=["id"=>"d4","top"=>"270px","left"=>"974px","chairName"=>"打字员"];
	$output[]=["id"=>"d5","top"=>"514px","left"=>"853px","chairName"=>"HR"];
	$output[]=["id"=>"d6","top"=>"595px","left"=>"628px","chairName"=>"总经理助理"];
	$output[]=["id"=>"d7","top"=>"587px","left"=>"400px","chairName"=>"CEO"];
	$output[]=["id"=>"d8","top"=>"580px","left"=>"202px","chairName"=>"董事长"];
	$output[]=["id"=>"d9","top"=>"412px","left"=>"72px","chairName"=>"董事长秘书"];
	$output[]=["id"=>"d10","top"=>"175px","left"=>"73px","chairName"=>"HR"];
	echo json_encode($output);