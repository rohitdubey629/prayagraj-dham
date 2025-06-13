// app/temples/page.tsx
"use client";
import Layout from "@/components/Layout";
import TemplesList from "@/components/TemplesList";

// export const metadata = {
//   title: 'प्रयागराज के प्रमुख मंदिर | Prayagraj Temples',
//   description: 'प्रयागराज के पवित्र मंदिरों के बारे में जानकारी',
// }

export default function TemplesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bhagwa-dark mb-2 font-serif">
            प्रयागराज के प्रमुख मंदिर
          </h1>
          <div className="w-24 h-1 bg-bhagwa-dark mx-auto my-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            प्रयागराज, तीर्थराज के नाम से प्रसिद्ध, अनेक प्राचीन एवं दिव्य
            मंदिरों की नगरी है। यहाँ के मंदिरों का धार्मिक एवं ऐतिहासिक महत्व
            है।
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg mb-8 border border-amber-200">
          <h2 className="text-xl font-bold text-bhagwa-dark mb-3 font-serif">
            मंदिर दर्शन सुझाव
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>प्रातःकाल का समय मंदिर दर्शन के लिए सर्वोत्तम</li>
            <li>विनम्र वस्त्र धारण करें</li>
            <li>मंदिर परिसर में चप्पल/जूते उतार दें</li>
            <li>मौन रहकर दर्शन करें</li>
          </ul>
        </div>

        <TemplesList />
        
      </div>
    </Layout>
  );
}
