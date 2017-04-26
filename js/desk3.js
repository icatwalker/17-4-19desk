/**
 * Created by Administrator on 2017/4/25.
 */
$(function() {
    $.ajax({
        url: "data/2.php",
        type: "get",
        datatype: "json",
        success: function (data) {
            console.log("数据传输成功");
            console.log(data[1].id);
            var html='';
            $.each(data,function(i){
                console.log(data[i].id+"-"+data[i].top+"-"+data[i].left+"-"+data[i].chairName);
                html+="<div class='chair img' id="+data[i].id+" style=positon:absolute;left:"+data[i].left+";top:"+data[i].top+"><input type='text'  disabled value="+data[i].chairName+"></div>";
            });
            $("#chairsArea").append(html);
        }
    });

    $(".people").draggable({//当拖动people时候 作为可以降落
        start:function(){
            //刚拖拽的时候将chair的data-guid属性清空
            peopleName = $(this).html();
            pElement = $(this);
            pElement.css({"position":"absolute"});
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
                        .children(".people")
                        .prev(".people")
                        .appendTo("#people").css({"position":"static"});
                    //.css({"position":"absolute"});
                    //$("#people .people").draggable();
                    //.css({"position":"absolute","top":100,"left":150});
                    //.css({"position":"absolute","top":400+NUM++*100,"left":0});
                }
            });
            $("#people").droppable({
                drop: function (event, ui) {
                    pElement
                        //当降落时清空原来座位上的人名
                        .appendTo("#people").css({"position":"static"});
                }

            });
        },
        stop:function(){
            //NUM=1;
            if(pElement.parent().attr("class").indexOf("chair")!=-1){
                console.log("进去chair");
                pElement.css({"position":"absolute","top":"50px","left":"50px"});
            }
            else
            if(pElement.parent().attr("id")=="people"){
                //pElement.css({"position":"absolute"});
                console.log("进入people");
                pElement.css({"position":"static"});
            }

            //for(var i=0;i<=$("#people .people").length;i++){
            //    $("#people .people")[i].css("top",50+i*200);
            //}

        }
    });

});