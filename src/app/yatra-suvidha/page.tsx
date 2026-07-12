import Layout from "@/components/Layout";
import {
  Train,
  Plane,
  Bus,
  Tent,
  ShieldCheck,
  HeartPulse,
  MapPin,
  Utensils,
  Search,
} from "lucide-react";

const transport = [
  {
    icon: Train,
    title: "रेल मार्ग",
    points: [
      "प्रयागराज जंक्शन (मुख्य स्टेशन)",
      "प्रयाग घाट / प्रयागराज संगम स्टेशन",
      "रामबाग, छिवकी (Cheoki), नैनी",
      "सुबेदारगंज, फाफामऊ, झूंसी स्टेशन",
    ],
  },
  {
    icon: Plane,
    title: "वायु मार्ग",
    points: [
      "प्रयागराज हवाई अड्डा (बमरौली)",
      "निकटतम बड़े हवाई अड्डे: लखनऊ व वाराणसी",
    ],
  },
  {
    icon: Bus,
    title: "सड़क मार्ग",
    points: [
      "UPSRTC व निजी बस सेवाएँ प्रमुख शहरों से",
      "मेला अवधि में अतिरिक्त शटल बस व पार्किंग ज़ोन",
    ],
  },
];

const facilities = [
  {
    icon: Tent,
    title: "आवास (कल्पवास व ठहराव)",
    desc: "धर्मशालाएँ, होटल, बजट टेंट व प्रीमियम/स्विस टेंट (जैसे अरैल सेक्टर में) मेला प्रशासन व निजी संचालकों द्वारा उपलब्ध कराए जाते हैं।",
  },
  {
    icon: MapPin,
    title: "सेक्टर व्यवस्था",
    desc: "मेला क्षेत्र को कई सेक्टरों में बाँटा जाता है (माघ मेले में लगभग 14, कुम्भ में अधिक), हर सेक्टर का अपना प्रशासन, पुलिस चौकी व सुविधा केंद्र होता है।",
  },
  {
    icon: ShieldCheck,
    title: "सुरक्षा एवं खोया-पाया केंद्र",
    desc: "डिजिटल खोया-पाया केंद्र, LED स्क्रीन, अनाउंसमेंट सिस्टम व पुलिस सहायता केंद्र बिछड़े श्रद्धालुओं व परिवारों की मदद हेतु स्थापित किए जाते हैं।",
  },
  {
    icon: HeartPulse,
    title: "चिकित्सा सुविधा",
    desc: "मेला क्षेत्र में जगह-जगह अस्थायी मेडिकल कैंप, एम्बुलेंस व प्राथमिक चिकित्सा केंद्र उपलब्ध रहते हैं।",
  },
  {
    icon: Utensils,
    title: "भोजन व भंडारे",
    desc: "विभिन्न आश्रमों, अखाड़ों व सामाजिक संस्थाओं द्वारा निःशुल्क भंडारे व भोजन व्यवस्था की जाती है; सशुल्क भोजनालय भी उपलब्ध रहते हैं।",
  },
  {
    icon: Search,
    title: "पॉन्टून पुल व आवागमन",
    desc: "गंगा पर अस्थायी पॉन्टून पुल बनाकर झूंसी, अरैल व अन्य सेक्टरों को मुख्य संगम क्षेत्र से जोड़ा जाता है; ई-रिक्शा व बैटरी वाहन भी चलते हैं।",
  },
];

const tips = [
  "स्नान हेतु सुबह जल्दी या रात्रि का समय चुनें, भीड़ कम होगी।",
  "मौनी अमावस्या व बसंत पंचमी जैसे प्रमुख स्नान पर्वों पर अत्यधिक भीड़ रहती है, अतिरिक्त सावधानी रखें।",
  "अपने साथ पहचान पत्र, पानी की बोतल व आवश्यक दवाइयाँ अवश्य रखें।",
  "बच्चों व बुज़ुर्गों के लिए नाम-पता लिखी पर्ची या टैग साथ रखना उपयोगी रहता है।",
  "प्रशासन द्वारा जारी नक्शा/सेक्टर जानकारी पहले से देख लें।",
  "कीमती सामान साथ ले जाने से बचें, भीड़ में सतर्क रहें।",
];

export default function YatraSuvidhaPage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-3 text-center font-serif">
          यात्रा सुविधाएँ व आवश्यक जानकारी
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          प्रयागराज, संगम स्नान, कुम्भ व माघ मेले की यात्रा हेतु आवागमन,
          ठहराव, सुरक्षा व अन्य सभी आवश्यक सुविधाओं की सामान्य जानकारी।
        </p>

        <h2 className="text-2xl font-bold text-bhagwa-dark mb-4 font-serif">
          प्रयागराज कैसे पहुँचें
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {transport.map((t, i) => (
            <div key={i} className="bg-amber-50 rounded-lg p-6 shadow-sm">
              <t.icon className="w-8 h-8 text-bhagwa-dark mb-3" />
              <h3 className="font-bold text-bhagwa-dark mb-2">{t.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                {t.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-bhagwa-dark mb-4 font-serif">
          मेला क्षेत्र की सुविधाएँ
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-amber-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <f.icon className="w-8 h-8 text-bhagwa-dark mb-3" />
              <h3 className="font-bold text-bhagwa-dark mb-2">{f.title}</h3>
              <p className="text-gray-700 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-bhagwa-dark mb-4 font-serif">
          श्रद्धालुओं के लिए ज़रूरी सुझाव
        </h2>
        <div className="bg-bhagwa-light/20 border border-bhagwa-light rounded-lg p-6">
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center">
          नोट: मेला वर्ष व अवधि के अनुसार सुविधाओं की संख्या व व्यवस्था बदलती
          रहती है — यात्रा से पूर्व स्थानीय प्रशासन/आधिकारिक स्रोतों से नवीनतम
          जानकारी अवश्य लें।
        </p>
      </div>
    </Layout>
  );
}
