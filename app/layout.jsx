import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/layout/Sidebar"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata = {
    title: "BarberFlow",
    description: "Sistema de agendamento para barbearias",
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="pt-BR"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex">
        <Sidebar />
        <main className="flex-1 p-6">
            {children}
        </main>
        </body>
        </html>
    )
}