export default function WhyNowSection() {
  return (
    <section className="bg-midnight text-mist py-16 px-6 md:px-12 lg:px-24 font-inter">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="/images/LeoOrange.png"
            alt="leos icon"
            className="w-8 h-8"
          />
          <h2 className="text-xl md:text-2xl font-bold">Γιατί τώρα;</h2>
        </div>
        {/*Subtitle */}
        <p className="italic  font-extralight">
          Ο κόσμος της εργασίας αλλάζει ριζικά.
          <br /> Οι άνθρωποι δεν ζητούν απλώς εργασία, ζητούν{" "}
          <span className="font-semibold ">φωνή</span>,{" "}
          <span className="font-semibold ">σύνδεση</span> και{" "}
          <span className="font-semibold "> νόημα.</span>
        </p>
      </div>

      {/*block with 4 elements */}
      <div className="bg-gradient-to-b from-[#272E3B] via-[#53688F] to-[#272E3B] border border-sky rounded-xl  text-center mb-12">
        <div className="grid grid-cols-2 grid-rows-2 divide-x divide-y divide-white/30  rounded-xl overflow-hidden">
          <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-ice font-semibold mb-1">
              Μετασχηματισμός Εργασίας
            </h3>
            <p className="text-sm text-mist font-extralight">
              ESG, Gen Z, τηλεργασία & αποστασιοποίηση αλλάζουν τον εργασιακό
              τοπίο.
            </p>
          </div>
          <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-ice font-semibold mb-1">Χαμηλή Συμμετοχή</h3>
            <p className="text-sm text-mist font-extralight">
              Αύξηση του κόστους μείωσης της παραγωγικότητας και αύξηση του
              κόστους αντικατάστασης.
            </p>
          </div>
          <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-ice font-semibold mb-1">Αναζήτηση Νοήματος</h3>
            <p className="text-sm text-mist font-extralight">
              Οι άνθρωποι δεν θέλουν μόνο μισθό, αλλά και φωνή, συμμετοχή,
              νόημα.
            </p>
          </div>
          <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-ice font-semibold mb-1">
              Ανθεκτικότητα & Απόδοση
            </h3>
            <p className="text-sm text-mist font-extralight">
              Οι εταιρείες με κουλτούρα φωνής είναι πιο ευέλικτες & αποδοτικές.
            </p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="italic  text-center text-mist font-extralight mb-12 text-4xl">
        Η φωνή των εργαζομένων δεν είναι{" "}
        <span className="not-italic">nice-to-have</span>. Είναι{" "}
        <span className="font-semibold text-sky not-italic">
          business asset
        </span>
        .
      </blockquote>
    </section>
  );
}
