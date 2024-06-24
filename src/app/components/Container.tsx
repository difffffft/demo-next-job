export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <main className="container py-4 px-6 mx-auto">
            {children}
        </main>
    )
}