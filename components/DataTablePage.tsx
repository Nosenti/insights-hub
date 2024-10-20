"use client";

import React from 'react';
import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Customer } from '@/api/interfaces';

interface DataTablePageProps {
  columns: ColumnDef<Customer>[];
  data: Customer[];
}

export default function DataTablePage({ columns, data }: DataTablePageProps) {
  return <DataTable columns={columns} data={data} />;
}
