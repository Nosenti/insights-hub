// Define the data type
export interface Customer {
	id: number;
	name: string;
	email: string;
	signup_date: string;
	last_activity: string;
}

export interface VisitData {
	date: string;
	page_views: number;
	unique_visitors: number;
	bounce_rate: number;
	average_session_duration: number;
}
