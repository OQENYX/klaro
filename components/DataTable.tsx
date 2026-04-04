interface DataTableProps {
  children: React.ReactNode;
}

export default function DataTable({ children }: DataTableProps) {
  return <div className="table-wrapper">{children}</div>;
}
