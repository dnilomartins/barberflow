import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import AppShell from "@/components/layout/AppShell"

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
        <body className="min-h-full bg-gray-50">
        <AppShell>{children}</AppShell>
        </body>
        </html>
    )
}