import { Customer, VisitData } from '@/api/interfaces';

export async function getCustomers(): Promise<Customer[]> {
	try {
		const response = await fetch(
			`https://my.api.mockaroo.com/customers.json?key=${process.env.MOCKAROO_API_KEY}`,
			{
				cache: 'no-store'
			}
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch customers: ${response.statusText}`);
		}

		const data: Customer[] = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching customers:', error);
		return []; 
	}
}
export async function getWebsiteVisits(): Promise<VisitData[]> {
	try {
		const response = await fetch(
			`https://my.api.mockaroo.com/website-visits.json?key=${process.env.MOCKAROO_API_KEY}`,
			{
				cache: 'no-store'
			}
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch website visits: ${response.statusText}`);
		}

		const data: VisitData[] = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching website visits:', error);
		return []; 
	}
}