import Profile from "@/components/sections/Profile";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="w-[94vw] m-4 md:max-w-[75vw] md:w-[75vw] lg:max-w-[45vw] lg:w-[45vw] bg-[#FFFFFF] dark:bg-[#212121] p-1.5 rounded-lg border shadow-xl space-y-7">
      <Profile />
      <Projects />
    </main>
  );
}
