import React, { useState, useEffect } from "react";
import { parse } from "papaparse";
import styled from "styled-components";
import { ConvertedData } from "./ConvertedData";

const DataViz = () => {
  const width = 1200;
  const height = 800;

  const [highlighted, setHighlighted] = useState(false);
  const [importedData, setImportedData] = useState([
    {
      Name: "Lala bhai",
      Age: 80,
    },
    {
      Name: "Daddu",
      Age: 27,
    },
    {
      Name: "Adz Goming",
      Age: 15,
    },
    {
      Name: "Geazy",
      Age: 30,
    },
    {
      Name: "Nadir Qureshi",
      Age: 20,
    },
    {
      Name: "Neil Buckin",
      Age: 19,
    },
    {
      Name: "ok",
      Age: 15,
    },
    {
      Name: "test",
      Age: 27,
    },
    {
      Name: "cvb",
      Age: 12,
    },
    {
      Name: ",mn",
      Age: 14,
    },
    {
      Name: "oiu",
      Age: 12,
    },
    {
      Name: "hgd",
      Age: 21,
    },
    {
      Name: "asdf",
      Age: 12,
    },
    {
      Name: "fds",
      Age: 10,
    },
    {
      Name: "qwe",
      Age: 19,
    },
    {
      Name: "tre",
      Age: 18,
    },
  ]);
  const [largestCircle, setLargestCircle] = useState(0);

  return (
    <div>
      <div
        style={{
          backgroundColor: highlighted ? "red" : "gray",
          height: "10vh",
          color: "white",
          fontSize: "2rem",
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
          setImportedData([]);

          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === "application/vnd.ms-excel")
            .forEach(async (file) => {
              const text = await file.text();

              const result = parse(text, {
                header: true,
                skipEmptyLines: true,
              });

              let largestNum = Math.max.apply(
                Math,
                result.data.map(function (o) {
                  return o.Age;
                })
              );
              setLargestCircle(largestNum);
              setImportedData(result.data);
            });
        }}
      >
        Drop CSV File Here (in-progress)
      </div>
      {importedData.length > 0 ? (
        <ConvertedData
          circleData={importedData}
          largestCircle={largestCircle}
        />
      ) : null}
    </div>
  );
};

export default DataViz;
