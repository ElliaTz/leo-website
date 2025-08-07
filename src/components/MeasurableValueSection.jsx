import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
export default function MeasurableValueSection() {
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
          <h2 className="text-xl md:text-2xl font-bold">
            Μετρήσιμη αξία, πραγματικά οφέλη
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* left: benefits */}
        <div className="flex flex-col justify-center space-y-6 text-center ">
          {/* Κάθε όφελος */}
          <div>
            <p className="font-semibold text-base mb-2 text-ice">
              Συνοχή & συνεργασία
            </p>
            <div className="bg-[#D9D9D9] text-dark_blue_gray  px-4 py-3 text-xs">
              <span>
                <HiArrowNarrowDown className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Silos,
              <span>
                <HiArrowNarrowUp className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Ευελιξία,
              <span>
                <HiArrowNarrowUp className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Υλοποίηση
            </div>
          </div>

          <div>
            <p className="font-semibold text-base mb-2 text-ice">
              Επιχειρησιακή ασφάλεια
            </p>
            <div className="bg-[#D9D9D9] text-dark_blue_gray px-4 py-3 text-xs">
              <span>
                <HiArrowNarrowDown className="inline text-dark_blue_gray mr-0.5 text-lg w-4 h-4 align-middle" />
              </span>
              Ρίσκα,
              <span>
                <HiArrowNarrowDown className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Καθυστερήσεις,
              <span>
                <HiArrowNarrowUp className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Πρόληψη
            </div>
          </div>

          <div>
            <p className="font-semibold text-base mb-2 text-ice">
              ESG & HR περιεχόμενο
            </p>
            <div className="bg-[#D9D9D9] text-dark_blue_gray  px-4 py-3 text-xs">
              <span>
                <HiArrowNarrowDown className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Εξωτερικές πιέσεις,
              <span>
                <HiArrowNarrowUp className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Αξιοπιστία
            </div>
          </div>

          <div>
            <p className="font-semibold text-base mb-2 text-ice">
              Δέσμευση & Retention
            </p>
            <div className="bg-[#D9D9D9] text-dark_blue_gray  px-4 py-3 text-xs">
              <span>
                <HiArrowNarrowDown className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Αποχωρήσεις,
              <span>
                <HiArrowNarrowUp className="inline text-dark_blue_gray mr-0.5 text-lg  w-4 h-4 align-middle" />
              </span>
              Loyalty,
              <span>
                <HiArrowNarrowDown className="inline text-dark_blue_gray mr-0.5 text-lg w-4 h-4 align-middle" />
              </span>
              Κόστος αντικατάστασης
            </div>
          </div>
        </div>

        {/* right: image */}
        <div className="flex justify-center items-end h-full">
          <img
            src="/images/imageCircularFlow.png"
            alt="Μετρήσιμη αξία"
            className="max-h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
