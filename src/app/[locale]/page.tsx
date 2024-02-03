import { Header } from "@/components/Header/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Header />
      <nav className="bg-primary-red text-white">
        <ul className="container flex gap-6 items-center font-normal">
          <li><Button className="p-0 text-white font-light" variant={'link'}>Cars</Button></li>
          <li><Button className="p-0 text-white font-light" variant={'link'}>Commercial</Button></li>
          <li><Button className="p-0 text-white font-light" variant={'link'}>Electro</Button></li>
        </ul>
      </nav>
    </main>
  );
}
