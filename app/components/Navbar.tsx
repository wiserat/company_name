import Image from "next/image";
import {next} from "@/app/assets/assets";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="left-0 right-0 top-0 z-[501] h-[10vh] border-b-2 border-borders-color bg-secs-divs-color bg-opacity-[0.875] shadow-2xl shadow-excentric-text-color width-before-scroll-bar">
            <div className="relative z-[502] h-full w-full px-8 backdrop-blur-3xl">
                <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between">
                    <div className="flex-1">
                        <h1>
                            <button>
                                <Image src={next} className="h-7 w-auto transition duration-100 ease-in-out scale-100 hover:scale-105" alt="company_name" />
                            </button>
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center justify-center gap-5">
                        <Link href='/' className="text-xl font-black duration-700 hover:animate-text hover:bg-gradient-to-r hover:from-borders-color hover:via-excentric-text-color hover:to-borders-color hover:bg-clip-text hover:text-transparent">
                            Home
                        </Link>
                        <Link href='/' className="text-xl font-black duration-700 hover:animate-text hover:bg-gradient-to-r hover:from-borders-color hover:via-excentric-text-color hover:to-borders-color hover:bg-clip-text hover:text-transparent">
                            Services
                        </Link>
                        <Link href='/' className="text-xl font-black duration-700 hover:animate-text hover:bg-gradient-to-r hover:from-borders-color hover:via-excentric-text-color hover:to-borders-color hover:bg-clip-text hover:text-transparent">
                            About
                        </Link>
                        <Link href='/' className="text-xl font-black duration-700 hover:animate-text hover:bg-gradient-to-r hover:from-borders-color hover:via-excentric-text-color hover:to-borders-color hover:bg-clip-text hover:text-transparent">
                            Contact
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                        <div className="flex flex-row items-center bg-white pr-5 scale-100 hover:scale-105 duration-300 pl-3 py-2 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64" width="50px" height="50px" className="injected-svg h-9" data-src="/icons/fantasy-alternate.svg" role="img">
                                <path d="M 13.222656 6 L 12.853516 8.5742188 C 12.610516 10.274219 11.274219 11.610516 9.5742188 11.853516 L 7 12.222656 L 7 13.777344 L 9.5742188 14.146484 C 11.274219 14.389484 12.610516 15.725781 12.853516 17.425781 L 13.222656 20 L 14.777344 20 L 15.146484 17.425781 C 15.389484 15.725781 16.725781 14.389484 18.425781 14.146484 L 21 13.777344 L 21 12.222656 L 18.425781 11.853516 C 16.725781 11.610516 15.389484 10.274219 15.146484 8.5742188 L 14.777344 6 L 13.222656 6 z M 31 6 L 30.763672 7.6542969 C 30.607672 8.7472969 29.74925 9.6076719 28.65625 9.7636719 L 27 10 L 27 11 L 28.654297 11.236328 C 29.747297 11.392328 30.607672 12.25075 30.763672 13.34375 L 31 15 L 32 15 L 32.236328 13.345703 C 32.392328 12.252703 33.25075 11.392328 34.34375 11.236328 L 36 11 L 36 10 L 34.345703 9.7636719 C 33.252703 9.6076719 32.392328 8.74925 32.236328 7.65625 L 32 6 L 31 6 z M 48.677734 8.0039062 A 6.243 2.443 44.999 0 0 47.84375 8.3261719 A 6.243 2.443 44.999 0 0 47.839844 8.3300781 L 8.171875 47.998047 C 6.609875 49.560047 6.609875 52.09425 8.171875 53.65625 L 11.34375 56.828125 C 12.90575 58.391125 15.438 58.391125 17 56.828125 L 56.667969 17.160156 A 6.243 2.443 44.999 0 0 56.671875 17.15625 A 6.243 2.443 44.999 0 0 48.677734 8.0039062 z M 49.060547 12.767578 A 6.243 2.443 44.999 0 0 52.234375 15.9375 L 38.171875 30 L 34.998047 26.828125 L 49.060547 12.767578 z M 48 39 L 47.527344 42.310547 C 47.215344 44.496547 45.496547 46.215344 43.310547 46.527344 L 40 47 L 40 49 L 43.310547 49.472656 C 45.496547 49.784656 47.215344 51.503453 47.527344 53.689453 L 48 57 L 50 57 L 50.472656 53.689453 C 50.784656 51.503453 52.503453 49.784656 54.689453 49.472656 L 58 49 L 58 47 L 54.689453 46.527344 C 52.503453 46.215344 50.784656 44.496547 50.472656 42.310547 L 50 39 L 48 39 z"></path>
                            </svg>
                            <span className="text-2xl font-bold">
                    Start
                  </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}