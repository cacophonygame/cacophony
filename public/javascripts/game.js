
var gameLoop = {
    
    // Get the canvas element
    var canvas = document.getElementById("renderCanvas");

    // Generate the BABYLON 3D engine
    var engine = new BABYLON.Engine(canvas, true);

    /******* Add the create scene function ******/
    var createScene = function () {
        // GAME_CODE
        return scene;
    };
    /******* End of the create scene function ******/

    // Call the createScene function
    var scene = createScene();

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });

}