// 數據示例
var data = {
  labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
  datasets: [
    {
      label: '數據一',
      data: [10, 20, 15, 25, 30, 18],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
    {
      label: '數據二',
      data: [5, 15, 10, 20, 25, 13],
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false,
    }
  ]
};

// 創建折線圖
var lineChart = new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: '月份'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: '數據值'
        }
      }
    }
  }
});
