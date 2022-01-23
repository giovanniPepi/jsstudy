const btn1 = document.querySelector('button');
const btn2 = document.querySelectorAll('button')[1];
const btn3 = document.querySelectorAll('button')[2];
const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');
const WDT = document.documentElement.clientWidth;
const HGT = document.documentElement.clientHeight;

canv.width = WDT;
canv.height = HGT;

rnd = (numb) => Math.floor(Math.random()*numb);

drawBig = () => {
    ctx.clearRect(0,0,WDT, HGT);
    for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,150,0,0.5)';
    ctx.arc(rnd(WDT), rnd(HGT), rnd(100), 0, 2 * Math.PI);
    ctx.fill();
    }
}

drawSmall = () => {
    ctx.clearRect(0,0,WDT, HGT);
    for (let i = 0; i < 10000; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,150,0,0.5)';
    ctx.arc(rnd(WDT), rnd(HGT), rnd(10), 0, 2 * Math.PI);
    ctx.fill();
    }
}

drawInfect = () => {
    ctx.clearRect(0,0,WDT, HGT);
    for (let i = 0; i < 10000; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,150,0,0.5)';
    ctx.arc(rnd(WDT), rnd(HGT), rnd(10), 0, 2 * Math.PI);
    ctx.fill();
    }
    for (let i = 0; i < 1000; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(rnd(WDT), rnd(HGT), rnd(10), 0, 2 * Math.PI);
    ctx.fill();
    }
}

btn1.addEventListener('click', drawBig);
btn2.addEventListener('click', drawSmall);
btn3.addEventListener('click', drawInfect);