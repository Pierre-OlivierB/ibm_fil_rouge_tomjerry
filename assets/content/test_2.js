// *La data doit être mis dans un array
// const request2 = new Request("http://localhost:3001/pommedeterre", {
//   method: "GET",
// });
// fetch(request2)
//   .then((response) => {
//     if (response.status === 200) {
//       let infos = response.json();
//       // console.log(infos);
//       return infos;
//     } else {
//       throw new Error("Something went wrong on API server!");
//     }
//   })
//   .then((datas) => {
//     console.log(datas);
//     const data = {
//       categories: ["Pomme de terre"],
//       series: datas,
//     };

//     const el = document.getElementById("chart_bar");

//     const options = {
//       theme: {
//         chart: {
//           fontFamily: "Verdana",
//           backgroundColor: "rgba(0, 0, 0, 0)",
//         },
//       },
//       chart: { title: "Monthly Revenue", height: "auto", width: "auto" },
//       responsive: {
//         animation: { duration: 100 },
//       },
//     };

//     const chart = toastui.Chart.barChart({ el, data, options });
//   });
// !-----------------------
const el = document.getElementById("chart_bar");
const data = {
  categories: ["Jun"],
  series: [
    {
      name: "Budget",
      data: [5000],
    },
    {
      name: "Income",
      data: [8000],
    },
    {
      name: "Expenses",
      data: [4000],
    },
    {
      name: "Debt",
      data: [3000],
    },
  ],
};
const options = {
  theme: {
    chart: {
      fontFamily: "Verdana",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  chart: { title: "Monthly Revenue", height: "auto", width: "auto" },
  responsive: {
    animation: { duration: 100 },
  },
};

const chart = toastui.Chart.barChart({ el, data, options });
