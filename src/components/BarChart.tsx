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
    };
  };
}

const chartConfig: ChartConfig = {
  type: 'bar',
  width: 350,
  height: 280,
  
  series: [{
    data: [{
      x: 'Casablanca',
      y: 10,
      fillColor: '#336B65'
    }, {
      x: 'Rabat',
      y: 18,
      fillColor: '#F5FFD5'
    }, {
        x: 'Rabat',
        y: 18,
        fillColor: '#DFFD83'
      }, {
      x: 'Rabat',
      y: 13,
      fillColor: '#F1F1F1'
    }, {
        x: 'Casablanca',
        y: 13,
        fillColor: '#000000'
      }]
    }],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
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
      show: false,
    },
  },
};

export default function BarChart({color}:{color:string}) {
  return (
    <Card placeholder=''>
      
      <CardBody placeholder='' className="mt-4 grid place-items-center px-2">
        <Chart key={color} {...chartConfig} />
      </CardBody>
    </Card>
  );
}
