"use client";

import { VisitData } from '@/api/interfaces';
import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface VisitAnalysisProps {
  data: VisitData[];
}

interface AggregatedVisitData {
  dateObj: Date;
  date: string;
  page_views: number;
  unique_visitors: number;
  bounce_rate: number;
  average_session_duration: number;
  count: number;
}

function VisitAnalysis({ data }: VisitAnalysisProps) {
  /**
   * Preparing data:
   * 1. Parsing dates and group data by date
   * 2. Converting grouped data into an array and calculating averages
   * 2. Sorting aggregated data by date
   */

  const groupedData = data.reduce((acc: { [key: string]: AggregatedVisitData }, item) => {
    
    const dateObj = new Date(item.date);
    const dateKey = dateObj.toISOString().split('T')[0]; 

    if (!acc[dateKey]) {
      
      acc[dateKey] = {
        dateObj: dateObj,
        date: dateKey,
        page_views: item.page_views,
        unique_visitors: item.unique_visitors,
        bounce_rate: item.bounce_rate,
        average_session_duration: item.average_session_duration,
        count: 1, 
      };
    } else {
      // Aggregate the values
      acc[dateKey].page_views += item.page_views;
      acc[dateKey].unique_visitors += item.unique_visitors;
      acc[dateKey].average_session_duration += item.average_session_duration;
      acc[dateKey].bounce_rate += item.bounce_rate;
      acc[dateKey].count += 1;
    }

    return acc;
  }, {});

  
  const aggregatedData = Object.values(groupedData).map((item) => ({
    ...item,
    date: item.dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    bounce_rate: item.bounce_rate / item.count,
    average_session_duration: item.average_session_duration / item.count,
  }));

  aggregatedData.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  return (
    <div className="p-4 min-h-screen">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-secondary_green mb-4">
          Website Visits - Last 30 Days
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={aggregatedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              
            />
            <YAxis
              
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="unique_visitors"
              stroke="#4F46E5"
              strokeWidth={2}
              name="Unique Visitors"
            />
            <Line
              type="monotone"
              dataKey="page_views"
              stroke="#10B981"
              strokeWidth={2}
              name="Page Views"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default VisitAnalysis;
