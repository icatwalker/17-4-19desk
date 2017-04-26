<?php
    header("Content-Type:application/json;charset=UTF-8");
    $output=[];
    $output[]=["userid"=>"d0","telephoneNum"=>"18612562177","partment"=>"技术","userName"=>"张大人"];
	$output[]=["userid"=>"d1","telephoneNum"=>"18612562174","partment"=>"销售","userName"=>"小明"];
	$output[]=["userid"=>"d2","telephoneNum"=>"18612562174","partment"=>"研发","userName"=>"小李"];
	$output[]=["userid"=>"d3","telephoneNum"=>"18612562165","partment"=>"会计","userName"=>"小张"];
	$output[]=["userid"=>"d4","telephoneNum"=>"18612562143","partment"=>"HR","userName"=>"小刘"];
	$output[]=["userid"=>"d5","telephoneNum"=>"18612562198","partment"=>"技术","userName"=>"虎子"];
	$output[]=["userid"=>"d6","telephoneNum"=>"18612562145","partment"=>"销售","userName"=>"计息"];
	$output[]=["userid"=>"d7","telephoneNum"=>"18612562166","partment"=>"研发","userName"=>"几丝"];
	$output[]=["userid"=>"d8","telephoneNum"=>"18612562162","partment"=>"会计","userName"=>"达康"];
	$output[]=["userid"=>"d9","telephoneNum"=>"18612562139","partment"=>"HR","userName"=>"严台"];
	$output[]=["userid"=>"d10","telephoneNum"=>"18612562145","partment"=>"办公室","userName"=>"名楼"];
	echo json_encode($output);