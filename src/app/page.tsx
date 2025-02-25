import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Materials from "@/components/Materials";
import SellingProducts from "@/components/SellingProducts";
import WhyUs from "@/components/WhyUs";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`min-h-screen ${poppins.className}`}>
      <Header />
      <WhyUs />
      <SellingProducts />
      <Experiences />
      <Materials  />
      <Footer/>
    </main>
  );
}
