
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-betweeen p-24">
        <span className="text-xl">Hola mundo</span>
        { children }
    </main>    
    </>

  );
}