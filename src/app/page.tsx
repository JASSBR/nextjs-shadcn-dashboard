'use client';

import BarChart from "@/components/BarChart";
import Cards from "@/components/Cards";
import ColorPicker from "@/components/ColorPicker";
import DonutChart from "@/components/DonutChart";
import DownloadButton from "@/components/DownloadButton";
import Hero from "@/components/Hero";
import LineChart from "@/components/LineChart";
import { MyNavbar } from "@/components/Navbar";
import PieChartEx from "@/components/PieChart";
import RegenerateButton from "@/components/RegenrateButton";
import { TableDemo } from "@/components/Table";
import { Card } from "@/components/ui/card";
import VertBarChart from "@/components/VertBarChart";
import { useState } from "react";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState('#454577'); // Default color
  console.log(selectedColor);
  
  return (
  <div className="flex flex-col justify-between gap-y-36">  
  <div>
    <MyNavbar/>
    <Hero/>
  </div>

    <div className="flex justify-around ">
        <div className="	"><ColorPicker onColorSelect={setSelectedColor} /></div>
        <div className="	"><DownloadButton/></div>
    </div>
  <Card className="p-4 mx-20">
  <div className="flex flex-wrap  gap-4">
    <div className="flex-1 flex flex-col gap-y-2">
      <div className="bg-gray-950	flex flex-wrap items-center gap-x-2 gap-y-3">
        <div className="flex-auto" ><Cards/></div>
        <div className="flex-auto" ><Cards/></div>
        <div className="flex-auto" ><Cards/></div>
        <div className="flex-auto" ><Cards/></div>
        <div className="flex-auto" ><Cards/></div>
      </div>
      <div className="flex flex-wrap items-center gap-x-2">
      <div className="flex-auto"><TableDemo/></div>
      <div className="flex-auto shrink  "><LineChart color={selectedColor}/></div>

      </div>
      <div className="flex flex-wrap	items-center gap-x-2">
      <div className="flex-auto shrink "><DonutChart color={selectedColor}/></div>
      <div className="flex-auto"><BarChart color={selectedColor}/></div>

      </div>
    
    </div>
    <div className="flex-5">
      <div className="flex flex-col gap-y-4">
      <div className="flex-auto grow"><DonutChart color={selectedColor}/></div>
      <div className="flex-auto" ><PieChartEx color={selectedColor}/></div>
      <div className="flex-auto"><VertBarChart/></div>
      </div></div>



        
</div>
</Card>
<div className=""><RegenerateButton/></div>

</div>)


}
