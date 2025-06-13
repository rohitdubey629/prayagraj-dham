// components/KumbhHighlights.js
export default function KumbhHighlights() {
  const highlights = [
    {
      title: "महाकुम्भ 2025",
      description: "अगला महाकुम्भ मेला जनवरी 2025 में प्रयागराज में",
      date: "14 जनवरी - 26 फरवरी 2025"
    },
    {
      title: "शाही स्नान",
      description: "साधु-संतों का भव्य शाही स्नान देखने योग्य",
      date: "मकर संक्रांति पर"
    },
    {
      title: "कल्पवास",
      description: "पूरे माहौन तक पवित्र नदियों के किनारे तपस्या",
      date: "1 माह की अवधि"
    }
  ]

  return (
    <section className="py-12 bg-bhagwa-light text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center font-serif">कुम्भ मेला</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-xl mb-4">
            प्रयागराज में कुम्भ मेला विश्व का सबसे बड़ा मानव समूह है जहाँ करोड़ों श्रद्धालु पवित्र स्नान के लिए एकत्रित होते हैं।
          </p>
          <p>
            "प्रयागे तु त्रिवेणीति संगमो यत्र दृश्यते<br />
            तत्र स्नात्वा नरो देवि परं ब्रह्माधिगच्छति"
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-30 text-gray-600">
              <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
              <p className="mb-2">{item.description}</p>
              <p className="text-sm opacity-80">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}