var demo = (function() {
    "use strict";
    
    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box = [],
        childBox,
        ground,
        controls=null,
        counter=0,
        counterUp=true,
        turner=0,
        turnerUp=true,
        objects = [];

    function initScene() {
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        scene.add(light);
                      
        camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set( 0, 0, 0 );

        scene.add(camera);  

        function d(num) {
            return Math.floor((Math.random() * num)-Math.floor(num/2));
        }

        for(var i = 0; i < 30; i++) {
            box[i] = new THREE.Mesh(
                new THREE.CubeGeometry(5,5,5),
                new THREE.MeshBasicMaterial({color:0xFF0000, wireframe:true}));
            box[i].position.set(d(80), d(80), d(80)-200);
            //box[i].rotation.x = d(Math.PI);
            //box[i].rotation.y = d(Math.PI);
            //box[i].rotation.z = d(Math.PI);
            scene.add(box[i]);
            objects[i] = box[i];
        }
/*
        box = new THREE.Mesh(
          new THREE.CubeGeometry(20, 20, 20),
          new THREE.MeshBasicMaterial({
            color: 0xFF0000,
            wireframe: true,
            vertexColors: THREE.VertexColors,
            transparent: true,
            overdraw: true}));
        scene.add(box);
        

        childBox = new THREE.Mesh(
            new THREE.CubeGeometry(20, 20, 20),
            new THREE.MeshBasicMaterial({
                color: 0x00FF00,
                wireframe: true,
                overdraw: true}));
        box.add(childBox);
        childBox.position.x = 20;
        

      var loader = new THREE.JSONLoader(), mesh;
      loader.load("gooseFull.js", function(geometry) {
          var gooseMaterial = new THREE.MeshLambertMaterial({
              map: THREE.ImageUtils.loadTexture("goose.jpg")
           });
           mesh = new THREE.Mesh(geometry, gooseMaterial);
           mesh.position.set(0,0,0);
           mesh.scale.set(50,50,50);
           scene.add(mesh);
        });
*/
    function onDocumentMouseDown(event) {
        event.preventDefault();
        var projector = new THREE.Projector();
        var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        var mouseY = -(event.clientY / window.innerHeight) * 2 + 1;      
        var vector = new THREE.Vector3(mouseX, mouseY, 1.0);
        projector.unprojectVector(vector, camera);
        var raycaster = new THREE.Raycaster(
            camera.position,
            vector.sub(camera.position).normalize());
        var intersects = raycaster.intersectObjects(objects);

       
        //console.log(intersects);
        if(intersects.length > 0) {
            intersects[0].object.material.color.setHex(Math.random() * 0xffffff);

            console.log("clientX: "+ event.clientX, " clientY: "+event.clientY);
            console.log("mouseX: " + mouseX, " mouseY: "+mouseY);
            console.log("pointX: " + intersects[0].point.x, " pointY: " + intersects[0].point.y, " pointZ: " + intersects[0].point.z);
            console.log("cameraX: " + camera.position.x, " cameraY: " + camera.position.y, " cameraZ: " + camera.position.z);
        }
    }
        document.addEventListener("mousedown", onDocumentMouseDown, false);
        requestAnimationFrame(render);
    };

    function render() {   /*
        if(counterUp && counter >= 2048) {
            counterUp = false;
        } else if(!counterUp && counter <= 0) {
            counterUp = true;
        }
        if(turnerUp && turner >= 1440) {
            turnerUp = false;
        } else if(!turnerUp && turner <= 0) {
            turnerUp = true;
        }
        if(counterUp) counter++;
        else counter--;
        if(turnerUp) turner++;
        else turner--;
        box.rotation.y = (turner % 360) * (Math.PI / 180);
        box.rotation.x = (turner % 720) * (Math.PI / 180);
        box.rotation.z = (turner % 1440) * (Math.PI / 180);
        box.scale.x = (counter / 512) % 4;
        box.scale.y = (counter / 1024) % 2;
        box.scale.z = (counter / 2048) % 8;
        childBox.scale.y = box.scale.x / 2; */
        renderer.render(scene, camera); 
        requestAnimationFrame(render);
    };

    
    window.onload = initScene;
})();

