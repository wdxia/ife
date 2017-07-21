/**
 * Created by AnTutu on 2017/6/16.
 */

//轮播图

    //上边栏关闭
    function closePic() {
        var oGlz = document.getElementById("glz");
        var aGlz = document.getElementsByClassName("picClose")[0];
        aGlz.style.display = 'none';
        oGlz.style.display = 'none';
    }
//左边
    var timer;
    var oShow;
    function showPic() {
        oShow=document.getElementsByClassName('list_cont')[0];
        oShow.style.display="block";

    }
    function  hidePic() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            oShow.style.display='none'
        },1000);
    }
    function showFlag(){
        clearTimeout(timer);
    }
    function  hideFlag() {
        oShow.style.display='none'
    }
    var oul =document.getElementsByClassName('ul11')[0];
    var oli =oul.getElementsByTagName('li');
    var olen =oli.length;
    var aul =document.getElementById('dots_ul');
    var ali =aul.getElementsByTagName('li');
    var index = 0;
    clearInterval(timer);
    timer =setInterval(run,2000);

    function run() {

        index++;
        if (index>=olen) {
            index=0
        }
        changeOption(index);
        ali[index].style.backgroundColor='#ffffff';
    }
    function changeOption(currindex){
        if(currindex>=1){
            oli[currindex-1].style.display = 'none';
            ali[currindex-1].style.backgroundColor='#383838';
        }
        else {
            oli[6].style.display ='none';
            ali[6].style.backgroundColor='#383838';

        }
        oli[currindex].style.display = 'block';
    }
    function stopPic() {
        clearInterval(timer);
    }
    function startStop() {
        timer = setInterval(run,2000)
    }




