import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { temples } from "@/data/templeData";

export default function JhusiPage() {
  const jhusiTemples = temples.filter((t) => t.location.includes("झूंसी"));

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-6 text-center font-serif">
          झूंसी क्षेत्र (प्रतिष्ठानपुर)
        </h1>

        <div className="prose max-w-none">
          <div className="mb-8 rounded-lg overflow-hidden relative w-full h-96 bg-amber-100">
            <Image
              src="/images/sankasht_har_madhav.jpg"
              alt="झूंसी क्षेत्र"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg">
            झूंसी, गंगा नदी के पूर्वी/दूसरे तट पर, प्रयागराज शहर व त्रिवेणी
            संगम के ठीक सामने स्थित एक प्राचीन क्षेत्र है। यह प्रयागराज-वाराणसी
            मार्ग पर स्थित है और शास्त्री सेतु (पुल) द्वारा मुख्य नगर से जुड़ा
            है। कुम्भ व माघ मेले के दौरान यह क्षेत्र अस्थायी पॉन्टून पुलों से
            मेला क्षेत्र से जोड़ा जाता है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            ऐतिहासिक व पौराणिक महत्व
          </h2>
          <p>
            झूंसी की पहचान प्राचीन <strong>प्रतिष्ठानपुर</strong> (प्रतिष्ठान)
            से की जाती है, जो चंद्रवंशी राजाओं की राजधानी रही — जिसमें राजा
            <strong> इला</strong>, <strong>पुरुरवा</strong> और विशेष रूप से
            <strong> राजा ययाति</strong> का उल्लेख मिलता है। पुरातात्विक
            साक्ष्यों के अनुसार यहाँ प्राचीन/नवपाषाणकालीन (Neolithic) मानव
            बसावट के प्रमाण भी मिले हैं। माना जाता है कि 13वीं–14वीं शताब्दी
            में आक्रमणकारियों द्वारा नगर के जला दिए जाने के बाद इसका नाम
            &quot;झुलसी&quot; से अपभ्रंश होकर &quot;झूंसी&quot; पड़ा।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            कुम्भ/माघ मेले में झूंसी की भूमिका
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              मेला क्षेत्र के प्रमुख सेक्टरों में से एक — यहाँ अखाड़ों व
              संतों के शिविर भी लगाए जाते हैं।
            </li>
            <li>
              मुख्य संगम क्षेत्र से जोड़ने के लिए कई अस्थायी पॉन्टून पुल
              बनाए जाते हैं।
            </li>
            <li>
              श्रद्धालुओं के आवागमन हेतु ई-रिक्शा व शटल सेवाएँ चलाई जाती हैं।
            </li>
            <li>
              टेंट सिटी, अस्थायी सड़कें, विद्युत व जल आपूर्ति की व्यवस्था
              मेला प्रशासन द्वारा की जाती है।
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            झूंसी के प्रमुख मंदिर व द्वादश माधव
          </h2>
          <p>
            झूंसी क्षेत्र में द्वादश माधव यात्रा से जुड़े कुछ प्राचीन मंदिर भी
            स्थित हैं, जो श्रद्धालुओं की परिक्रमा का हिस्सा हैं:
          </p>
        </div>

        {jhusiTemples.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-6 not-prose">
            {jhusiTemples.map((temple) => (
              <Link
                key={temple.id}
                href={`/temples/${temple.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
              >
                {temple.image && (
                  <div className="relative h-40 w-full bg-amber-100">
                    <Image
                      src={temple.image}
                      alt={temple.nameHindi}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-bhagwa-dark font-serif text-lg mb-1">
                    {temple.nameHindi}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {temple.descriptionHindi}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="prose max-w-none mt-8">
          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            झूंसी कैसे पहुँचें
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>रेल मार्ग:</strong> झूंसी रेलवे स्टेशन क्षेत्र में ही
              स्थित है; प्रयागराज जंक्शन/रामबाग/छिवकी से टैक्सी व ऑटो सुगमता
              से उपलब्ध।
            </li>
            <li>
              <strong>सड़क मार्ग:</strong> शास्त्री सेतु के माध्यम से नगर से
              सीधा जुड़ाव; मेले के दौरान पॉन्टून पुलों से भी पहुँचा जा सकता
              है।
            </li>
            <li>
              <strong>सुझाव:</strong> मेला अवधि में भीड़ अधिक होने के कारण
              सुबह जल्दी या देर शाम यात्रा अधिक सुविधाजनक रहती है।
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
