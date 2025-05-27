
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const comparisonData = [
  { category: 'Heating', you: 45, average: 52, efficient: 38 },
  { category: 'Cooling', you: 18, average: 23, efficient: 15 },
  { category: 'Hot Water', you: 22, average: 25, efficient: 20 },
  { category: 'Appliances', you: 12, average: 15, efficient: 10 },
  { category: 'Lighting', you: 3, average: 5, efficient: 2 }
];

const ComparisonChart = () => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="category" 
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
            label={{ value: '%', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: number, name: string) => [
              `${value}%`,
              name === 'you' ? 'Your Usage' : name === 'average' ? 'Melbourne Average' : 'Energy Efficient'
            ]}
          />
          <Legend />
          <Bar dataKey="you" fill="#3B82F6" name="Your Usage" radius={[4, 4, 0, 0]} />
          <Bar dataKey="average" fill="#94A3B8" name="Melbourne Average" radius={[4, 4, 0, 0]} />
          <Bar dataKey="efficient" fill="#10B981" name="Energy Efficient" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
