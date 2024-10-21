import Card from '@/components/Card';
import { getWebsiteVisits } from '@/utils/lib/data-service';

export const metadata = {
	title: 'Overview'
};

async function Page() {

  const visitsData = await getWebsiteVisits();
  /**
   * Using reduce function to aggregate total visitors, bounce rate and average session duration
   */
  const totalVisitors = visitsData.reduce((sum, record) => sum + record.unique_visitors, 0);
  const bounceRate =
    (visitsData.reduce((sum, record) => sum + record.bounce_rate, 0) / visitsData.length) * 100;
  const avgSessionDuration =
    visitsData.reduce((sum, record) => sum + record.average_session_duration, 0) / visitsData.length;
  const avgSessionDurationInMinutes = avgSessionDuration / 60;

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl text-secondary_green font-bold mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
        title="Total Visitors"
          value={`${totalVisitors}`}
          bgColor="bg-primary"
          textColor="text-gray-300"/>
        <Card
        title="Bounce Rate"
          value={`${bounceRate.toPrecision(3)} %`}
          bgColor="bg-secondary_green/30"
          textColor="text-secondary_green"/>
        <Card
        title="Avg. Session Duration"
          value={`${avgSessionDurationInMinutes.toFixed(1)} mins`}
          bgColor="bg-secondary_purple/30"
          textColor="text-secondary_purple"/>
      </div>
    </div>
  );
}

export default Page;
