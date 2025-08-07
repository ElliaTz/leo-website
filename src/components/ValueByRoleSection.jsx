import { HiArrowRight } from "react-icons/hi";

export default function ValueByRoleSection() {
  return (
    <section className="bg-mist bg-[url('/images/leoBgLeftRight.png')] bg-no-repeat bg-center bg-cover py-16 px-6 md:px-12 lg:px-24 font-inter text-dark">
      <div className="text-center mb-12">
        {/* title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/images/LeoDark.png" alt="leos icon" className="w-8 h-8" />
          <h2 className="text-xl md:text-2xl font-bold">Αξία για κάθε ρόλο</h2>
        </div>

        {/* subtitle */}
        <p className="italic  font-extralight">
          Ένα οικοσύστημα συμμετοχής, όπου κάθε ρόλος αποκτά φωνή και επίδραση.
        </p>
      </div>
      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-12 text-center">
        {/* Κάρτα 1 */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">
            Εργαζόμενοι σε λειτουργικούς ρόλους
          </h3>
          <div className="bg-midnight text-mist bg-opacity-90 p-4 rounded-xl w-full max-w-md h-full">
            <p className="font-semibold mb-2 min-h-[50px] ">
              Φωνή, Αναγνώριση, Υπερηφάνεια, Ανάδειξη εμπειρίας
            </p>
            <p className="text-sm">
              Η καθημερινή εμπειρία αποκτά φωνή και μετατρέπεται σε γνώση που
              εμπνέει και συνδέει.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">
            Ανθρώπινο Δυναμικό & Ανάπτυξη
          </h3>
          <div className="bg-midnight text-mist  bg-opacity-90 p-4 rounded-xl w-full max-w-md h-full">
            <p className="font-semibold mb-2 min-h-[50px]">
              Υλικό κουλτούρας & ενσωμάτωσης
            </p>
            <p className="text-sm ">
              Αυθεντικό υλικό για ένταξη, εκπαίδευση και διατήρηση ανθρώπων,
              χωρίς έξτρα κόστος.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">
            Διοίκηση & κεντρικά τμήματα
          </h3>
          <div className="bg-midnight text-mist bg-opacity-90 p-4 rounded-xl w-full max-w-md h-full">
            <p className="font-semibold mb-2 min-h-[50px]">
              Ρεαλιστική εικόνα πεδίου
              <span>
                <HiArrowRight className="inline text-mist mx-2 text-lg" />
              </span>
              <br />
              σωστή στρατηγική
            </p>
            <p className="text-sm">
              Πραγματική εικόνα καθημερινότητας. Η εμπειρία από το πεδίο γίνεται
              εργαλείο κατεύθυνσης και απόφασης.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">ESG, CSR, DEI</h3>
          <div className="bg-midnight text-mist bg-opacity-90 p-4 rounded-xl w-full max-w-md h-full">
            <p className="font-semibold mb-2 min-h-[50px]">
              Αυθεντικό περιεχόμενο με κοινωνικό αντίκτυπο
            </p>
            <p className="text-sm">
              Το storytelling φέρνει αυθεντικότητα, εμπιστοσύνη και μετρήσιμο
              περιεχόμενο με αξία.
            </p>
          </div>
        </div>
      </div>
      {/* text below cards */}
      <p className="mt-12 italic  font-extralight text-center text-midnight">
        Το LEO δεν λειτουργεί για ένα ρόλο. <br />
        Είναι μία πλατφόρμα όπου <span className="font-semibold">
          κάθε
        </span>{" "}
        φωνή έχει θέση, και <span className="font-semibold">κάθε</span> ρόλος
        έχει λόγο.
      </p>
    </section>
  );
}
