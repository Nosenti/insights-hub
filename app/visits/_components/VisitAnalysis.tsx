// app/visits/VisitAnalysis.tsx
"use client";

import { VisitData } from '@/api/interfaces';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';


interface VisitAnalysisProps {
  data: VisitData[];
}

function VisitAnalysis({ data }: VisitAnalysisProps) {
  const chartData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    ...item,
  }));

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Detailed Visit Analysis</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Website Visits - Last 30 Days</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="unique_visitors" stroke="#4F46E5" strokeWidth={2} name="Unique Visitors" />
            <Line type="monotone" dataKey="page_views" stroke="#10B981" strokeWidth={2} name="Page Views" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default VisitAnalysis;
