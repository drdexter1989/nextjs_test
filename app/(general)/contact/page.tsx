import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'This is a contact page example',
 keywords: 'Contact,Curso Next.js,Eejemplo,Tarea',
};

export default function ContactPage() {
    return (
        <span className="text-7xl">Contact Page</span>
    )
}