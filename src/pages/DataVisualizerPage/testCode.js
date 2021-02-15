import React, { useState, useEffect } from "react";
import { parse } from "papaparse";
import styled from "styled-components";
import { motion } from "framer-motion";

const DataViz = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [importedData, setImportedData] = useState([]);
  const [circleCoordinates, setCircleCoordinates] = useState([]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  // useEffect(() => {
  //   generateRandomXY();
  // }, [importedData]);

  const generateRandomXY = () => {
    // Lets make sure we don't get stuck in infinite loop
    let protection = 0;
    let circles = [];

    // Try to get to 500
    while (circles.length < importedData.length) {
      // Pick a random circle
      let circle = {
        x: getRandomInt(5, 200),
        y: getRandomInt(5, 200),
        r: getRandomInt(5, 20),
      };
      let overlapping = false;
      // Does it overlap any previous circles?
      for (let j = 0; j < circles.length; j++) {
        let other = circles[j];

        let a = circle.x - other.x;
        let b = circle.y - other.y;

        let d = Math.sqrt(a * a + b * b);
        if (d < circle.r + other.r) {
          overlapping = true;
        }
      }

      // If not keep it!
      if (!overlapping) {
        circles.push(circle);
      }

      // Are we stuck?
      protection++;
      if (protection > 110) {
        break;
      }
    }
    // Draw all the circles
    // for (var i = 0; i < circles.length; i++) {
    //   return <circle cx={circles[i].x} cy={circles[i].y} r={circles[i].r} />;
    // }

    setCircleCoordinates(circles);
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Upload
      </motion.h1>

      <div
        style={{
          backgroundColor: highlighted ? "red" : "white",
        }}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();

          setHighlighted(false);

          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === "application/vnd.ms-excel")
            .forEach(async (file) => {
              const text = await file.text();

              const result = parse(text, {
                header: true,
                skipEmptyLines: true,
              });
              setImportedData(result.data);
            });
        }}
      >
        Drop Here
      </div>

      {/* {circleCoordinates && (
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
          {circleCoordinates.map((coordinate, idx) => {
            return (
              <>
                <g key={idx} fill="#61DAFB">
                  <circle
                    cx={coordinate.x}
                    cy={coordinate.y}
                    r={coordinate.r}
                  />
                </g>
              </>
            );
          })}
        </svg>
      )} */}

      {/* {importedData && (
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
          {importedData.map((data, idx) => {
            return (
              <>
                <g fill="#61DAFB">
                  <circle
                    cx={getRandomInt(70, 700)}
                    cy={getRandomInt(70, 700)}
                    r={data.Age}
                  />
                </g>
              </>
            );
          })}
        </svg>
      )} */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
        <g fill="#61DAFB">
          <motion.circle
            cx={getRandomInt(70, 700)}
            cy={getRandomInt(70, 700)}
            r={22}
            drag={true}
          />
          <motion.circle
            cx={getRandomInt(70, 700)}
            cy={getRandomInt(70, 700)}
            r={22}
            drag={true}
          />
          <motion.circle
            cx={getRandomInt(70, 700)}
            cy={getRandomInt(70, 700)}
            r={22}
            drag={true}
          />
        </g>
      </svg> */}
    </div>
  );
};

export default DataViz;
