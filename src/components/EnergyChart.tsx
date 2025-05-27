
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const dailyData = [
  { time: '12 AM', usage: 2.1, cost: 0.84 },
  { time: '2 AM', usage: 1.8, cost: 0.72 },
  { time: '4 AM', usage: 1.5, cost: 0.60 },
  { time: '6 AM', usage: 2.8, cost: 1.12 },
  { time: '8 AM', usage: 4.2, cost: 1.68 },
  { time: '10 AM', usage: 3.1, cost: 1.24 },
  { time: '12 PM', usage: 2.9, cost: 1.16 },
  { time: '2 PM', usage: 3.5, cost: 1.40 },
  { time: '4 PM', usage: 4.1, cost: 1.64 },
  { time: '6 PM', usage: 5.8, cost: 2.32 },
  { time: '8 PM', usage: 6.2, cost: 2.48 },
  { time: '10 PM', usage: 4.1, cost: 1.64 }
];

const weeklyData = [
  { day: 'Mon', usage: 28.5, cost: 11.40 },
  { day: 'Tue', usage: 32.1, cost: 12.84 },
  { day: 'Wed', usage: 29.8, cost: 11.92 },
  { day: 'Thu', usage: 31.2, cost: 12.48 },
  { day: 'Fri', usage: 35.6, cost: 14.24 },
  { day: 'Sat', usage: 42.3, cost: 16.92 },
  { day: 'Sun', usage: 38.9, cost: 15.56 }
];

const monthlyData = [
  { month: 'Jul', usage: 892, cost: 356.80 },
  { month: 'Aug', usage: 945, cost: 378.00 },
  { month: 'Sep', usage: 823, cost: 329.20 },
  { month: 'Oct', usage: 756, cost: 302.40 },
  { month: 'Nov', usage: 689, cost: 275.60 },
  { month: 'Dec', usage: 712, cost: 284.80 }
];

interface EnergyChartProps {
  period: 'daily' | 'weekly' | 'monthly';
}

const EnergyChart = ({ period }: EnergyChartProps) => {
  const getData = () => {
    switch (period) {
      case 'daily': return dailyData;
      case 'weekly': return weeklyData;
      case 'monthly': return monthlyData;
      default: return dailyData;
    }
  };

  const getXKey = () => {
    switch (period) {
      case 'daily': return 'time';
      case 'weekly': return 'day';
      case 'monthly': return 'month';
      default: return 'time';
    }
  };

  const data = getData();
  const xKey = getXKey();

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey={xKey} 
            stroke="#6B7280"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: 'kWh', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: number, name: string) => [
              `${value} ${name === 'usage' ? 'kWh' : '$'}`,
              name === 'usage' ? 'Energy Usage' : 'Cost'
            ]}
          />
          <Area
            type="monotone"
            dataKey="usage"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#colorUsage)"
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;
