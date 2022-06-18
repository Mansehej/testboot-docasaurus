import React, { useState } from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
} from "react-vis";

const greenData = [
  { x: "A", y: 10 },
  { x: "B", y: 5 },
  { x: "C", y: 15 },
];

const blueData = [
  { x: "A", y: 12 },
  { x: "B", y: 2 },
  { x: "C", y: 11 },
];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y),
}));

export const Chart = () => {
  const BarSeries = VerticalBarSeries;
  return (
    <div>
      <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={greenData} />
        <BarSeries data={blueData} />
        <LabelSeries data={labelData} getLabel={(d) => d.x} />
      </XYPlot>
    </div>
  );
};
