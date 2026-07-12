import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function SangamPage() {
  const images = [
    { src: "/images/triveni_sangam.jpeg", caption: "त्रिवेणी संगम, नाव से दृश्य" },
    { src: "/images/sangam.jpg", caption: "संगम तट" },
    { src: "/images/adivenimadhav.jpg", caption: "आदि वेणी माधव, अरैल घाट" },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-6 text-center font-serif">
          त्रिवेणी संगम
        </h1>

        <div className="prose max-w-none">
          <div className="mb-8 rounded-lg overflow-hidden relative w-full h-96 bg-amber-100">
            <Image
              src="/images/triveni_sangam.jpeg"
              alt="त्रिवेणी संगम"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg">
            त्रिवेणी संगम हिन्दुओं का सबसे पवित्र तीर्थस्थलों में से एक है जहाँ
            पवित्र नदियाँ गंगा, यमुना और अदृश्य सरस्वती का मिलन होता है। यह
            स्थान मोक्ष प्राप्ति के लिए अत्यंत शुभ माना जाता है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            पौराणिक महत्व
          </h2>
          <p>
            हिन्दू शास्त्रों के अनुसार, त्रिवेणी संगम पर स्नान करने से सभी पापों
            से मुक्ति मिलती है। स्कन्द पुराण में वर्णित है कि यहाँ एक बार स्नान
            करने से अश्वमेध यज्ञ के समान पुण्य प्राप्त होता है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            विशेषताएँ
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>गंगा (श्वेत), यमुना (नीली) और सरस्वती (अदृश्य) का संगम</li>
            <li>कुम्भ व माघ मेले का मुख्य स्थल</li>
            <li>पितृ तर्पण के लिए उत्तम स्थान</li>
            <li>नाव से संगम स्नान की विशेष व्यवस्था</li>
            <li>संगम के ठीक सामने गंगा पार झूंसी क्षेत्र स्थित है</li>
          </ul>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            स्नान का समय
          </h2>
          <p>
            संगम स्नान के लिए सूर्योदय से सूर्यास्त तक का समय उत्तम माना जाता
            है। विशेष अवसरों जैसे मकर संक्रांति, मौनी अमावस्या, गंगा दशहरा और
            कुम्भ/माघ मेले के दौरान स्नान का विशेष महत्व है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            नौका विहार व संगम दर्शन
          </h2>
          <p>
            संगम तट से नाव द्वारा ठीक उस बिंदु तक जाया जा सकता है जहाँ गंगा व
            यमुना के जल के रंग का अंतर स्पष्ट दिखाई देता है। नाविक संगठन द्वारा
            निर्धारित दरों पर नाव उपलब्ध रहती हैं; अक्षयवट, हनुमान मंदिर व
            किले की परिक्रमा नाव मार्ग में शामिल की जा सकती है।
          </p>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8 not-prose">
          {images.map((img, i) => (
            <div key={i} className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src={img.src} alt={img.caption} fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 not-prose justify-center">
          <Link
            href="/jhusi"
            className="bg-dharmic-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green-900 transition text-center"
          >
            झूंसी क्षेत्र देखें →
          </Link>
          <Link
            href="/kumbh"
            className="bg-dharmic-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition text-center"
          >
            कुम्भ / माघ मेला जानकारी →
          </Link>
          <Link
            href="/yatra-suvidha"
            className="bg-bhagwa-DEFAULT text-white px-6 py-3 rounded-lg font-medium hover:bg-bhagwa-dark transition text-center"
          >
            यात्रा सुविधाएँ →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
