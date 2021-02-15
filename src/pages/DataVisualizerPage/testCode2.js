import React, { useState, useEffect } from "react";
import { parse } from "papaparse";
import styled from "styled-components";
import DisplayData from "./DisplayData";

const DataViz = () => {
  const width = 1200;
  const height = 800;

  const [highlighted, setHighlighted] = useState(false);
  const [importedData, setImportedData] = useState([]);
  const [circleCoordinates, setCircleCoordinates] = useState([]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

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
              setImportedData(result.data);
            });
        }}
      >
        Drop Here
      </div>
      {importedData.length > 0 ? (
        <DisplayData circleData={importedData} />
      ) : null}
    </div>
  );
};

export default DataViz;
