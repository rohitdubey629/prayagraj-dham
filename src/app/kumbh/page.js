import Layout from "../../components/Layout";
import Image from "next/image";

export default function KumbhPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-6 text-center font-serif">
          कुम्भ मेला
        </h1>

        <div className="prose max-w-none">
          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            {/* Kumbh image placeholder */}
            <div className="w-full h-96 bg-amber-100 flex items-center justify-center">
              <span className="text-6xl">
                {" "}
                <Image
                  src={`/images/mahakumbh.jpg`}
                  alt="Decorative line"
                  width={500}
                  height={200}
                  className="mx-auto"
                />
              </span>
            </div>
          </div>

          <p className="text-lg">
            प्रयागराज कुम्भ मेला विश्व का सबसे बड़ा धार्मिक समागम है जहाँ
            करोड़ों श्रद्धालु पवित्र स्नान के लिए एकत्रित होते हैं। यह मेला
            प्रत्येक 12 वर्ष में प्रयागराज में आयोजित किया जाता है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            कुम्भ का पौराणिक महत्व
          </h2>
          <p>
            पुराणों के अनुसार समुद्र मंथन के दौरान अमृत कलश से चार स्थानों पर
            अमृत की बूँदें गिरी थीं - प्रयागराज, हरिद्वार, उज्जैन और नासिक। इन
            स्थानों पर कुम्भ मेले का आयोजन होता है।
          </p>

          <h2 className="text-2xl font-bold  mt-8 mb-4 font-serif">
            महत्वपूर्ण स्नान तिथियाँ
          </h2>
          <div className="bg-amber-50 text-black p-4 rounded-lg">
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-medium w-32">मकर संक्रांति:</span>
                <span>14 जनवरी 2025 (प्रथम शाही स्नान)</span>
              </li>
              <li className="flex">
                <span className="font-medium w-32">मौनी अमावस्या:</span>
                <span>1 फरवरी 2025 (मुख्य स्नान दिवस)</span>
              </li>
              <li className="flex">
                <span className="font-medium w-32">बसंत पंचमी:</span>
                <span>26 फरवरी 2025 (समापन स्नान)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            आकर्षण
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>साधु-संतों का शाही स्नान</li>
            <li>अखाड़ों की भव्य शोभायात्रा</li>
            <li>धार्मिक संगोष्ठियाँ एवं भजन-कीर्तन</li>
            <li>कल्पवासी तपस्वियों की तपस्या</li>
            <li>गंगा आरती की भव्य व्यवस्था</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
