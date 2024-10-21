import VisitAnalysis from './_components/VisitAnalysis'; 
import { getWebsiteVisits } from '@/utils/lib/data-service';

export const metadata = {
	title: 'Visits'
};
export default async function VisitsPage() {
  const visits = await getWebsiteVisits();

  /**
   * Calculate the data 30 days ago
   * Filter visits to include those from the last 30 days only
   */
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const filteredVisits = visits.filter((visit) => {
    const visitDate = new Date(visit.date);
    return visitDate >= thirtyDaysAgo;
  });
  return (
    <div>
      <VisitAnalysis data={filteredVisits} />
    </div>
  );
}
