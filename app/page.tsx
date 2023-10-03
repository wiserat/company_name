import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="max-h-screen w-full">
            <Hero />
        </section>
    </main>
  )
}
