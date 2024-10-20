// LandingPage.jsx or LandingPage.tsx
import React from 'react';

function Page() {
  // Mock data
  const totalVisitors = 25400;
  const bounceRate = 38.7; // in percentage
  const avgSessionDuration = 5.2; // in minutes

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Website Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Visitors */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Total Visitors</h2>
          <p className="text-3xl font-bold text-gray-900">{totalVisitors.toLocaleString()}</p>
        </div>
        {/* Bounce Rate */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Bounce Rate</h2>
          <p className="text-3xl font-bold text-gray-900">{bounceRate}%</p>
        </div>
        {/* Average Session Duration */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Avg. Session Duration</h2>
          <p className="text-3xl font-bold text-gray-900">{avgSessionDuration} min</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
