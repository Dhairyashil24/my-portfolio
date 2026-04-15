const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle{

constructor(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.vx=(Math.random()-0.5)*1;
this.vy=(Math.random()-0.5)*1;
}

move(){

this.x+=this.vx;
this.y+=this.vy;

if(this.x<0||this.x>canvas.width) this.vx*=-1;
if(this.y<0||this.y>canvas.height) this.vy*=-1;

}

draw(){

ctx.beginPath();
ctx.arc(this.x,this.y,2,0,Math.PI*2);
ctx.fillStyle="#00eaff";
ctx.fill();

}

}

for(let i=0;i<120;i++){
particles.push(new Particle());
}

function connect(){

for(let a=0;a<particles.length;a++){

for(let b=a;b<particles.length;b++){

let dx=particles[a].x-particles[b].x;
let dy=particles[a].y-particles[b].y;

let dist=dx*dx+dy*dy;

if(dist<12000){

ctx.beginPath();
ctx.strokeStyle="rgba(0,234,255,0.2)";
ctx.moveTo(particles[a].x,particles[a].y);
ctx.lineTo(particles[b].x,particles[b].y);
ctx.stroke();

}

}

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.move();
p.draw();
});

connect();

requestAnimationFrame(animate);

}

animate();