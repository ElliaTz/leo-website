export default function PilotKPISection() {
  return (
    <section className="bg-[#d0d7dd] px-6 md:px-12 lg:px-24 py-16 font-inter">
      <div className="text-center mb-12">
        {/* title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/images/LeoDark.png" alt="leos icon" className="w-8 h-8" />
          <h2 className="text-xl md:text-2xl font-bold">
            Pilot KPIs σε 6 εβδομάδες
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4 w-full text-center  max-w-md">
          <div className="bg-ice text-midnight border-2 border-dark py-6 rounded-lg text-sm font-bold">
            &gt;50% Συμμετοχή Συμμετεχόντων
          </div>
          <div className="bg-midnight text-mist border-2 border-dark py-6 rounded-lg text-sm font-bold">
            Ενεργοποίηση ESG/Safety policies
          </div>
          <div className="bg-ice text-midnight  border-2 border-dark py-6 rounded-lg text-sm font-bold">
            Νέοι εργαζόμενοι που νιώθουν ότι συμβάλλουν
          </div>
          <div className="bg-midnight text-mist border-2 border-dark py-6 rounded-lg text-sm font-bold">
            &gt;50% Διαμοιρασμένες Ιστορίες
          </div>
        </div>

        {/* right: image */}
        <div className="flex justify-center items-end h-full">
          <img
            src="/images/imageLevelUp.png"
            alt="KPI Growth"
            className="max-h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
