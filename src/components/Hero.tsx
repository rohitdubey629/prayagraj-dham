import Link from 'next/link'

// export default function Hero() {
//   return (
//     <div className="relative bg-prayagraj-primary text-white py-20 mb-12">
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Prayagraj</h1>
//           <p className="text-xl mb-8">
//             Explore the spiritual and cultural heritage of one of India's oldest cities, where the Ganga, Yamuna, and Saraswati rivers meet.
//           </p>
//           <Link href="/blog" className="bg-prayagraj-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition">
//             Read Our Blog
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// components/Hero.js
// components/Hero.js
export default function Hero() {
  return (
    <div className="relative bg-bhagwa-DEFAULT text-white py-24 mb-12">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">पवित्र प्रयागराज</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            त्रिवेणी संगम की पावन भूमि, कुम्भ की अद्भुत नगरी<br />
            जहाँ गंगा, यमुना और सरस्वती का होता है मिलन
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sangam" className="bg-white text-bhagwa-dark px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition text-lg">
              त्रिवेणी संगम
            </Link>
            <Link href="/kumbh" className="bg-dharmic-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 transition text-lg">
              कुम्भ मेला
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}