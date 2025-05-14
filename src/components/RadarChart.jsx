import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current?.destroy();

    chartInstanceRef.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Replayability', 'Complexity', 'Difficulty',
          'Parts/Portability', 'Expansions', 'Affordability', 'Art Style & Theme'
        ],
        datasets: [{
          data,
          borderColor: 'rgba(239,109,61, 0.8)',
          backgroundColor: 'rgba(239,109,61, 0.2)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.2,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 5,
            angleLines: { color: 'white' },
            grid: { color: 'white' },
            pointLabels: { color: 'white' }
          }
        }
      }
    });

    return () => chartInstanceRef.current?.destroy();
  }, [data]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default RadarChart;
