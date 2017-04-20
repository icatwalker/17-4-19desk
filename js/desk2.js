$(function() {
    flag=0;
    $( "#mother" ).draggable({
        start: function() {
        },
        drag: function() {
        },
        stop: function() {
            var elem=`<div   class="src img" id=${"d"+flag++}  ><span>${flag}号</span></div>`;
            var id1=flag;
            id1--;
            console.log("id："+id1);
            console.log("mother-left:"+mother.style.left);
            $("#chairsArea").append(elem);
            //200为起始位置的200px,300为图片宽度
            mother.style.left=parseFloat(mother.style.left)-100;
            $("#d"+id1).css("left",mother.style.left).css("top",mother.style.top).draggable();
            mother.style.left= -300+"px";
            mother.style.top=0;
            $(".people").draggable({
                //当拖动people时候 作为可以降落
                start:function(){
                   peopleName= $(this).html();
                    element=$(this);
                    $( ".src" ).droppable({
                        drop: function( event, ui ) {
                            console.log($(this));
                            $( this )
                                .addClass( "ui-state-highlight" )
                                .attr("data-guid",peopleName)
                                .append(element)
                                .siblings(".people").remove();
                        }
                    });
                },
                stop:function(){
                    element.css({"position":"absolute","top":"50px","left":"50px"})
                }
            });
        }
    });

});
