
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingDown, Home, Lightbulb, DollarSign, Target } from "lucide-react";
import EnergyChart from '@/components/EnergyChart';
import ComparisonChart from '@/components/ComparisonChart';
import EnergyTips from '@/components/EnergyTips';
import MetricCard from '@/components/MetricCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Melbourne Energy Dashboard</h1>
                <p className="text-sm text-gray-600">Track, compare, and optimize your energy usage</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <TrendingDown className="w-4 h-4 mr-1" />
              12% savings this month
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Today's Usage"
            value="24.7 kWh"
            change="-8%"
            changeType="decrease"
            icon={<Zap className="w-6 h-6" />}
            color="blue"
          />
          <MetricCard
            title="Monthly Cost"
            value="$387.50"
            change="+$23"
            changeType="increase"
            icon={<DollarSign className="w-6 h-6" />}
            color="green"
          />
          <MetricCard
            title="Efficiency Score"
            value="8.2/10"
            change="+0.4"
            changeType="decrease"
            icon={<Target className="w-6 h-6" />}
            color="purple"
          />
          <MetricCard
            title="vs Melbourne Avg"
            value="15% below"
            change="Better"
            changeType="decrease"
            icon={<Home className="w-6 h-6" />}
            color="orange"
          />
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Energy Usage Overview
                </CardTitle>
                <CardDescription>
                  Track your daily energy consumption patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="daily" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="daily" className="mt-6">
                    <EnergyChart period="daily" />
                  </TabsContent>
                  <TabsContent value="weekly" className="mt-6">
                    <EnergyChart period="weekly" />
                  </TabsContent>
                  <TabsContent value="monthly" className="mt-6">
                    <EnergyChart period="monthly" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-green-600" />
                  Melbourne Comparison
                </CardTitle>
                <CardDescription>
                  See how your usage compares to similar Melbourne households
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComparisonChart />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Energy Tips
                </CardTitle>
                <CardDescription>
                  Personalized recommendations to save energy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EnergyTips />
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Peak usage time</span>
                  <span className="font-medium">7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Lowest usage time</span>
                  <span className="font-medium">3:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Carbon footprint</span>
                  <span className="font-medium text-green-600">2.1 tons CO₂</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Solar contribution</span>
                  <span className="font-medium text-yellow-600">32%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
