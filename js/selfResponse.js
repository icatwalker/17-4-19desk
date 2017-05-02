/**
 * Created by Administrator on 2017/4/28.
 */
(function selSuit(){
    var html=document.getElementsByTagName("html")[0];
    var cw=document.documentElement.clientWidth;
    var ch=document.documentElement.clientHeight;
    //设置html的 fontsize
    html.style.fontSize=parseFloat(cw/100)+"px";
    //设置左中右布局的高度
    window.onresize=selSuit;
    //console.log("font-size:"+html.style.fontSize);
//飞入左右选取
    var child_element=document.getElementById("workSpace").children;
    var child_count=document.getElementById("workSpace").children.length;
    //console.log(child_count);
    document.getElementById("workSpace").style.height=ch+"px";
    for(var i=0;i<child_count;i++){
        //console.log(child_element[i]);
        child_element[i].style.height=ch+"px";
    }
})();