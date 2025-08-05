export default function HeroSection() {
  return (
    <section className="font-inter bg-mist pl-16  pr-24 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text title and Subtitle */}
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-dark mb-6">
            Το <span className="text-ocean">1ο</span> ενδοεταιρικό
            <br />
            Social Learning εργαλείο,
            <br />
            βασισμένο σε <br />
            <span className="bg-gradient-to-r from-[#344e78]  to-[#4268a5] bg-clip-text text-transparent">
              πραγματικές εμπειρίες
            </span>
            <br />
            απο το πεδίο.
          </h1>
          <p className="text-sm md:text-base text-[#333B4B] mb-8">
            Το L.E.O. app μεταμορφώνει τον τρόπο που οι άνθρωποι <br />
            συνδέονται, επικοινωνούν και συνεισφέρουν, αναδεικνύοντας <br />
            εμπειρίες εργαζομένων και μετατρέποντάς τες σε στρατηγική.
          </p>
          {/*Button for action */}
          <button className="bg-gradient-to-b from-[#272E3B] via-[#455068] to-[#272E3B] text-[#A0CEFD] font-thin px-6 py-3 rounded-lg border border-[#4269A7] shadow-md hover:opacity-90 transition">
            Ζήσε την Εμπειρία LEO
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center relative w-[280px]">
          <div className="relative h-[400px] w-full">
            <img
              src="/images/heroSectionCard1.png"
              className="absolute top-0 left-0 w-[260px] h-[231px] object-contain rounded-xl shadow-xl z-10"
            />
            <img
              src="/images/heroSectionCard2.png"
              className="absolute top-[100px] left-10 w-[260px] h-[260px] object-contain rounded-xl shadow-xl z-20"
            />
          </div>

          <p className="absolute top-[370px] left-10 ml-10 mt-2 text-xs text-[#2B3961] font-black tracking-wider">
            LEAD EXPERIENCE OFFICER
          </p>
        </div>
      </div>
    </section>
  );
}
