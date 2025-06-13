import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// components/SacredPlaces.js
export default function SacredPlaces() {
  const sacredSites = [
    {
      name: "त्रिवेणी संगम",
      description: "गंगा, यमुना और अदृश्य सरस्वती का पावन संगम स्थल",
      image: "/images/sangam.jpg",
      link: "/sangam",
    },
    {
      name: "अक्षयवट",
      description: "वह अमर वट वृक्ष जिसका वर्णन पुराणों में मिलता है",
         image: "/images/Patalpuri.jpeg",
      link: "/akshayvat",
    },
    {
      name: "हनुमान मंदिर",
      description: "लेटे हुए हनुमान जी का विश्वप्रसिद्ध मंदिर",
      image: "/images/hanuman_mandir.jpg",
      link: "/hanuman-temple",
    },
  ];

  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-bhagwa-dark mb-2 text-center font-serif">
          प्रयागराज के पावन स्थल
        </h2>
        <div className="w-24 h-1 bg-bhagwa-dark mx-auto mb-8"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {sacredSites.map((site, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="h-48 bg-amber-100 relative">
                {/* Image would go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl">
                    {" "}
                    <Image
                      src={site.image}
                      alt="Decorative line"
                      width={280}
                      height={200}
                      className="mx-auto"
                    />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bhagwa-dark mb-2 font-serif">
                  {site.name}
                </h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <Link
                  href={site.link}
                  className="text-bhagwa-dark font-medium hover:underline flex items-center"
                >
                  अधिक जानें <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
