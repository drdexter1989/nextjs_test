import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'This is pricing page',
 keywords: 'Pricing,Curso Next.js,Eejemplo,Tarea',
};

export default function PricingPage() {
    return (
        <span className="text-7xl">Pricing Page</span>
    )
}