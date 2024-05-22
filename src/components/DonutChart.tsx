'use client';

import dynamic from 'next/dynamic';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

// Dynamic import for react-apexcharts
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartConfig {
  type: 'pie' | 'area' | 'line' | 'bar' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'boxPlot' | 'radar' | 'polarArea' | 'rangeBar' | 'rangeArea' | 'treemap';
  width: number;
  height: number;
  series: number[];
  options: {
    chart: {
      toolbar: {
        show: boolean;
      };
    };
    plotOptions: {
        pie: {
          donut: {
            labels: {
              show: boolean;
              name:any;
              value:any;
            }
          }
        }
      }
    title: {
      text: string;
      align: 'left' | 'center' | 'right';
    };
    dataLabels: {
      enabled: boolean;
    };
    colors: string[];
    legend: {
      show: boolean;
    };
  };
}

const chartConfig: ChartConfig = {
  type: 'donut',
  width: 350,
  height: 280,
  
  series: [75, 25],
  options: {

    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              
            name: {
            show: false,
            fontSize: '18px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
            formatter: function (val:any) {
              return val 
            }
            },
            
            value: {
            show: true,
            fontSize: '18px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            offsetY: 0,
            formatter: function (val:any) {
              return val + '% of Total'
            }
          },
          }
        }
      }
    },
    title: {
      text: '',
      align: 'center',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#000000', '#E2FF54'],
    legend: {
      show: true,
    },
  },
};

export default function DonutChart({color}:{color:string}) {
  chartConfig.options.colors = ['#0D0D0D',color];

  return (
    <Card placeholder=''>
      
      <CardBody placeholder='' className="mt-4 grid place-items-center px-2">
        <Chart key={color} {...chartConfig} />
      </CardBody>
    </Card>
  );
}
