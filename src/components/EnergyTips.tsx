
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Lightbulb, Thermometer, Zap, Droplets } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Optimize Heating Temperature",
    description: "Lower your heating by 1°C to save up to 10% on energy bills. Melbourne's mild climate makes this very effective.",
    savings: "$25/month",
    icon: <Thermometer className="w-5 h-5" />,
    category: "Heating"
  },
  {
    id: 2,
    title: "LED Light Upgrade",
    description: "Replace remaining halogen bulbs with LED lights. They use 80% less energy and last 25 times longer.",
    savings: "$8/month",
    icon: <Lightbulb className="w-5 h-5" />,
    category: "Lighting"
  },
  {
    id: 3,
    title: "Smart Power Strips",
    description: "Use smart power strips to eliminate phantom loads from electronics in standby mode.",
    savings: "$12/month",
    icon: <Zap className="w-5 h-5" />,
    category: "Electronics"
  },
  {
    id: 4,
    title: "Water Heater Timer",
    description: "Install a timer on your hot water system to heat water only when needed, especially effective in Melbourne's climate.",
    savings: "$18/month",
    icon: <Droplets className="w-5 h-5" />,
    category: "Hot Water"
  }
];

const EnergyTips = () => {
  const [currentTip, setCurrentTip] = useState(0);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
  };

  const tip = tips[currentTip];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border border-blue-100">
        <div className="flex items-start space-x-3 mb-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
            {tip.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">{tip.title}</h3>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                {tip.savings}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-2">{tip.description}</p>
            <Badge variant="outline" className="text-xs">
              {tip.category}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={prevTip}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        
        <div className="flex space-x-2">
          {tips.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTip ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button variant="ghost" size="sm" onClick={nextTip}>
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default EnergyTips;
