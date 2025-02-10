import * as React from "react";
import  { useRef, useEffect } from "react";
import { OrgChart } from "d3-org-chart";

const D3OrgChartExample = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!chartRef.current) return; // ✅ Ensure the container exists

  //   // ✅ Correct data structure: Single object, not an array
  //   const chartData = [{
  //     id: "1",
  //     name: "Parent",
  //     children: [
  //       { id: "2", name: "Child 1", children: [{ id: "4", name: "Grandchild 1" }, { id: "5", name: "Grandchild 2" }] },
  //       { id: "3", name: "Child 2" },
  //       { id: "6", name: "Child 3", children: [{ id: "7", name: "Grandchild 3" }] },
  //     ],
  //   }]

    // ✅ Ensure d3-org-chart is initialized correctly
  //   const chart = new OrgChart()
  //     .container(chartRef.current)
  //     .data(chartData) // ✅ Should be a single object (not an array)
  //     .nodeHeight(50)
  //     .nodeWidth(200)
  //     .childrenMargin(15)
  //     .compactMarginBetween(25)
  //     .nodeContent((d) => {
  //       return `<div style="padding:10px; background:#0078D4; color:white; border-radius:8px; text-align:center;">
  //         <strong>${d.data.name}</strong>
  //       </div>`;
  //     })
  //     .render();

  //   return () => {
  //     chart.destroy(); // ✅ Cleanup to avoid multiple renders
  //   };
  // }, []);

  return (
    <div>
      <h2>Hierarchical Chart Example</h2>
      <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default D3OrgChartExample;
