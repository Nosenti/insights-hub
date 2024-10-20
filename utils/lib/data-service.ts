import { Customer, VisitData } from '@/api/interfaces';

export async function getCustomers(): Promise<Customer | undefined> {
	try {
		const response = await fetch(
			// `https://my.api.mockaroo.com/customers.json?key=${process.env.MOCKAROO_API_KEY}&count=30`
			`https://my.api.mockaroo.com/customers.json?key=bf80afb0&count=30`
		);
		// https://my.api.mockaroo.com/customers.json?key=bf80afb0
		return response.json();
	} catch (error) {
		console.log(error);
		// res.status(500).json({ error: 'Failed to fetch data' });
	}
}
export async function getWebsiteVisits(): Promise<VisitData | undefined> {
	try {
		const response = await fetch(
			// `https://my.api.mockaroo.com/customers.json?key=${process.env.MOCKAROO_API_KEY}&count=30`
			`https://my.api.mockaroo.com/website-visits.json?key=bf80afb0&count=30`,
			{
				cache: 'force-cache'
			}
		);
		// https://my.api.mockaroo.com/customers.json?key=bf80afb0
		return response.json();
	} catch (error) {
		console.log(error);
		// res.status(500).json({ error: 'Failed to fetch data' });
	}
}
