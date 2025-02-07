import { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from "../components/TableComponents";
import { createColumnHelper } from "@tanstack/react-table";
import { Mail, Phone, User } from "lucide-react";

type User = { id: number; name: string; email: string; phone: string };
const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", { cell: (info) => info.getValue(), header: () => <span>ID</span> }),
  columnHelper.accessor("name", { cell: (info) => info.getValue(), header: () => <span><User size={16} /> Name</span> }),
  columnHelper.accessor("email", { cell: (info) => <span className="text-blue-600">{info.getValue()}</span>, header: () => <span><Mail size={16} /> Email</span> }),
  columnHelper.accessor("phone", { cell: (info) => info.getValue(), header: () => <span><Phone size={16} /> Phone</span> }),
];

export default function UsersPage() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setData(res.data));
  }, []);

  return <TableComponent<User> data={data} columns={columns} />;
}
