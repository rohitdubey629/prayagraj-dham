// export default function Footer() {
//   return (
//     <footer className="bg-prayagraj-primary text-white py-6">
//       <div className="container mx-auto px-4 text-center">
//         <p>© {new Date().getFullYear()} Prayagraj Tourism Blog. All rights reserved.</p>
//         <p className="mt-2 text-prayagraj-secondary">
//           Explore the spiritual capital of India - Prayagraj
//         </p>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
// Simple Om symbol SVG component
function OmSymbol(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <text x="0" y="18" fontSize="18" fontFamily="sans-serif">ॐ</text>
    </svg>
  );
}

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-bhagwa-DEFAULT text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center text-xl font-bold">
              <OmSymbol className="mr-2 w-6 h-6" />
              प्रयागराज धाम
            </div>
            <p className="mt-2 text-amber-200">त्रिवेणी संगम की पावन भूमि</p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-amber-200 transition">हमारे बारे में</Link>
            {/* <Link href="/contact" className="hover:text-amber-200 transition">संपर्क करें</Link>
            <Link href="/privacy" className="hover:text-amber-200 transition">गोपनीयता नीति</Link> */}
          </div>
        </div>
        
        <div className="border-t border-amber-300 border-opacity-30 mt-6 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} प्रयागराज धाम. सर्वाधिकार सुरक्षित</p>
          <p className="mt-1 text-amber-200">
            ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥
          </p>
        </div>
      </div>
    </footer>
  )
}