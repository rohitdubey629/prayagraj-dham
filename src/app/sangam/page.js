import Layout from '../../components/Layout'

export default function SangamPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-6 text-center font-serif">त्रिवेणी संगम</h1>
        
        <div className="prose max-w-none">
          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            {/* Sangam image placeholder */}
            <div className="w-full h-96 bg-amber-100 flex items-center justify-center">
              <span className="text-6xl">🕉️</span>
            </div>
          </div>
          
          <p className="text-lg">
            त्रिवेणी संगम हिन्दुओं का सबसे पवित्र तीर्थस्थलों में से एक है जहाँ पवित्र नदियाँ गंगा, यमुना और अदृश्य सरस्वती का मिलन होता है। यह स्थान मोक्ष प्राप्ति के लिए अत्यंत शुभ माना जाता है।
          </p>
          
          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">पौराणिक महत्व</h2>
          <p>
            हिन्दू शास्त्रों के अनुसार, त्रिवेणी संगम पर स्नान करने से सभी पापों से मुक्ति मिलती है। स्कन्द पुराण में वर्णित है कि यहाँ एक बार स्नान करने से अश्वमेध यज्ञ के समान पुण्य प्राप्त होता है।
          </p>
          
          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">विशेषताएँ</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>गंगा (श्वेत), यमुना (नीली) और सरस्वती (अदृश्य) का संगम</li>
            <li>कुम्भ मेले का मुख्य स्थल</li>
            <li>पितृ तर्पण के लिए उत्तम स्थान</li>
            <li>नाव से संगम स्नान की विशेष व्यवस्था</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">स्नान का समय</h2>
          <p>
            संगम स्नान के लिए सूर्योदय से सूर्यास्त तक का समय उत्तम माना जाता है। विशेष अवसरों जैसे मकर संक्रांति, गंगा दशहरा और कुम्भ के दौरान स्नान का विशेष महत्व है।
          </p>
        </div>
      </div>
    </Layout>
  )
}