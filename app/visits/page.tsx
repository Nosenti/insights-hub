// app/visits/page.tsx
import React from 'react';
import VisitAnalysis from './_components/VisitAnalysis'; // Client Component
import visitsData from '@/utils/lib/WebsiteVisits.json'; // Adjust the path as necessary

export default function VisitsPage() {
  return (
    <div>
      <VisitAnalysis data={visitsData} />
    </div>
  );
}
