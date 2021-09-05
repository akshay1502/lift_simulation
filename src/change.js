// var call_lift = [];

// export const change = (pos,num) => {
    
//     // eslint-disable-next-line no-const-assign
//     if(!(call_lift.includes(pos+num))){
//         console.log(pos+num);
//         call_lift = [ ...call_lift, pos+num].sort().reverse();
//     }
//     console.log(call_lift.sort().reverse());
//     lift_running(call_lift);
// }

// const lift_running = (call_lift) => {
//     call_lift.forEach(floor => {
//         console.log(`${floor} is running`);
//         const cur = document.getElementById(floor);
//         changecolor(cur);
//         const timer = changeposition(+floor.slice(floor.length-1,)); 
//         setTimeout(() => {
//             changecolor(cur)
//         }, timer*1000);
//     })
// }
  
// const changeposition = (num) => {
//     const lift = document.getElementById('lift1');
//     // console.log(lift);
//     const curpos = parseInt(getComputedStyle(lift).bottom);
//     const nextpos = 200*(num-1)+50;
//     const sec = (Math.abs(curpos-nextpos))/200;
//     const timer= (1*sec).toString();
    
//     console.log(curpos, nextpos, sec, timer);
//     lift.style.bottom = nextpos+"px";
//     lift.style.transition = 'bottom '+timer+'s ease-in-out';
    
//     return timer;
// }

// const changecolor = (cur) => {
    
//     cur.style.color = ( getComputedStyle(cur).color === "rgb(128, 128, 128)" ) ? "rgb(0, 0, 255)" : "rgb(128, 128, 128)";;
// }

import waitForElementTransition from 'wait-for-element-transition';

const liftState = {
    destiny: 0,
    current: 0,
    state: 0
}

export const goUp = async (floor) => {
    let { destiny, current, state } = liftState;
    destiny = floor;
    state = destiny < current ? 1 : 2;
    const lift = document.getElementById('lift1');
    while ( current !== destiny) {
        const liftBottom = parseInt(getComputedStyle(lift).bottom);
        lift.style.bottom = `${liftBottom + 120 }px`;
        lift.style.transition = `bottom 6s linear`;
        waitForElementTransition(lift).then(() => console.log('transition finishes'))
        current+= 1;
        console.log(destiny, current);
    }
    // eslint-disable-next-line no-unused-vars
    state = 0;
}

// const liftGoingUp = (lift) => {
//     console.log('inside of liftGoingUp');
//     const liftBottom = parseInt(getComputedStyle(lift).bottom);
//     lift.style.bottom = `${liftBottom + 120 }px`;
//     lift.style.transition = `bottom 2s linear`;
//     lift.ontransitionend = () => { console.log('finished') }
// }



