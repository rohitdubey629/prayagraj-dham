// import Hero from '@/components/Hero'
// import Layout from '@/components/Layout'
import FeaturedPosts from "@/components/FeaturedPosts";

// export default function Home() {
//   return (
//     <Layout>
//       <Hero />
//       <FeaturedPosts />
//     </Layout>
//   )
// }

// app/page.js
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SacredPlaces from "../components/SacredPlaces";
import KumbhHighlights from "../components/KumbhHighlights";
import DailyDarshan from "../components/DailyDarshan";
import ReligiousQuotes from "../components/ReligiousQuotes";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SacredPlaces />
      <KumbhHighlights />
      <Gallery />
      <DailyDarshan />
      <ReligiousQuotes />
      <FeaturedPosts />
    </Layout>
  );
}
