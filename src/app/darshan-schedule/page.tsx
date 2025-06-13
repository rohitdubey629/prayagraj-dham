import Layout from "@/components/Layout";
import { Clock } from "lucide-react";

export default function DarshanSchedulePage() {
  const fullSchedule = [
    {
      title: "घाट दर्शन",
      items: [
        {
          time: "प्रातः 5:00 - 6:00",
          event: "मंगला आरती",
          location: "त्रिवेणी घाट",
        },
        {
          time: "सायं 6:30 - 7:30",
          event: "गंगा आरती",
          location: "दरियाबाद घाट",
        },
      ],
    },
    {
      title: "मंदिर दर्शन",
      items: [
        {
          time: "प्रातः 4:30 - रात्रि 10:00",
          event: "मंदिर खुलने का समय",
          location: "बड़े हनुमान मंदिर",
        },
        {
          time: "प्रातः 5:00",
          event: "प्रभात आरती",
          location: "बड़े हनुमान मंदिर",
        },
        {
          time: "दोपहर 12:00",
          event: "राजभोग आरती",
          location: "बड़े हनुमान मंदिर",
        },
        {
          time: "सायं 7:00",
          event: "शयन आरती",
          location: "बड़े हनुमान मंदिर",
        },
        {
          time: "प्रातः 6:00 - रात्रि 9:00",
          event: "दर्शन समय",
          location: "अलोपि देवी मंदिर",
        },
        {
          time: "सायं 6:30",
          event: "शाम की आरती",
          location: "अलोपि देवी मंदिर",
        },
        {
          time: "प्रातः 6:00 - रात्रि 9:00",
          event: "दर्शन समय",
          location: "मनकामेश्वर मंदिर",
        },
        {
          time: "प्रातः 7:00",
          event: "सप्तऋषि पूजा",
          location: "हनुमान मंदिर (संकट मोचन)",
        },
        {
          time: "दोपहर 12:00 - 12:30",
          event: "राजभोग दर्शन",
          location: "श्री वेणीमाधव मंदिर",
        },
        {
          time: "सायं 7:00",
          event: "आरती",
          location: "श्री वेणीमाधव मंदिर",
        },
      ],
    },
  ];

  return (
    <Layout>
      <main className="py-12 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-bhagwa-dark text-center font-serif mb-4">
            पूर्ण दर्शन कार्यक्रम
          </h1>
          <p className="text-center text-gray-700 mb-10">
            प्रयागराज के प्रमुख घाटों और मंदिरों में दैनिक पूजा-अर्चना का समय
          </p>

          <div className="max-w-3xl mx-auto bg-amber-50 rounded-lg p-6 shadow-md space-y-10">
            {fullSchedule.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-semibold text-bhagwa-dark mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white rounded-md p-3 shadow-sm"
                    >
                      <div className="bg-bhagwa-DEFAULT text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-bhagwa-dark">
                          {item.event}
                        </h3>
                        <p className="text-gray-600">
                          {item.time} | {item.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>    
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
