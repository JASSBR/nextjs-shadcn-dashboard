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
    title: {
      text: string;
      align: 'left' | 'center' | 'right';
    };
    dataLabels: any;
    colors: string[];
    legend: {
      show: boolean;
    };
  };
}



const chartConfig: ChartConfig = {
  type: 'pie',
  width: 280,
  height: 280,
  series: [23, 45, 32],
  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      text: '',
      align: 'center',
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function (val:any) {
            return val + '%'
        },
        textAnchor: 'middle',
        style: {
            fontSize: '18px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'light',
            colors: ['#fff','#fff','#fff']
        },
        },
    colors: ['#0D0D0D', '#336B65', '#DFFD83'],
    legend: {
      show: false,
    },
  },
};

interface colorOption {
  color:string
}
export default function Example(colorOption:colorOption) {
  chartConfig.options.colors = ['#0D0D0D',colorOption.color, '#DFFD83'];
  return (
    <Card placeholder=''>
      
      <CardBody placeholder='' className="mt-4 grid place-items-center px-2">
        <Chart key={colorOption.color}  {...chartConfig} />
      </CardBody>
    </Card>
  );
}
