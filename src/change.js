export const change = (pos,num) => {
    const cur = document.getElementById(pos+num);
    
    console.log(cur);
    changecolor(cur);
    const timer = changeposition(num,cur); 
    setTimeout(() => {
        changecolor(cur)
    }, timer*1000);
}
  
const changeposition = (num,cur) => {
    const lift = document.getElementById('lift');
    // console.log(lift);
    const curpos = parseInt(getComputedStyle(lift).bottom);
    const nextpos = 200*(num-1)+50;
    const sec = (Math.abs(curpos-nextpos))/200;
    const timer= (1*sec).toString();
    
    console.log(curpos, nextpos, sec, timer);
    lift.style.bottom = nextpos+"px";
    lift.style.transition = 'bottom '+timer+'s ease-in-out';
    
    return timer;
}

const changecolor = (cur) => {
    
    cur.style.color = ( getComputedStyle(cur).color == "rgb(128, 128, 128)" ) ? "rgb(0, 0, 255)" : "rgb(128, 128, 128)";;
}



