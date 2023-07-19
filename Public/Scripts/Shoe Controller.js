//@input SceneObject[] shoeSceneObjects
//@input SceneObject hint

script.setShoe = function(index) {    
    script.shoeSceneObjects.forEach(function(so) {
        so.enabled = false;
    });
    
    script.shoeSceneObjects[index].enabled = true;
};


var shoeComponent;
var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(function() {
    for (var i=0; i < script.shoeSceneObjects.length; i++) {
        if (script.shoeSceneObjects[i].enabled) {
            shoeComponent = script.shoeSceneObjects[i].getFirstComponent("ScriptComponent");
        }
    }
    
    if (shoeComponent) {
        shoeComponent.feetFoundEvent.add(function() {
            script.hint.enabled = false;
        });

        updateEvent.enabled = false;
    }
});
