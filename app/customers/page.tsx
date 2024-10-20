// 'use client';
// page.tsx
import { Customer } from '@/api/interfaces';
import DataTablePage from '@/components/DataTablePage'; // Import the client component
import { ColumnDef } from '@tanstack/react-table';
import { getCustomers } from '../../utils/lib/data-service';

// Define the columns for the table
const columns: ColumnDef<Customer>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
		enableGlobalFilter: false
	},
	{
		accessorKey: 'name',
		header: 'Name'
	},
	{
		accessorKey: 'email',
		header: 'Email'
	},
	{
		accessorKey: 'signup_date',
		header: 'Signup Date',
		enableGlobalFilter: false
	},
	{
		accessorKey: 'last_activity',
		header: 'Last Activity',
		enableGlobalFilter: false
	}
];

export default async function Page() {
	const customers = await getCustomers();
	return (
		<div className="p-4">
			<h1 className="text-xl font-bold mb-4">Data Table Example</h1>
			{/* Pass data to the client component */}
			<DataTablePage columns={columns} data={customers} />
		</div>
	);
}
