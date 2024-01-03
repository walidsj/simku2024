import Link from 'next/link'
import { FiBook, FiChevronRight, FiHome, FiPieChart } from 'react-icons/fi'

export default function Sidebar() {
    return (
        <aside className="w-full">
            <ul className="flex flex-col gap-4 border border-gray-300 p-3 rounded-lg">
                <li>
                    <Link
                        href="/dashboard"
                        className="flex flex-row gap-2 items-center font-bold tracking-wide"
                    >
                        <FiHome className="text-lg" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard"
                        className="flex flex-row gap-2 items-center font-bold tracking-wide"
                    >
                        <FiPieChart className="text-lg" />
                        <span>Anggaran</span>
                    </Link>
                    <ul className="flex flex-col gap-2 ml-4 mt-2">
                        <li>
                            <Link
                                href="/dashboard/anggaran/dpa"
                                className="flex flex-row gap-2 items-center tracking-wide text-sm"
                            >
                                <FiChevronRight className="text-lg" />
                                <span>DPA</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard"
                                className="flex flex-row gap-2 items-center tracking-wide text-sm"
                            >
                                <FiChevronRight className="text-lg" />
                                <span>Penetapan Pergeseran</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        href="/dashboard"
                        className="flex flex-row gap-2 items-center font-bold tracking-wide"
                    >
                        <FiBook className="text-lg" />
                        <span>Penatausahaan</span>
                    </Link>
                    <ul className="flex flex-col gap-2 ml-4 mt-2">
                        <li>
                            <Link
                                href="/dashboard/penatausahaan/pengajuan-up"
                                className="flex flex-row gap-2 items-center tracking-wide text-sm"
                            >
                                <FiChevronRight className="text-lg" />
                                <span>Pengajuan UP</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    )
}
