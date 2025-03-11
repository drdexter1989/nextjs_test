import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About Page',
 description: 'This is about page',
 keywords: 'About,Curso Next.js,Eejemplo,Tarea',
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    );
}