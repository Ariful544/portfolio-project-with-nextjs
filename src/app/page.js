import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Nav from "@/components/Navigations";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background image" fill
        className="w-full object-cover object-center opacity-10 h-full"
      />
      <div className="w-full h-screen">
        <Nav/>
        <RenderModel>
          <Wizard/>
        </RenderModel>
      </div>
    </main>
  );
}
