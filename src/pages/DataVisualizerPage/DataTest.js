// MatterStepThree.js
import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";

const STATIC_DENSITY = 55;
const PARTICLE_SIZE = 26;

const PARTICLE_BOUNCYNESS = 0.8;

export const DataTest = ({ circleData, largestCircle }) => {
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
  const [renderr, setRender] = useState();
  const [enginee, setEngine] = useState();
  const [highlighted, setHighlighted] = useState(false);

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  const handleClick = () => {
    importedCircleData.forEach((element) => {
      setSomeStateValue(!someStateValue);
    });
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let engine = Engine.create({});
    setEngine(engine);
    Matter.use(MatterAttractors);
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: "transparent",
        wireframes: false,
      },
    });
    setRender(render);
    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: "red",
      },
    });

    World.add(engine.world, [
      floor,
      Bodies.rectangle(960, 0, window.innerWidth, 10, {
        isStatic: true,
        render: {
          visible: true,
        },
      }),
      Bodies.rectangle(window.innerWidth, 300, 10, window.innerHeight, {
        isStatic: true,
        render: {
          visible: true,
        },
      }),
      Bodies.rectangle(0, 300, 10, window.innerHeight, {
        isStatic: true,
        render: {
          visible: true,
        },
      }),
    ]);
    Engine.run(engine);
    Render.run(render);
    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;
      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;
      // Dynamically update floor
      const floor = scene.engine.world.bodies[0];

      scene.engine.world.gravity.scale = 0;

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      });
      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ]);
    }
  }, [scene, constraints]);

  useEffect(() => {
    // Add a new "ball" everytime `someStateValue` changes
    if (scene) {
      let { width, height } = constraints;
      let centerX = width / 2;
      let centerY = height / 2;

      if (!firstBall) {
        let attractiveBody = Matter.Bodies.circle(
          centerX,
          centerY,
          importedLargestCircle > 100
            ? Math.floor(Math.sqrt(importedLargestCircle * 2))
            : importedLargestCircle,
          {
            // isStatic: true,
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
          }
        );

        Matter.World.add(scene.engine.world, attractiveBody);

        setFirstBall(true);
      }
      importedCircleData.forEach((element) => {
        let randomX = Math.floor(Math.random() * -width) + width;
        let randomY = Math.floor(Math.random() * -height) + height;
        Matter.World.add(
          scene.engine.world,
          Matter.Bodies.circle(
            randomX,
            randomY,
            importedLargestCircle > 100
              ? Math.floor(Math.sqrt(element.Age * 2))
              : element.Age,
            {
              restitution: PARTICLE_BOUNCYNESS,
            }
          )
        );
      });
    }
  }, [someStateValue]);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid white",
        padding: "8px",
      }}
    >
      <div style={{ textAlign: "center" }}>Checkout</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          rowGap: "16px",
          marginBottom: "32px",
        }}
      >
        <div style={{ padding: "200px", backgroundColor: "gray" }}></div>
      </div>
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
        Display
      </button>

      <div
        ref={boxRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
