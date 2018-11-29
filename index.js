window.onload = function(){

    let div =document.querySelector('.div1');
    let div2 =document.querySelector('.div2');

    div.onmousedown = function(e){
        var e = e||event;
        let x = e.clientX - this.offsetLeft;
        let y = e.clientY - this.offsetTop;
        document.onmousemove = function(e){
            var e = e||event;
            this.style.left = e.clientX - x +'px';
            this.style.top = e.clientY - y+ 'px';
            collect(div,div2);
        }.bind(this)
        document.onmouseup =function(){
            this.onmousemove = this.onmouseup = null;
        }
        return false;
    }
    var creatTimer = null;
    var timerGo = null;
    creatTimer =setInterval(() => {
        creatG();
    }, 1000);
    timerGo = setInterval(() => {
        let alldiv =document.querySelectorAll('.topG');
        let alldiv2 = document.querySelectorAll('.bottomG');
        for(let i =0;i<alldiv.length;i++){
            if(alldiv[i].style.left == -10 +'%'){
                document.body.removeChild(alldiv[i]);
                document.body.removeChild(alldiv2[i]);

            }
            alldiv[i].style.left = alldiv[i].dd + '%';
            alldiv2[i].style.left = alldiv[i].dd +'%';
            alldiv[i].dd -=2 ; 
        }
 
    }, 60);
 

}
function collect(item1,item2){
    let left1 = item1.offsetLeft;
    let right1 = left1+item1.offsetWidth;
    let top1 =item1.offsetTop;
    let bottom1 = top1+item1.offsetHeight;
    let left2 = item2.offsetLeft;
    let right2 = item2.offsetWidth + left2;
    let top2 = item2.offsetTop;
    let bottom2 = item2.offsetHeight + top2;
   if(right1<left2||bottom1<top2||left1>right2||top1>bottom2){
    item2.style.background = 'green';
   }
   else{
       item2.style.background = 'red';
   }
}
function random(min,max){
    return parseInt(Math.random()*(max-min+1)+min);
}
function creatG(){
    let topG = document.createElement("div");
    let bottomG = document.createElement('div');
    bottomG.className = 'bottomG';
    topG.className ='topG';
    document.body.appendChild(topG);
    document.body.appendChild(bottomG);
    let h = random(100,200)
    topG.style.height = h + 'px';
    bottomG.style.height = window.innerHeight - 200 - h +'px';  
    bottomG.style.top = h+200+'px';
    topG.dd = 100;
    bottomG.dd = 100;

   

}