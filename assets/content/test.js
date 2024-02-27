// import Chart from "@toast-ui/chart";

const data = {
  categories: ["Browser"],
  series: [
    {
      name: "Chrome",
      data: 46.02,
    },
    {
      name: "IE",
      data: 20.47,
    },
    {
      name: "Firefox",
      data: 17.71,
    },
    {
      name: "Safari",
      data: 5.45,
    },
    {
      name: "Opera",
      data: 3.1,
    },
    {
      name: "Etc",
      data: 7.25,
    },
  ],
};

const el = document.getElementById("chart_pie");
const options = {
  theme: {
    chart: {
      fontFamily: "Verdana",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  chart: {
    title: "Pie Chart",
    height: "auto",
    width: "auto",
  },
  responsive: {
    animation: { duration: 100 },
  },
  series: {
    dataLabels: {
      visible: true,
      anchor: "outer",
      pieSeriesName: {
        visible: true,
      },
    },
  },
  exportMenu: {
    visible: false,
  },
};

const chart = toastui.Chart.pieChart({ el, data, options });
// * https://nhn.github.io/tui.chart/latest/tutorial-example09-11-pie-chart-visible-data
// const el = document.getElementById("chart_pie");
// // console.log(el);
// const options = {
//   series: {
//     selectable: true,
//   },
// };

// const chart = toastui.Chart.pieChart({ el, data, options });
const data2 = {
  categories: ["Browser"],
  series: [
    {
      name: "ZzZ",
      data: 46.02,
    },
    {
      name: "IE",
      data: 20.47,
    },
    {
      name: "Firefox",
      data: 17.71,
    },
    {
      name: "Safari",
      data: 5.45,
    },
    {
      name: "Opera",
      data: 3.1,
    },
    {
      name: "Etc",
      data: 7.25,
    },
  ],
};
// *https://github.com/nhn/tui.chart/blob/main/docs/en/common-theme.md
const options2 = {
  theme: {
    chart: {
      fontFamily: "Verdana",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  chart: {
    title: "Pie Chart",
    height: "auto",
    width: "auto",
  },
  responsive: {
    animation: { duration: 100 },
  },
  series: {
    dataLabels: {
      visible: true,
      anchor: "outer",
      pieSeriesName: {
        visible: true,
      },
    },
  },
  exportMenu: {
    visible: false,
  },
};
const el2 = document.getElementById("chart_pie2");
const el3 = document.getElementById("chart_pie3");
const el4 = document.getElementById("chart_pie4");
console.log(el2, el3, el4);

const chart2 = toastui.Chart.pieChart({
  el: el2,
  data: data2,
  options: options2,
});
const chart3 = toastui.Chart.pieChart({ el: el3, data, options });
const chart4 = toastui.Chart.pieChart({ el: el4, data, options });
