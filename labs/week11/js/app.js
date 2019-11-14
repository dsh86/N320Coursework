var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, cube, cube2, cube3, blueMat;
var rotating = false;
var selectedMesh = null;

var scene = createScene();

function createScene() {

var scene = new BABYLON.Scene(engine);



    camera = new BABYLON.ArcRotateCamera("Camera", 
    Math.PI / 2, Math.PI / 4, 
    4, BABYLON.Vector3.Zero(), 

    scene);

    camera.attachControl(canvas, true);



    cube = BABYLON.MeshBuilder.CreateBox("box", {diameter: .7}, scene);

    cube2 = BABYLON.MeshBuilder.CreateBox("box", {diameter: .3}, scene);
    cube2.position.x = 1.1;
    

    cube3 = BABYLON.MeshBuilder.CreateBox("box", {diameter: .3}, scene);
    cube3.position.x = -1.1;
    



    light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);

    blueMat = new BABYLON.StandardMaterial("blue", scene);
    blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 1);
    blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);

    whiteMat = new BABYLON.StandardMaterial("white", scene);
    whiteMat.diffuseColor = new BABYLON.Color3(1, 1, 1);
    whiteMat.specularColor = new BABYLON.Color3(1, 1, 1);

    greenMat = new BABYLON.StandardMaterial("green", scene);
    greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    greenMat.specularColor = new BABYLON.Color3(0, 1, 0);

    return scene;

}



window.addEventListener("keydown", function(event) {

    if(rotating == false){

        if(event.keyCode == 87) {

            if(selectedMesh){

                rotating = true;

                TweenMax.to(selectedMesh.rotation, 1.2, { x: "-=1.5708", onComplete: checkOver });

            }

        }

        if(event.keyCode == 83) {
          if(selectedMesh){
               rotating = true;
                  TweenMax.to(selectedMesh.rotation, 1.2, { x: "+=1.5708", onComplete: checkOver });

            }

        }

    }

})



function checkOver(){
  rotating = false;

    if(cube.rotation.x == cube2.rotation.x && cube2.rotation.x == cube3.rotation.x){

        cube.material = greenMat;
        cube2.material = greenMat;
        cube3.material = greenMat;
        
        console.log("Hello")

    }

    console.log(cube.rotation.x)

    console.log(selectedMesh.rotation.x);

}



window.addEventListener("click", function () {

    cube.material = whiteMat;
    cube2.material = whiteMat;
    cube3.material = whiteMat;

    var pickResult = scene.pick(scene.pointerX, scene.pointerY);

     pickResult.pickedMesh.material = blueMat;
     selectedMesh = pickResult.pickedMesh;

})



engine.runRenderLoop(function () {

  scene.render();

})