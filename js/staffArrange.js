/**
 * Created by Administrator on 2017/4/25.
 */
$(function() {
    //更新座位
    $.ajax({
        url: "data/2.php",//座位php数据
        type: "get",
        datatype: "json",
        success: function (data) {
            var html='';
            $.each(data,function(i){
                //console.log(data[i].id+"-"+data[i].top+"-"+data[i].left+"-"+data[i].chairName);
                html+="<div class='chair img iconfont icon-zuowei' id="+data[i].id+" style=positon:absolute;left:"+data[i].left+";top:"+data[i].top+"><input type='text'  disabled value="+data[i].chairName+"></div>";
            });
            $("#chairsArea").append(html);
        }
    });
    $.ajax({
        url: "data/3.php",//人员php数据
        type: "get",
        datatype: "json",
        success: function (data) {
            var html='';
            $.each(data,function(i){
                //console.log(data[i].userid+"-"+data[i].telephoneNum+"-"+data[i].partment+"-"+data[i].userName);
                html+="<div class='people' data-userId="+data[i].userid+" data-tel="+data[i].telephoneNum+" data-part="+
                data[i].partment+" data-part="+data[i].userName +"><div><span>姓名:"+data[i].userName+"</span><span>部门:"
                +data[i].partment+ "</span><span>"+data[i].telephoneNum+"</span></div></div>";
            });
            $("#people").append(html);
            sortElement("people","people",5,100);
            $(".people").draggable({//当拖动people时候 作为可以降落
                drag:function(){
                    //刚拖拽的时候将chair的data-guid属性清空
                    peopleName = $(this).html();
                    pElement = $(this);
                    pElement.css({"position":"absolute","zIndex":12});
                    pElement.parent().css({"border":0});
                    //pElement.css({"position":"absolute","top":Ptop,"left":Pleft});
                    //当拖动people时候 找到父元素data-guid清空，避免Chair 名字重复
                    $(this).parent().attr("data-guid","");
                    $(".chair").droppable({
                        drop: function (event, ui) {
                            CHAIR = $(this);
                            $(this)
                                //当降落时清空原来座位上的人名
                                .attr("data-guid", "")
                                .addClass("ui-state-highlight")
                                .attr("data-guid", peopleName)
                                .append(pElement)
                                .css({"border":"1px solid #F9DD34"})
                                .children(".people")
                                .css({"position":"absolute","top":"0px","left":"0px"})
                                .prev(".people")
                                .appendTo("#people");
                                sortElement("people","people",5,100);
                        }
                    });
                    $("#people").droppable({
                        drop: function (event, ui) {
                                //当降落时清空原来座位上的人名
                            pElement
                                .appendTo("#people");
                            sortElement("people","people",5,100);
                        }

                    });
                }
            });

        }
    });
});
$("button.btn").on("click",function(){
    console.log("提交");
    console.log($("#chairsArea>.chair"));
    var listItem=$("#chairsArea>.chair");
    var inputValue=$("#chairsArea>.chair>input");
    var chairCount=listItem.length;

    var list=[];
    for(var i=0;i<chairCount;i++){
        list[i]={
            "id":       listItem[i].id,
            "top":listItem[i].style.top,
            "left":     listItem[i].style.left,
            "chairName":$("#chairsArea>.chair>input")[i].value,
            "userId":($("#chairsArea>.chair>.people")[i])?($("#chairsArea>.chair>.people")[i].getAttribute("data-userid")):""
        }
    }
    console.log(JSON.stringify(list));
    $.ajax({
        url:"data/1.php",
        type:"post",
        data:list,
        datatype:"text",
        success:function(data){
            console.log("数据传输成功");
            console.log(data);
        }
    });

});
