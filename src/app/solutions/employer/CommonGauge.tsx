"use client";

import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

type GaugeMode = "decimal" | "score";

type CommonGaugeProps = {
  value: number;
  mode: GaugeMode;
};

export default function CommonGauge({ value, mode }: CommonGaugeProps) {
  const [thickness, setThickness] = useState(55);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const raw = width * 0.04;
      const clamped = Math.min(200, Math.max(50, raw));
      setThickness(clamped);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const gaugeColors =mode=="decimal" ? 
    [
    [0.32, "#2B9B43"],
    [0.34, "transparent"],
    [0.68, "#0668E1"],
    [0.70, "transparent"],
    [1, "#F0431D" ],
  ]
  :
    
   [
    [0.32, "#F0431D"],
    [0.34, "transparent"],
    [0.68, "#0668E1"],
    [0.70, "transparent"],
    [1, "#2B9B43"],
  ]
  
  const getVisualValue = () => {
    if (mode === "decimal") {
      if (value <= 0.4) return (value / 0.4) * 32;
      if (value <= 0.7) return 34 + ((value - 0.4) / 0.3) * 32;
      return 70 + ((value - 0.7) / 0.3) * 32;
    }

    if (value <= 70) return (value / 70) * 32;
    if (value <= 85) return 34 + ((value - 70) / 15) * 32;
    return 70 + ((value - 85) / 15) * 32;
  };

  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        center: ["50%", "80%"],
        splitNumber: 0,

        axisLine: {
          lineStyle: {
            width: thickness,
            color: gaugeColors,
          },
        },

        pointer: {
          show: true,
          length: "45%",
          width: 16,
          itemStyle: {
            color: "#3F3E40",
          },
        },

        anchor: {
          show: true,
          size: 40,
          showAbove: true,
          itemStyle: {
            color: "#3F3E40",
          },
        },

        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        detail: { show: false },

        data: [{ value: getVisualValue() }],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%" }}
      className="md:!h-[25vw] !-my-[30px]"
    />
  );
}