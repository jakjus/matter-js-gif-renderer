## Matter.js GIF Renderer
![Badge](https://img.shields.io/github/actions/workflow/status/jakjus/matter-js-gif-renderer/test_and_publish.yaml)
![Example](example/myanimated.gif?raw=true)
### Introduction
Node.js package that creates a GIF output of Matter.js engine (instead of within browser). Based on Basic Renderer within Matter.js package for Node.js. Uses `gif-encoder` and `canvas` node packages.

### Installation
```
npm i matter-js-gif-renderer
```

### Usage
You can use various GIF Renderer specific options in `Render.create`.
- `quality` - image quality. `default: 10`
- `repeat` - 0 for repeat, -1 for no-repeat. `default: 0`
- `frameDelay` - frame delay in ms. `default: 1000/60`
- `outputFile` - output file name. `default: 'myanimated.gif'`

### Example
Most of the code is from the `matter-js` docs for brevity.
```
const Matter = require('matter-js')
const { GifRenderer } = require('matter-js-gif-renderer');

// module aliases
var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Render = GifRenderer, // changed line
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    engine: engine,
    options: {
        wireframes: false
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
```

Stop the runner (and renderer) with Ctrl+C or add `Runner.stop()` to your code.

## Contribute
Some things may not work from the initial Renderer (no full test suite). 

Any contributions are welcome.

## License
MIT
