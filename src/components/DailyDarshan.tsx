"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import FadeIn from "./motion/FadeIn";

// components/DailyDarshan.js
export default function DailyDarshan() {
  const ghatDarshans = [
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
  ];

  const templeDarshans = [
    {
      time: "रात्रि 8:00 - 9:00",
      event: "शयन आरती",
      location: "अक्षयवट मंदिर",
    },
    {
      time: "प्रातः 7:00 - 8:00",
      event: "सप्तऋषि पूजा",
      location: "हनुमान मंदिर",
    },
    {
      time: "दोपहर 12:00 - 12:30",
      event: "राजभोग दर्शन",
      location: "श्री वेणीमाधव मंदिर",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-bhagwa-dark mb-2 text-center font-serif">
            दैनिक दर्शन कार्यक्रम
          </h2>
          <div className="w-24 h-1 bg-bhagwa-dark mx-auto mb-8"></div>
        </FadeIn>

        <FadeIn delay={0.15} className="max-w-3xl mx-auto bg-amber-50 rounded-lg p-6 shadow-md space-y-8">

          {/* घाट दर्शन */}
          <div>
            <h3 className="text-xl font-semibold text-bhagwa-dark mb-4">🌊 घाट दर्शन</h3>
            <div className="space-y-4">
              {ghatDarshans.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-bhagwa-DEFAULT text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bhagwa-dark">{item.event}</h4>
                    <p className="text-gray-600">{item.time} | {item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* मंदिर दर्शन */}
          <div>
            <h3 className="text-xl font-semibold text-bhagwa-dark mb-4">🏛️ मंदिर दर्शन</h3>
            <div className="space-y-4">
              {templeDarshans.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-bhagwa-DEFAULT text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bhagwa-dark">{item.event}</h4>
                    <p className="text-gray-600">{item.time} | {item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link to full schedule */}
          <div className="pt-4 text-center">
            <Link
              href="/darshan-schedule"
              className="inline-flex items-center text-bhagwa-dark font-medium hover:underline"
            >
              पूरा कार्यक्रम देखें <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
