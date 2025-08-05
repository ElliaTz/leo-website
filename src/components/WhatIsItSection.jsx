import { HiArrowRight } from "react-icons/hi";

export default function WhatIsItSection() {
  return (
    <section className="bg-midnight text-mist py-16 px-6 md:px-12 lg:px-24 font-inter">
      <div>
        {/*Title texts */}
        <div className="text-center mb-12">
          {/* title */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <img
              src="/images/LeoOrange.png"
              alt="Leo icon"
              className="w-8 h-8"
            />
            <h2 className="text-xl md:text-2xl font-bold">
              Τι είναι το Lead Experience Officer (LEO) app?
            </h2>
          </div>

          {/* subtitle */}
          <p className="italic  font-thin">
            Η φωνή της πρώτης γραμμής γίνεται στρατηγικό εργαλείο{" "}
            <span className="font-semibold ">χωρίς</span> να διακόπτει την{" "}
            <span className="font-semibold ">καθημερινή ροή</span>.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bullet Points */}
          <ul className="space-y-4 text-sm md:text-base">
            <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
              <img
                src="/images/icons/iconSpeaking.png"
                alt="Voice icon"
                className="w-8 h-8 "
              />
              <span className="mt-1">
                Δίνει<span className="text-sky font-medium"> φωνή</span> στους
                εργαζομένους{" "}
                <span className="text-sky font-medium">όλων των επιπέδων</span>
              </span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
              <img
                src="/images/icons/iconFilament.png"
                alt="Share icon"
                className="w-8 h-8 "
              />
              <span className="mt-1">
                Μετατρέπει καθημερινές εμπειρίες σε{" "}
                <span className="text-sky font-medium">κοινή γνώση</span>
              </span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
              <img
                src="/images/icons/iconEnvironment.png"
                alt="ESG icon"
                className="w-8 h-8 "
              />
              <span className="mt-1">
                Παρέχει <span className="text-sky font-medium">αυθεντικό</span>{" "}
                ESG/CSR περιεχόμενο
              </span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
              <img
                src="/images/icons/iconLink.png"
                alt="Link icon"
                className="w-8 h-8"
              />
              <span className="mt-1">
                Συνδέει{" "}
                <span className="text-sky font-medium">όλα τα επίπεδα</span> της
                εταιρείας
              </span>
            </li>
            <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
              <img
                src="/images/icons/iconHandshake.png"
                alt="Team icon"
                className="w-8 h-8 "
              />
              <span className="mt-1">
                Ενισχύει τη <span className="text-sky font-medium">συνοχή</span>{" "}
                & την κουλτούρα
              </span>
            </li>
          </ul>

          {/* Illustration Image */}
          <div className="flex justify-center">
            <img
              src="/images/imageConnectionTalk.png"
              alt="LEO Illustration"
              className="max-w-sm w-full h-auto"
            />
          </div>
        </div>
        {/* Bottom Line */}
        <p className="mt-12 italic text-center font-semibold">
          <span className="text-white">Real-time εμπειρία</span>{" "}
          <HiArrowRight className="inline text-white mx-2 text-lg" />
          <span className="text-white">Real-time απόφαση.</span>
        </p>
      </div>
    </section>
  );
}
