import {
    FiBriefcase,
    FiFile,
    FiHome,
    FiMonitor,
    FiPieChart,
    FiSettings,
} from 'react-icons/fi'

export const mainLinksData = [
    { icon: FiMonitor, label: 'Admin', isAdmin: true },
    { icon: FiHome, label: 'Beranda', isAdmin: false },
    { icon: FiPieChart, label: 'Anggaran', isAdmin: false },
    { icon: FiBriefcase, label: 'Penatausahaan', isAdmin: false },
]

export const linksData = [
    {
        icon: FiHome,
        label: 'Dashboard',
        description: 'Halaman Ringkasan',
        href: '/dashboard',
        parent: 'Beranda',
    },
    {
        icon: FiFile,
        label: 'DPA',
        description: 'Daftar Pelaksanaan Anggaran',
        href: '/dashboard/anggaran/dpa',
        parent: 'Anggaran',
    },
    {
        icon: FiFile,
        label: 'Pengajuan UP',
        description: 'Uang Persediaan',
        href: '/dashboard/penatausahaan/pengajuan-up',
        parent: 'Penatausahaan',
    },
    {
        icon: FiHome,
        label: 'Dashboard Admin',
        description: 'Halaman Ringkasan Admin',
        href: '/dashboard/admin',
        parent: 'Admin',
    },
    {
        icon: FiSettings,
        label: 'Pengaturan',
        description: 'Pengaturan Aplikasi',
        href: '/dashboard/admin/pengaturan',
        parent: 'Admin',
    },
]
