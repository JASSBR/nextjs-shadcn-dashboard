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
    yaxis: {
        lines: {
          show: boolean,
        }
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
    legend: {
      show: boolean;
    };
  };
}
const colors = ['#0D0D0D', '#336B65', '#DFFD83', '#FF6F61', '#6B5B95'];


const chartConfig: ChartConfig = {
  type: 'bar',
  width: 350,
  height: 280,
  
  series: [{
    data: [{
      x: 'Mon',
      y: 10,
      fillColor: colors[0] 
    }, {
      x: 'Tue',
      y: 18,
      fillColor: colors[0]
    }, {
        x: 'Wed',
        y: 18,
        fillColor: colors[0]
      }, {
      x: 'Thu',
      y: 13,
      fillColor: colors[0]
    }, {
        x: 'Fri',
        y: 13,
        fillColor: colors[0]
      }, {
        x: 'Sat',
        y: 13,
        fillColor: colors[0]
      }, {
        x: 'Sun',
        y: 13,
        fillColor: colors[0]
      }]
    }],
  options: {
    yaxis: {
        lines: {
          show: false,
        }
      },
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            borderRadiusApplication: 'end',
          horizontal: false
        }
      },
    title: {
      text: '',
      align: 'center',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  },
};



export default function VertBarChart() {
  return (
    <Card placeholder=''>
      
      <CardBody placeholder='' className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
