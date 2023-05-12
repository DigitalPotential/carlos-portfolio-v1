import Image from "next/image";
import "./globals.css";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="font-unbounded font-extrabold text-4xl text-center">
                Hello Carlos
            </h1>
            <h2 className="font-">Next.js Portfolio</h2>
            <p className="font-unbounded">test 123</p>
        </main>
    );
}
