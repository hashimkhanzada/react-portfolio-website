import React, { useState, useEffect, useRef } from "react";
import { parse } from "papaparse";
import styled from "styled-components";
import { ConvertedData } from "./ConvertedData";
import { Button } from "../../globalStyles";

const MainContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  background-color: #4b59f7;
  width: 100%;
  color: white;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: 100%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.75;
  width: 100%;
  height: 100%;
  background-color: #fff;

  @media screen and (max-width: 1100px) {
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.25;
  background-color: ${({ highlighted }) =>
    highlighted ? "#4C5D6B" : "#3b4954"};

  @media screen and (max-width: 1100px) {
  }
`;

const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 20px;
  @media screen and (max-width: 1100px) {
  }
`;

const SelectInput = styled.select`
  color: #a0b0bb;
  background-color: #3b4954;
  text-transform: capitalize;
  font-size: 22px;
  padding: 10px;
  border-radius: 5px;

  option {
    color: #fff;
  }
  &:focus {
    outline-width: 0;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const BodyData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow-y: auto;
  @media screen and (max-width: 1100px) {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
    margin-bottom: 20px;
  }
`;

const BodyItem = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-top: solid 1px #2a343c;

  &:hover {
    transition: all 0.3s ease-out;
    background: #2a343c;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: normal;
    border-right: solid 1px #2a343c;
    padding: 10px 25px;
    border-bottom: solid 1px #2a343c;
  }
`;

const ColumnTitle = styled.p`
  font-size: 22px;
  text-transform: capitalize;
  margin-bottom: 4px;
  @media screen and (max-width: 1100px) {
    margin-top: 5px;
  }
`;

const ColumnData = styled.p`
  font-size: 17px;
  align-self: right;
  @media screen and (max-width: 1100px) {
  }
`;

const DataViz = () => {
  const width = 1200;
  const height = 800;

  const dataRef = useRef(null);
  const [dimensions, setDimensions] = useState();
  const [highlighted, setHighlighted] = useState(false);
  const [columnNames, setColumnNames] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [importedData, setImportedData] = useState([]);
  const [largestCircle, setLargestCircle] = useState(0);
  const [isNumberColumn, setIsNumberColumn] = useState(false);
  const [largestRadius, setLargestRadius] = useState(0);
  const [bodyInfo, setBodyInfo] = useState();
  const [introData, setIntroData] = useState(
    "A basic data visualizer that converts data from a .CSV file and displays them as movable objects."
  );

  useEffect(() => {
    let asd = dataRef.current.getBoundingClientRect();
    setDimensions({ width: asd.width, height: asd.height });
  }, []);

  useEffect(() => {
    if (importedData.length > 0) {
      setColumnNames(Object.keys(importedData[0]));
    }
  }, [importedData]);

  useEffect(() => {
    if (dimensions && importedData) {
      let addArray = [];
      let largestNum = Math.max.apply(
        Math,
        importedData.map(function (o) {
          addArray.push(Math.floor(o[selectedColumn]));
          return o[selectedColumn];
        })
      );
      let sum = addArray.reduce((a, b) => a + b, 0);
      let multi = 1.2;
      let maxRadius = 170;

      if (window.innerWidth < 1100) {
        multi = 1.7;
      }

      let allowedRad = Math.floor(
        (dimensions.width + dimensions.height) / multi
      );
      let totalRad = Math.floor((sum / largestNum) * maxRadius);

      while (totalRad > allowedRad) {
        maxRadius -= 2;
        totalRad = Math.floor((sum / largestNum) * maxRadius);
      }

      setLargestRadius(maxRadius);
      setIsNumberColumn(false);

      if (Number.isInteger(Math.floor(largestNum))) {
        setIsNumberColumn(true);
        setIntroData("Click on an object to display related data");
      } else {
        setIntroData(
          "Only columns that contain numbers can be displayed as objects. Refresh the page if any issues occur."
        );
        setBodyInfo("");
      }

      setLargestCircle(largestNum);
    }
  }, [selectedColumn, dimensions]);

  const displayData = (b) => {
    setBodyInfo(b);
  };

  const convertFiles = (x) => {
    setHighlighted(false);

    Array.from(x)
      .filter((file) => file.type === "application/vnd.ms-excel")
      .forEach(async (file) => {
        const text = await file.text();

        const result = parse(text, {
          header: true,
          skipEmptyLines: true,
          preview: 50,
        });

        setImportedData(result.data);
        setIntroData(
          "Only columns that contain numbers can be displayed as objects. Refresh the page if any issues occur."
        );
      });
  };

  return (
    <MainContainer
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        convertFiles(e.dataTransfer.files);
      }}
    >
      <LeftColumn
        highlighted={highlighted}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
      >
        <BodyContainer>
          <SelectBlock>
            {importedData.length == 0 && (
              <>
                <input
                  type="file"
                  onChange={(e) => {
                    convertFiles(e.target.files);
                  }}
                  style={{
                    marginBottom: "20px",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                />
                <Button
                  primary
                  fontBig
                  onClick={() => {
                    setImportedData([
                      {
                        Name: "Lala bhai",
                        Age: 55,
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
                      {
                        Name: "tsm wadan",
                        Age: 5,
                      },
                      {
                        Name: "chapri",
                        Age: 2,
                      },
                      {
                        Name: "faze basil",
                        Age: 4,
                      },
                    ]);
                    setIntroData(
                      "Only columns that contain numbers can be displayed as objects. Refresh the page if any issues occur."
                    );
                  }}
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  Load Sample Data
                </Button>
              </>
            )}
            {importedData.length > 0 && (
              <SelectInput
                style={{ width: "100%" }}
                onChange={(e) => {
                  setSelectedColumn(e.target.value);
                }}
              >
                <option value="" defaultValue>
                  - select a column with numbers -
                </option>
                {columnNames &&
                  columnNames.map((data) => {
                    return (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    );
                  })}
              </SelectInput>
            )}
          </SelectBlock>

          <BodyData>
            {bodyInfo ? (
              columnNames.map((data, idx) => {
                return (
                  <BodyItem key={data}>
                    <ColumnTitle>{data}:</ColumnTitle>
                    <ColumnData>{bodyInfo[data]}</ColumnData>
                  </BodyItem>
                );
              })
            ) : (
              <BodyItem>
                <ColumnData>{introData}</ColumnData>
              </BodyItem>
            )}
          </BodyData>
        </BodyContainer>
      </LeftColumn>
      <RightColumn ref={dataRef}>
        {importedData.length > 0 && isNumberColumn ? (
          <ConvertedData
            key={selectedColumn}
            circleData={importedData}
            largestCircle={largestCircle}
            selectedColumn={selectedColumn}
            maxRadius={largestRadius}
            showCircleData={displayData}
          />
        ) : (
          importedData.length == 0 && (
            <h1
              style={{ color: "gray", textAlign: "center", marginTop: "2vh" }}
            >
              Drag and Drop a .CSV file
            </h1>
          )
        )}
      </RightColumn>
    </MainContainer>
  );
};

export default DataViz;
