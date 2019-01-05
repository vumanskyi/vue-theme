import Chart from 'chart.js';
import LineConfig from './config/line_config';

function BuildLineChart(chartId) {
  const ctx = document.getElementById(chartId);
   new Chart(ctx, {
        type: LineConfig.type,
        data: LineConfig.data,
        options: LineConfig.options,
    });
}


export default {
    lineChart: BuildLineChart
}