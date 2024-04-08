import Newsletter from "@/components/home/newsletter";
import TravelPlans from "@/components/home/travelPlans";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Faq from "@/components/home/faq";
import Tools from "@/components/home/tools";
import Wishlist from "@/components/home/wishlist";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <TravelPlans />
      <Newsletter />
      <Tools />
      <Wishlist />
      <Faq />
    </div>
  );
}
