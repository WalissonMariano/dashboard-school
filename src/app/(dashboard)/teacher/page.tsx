import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { headers } from "next/headers";
import Image from "next/image";

const columns = [
    {
        header:"Info", accessor: "info"
    },
    {
        header:"Teacher ID", 
        accessor: "teacherId", 
        className:"hidden md:table",
    },
    {
        header:"Teacher ID", 
        accessor: "teacherId", 
        className:"hidden md:table",
    },
]

export default function TeacherPage() {
    return(
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/plus.png" alt="" width={14} height={14} />
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table />
            {/* PAGINATION */}
            <Pagination />
        </div>
    )
}