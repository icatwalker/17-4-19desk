/**
 * Created by Administrator on 2017/4/27.
 */
//排序
function sortElement(elementID,childElement,rows,childHeight){//elementID(容器id),childElement(子元素CLASS),rows(需要多少列),childHeight（元素高）
    var containerWidth=parseFloat($("#"+elementID).css("width"));
    console.log(containerWidth);
    var childWidth=containerWidth/rows;
    console.log(childWidth);
    $("#"+elementID+"> ."+childElement).css({"width":childWidth+"px"});
    $("#"+elementID+"> ."+childElement).css({"height":childHeight+"px"});
    console.log($("#"+elementID+"> ."+childElement));
    var ele=$("#"+elementID+"> ."+childElement);
    $.each(ele,function(i){
        var row=parseInt(i/rows);
        var line=i%rows;
        ele[i].style.top=row*childHeight+"px";
        ele[i].style.left=line*childWidth+"px";
        ele[i].style.position="absolute";
    })
}


