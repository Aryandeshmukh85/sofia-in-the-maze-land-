var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia
var Sofia=createSprite(50,20,18,18);
Sofia.shapeColor="red";

//creating the maze walls (wall1 - wall2)
  var wall1=createSprite(0,120,100,20);
wall1.shapeColor="blue";
  var wall2=createSprite(140,0,20,150);
wall2.shapeColor="blue";
var wall3=createSprite(80,200,20,100);
wall3.shapeColor="blue";
var wall4=createSprite(0,200,130,20);
wall4.shapeColor="blue";
var wall5=createSprite(170,180,170,20);
wall5.shapeColor="blue";
var wall6=createSprite(220,120,20,150);
wall6.shapeColor="blue";
var wall7=createSprite(400,220,200,20);
wall7.shapeColor="blue";
var wall8=createSprite(390,95,20,1300);
wall8.shapeColor="blue";
var wall9=createSprite(300,250,240,20);
wall9.shapeColor="blue";
var wall10=createSprite(0,60,150,20);
wall10.shapeColor="blue";
var wall11=createSprite(110,340,100,20);
wall11.shapeColor="blue";
var wall12=createSprite(250,100,50,20);
wall12.shapeColor="blue";
var wall13=createSprite(230,350,20,100);
wall13.shapeColor="blue";
var wall14=createSprite(320,0,140,20,200);
wall14.shapeColor="blue";
var wall15=createSprite(160,115,100,20);
wall15.shapeColor="blue";
var wall16=createSprite(40,280,100,20);
wall16.shapeColor="blue";
var wall17=createSprite(40,280,100,20);
wall17.shapeColor="blue";
var wall18=createSprite(320,40,20,60);
wall18.shapeColor="blue";
var wall19=createSprite(350,130,70,20);
wall19.shapeColor="blue";
var wall20=createSprite(0,350,20,100);
wall20.shapeColor="blue";
var wall21=createSprite(170,295,20,110);
wall21.shapeColor="blue";
var wall22=createSprite(300,310,20,100);
wall22.shapeColor="blue";

//create cup
var cup=createSprite(380,380,10,70);
cup.shapeColor="red";
  
function draw() {
 
  background("green");{
    
if (keyDown(DOWN_ARROW)) {
  Sofia.y=Sofia.y+2;
}
  if (keyDown(UP_ARROW)) {
   Sofia.y=Sofia.y-2; 
  }
 if (keyDown(RIGHT_ARROW)) {
   Sofia.x=Sofia.x+2; 
  }
 if (keyDown(LEFT_ARROW)) {
   Sofia.x=Sofia.x-2; 
  }   
  }  
 {
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

if (Sofia.isTouching(cup)){
  fill("red");
  stroke("black");
  textSize(30);
  text("You Win",100,160);
}
if (Sofia.isTouching(wall1) || Sofia.isTouching(wall2)|| Sofia.isTouching(wall3)|| Sofia.isTouching(wall4)|| Sofia.isTouching(wall5)|| Sofia.isTouching(wall6)|| Sofia.isTouching(wall7)
  || Sofia.isTouching(wall8)|| Sofia.isTouching(wall9)|| Sofia.isTouching(wall10)|| Sofia.isTouching(wall11)|| Sofia.isTouching(wall12)
  || Sofia.isTouching(wall13)|| Sofia.isTouching(wall14)|| Sofia.isTouching(wall15)|| Sofia.isTouching(wall16)|| Sofia.isTouching(wall17)|| Sofia.isTouching(wall18)|| Sofia.isTouching(wall19)|| Sofia.isTouching(wall20)|| Sofia.isTouching(wall21)
  || Sofia.isTouching(wall22)) {
    Sofia.x = 20;
    Sofia.y = 25;
     
  }

  drawSprites();
 createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);

}








































 


















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
