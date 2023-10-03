import Image from "next/image";
import { hero } from '../assets/assets'
import Navbar from "@/app/components/Navbar";

export default function Hero() {
    return (
        <section className="h-screen w-full bg-background-color overflow-hidden">
            <Navbar />
            <div className="w-full mt-28 h-full flex flex-col items-center">
                <h1 className="uppercase text-5xl text-center">lorem adsnkndkanda dandka daisnda dsndiand</h1>
                <div className="flex flex-row mb-24 gap-9 mt-6">
                    <button className="py-4 px-7 bg-excentric-text-color font-bold rounded-xl">Start</button>
                    <button className="py-4 px-7 bg-secs-divs-color font-bold rounded-xl">IDK</button>
                </div>
                <div className="w-[75rem] h-[50rem] rounded-3xl border-black border-[1rem]">
                    <Image className="object-cover rounded-lg h-full w-full" src={hero} alt={"hero image"} />
                </div>
            </div>
        </section>
    );
}