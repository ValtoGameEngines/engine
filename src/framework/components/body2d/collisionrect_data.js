pc.extend(pc.fw, function () {
    var CollisionRectComponentData = function () {
        this.density = 1;
        this.friction = 0.5;
        this.restitution = 0;
        this.shape = pc.shape.Type.RECT;
    };
    CollisionRectComponentData = pc.inherits(CollisionRectComponentData, pc.fw.ComponentData);

    return {
        CollisionRectComponentData: CollisionRectComponentData
    };
}());
editor.link.addComponentType("collisionrect");

editor.link.expose({
    system: "collisionrect",
    variable: "density",
    displayName: "Density",
    description: "The density of the body, this determine the mass",
    type: "number",
    options: {
        min: 0,
        step: 0.01
    },
    defaultValue: 1
});

editor.link.expose({
    system: "collisionrect",
    variable: "friction",
    displayName: "Friction",
    description: "The friction when the body slides along another body",
    type: "number",
    options: {
        min: 0,
        step: 0.01
    },
    defaultValue: 0.5
});

editor.link.expose({
    system: "collisionrect",
    variable: "restitution",
    displayName: "Restitution",
    description: "The restitution determines the elasticity of collisions. 0 means an object doesn't bounce at all, a value of 1 will be a perfect reflection",
    type: "number",
    options: {
        min: 0,
        step: 0.01
    },
    defaultValue: 0
});

editor.link.expose({
    system: "collisionrect",
    variable: "shape",
    displayName: "Shape",
    description: "The shape of the body. Note, Circle shape radius is defined by the X scale, Y,Z are ignored.",
    type: "enumeration",
    options: {
        enumerations: [{
            name: 'Rect',
            value: pc.shape.Type.RECT
        }, {
            name: 'Circle',
            value: pc.shape.Type.CIRCLE
        }]
    },    
    defaultValue: pc.shape.Type.RECT
});
