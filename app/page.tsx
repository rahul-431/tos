import About from "@/components/others/About";
import Bifocals from "@/components/others/Bifocals";
import Connect from "@/components/others/Connect";
import Features from "@/components/others/Features";
import NearBy from "@/components/others/NearBy";
import Products from "@/components/others/Products";

export default function Home() {
  return (
    <div>
      <About />
      <Features />
      <Products />
      <Bifocals />
      <NearBy />
      <Connect />
    </div>
  );
}
