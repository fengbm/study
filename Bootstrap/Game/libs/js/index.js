function setHeaderFunc(){
    //获取相关元素
    var ele=document.querySelector(".navbar-default");
    console.log(ele)
    //监听窗口的滚动高度
    window.onscroll=function(){
        var t=document.body.scrollTop|| document.documentElement.scrollTop;
        console.log(t)
        var h=1000;
        var opacity=0;
        if(t>h){
            opacity=1;//当滚动高度大于xx
        }else{
            opacity=t/h*1;
        }
        ele.style.backgroundColor="rgba(231,231,231,"+opacity+")";
    }
}
setHeaderFunc()