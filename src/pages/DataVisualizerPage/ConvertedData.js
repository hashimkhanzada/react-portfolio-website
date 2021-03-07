import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";

const PARTICLE_BOUNCYNESS = 0.1;

export const ConvertedData = ({
  circleData,
  largestCircle,
  selectedColumn,
  maxRadius,
  showCircleData,
}) => {
  const [importedCircleData] = useState(circleData);
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();
  const [someStateValue, setSomeStateValue] = useState(false);
  const [firstBall, setFirstBall] = useState(false);

  useEffect(() => {
    importedCircleData.forEach((element) => {
      setSomeStateValue(!someStateValue);
    });
  }, [importedCircleData]);

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
        background: "white",
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(0, 0, 10, 10, {
      isStatic: true,
      render: {
        visible: false,
      },
    });

    World.add(engine.world, [
      floor,
      Bodies.rectangle(0, 0, 10, 10, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(0, 0, 10, 10, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(0, 0, 10, 10, {
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

      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

      const floor = scene.engine.world.bodies[0];
      const roof = scene.engine.world.bodies[1];
      const rightWall = scene.engine.world.bodies[2];
      const leftWall = scene.engine.world.bodies[3];

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height,
      });

      Matter.Body.setPosition(roof, {
        x: width / 2,
        y: height - height,
      });

      Matter.Body.setPosition(rightWall, {
        x: width,
        y: height / 2,
      });

      Matter.Body.setPosition(leftWall, {
        x: width - width,
        y: height / 2,
      });

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + 1 },
        { x: 0, y: height + 1 },
      ]);

      Matter.Body.setVertices(roof, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + 1 },
        { x: 0, y: height + 1 },
      ]);

      Matter.Body.setVertices(leftWall, [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: height },
        { x: 0, y: height },
      ]);

      Matter.Body.setVertices(rightWall, [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: height },
        { x: 0, y: height },
      ]);

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

      if (!firstBall) {
        let attractiveBody = Matter.Bodies.circle(centerX, centerY, 0, {
          isStatic: true,
          restitution: PARTICLE_BOUNCYNESS,
          plugin: {
            attractors: [
              (bodyA, bodyB) => {
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
        if (element[selectedColumn]) {
          let randomX = Math.floor(Math.random() * -width) + width;
          let randomY = Math.floor(Math.random() * -height) + height;

          let bodySize = Math.floor(
            (element[selectedColumn] / largestCircle) * maxRadius
          );

          let normalBody = Matter.Bodies.circle(randomX, randomY, bodySize, {
            label: element,
            restitution: PARTICLE_BOUNCYNESS,
          });

          Matter.World.add(scene.engine.world, normalBody);
        }
      });

      scene.mouse = Matter.Mouse.create(scene.canvas);
      let mouseInteractivity = Matter.MouseConstraint.create(scene.engine, {
        mouse: scene.mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });

      Matter.World.add(scene.engine.world, mouseInteractivity);

      Matter.Events.on(mouseInteractivity, "mousedown", (event) => {
        let mouseConstraint = event.source;
        let bodies = scene.engine.world.bodies;

        if (!mouseConstraint.bodyB) {
          for (let i = 0; i < bodies.length; i++) {
            let body = bodies[i];
            if (
              Matter.Bounds.contains(
                body.bounds,
                mouseConstraint.mouse.position
              )
            ) {
              showCircleData(body?.label);
              break;
            }
          }
        }
      });
    }
  }, [someStateValue]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        ref={boxRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
