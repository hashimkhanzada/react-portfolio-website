import React, { useState, useEffect, useRef } from "react";
import { parse } from "papaparse";
import styled from "styled-components";
import { ConvertedData } from "./ConvertedData";
import { Button } from "../../globalStyles";
import "./DataViz.css";
import SampleData from "./SampleData";

const DataViz = () => {
  const dataRef = useRef(null);
  const [dimensions, setDimensions] = useState();
  const [highlighted, setHighlighted] = useState(false);
  const [columnNames, setColumnNames] = useState([]);
  const [numberColumnNames, setNumberColumnNames] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [importedData, setImportedData] = useState([]);
  const [largestCircle, setLargestCircle] = useState(0);
  const [isNumberColumn, setIsNumberColumn] = useState(false);
  const [largestRadius, setLargestRadius] = useState(0);
  const [bodyInfo, setBodyInfo] = useState();
  const [introData, setIntroData] = useState(
    "A basic data visualizer that converts data from a .CSV file and displays them as movable objects."
  );
  const [groupByColumn, setGroupByColumn] = useState();
  const [groupedColumnNames, setGroupedColumnNames] = useState([]);
  const [selectedGroupColumn, setSelectedGroupColumn] = useState();
  const [groupedColumnData, setGroupedColumnData] = useState();

  useEffect(() => {
    let dimen = dataRef.current.getBoundingClientRect();
    setDimensions({ width: dimen.width, height: dimen.height });
  }, []);

  useEffect(() => {
    if (importedData.length > 0) {
      const keys = Object.keys(importedData[0]);
      setColumnNames(keys);

      let names = [...keys];

      importedData.forEach((element) => {
        Object.keys(element).forEach((key) => {
          if (isNaN(element[key])) {
            if (names.includes(key)) {
              const index = names.indexOf(key);
              if (index > -1) {
                names.splice(index, 1);
              }
            }
          }
        });
      });

      setNumberColumnNames(names);
    }
  }, [importedData]);

  useEffect(() => {
    if (dimensions && importedData) {
      let addArray = [];
      let largestNum = Math.max.apply(
        Math,
        importedData.map((o) => {
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
        setBodyInfo("");
      }

      setLargestCircle(largestNum);
    }

    if (selectedColumn) {
      let tempArr = [...columnNames];
      tempArr.sort();
      const index = tempArr.indexOf(selectedColumn);
      let item = tempArr.splice(index, 1);
      tempArr.splice(0, 0, item[0]);

      setColumnNames(tempArr);
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
          preview: 70,
        });

        setImportedData(result.data);
        setIntroData(
          "Only columns that contain numbers can be displayed as objects. Refresh the page if any performance issues occur."
        );
      });
  };

  useEffect(() => {
    if (groupByColumn && groupByColumn != "AllData") {
      let group = importedData.reduce((r, a) => {
        r[a[groupByColumn]] = [...(r[a[groupByColumn]] || []), a];
        return r;
      }, {});
      let nameOfColumns = [];
      Object.keys(group).map((item) => {
        nameOfColumns.push(item);
      });

      setGroupedColumnNames(nameOfColumns);
    }
  }, [groupByColumn]);

  useEffect(() => {
    if (groupByColumn != "AllData") {
      const result = importedData.filter(
        (word) => word[groupByColumn] == selectedGroupColumn
      );
      setGroupedColumnData(result);
    }
  }, [selectedGroupColumn]);

  useEffect(() => {
    if (groupByColumn == "AllData") {
      setGroupedColumnData(importedData);
    }
  }, [groupByColumn]);

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
                    setImportedData(SampleData);
                    // console.log(SampleData);
                    setIntroData(
                      "Only columns that contain numbers can be displayed as objects. Refresh the page if any performance issues occur."
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
              <>
                <SelectInput
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setSelectedColumn(e.target.value);
                    setGroupByColumn("AllData");
                  }}
                >
                  <option value="" defaultValue>
                    - select a column to display -
                  </option>
                  {numberColumnNames &&
                    numberColumnNames.map((data) => {
                      return (
                        <option key={data} value={data}>
                          {data}
                        </option>
                      );
                    })}
                </SelectInput>
                {selectedColumn && (
                  <>
                    <SelectInput
                      key={selectedColumn}
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        setGroupByColumn(e.target.value);
                      }}
                    >
                      <option value="" defaultValue>
                        - select a column to group by -
                      </option>
                      <option value="AllData">Show All</option>
                      {columnNames &&
                        columnNames.map((data) => {
                          return (
                            <option key={data} value={data}>
                              {data}
                            </option>
                          );
                        })}
                    </SelectInput>
                    {groupByColumn && groupByColumn != "AllData" && (
                      <SelectInput
                        style={{ width: "100%" }}
                        onChange={(e) => {
                          setSelectedGroupColumn(e.target.value);
                        }}
                      >
                        <option value="" defaultValue>
                          - Select the {groupByColumn} -
                        </option>

                        {groupedColumnNames &&
                          groupedColumnNames.map((group) => {
                            return (
                              <option key={group} value={group}>
                                {group}
                              </option>
                            );
                          })}
                      </SelectInput>
                    )}
                  </>
                )}
              </>
            )}
          </SelectBlock>

          <BodyData className="scrollBar">
            {bodyInfo ? (
              columnNames?.map((data) => {
                return (
                  <BodyItem key={data}>
                    <h4>{data}:</h4>
                    <p>{bodyInfo[data]}</p>
                  </BodyItem>
                );
              })
            ) : (
              <BodyItem>
                <p>{introData}</p>
              </BodyItem>
            )}
          </BodyData>
        </BodyContainer>
      </LeftColumn>
      <RightColumn ref={dataRef}>
        {groupedColumnData?.length > 0 && isNumberColumn ? (
          <ConvertedData
            key={
              groupedColumnData[0][groupByColumn] +
              selectedColumn +
              groupedColumnData
            }
            circleData={groupedColumnData}
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

  &:first-child {
    border-top: solid 1px #4b59f7;
    background-color: #4b59f7;

    &:hover {
      transition: all 0.3s ease-out;
      background: #0467fb;
    }
  }

  &:nth-child(2) {
    border-top: solid 1px #4b59f7;
    @media screen and (max-width: 1100px) {
      border-top: solid 1px #2a343c;
    }
  }

  &:hover {
    transition: all 0.3s ease-out;
    background: #2a343c;
  }

  h4 {
    font-size: 22px;
    font-weight: normal;
    text-transform: capitalize;
    margin-bottom: 4px;
    @media screen and (max-width: 1100px) {
      margin-top: 5px;
    }
  }

  p {
    font-size: 17px;
    align-self: right;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: normal;
    border-right: solid 1px #2a343c;
    padding: 10px 25px;
    border-bottom: solid 1px #2a343c;
  }
`;
