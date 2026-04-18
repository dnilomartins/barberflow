import Sidebar from '@/components/layout/Sidebar'
import MobileSidebar from '@/components/layout/MobileSidebar'

export default function AppShell({ children }) {
    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Desktop */}
            <Sidebar />

            {/* Mobile — header + drawer num componente só */}
            <div className="flex-1 flex flex-col min-h-screen">
                <MobileSidebar />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}