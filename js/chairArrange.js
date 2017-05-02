$(function() {
    //$("#workSpace").draggable();
    //$("#people").draggable();
    var chairAreaWidth=parseFloat(document.getElementById("chairsArea").offsetWidth);
    var img_chair_width=parseFloat(document.getElementById("mother").offsetWidth);
    console.log(chairAreaWidth);
    flag=0;
    //console.log($("#people .people")[1]);
    //for(var i=0;i<=$("#people .people").length;i++){
    //    $("#people .people")[i].css({"top":100*i+"px"});

    //}
    $( "#mother" ).draggable({
        start: function() {
            console.log(1);
            $(this).css({"position":"absolute"});
        },
        drag: function() {

        },
        stop: function() {
            //var elem=`<div   class="chair img" id=${"d"+flag++}  ><span>${flag}号</span></div>`;
            var elem="<div class='chair img iconfont icon-zuowei' id="+"d"+flag++ +"><input type='text' value="+'d'+flag+"></div>";
            var id1=flag;
            id1--;
            console.log("id："+id1);
            //console.log("mother-right:"+mother.style.right);
            $("#chairsArea").append(elem);
            //200为起始位置的200px,300为图片宽度
            var mother_left=parseFloat(mother.style.left);
            console.log(chairAreaWidth);
            console.log(mother.style.left);
            $("#d"+id1).css({"left":chairAreaWidth+mother_left+"px","top":mother.style.top}).draggable({
                drag:function(){
                    CHAR1=$(this);
                    $("#trash").droppable({
                        drop: function (event, ui) {
                            CHAR1.remove();
                            //当降落时清空原来座位上的人名
                            //event.target.remove();
                        }
                    });
                    $("rightArea").droppable({
                        drop: function (event, ui) {
                            //当降落时清空原来座位上的人名
                            //event.target.remove();
                        }
                    });
                }
            });
            mother.style.left=0;
            mother.style.top=0;

        }
    });

    $(".people").draggable({//当拖动people时候 作为可以降落
        start:function(){
            //刚拖拽的时候将chair的data-guid属性清空
            peopleName = $(this).html();
            pElement = $(this);
            pElement.css({"position":"absolute","zIndex":12});
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
                        .appendTo("#people");
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


    //双击击号牌修改


});
//事件冒泡删除当前元素,chairarea做事件代理
//当chair有people时候不允许删除 当 没有poeple时候才允许删除。
$("#chairsArea").dblclick(function(e){
    //当chair中只有一个元素input时候才允许删除
    if(e.target.className.indexOf("chair")!=-1&&e.target.childNodes.length==1){
        e.target.remove();
    }
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
            "chairName":$("#chairsArea>.chair>input")[i].value
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



