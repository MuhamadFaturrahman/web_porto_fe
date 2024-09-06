import HeaderSection from "./components/HeaderSection";
import NavbarSection from "./components/NavbarSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-10 ">
      <NavbarSection/>
      <div className="container mt-32 py-4"><HeaderSection/></div>
    </main>
  );
}
