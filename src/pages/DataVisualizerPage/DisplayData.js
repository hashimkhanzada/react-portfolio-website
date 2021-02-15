import React, { useState } from "react";
import {
  Engine,
  RenderClones,
  Walls,
  Rectangle,
  Circle,
  Constraint,
} from "react-matter-js";
import { Global, css } from "@emotion/core";
import * as pgm from "matter-attractors";

const DisplayData = ({ circleData }) => {
  const [importedCircleData, setImportedCircleData] = useState(circleData);

  const width = 1200;
  const height = 600;

  return (
    <div>
      <Global
        styles={css`
          body {
            background: #111;
          }
        `}
      />
      <Engine options={{}}>
        <RenderClones
          enableMouse
          options={{
            width,
            height,
            background: "transparent",
            wireframeBackground: "transparent",
          }}
        >
          <Walls x={0} y={0} width={width} height={height} wallWidth={25} />
          {importedCircleData &&
            importedCircleData.map((data, idx) => {
              return (
                <>
                  <Circle
                    clone
                    x={500}
                    y={100}
                    radius={data.Age > 100 ? Math.sqrt(data.Age) : data.Age}
                    className={css``}
                    cloneClass={css`
                      fill: #61dafb;
                    `}
                  />
                </>
              );
            })}
        </RenderClones>
      </Engine>
    </div>
  );
};

export default DisplayData;
