asset=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye"];
random_number=random_no = Math.floor((Math.random()*asset.length)+1);
console.log(asset[random_number]);
sketch=asset[random_number];
document.getElementById('sketch_name').innerHTML="Sketch to be Drawn :"+sketch;

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
function preload()
{

}

function setup()
{
canvas=createCanvas(280,280);
canvas.center();
background("white");
}

function draw()
{

}