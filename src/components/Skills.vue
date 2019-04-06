<template >
  <div>
    <div class="skills-content">
      <div class="skills-header fadeInDown animated">
        <button :class="{'active-btn': (chart==1)}" @click="chart=1">
          <i class="fas fa-code" style="font-size: 18px;"></i>
          <p style="font-size: 15px; font-family:teko;">CODING</p>
        </button>
      </div>
      <div class="chart-container" v-show="chart==1">
        <canvas id="codingChart" width="300" height="300"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
Chart.defaults.global.defaultFontColor = "white";
Chart.defaults.global.defaultStrokeColor = "white";

export default {
  name: "skills",
  data() {
    return {
      chart: 1
    };
  },
  mounted() {
    Chart.defaults.global.defaultFontFamily = "teko";

    //coding chart
    var ctx = document.getElementById("codingChart");
    var codingChart = new Chart(ctx, {
      type: "radar",

      data: {
        labels: [
          "Vue.js",
          "Html",
          "Css",
          "Sass",
          "Bootstrap",
          ["JavaScript", "      ES6"],
          "React.js",
          "Angular 6",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Php",
          "Sql",
          "APIs",
          ["Web   ", "Sockets"],
          "Git",
          "Go",
          "Java",
          "Python",
          "Linux"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [
              4.5,
              4.9,
              4.9,
              4.5,
              4.9,
              4.9,
              3,
              4,
              4,
              4,
              4,
              4,
              4,
              4.5,
              3.5,
              4,
              4.5,
              4,
              4.5,
              4.5
            ],

            backgroundColor: ["rgba(31,238,41,0.3)"],
            borderColor: "#1fee29",
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scale: {
          ticks: {
            display: false,
            beginAtZero: true,
            max: 5
          },
          pointLabels: {
            fontSize: 20
          },
          gridLines: {
            color: "#2f2f2f"
          },
          angleLines: {
            color: "#2f2f2f"
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }
};
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.skills-content {
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: teko;
}
.skills-header {
  margin-bottom: -30px;
}
.active-btn {
    background: royalblue;
    transition: all 0.2s;
  }
.skills-header > button {
  background-color: transparent;
  text-align: center;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 25px;
  margin-left: 0px;
  color: #474747;
}

.skills-header > .active-btn {
  background-color: transparent;
  text-align: center;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 0px;
  color: #1fee29;
}
.chart-container {
  width: 480px;
  margin: auto;
  font-family: teko;
}
@media (max-width: 1069px) {
  .skills-content {
    font-family: teko;
  }
}
</style>