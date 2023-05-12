import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="w-full h-screen font-montserrat bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
            <Navbar />
        </main>
    );
}
