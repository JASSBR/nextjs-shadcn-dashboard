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
  series: any[];
  options: {
    stroke:any;
    xaxis: {
        categories: string[];
      };
    chart: {
      toolbar: {
        show: boolean;
      };
    };
    plotOptions : any;
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
      position: 'top' | 'right' | 'bottom' | 'left';
      horizontalAlign: 'right' | 'center' | 'left' ;
    };
  };
}

const chartConfig: ChartConfig = {
  type: 'line',
  width: 350,
  height: 280,
  
  series: [
    {
      name: "Colum nanani",
      data: [14, 2, 25, 15, 25, 28, 38, 46]
    },
    {
      name: "Colum nanani",
      data: [20, 29, 37, 36, 44, 45, 30, 30]
    }
  ],
  options: {
    stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
        bar: {
          horizontal: true
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
      position:'top',
      horizontalAlign:'right'
    },
  },
};

export default function LineChart({color}:{color:string}) {
  chartConfig.options.colors = ['#0D0D0D',color];

  return (
    <Card placeholder=''>
      
      <CardBody placeholder='' className="mt-4 grid place-items-center px-2">
        <Chart key={color} {...chartConfig} />
      </CardBody>
    </Card>
  );
}
