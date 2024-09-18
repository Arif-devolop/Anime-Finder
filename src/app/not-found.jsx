"use client"
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    return (
        <div className="min-h-screen flex justify-center items-center max-w-xl mx-auto">
            <div className="flex items-center flex-col">
                <h1 className="font-bold text-6xl text-color-accent border-b-2">404</h1>
                <h3 className="font-bold text-2xl text-color-primary my-5">THIS PAGE IS NOT FOUND</h3>
                <button onClick={router.back} className="text-md text-color-primary underline hover:text-color-accent">Kembali ke halaman sebelumnya</button>
            </div>
        </div>
    )
}