import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function KumbhPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-6 text-center font-serif">
          कुम्भ मेला एवं माघ मेला
        </h1>

        <div className="prose max-w-none">
          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            <div className="w-full h-96 bg-amber-100 flex items-center justify-center relative">
              <Image
                src="/images/mahakumbh.jpg"
                alt="महाकुम्भ मेला प्रयागराज"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-green-50 border border-green-300 text-green-900 rounded-lg p-4 mb-8">
            <p className="font-medium">
              ✅ महाकुम्भ 2025 (13 जनवरी – 26 फरवरी 2025) सफलतापूर्वक संपन्न हो
              चुका है। इस पृष्ठ पर अब आगामी माघ मेला व अर्ध कुम्भ की जानकारी दी
              गई है।
            </p>
          </div>

          <p className="text-lg">
            प्रयागराज कुम्भ मेला विश्व का सबसे बड़ा धार्मिक समागम है जहाँ
            करोड़ों श्रद्धालु पवित्र स्नान के लिए त्रिवेणी संगम पर एकत्रित
            होते हैं। यह मेला ग्रहों व नक्षत्रों की विशेष स्थिति के अनुसार
            आयोजित किया जाता है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            कुम्भ का पौराणिक महत्व
          </h2>
          <p>
            पुराणों के अनुसार समुद्र मंथन के दौरान अमृत कलश से चार स्थानों पर
            अमृत की बूँदें गिरी थीं - प्रयागराज, हरिद्वार, उज्जैन और नासिक। इन
            स्थानों पर कुम्भ मेले का आयोजन होता है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            मेलों का चक्र (Cycle)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-amber-200 not-prose">
              <thead>
                <tr className="bg-amber-100">
                  <th className="border border-amber-200 p-3">मेला</th>
                  <th className="border border-amber-200 p-3">अंतराल</th>
                  <th className="border border-amber-200 p-3">अंतिम/अगला</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-amber-200 p-3">पूर्ण महाकुम्भ</td>
                  <td className="border border-amber-200 p-3">हर 12 वर्ष</td>
                  <td className="border border-amber-200 p-3">
                    2025 (संपन्न) → अगला लगभग 2037
                  </td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="border border-amber-200 p-3">अर्ध कुम्भ</td>
                  <td className="border border-amber-200 p-3">हर 6 वर्ष</td>
                  <td className="border border-amber-200 p-3">
                    2019 (संपन्न) → अगला लगभग 2031
                  </td>
                </tr>
                <tr>
                  <td className="border border-amber-200 p-3">माघ मेला</td>
                  <td className="border border-amber-200 p-3">प्रतिवर्ष</td>
                  <td className="border border-amber-200 p-3">
                    जनवरी – फरवरी (कुम्भ वर्षों को छोड़कर)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            *अर्ध कुम्भ/महाकुम्भ की सटीक तिथियाँ सूर्य, चंद्र व बृहस्पति की
            राशि स्थिति के आधार पर सरकार द्वारा नज़दीकी समय में आधिकारिक रूप
            से घोषित की जाती हैं — ऊपर दिए वर्ष अनुमानित हैं।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            वार्षिक माघ मेला
          </h2>
          <p>
            माघ मेला हर वर्ष (कुम्भ/अर्ध कुम्भ वर्षों को छोड़कर) पौष पूर्णिमा
            से महाशिवरात्रि तक लगभग 45 दिनों के लिए संगम तट पर आयोजित होता
            है। इसमें हज़ारों <strong>कल्पवासी</strong> एक माह तक नदी किनारे
            तंबुओं में रहकर तप, स्नान व सत्संग करते हैं। मेला क्षेत्र को कई
            सेक्टरों में बाँटा जाता है और अस्थायी टेंट सिटी, सड़कें, पुल व
            बिजली-पानी की व्यवस्था की जाती है।
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            प्रमुख स्नान पर्व (परंपरागत क्रम)
          </h2>
          <div className="bg-amber-50 text-black p-4 rounded-lg not-prose">
            <ul className="space-y-3">
              <li className="flex flex-wrap">
                <span className="font-medium w-40">मकर संक्रांति:</span>
                <span>प्रथम प्रमुख स्नान, माघ मेले का आरंभ संकेत</span>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-40">पौष पूर्णिमा:</span>
                <span>कल्पवास प्रारंभ होने की तिथि</span>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-40">मौनी अमावस्या:</span>
                <span>सबसे बड़ा व सर्वाधिक भीड़ वाला स्नान पर्व</span>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-40">बसंत पंचमी:</span>
                <span>विशेष शाही स्नान की परंपरा</span>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-40">माघी पूर्णिमा:</span>
                <span>कल्पवास पूर्ण होने की तिथि</span>
              </li>
              <li className="flex flex-wrap">
                <span className="font-medium w-40">महाशिवरात्रि:</span>
                <span>मेले का समापन स्नान</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              *सभी तिथियाँ हिन्दू पंचांग अनुसार प्रतिवर्ष बदलती हैं, नज़दीकी
              वर्ष की तिथि आधिकारिक कैलेंडर से पुष्टि करें।
            </p>
          </div>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            आकर्षण
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>साधु-संतों व अखाड़ों का शाही स्नान व भव्य शोभायात्रा</li>
            <li>धार्मिक संगोष्ठियाँ, प्रवचन एवं भजन-कीर्तन</li>
            <li>कल्पवासी तपस्वियों की एक माह की तपस्या</li>
            <li>संगम तट पर प्रतिदिन भव्य गंगा आरती</li>
            <li>सांस्कृतिक कार्यक्रम, हस्तशिल्प व पुस्तक मेला</li>
          </ul>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            श्रद्धालुओं के लिए आवश्यक सुविधाएँ
          </h2>
          <p>
            मेला क्षेत्र में सेक्टरवार प्रशासन, गंगा पर बनने वाले अस्थायी
            पॉन्टून पुल, टेंट सिटी (साधारण व स्विस टेंट), खोया-पाया केंद्र,
            मेडिकल कैंप व सुरक्षा व्यवस्था होती है। पूरी विस्तृत जानकारी व
            यात्रा तैयारी हेतु हमारा समर्पित पृष्ठ देखें:
          </p>
          <p className="not-prose">
            <Link
              href="/yatra-suvidha"
              className="inline-block bg-bhagwa-DEFAULT text-white px-6 py-3 rounded-lg font-medium hover:bg-bhagwa-dark transition mt-2"
            >
              यात्रा सुविधाएँ व आवश्यक जानकारी देखें →
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            झूंसी क्षेत्र भी देखें
          </h2>
          <p>
            संगम के ठीक पार गंगा के दूसरी ओर स्थित झूंसी क्षेत्र, मेले का एक
            प्रमुख सेक्टर है। इसका पौराणिक व ऐतिहासिक महत्व जानने के लिए
            देखें:
          </p>
          <p className="not-prose">
            <Link
              href="/jhusi"
              className="inline-block bg-dharmic-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green-900 transition mt-2"
            >
              झूंसी क्षेत्र विस्तार से →
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
