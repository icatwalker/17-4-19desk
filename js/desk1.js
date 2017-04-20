/**
 * Created by Administrator on 2017/4/20.
 */

//mother 拖拽 创建img 把mother的 位置给img ,为img再绑定拖拽事件。重置mother

mother.ondragstart=function(e){
    e.target.style.width=300+"px";
    offsetX= e.offsetX;
    offsetY= e.offsetY;
    console.log(e.target.id+'开始拖动');
    //记录刚一拖动时，鼠标在飞机上的偏移量
    console.log(offsetX+"-"+offsetY);
};
mother.ondrag=function(e){
    console.log(e.target.id+'拖动中');
    var x= e.pageX;
    var y= e.pageY;
    //console.log(x+'-'+y);
    //drag事件最后一刻，无法读取鼠标的坐标，pageX和pageY都变为0
    if(x==0 && y==0){
        return; //不处理拖动最后一刻X和Y都为0的情形
    }
    x-=offsetX;
    y-=offsetY+100;

    e.target.style.left=x+'px';
    e.target.style.top=y+'px';
    console.log(x+'-'+y);
};
flag=0;
//style="top:${mother.style.top};left:${mother.style.left}";
mother.ondragend=function(e){

    var elem=`<img src="img/chair.png"  class="src" id=${"d"+flag++}  />`;
    var id1=flag;
    id1--;
    console.log("id："+id1);
    console.log("mother-left:"+mother.style.left);
    $("#chairsArea").append(elem);
    //200为起始位置的200px,300为图片宽度
    mother.style.left=parseFloat(mother.style.left)-200-300+"px";
    $("#d"+id1).css("left",mother.style.left).css("top",mother.style.top);
    document.getElementById("d"+id1).ondragstart=function(e){
        //e.target.style.left=parseInt(e.target.style.left)-200+"px";
        offsetX= e.offsetX;
        offsetY= e.offsetY;
        console.log(e.target.id+'开始拖动');
        //记录刚一拖动时，鼠标在飞机上的偏移量
        console.log(offsetX+"-"+offsetY);
    };
    document.getElementById("d"+id1).ondrag=function(e){
        console.log(e.target.id+'拖动中');
        //e.target.style.left=parseInt(e.target.style.left)-200+"px";
        var x= e.pageX;
        var y= e.pageY;
        console.log(x+'-'+y);
        //drag事件最后一刻，无法读取鼠标的坐标，pageX和pageY都变为0
        if(x==0 && y==0){
            return; //不处理拖动最后一刻X和Y都为0的情形
        }
        x=x-offsetX-450;
        y-=offsetY+100;

        e.target.style.left=x+'px';
        e.target.style.top=y+'px';
    };
    document.getElementById("d"+id1).ondragend=function(e){
        console.log(e.target.id+'拖动结束');
    };
    mother.style.left= 200+"px";
    mother.style.top=0;

};
