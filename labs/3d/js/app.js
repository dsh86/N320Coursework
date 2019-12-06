var canvas = document.getElementById("renderCanvas");
var rgCost = document.getElementById("rgCost");
var infoBox = document.getElementById("infoBox");
var filterButtons = document.querySelectorAll(".filterNav");
var camera, scene, data, selectedPieces;
var selectedType = "all";



//setup start
fetch("data/furniture.json", { method: "get" })
    .then(response => response.json())
    .then(jsonData => {

    //json data
    data = jsonData;



    //all models
    data.furniture.forEach((piece, idx) => {
        var p = BABYLON.SceneLoader.ImportMesh(

        "",

        "./models/house/",

        piece.asset,
        scene,
        meshes => {

          var containerNode = new BABYLON.TransformNode("root");
            piece.asset = containerNode;
            piece.asset.dataId = idx;


         meshes.forEach(mesh => {
            mesh.parent = containerNode;

          });

          

        }

      );

    });

    //console.log(data);

  });

//engine setup 
var engine = new BABYLON.Engine(canvas, true);
scene = createScene();
engine.runRenderLoop(function() {
    scene.render();

});



function createScene() {
    var scene = new BABYLON.Scene(engine);



  //adding camera

    camera = new BABYLON.ArcRotateCamera(

    "c",

    Math.PI / 2,
    Math.PI / 4,

    4,

    BABYLON.Vector3.Zero(),
    scene

  );



  //adding light
    var light = new BABYLON.DirectionalLight(

    "l",

    new BABYLON.Vector3(0, -0.5, 1.0),
    scene

  );


//var bed = BABYLON.SceneLoader.Append("./models/house/", "bedSingle.obj", scene);



  return scene;

}





//application functions

function selectType(event) {
    selectedType = event.target.getAttribute("data-type");



  //reseting classes selected

  filterButtons.forEach(button => {
    button.classList.remove("selected");

  });

  //adding selected class
    event.target.classList.add("selected");

}

function showAvailable() {

  //slider cost value
    var amount = Number(rgCost.value);



  //filtering pieces
    selectedPieces = data.furniture.filter(piece => {

    if (selectedType == "all") {

      return piece.price < amount;

    } else {

    
    return piece.price < amount && piece.type == selectedType;

    }

  });

console.log(selectedPieces);

  //no show pieces
    data.furniture.forEach(piece => {
    TweenLite.to(piece.asset.position, 0.7, { y: 5, onComplete: showFiltered });

  });

}



function showFiltered() {
    selectedPieces.forEach((piece, idx) => {
    TweenLite.to(piece.asset.position, 0.7, { y: 0, x: idx });

  });

}



window.addEventListener("click", function() {

  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  var selectedObject = pickResult.pickedMesh;


  if (selectedObject) {

    //id and pulling object information
    var dataId = selectedObject.parent.dataId;
    var itemInfo = data.furniture[dataId];

    infoBox.innerHTML = `${itemInfo.style} ${itemInfo.type} : $${itemInfo.price}`;

  }

});