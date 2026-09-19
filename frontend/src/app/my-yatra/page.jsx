import MyYatra from "@/components/yatra/MyYatra";

// Personal diary data — never meant to be publicly indexed.
export const metadata = {
  title: "My Yatra | Prayagraj Dham",
  robots: { index: false, follow: false },
};

export default function MyYatraPage() {
  return <MyYatra />;
}
