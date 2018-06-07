
var canvas = document.getElementById("renderCanvas");
        
//left over from canvas.style code immediately below
//add more detailed resolution with engine line.
//var engine = new BABYLON.Engine(canvas, true);

//use commented out lines to add more detail to visual. not sure how much more rendering power this takes though.
//canvas.style.width = "1000px";
//canvas.style.height = "1000px";
engine = new BABYLON.Engine(canvas, true);
//canvas.style.width = '100%';
//canvas.style.height = '100%';
//var ColorHolder = 0;
var createScene = function () {
    
    var ColorHolder = 0;
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0, .2);
    //scene.fogEnabled = true; didn't work may be old
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    scene.enablePhysics();

    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3(0,0,0), scene);
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 5, 0), scene);
     
    var gizmo = BABYLON.Mesh.CreateBox("gizmotron", 5, scene);
    gizmo.visibility = 0;
    
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    //myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
    //myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    //myMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.2, 1);
    //myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
    myMaterial.diffuseTexture = new BABYLON.Texture("babylondist/images/bricks.jpg", scene);
    myMaterial.emissiveTexture = new BABYLON.Texture("babylondist/images/bricks.jpg", scene);
    myMaterial.alpha = 0.7;
    var myMaterial2 = new BABYLON.StandardMaterial("myMaterial", scene);
    //myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
    //myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    //myMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.2, 1);
    //myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
    myMaterial2.diffuseTexture = new BABYLON.Texture("babylondist/images/lightningcircle.jpg", scene);
    myMaterial2.emissiveTexture = new BABYLON.Texture("babylondist/images/lightning.jpg", scene);
    myMaterial2.alpha = 0.7;
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 10, scene);
    
    // sphere bottomright
    sphere.position.y = 10;
    sphere.position.x = 10;
    sphere.position.z = 8;
    sphere.material = myMaterial2;
    sphere.checkCollisions = true;
    //ball.physicsImposter = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0.08, restitution: 0.9 }, scene);
    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: 0.9}, scene);
    sphere.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,1,0)); 
    //using quanternian instead of Vector3
//            sphere.physicsImpostor.setAngularVelocity(new BABYLON.Quaternian(10, 0, 10, 0));
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 16, 10, scene);
    // sphere2 upperleft
    sphere2.position.y = 10;
    sphere2.position.x = -10;
    sphere2.position.z = -8
    sphere2.material = myMaterial2;
    sphere2.checkCollisions = true;
    //ball.physicsImposter = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0.08, restitution: 0.9 }, scene);
    sphere2.physicsImpostor = new BABYLON.PhysicsImpostor(sphere2, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: 0.9}, scene);
    sphere2.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,-1,0)); 
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere3 = BABYLON.Mesh.CreateSphere("sphere3", 16, 10, scene);
    // sphere3 upperright
    sphere3.position.y = 10;
    sphere3.position.z = 10;
    sphere3.position.x = -8;
    sphere3.material = myMaterial2;
    sphere3.checkCollisions = true;
    //ball.physicsImposter = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0.08, restitution: 0.9 }, scene);
    sphere3.physicsImpostor = new BABYLON.PhysicsImpostor(sphere3, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: 0.9}, scene);
    sphere3.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,1,0)); 
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere4 = BABYLON.Mesh.CreateSphere("sphere4", 16, 10, scene);
    // sphere4 bottomleft
    sphere4.position.y = 10;
    sphere4.position.z = -10;
    sphere4.position.x = 8;
    sphere4.material = myMaterial2;
    sphere4.checkCollisions = true;
    //ball.physicsImposter = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0.08, restitution: 0.9 }, scene);
    sphere4.physicsImpostor = new BABYLON.PhysicsImpostor(sphere4, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: 0.9}, scene);
    sphere4.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,-1,0)); 

    //used now instead of onPointerDown/up/move which may or may not still work.
    //still need to understand how to fully use pickinfo and what could go in null values
    //first null is something about predicate function second null is fastcheck boolean
    scene.onPointerObservable.add(function (evt) {
    if (evt.type === BABYLON.PointerEventTypes.POINTERDOWN) {
        var pickInfo = scene.pick(scene.pointerX,scene.pointerY,null,null,camera);
        console.log('picked Mesh', pickInfo);
        colorfoo();
        }
    });
//create some ground with a heightmap
var ground = CreateGround(scene);

function CreateGround(scene) {
var ground = new BABYLON.Mesh.CreateGroundFromHeightMap("ground", "babylondist/images/hmapsquare.png", 1000, 1000, 20, 0, 200, scene, false, OnGroundCreated);
console.log(ground);

    function OnGroundCreated() {
        var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
        groundMaterial.diffuseTexture = new BABYLON.Texture("babylondist/images/checkers.jpg", scene);
        ground.material = groundMaterial;
        ground.checkCollisions = true;
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground,
    BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0 }, scene);
        console.log(ground);
        }
        return ground;
 }
    //handle spheres material changes
function colorfoo(){
    
        if (ColorHolder > 6)
        {
            ColorHolder = 0;
        }
        if (ColorHolder === 0){
            sphere.material = myMaterial;
            sphere2.material = myMaterial2;
            sphere3.material = myMaterial2;
            sphere4.material = myMaterial2;
        }
        if (ColorHolder === 1){
            sphere.material = myMaterial2;
            sphere2.material = myMaterial;
            sphere3.material = myMaterial2;
            sphere4.material = myMaterial2;
        }            
        if (ColorHolder === 2){
            sphere.material = myMaterial2;
            sphere2.material = myMaterial2;
            sphere3.material = myMaterial;
            sphere4.material = myMaterial2;
        }            
        if (ColorHolder === 3){
            sphere.material = myMaterial2;
            sphere2.material = myMaterial2;
            sphere3.material = myMaterial2;
            sphere4.material = myMaterial;
        }
        if (ColorHolder === 4){
            sphere.material = myMaterial2;
            sphere2.material = myMaterial2;
            sphere3.material = myMaterial2;
            sphere4.material = myMaterial2;
        }
        if (ColorHolder === 5){
            sphere.material = myMaterial;
            sphere2.material = myMaterial;
            sphere3.material = myMaterial;
            sphere4.material = myMaterial;   
        }
        if (ColorHolder === 6){
            sphere.material = myMaterial2;
            sphere2.material = myMaterial2;
            sphere3.material = myMaterial2;
            sphere4.material = myMaterial2;   
        }
        console.log(ColorHolder);            
        ColorHolder = ColorHolder + 1;
    };//end colorfoo
return scene;
}//end createScene()

var scene = createScene();
engine.runRenderLoop(function () {
    if (scene) {
        scene.render();
    }
});
// Resize
window.addEventListener("resize", function () {
    engine.resize();
});