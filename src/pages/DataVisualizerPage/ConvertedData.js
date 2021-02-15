import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import { Scene } from "react-matter-js";

const STATIC_DENSITY = 55;
const PARTICLE_SIZE = 26;

const PARTICLE_BOUNCYNESS = 0.8;

export const ConvertedData = ({ circleData, largestCircle }) => {
  const [importedCircleData, setImportedCircleData] = useState(circleData);
  const [importedLargestCircle, setImportedLargestCircle] = useState(
    largestCircle
  );
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();
  const [someStateValue, setSomeStateValue] = useState(false);
  const [firstBall, setFirstBall] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  const handleClick = () => {
    importedCircleData.forEach((element) => {
      setSomeStateValue(!someStateValue);
    });
  };

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let engine = Engine.create({});

    Matter.use(MatterAttractors);

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight - 300,
        background: "white",
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - 300,
      window.innerWidth,
      20,
      {
        isStatic: true,
        render: {
          visible: false,
          fillStyle: "blue",
        },
      }
    );

    const ball = Bodies.circle(getRandomInt(20, 700), 0, 10, {
      restitution: 0.9,
      render: {
        fillStyle: "yellow",
      },
    });

    World.add(engine.world, [
      floor,
      Bodies.rectangle(960, 0, window.innerWidth, 10, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(window.innerWidth, 300, 10, window.innerHeight, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(0, 300, 10, window.innerHeight, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
    ]);
    Engine.run(engine);
    Render.run(render);
    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);
  }, []);

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;

      scene.engine.world.gravity.x = 0;
      scene.engine.world.gravity.y = 0;
      scene.engine.world.gravity.isPoint = true;
    }
  }, [scene, constraints]);

  useEffect(() => {
    if (scene) {
      let { width, height } = constraints;
      let centerX = width / 2;
      let centerY = height / 2;

      var mouse = Matter.Mouse.create(scene.canvas);

      if (!firstBall) {
        let attractiveBody = Matter.Bodies.circle(width / 2, centerY, 0, {
          isStatic: true,
          restitution: PARTICLE_BOUNCYNESS,
          // example of an attractor function that
          // returns a force vector that applies to bodyB
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        });

        Matter.World.add(scene.engine.world, attractiveBody);

        setFirstBall(true);
      }

      importedCircleData.forEach((element) => {
        let randomX = Math.floor(Math.random() * -width) + width;
        let randomY = Math.floor(Math.random() * -height) + height;

        let normalBody = Matter.Bodies.circle(
          randomX,
          randomY,
          importedLargestCircle > 100
            ? Math.floor(Math.sqrt(element.Age * 2))
            : element.Age,
          {
            label: element,
            restitution: PARTICLE_BOUNCYNESS,
          }
        );

        Matter.World.add(scene.engine.world, normalBody);
      });

      scene.mouse = Matter.Mouse.create(scene.canvas);
      var mouseInteractivity = Matter.MouseConstraint.create(scene.engine, {
        mouse: scene.mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });

      Matter.World.add(scene.engine.world, mouseInteractivity);

      // Create a On-Mouseup Event-Handler
      Matter.Events.on(mouseInteractivity, "mouseup", function (event) {
        var mouseConstraint = event.source;
        var bodies = scene.engine.world.bodies;

        // console.log(bodies);
        // console.log(mouseConstraint);

        if (!mouseConstraint.bodyB) {
          for (let i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            if (
              Matter.Bounds.contains(
                body.bounds,
                mouseConstraint.mouse.position
              )
            ) {
              // var bodyUrl = body.url;
              // console.log("Body.Url >> " + bodyUrl);
              // // Hyperlinking feature
              // if (bodyUrl != undefined) {
              //   window.open(bodyUrl, "_blank");
              //   console.log("Hyperlink was opened");
              // }
              setFirstName(body.label.Name);
              setAge(body.label.Age);
              console.log(body);
              break;
            }
          }
        }
      });
    }
  }, [someStateValue]);

  return (
    <>
      <button
        style={{
          cursor: "pointer",
          display: "block",
          textAlign: "center",
          marginBottom: "16px",
          width: "100%",
        }}
        onClick={() => handleClick()}
      >
        Click me - (refresh the page if something goes wrong, or if gravity
        doesn't work)
      </button>

      {firstName ? (
        <h4>
          {firstName} is {age} years old (not accurate, obviously...). Circle
          size is based on the persons age.
        </h4>
      ) : (
        <h4>Click a circle / drag it around</h4>
      )}

      <div
        ref={boxRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </>
  );
};
