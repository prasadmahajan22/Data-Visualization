document.addEventListener("DOMContentLoaded", function () {
    // Sample data for monthly sales
    const salesData = [65, 59, 80, 81, 56];
  
    // Create a bar chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Monthly Sales',
          data: salesData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 10
          }
        }
      }
    });
  
    // Animate the chart using Anime.js
    const updateChart = (newData) => {
      salesChart.data.datasets[0].data = newData;
      salesChart.update({
        duration: 800,
        easing: 'easeInOutQuad'
      });
    };
  
    // Example: Update chart data after 3 seconds
    setTimeout(() => {
      const updatedData = [65, 59, 80, 81, 56]; 
      updateChart(updatedData);
    }, 3000);
  });
  