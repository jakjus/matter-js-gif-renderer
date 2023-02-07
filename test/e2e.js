const Matter = require('matter-js')
const { GifRenderer } = require('../src/index.js');
const fs = require('fs')
const assert = require('assert')

describe("e2e", async function() {
    after(function () {
        fs.unlinkSync(__dirname+'/test.gif')
        return
    })

    it('should generate a gif file', async function() {
        // module aliases
        var Engine = Matter.Engine,
            Runner = Matter.Runner,
            Render = GifRenderer,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite;

        // create an engine
        var engine = Engine.create();

        // create a renderer
        var render = Render.create({
            engine: engine,
            options: {
                wireframes: false,
                outputFile: __dirname+'/test.gif',
            }
        });

        // create two boxes and a ground
        var boxA = Bodies.rectangle(400, 200, 80, 80);
        var boxB = Bodies.rectangle(450, 50, 80, 80);
        var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // add all of the bodies to the world
        Composite.add(engine.world, [boxA, boxB, ground]);

        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);
        await new Promise(r => setTimeout(r, 500))
        Runner.stop(runner)
        const gifExists = fs.existsSync(__dirname+'/test.gif')
        assert.ok(gifExists)
    })
})
