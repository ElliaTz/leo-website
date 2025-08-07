export default function AppChangeSection() {
  return (
    <section className="bg-mist py-16 px-6 md:px-12 lg:px-24 font-inter text-dark">
      {/* Title */}

      <div className="text-center mb-12">
        {/* title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/images/LeoDark.png" alt="leos icon" className="w-8 h-8" />
          <h2 className="text-xl md:text-2xl font-bold">
            Η αλλαγή που φέρνει το LEO app
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-midnight text-mist grid grid-cols-1 md:grid-cols-2  overflow-hidden">
        {/* Επικεφαλίδες */}
        <div className="bg-dark p-4 px-10 font-bold text-2xl border-r border-mist border-opacity-50">
          Πριν
        </div>
        <div className="bg-dark py-4 px-10 text-2xl font-bold ">Μετά</div>

        {/*  rows */}
        <div className="p-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCrossmark.png"
            alt="tick"
            className="w-8 h-8 "
          />
          <p className="pt-1">
            Εργαζόμενοι χωρίς φωνή, απουσία καναλιών έκφρασης
          </p>
        </div>
        <div className="p-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCheckmark.png"
            alt="tick"
            className="w-8 h-8"
          />
          <p className="pt-1 text-sky ">
            Οι εμπειρίες της πρώτης γραμμής ακούγονται και διαμορφώνουν
            στρατηγική
          </p>
        </div>

        <div className="px-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCrossmark.png"
            alt="tick"
            className="w-8 h-8"
          />
          <p className="pt-1">Αποσύνδεση διοίκησης από πραγματικότητα</p>
        </div>
        <div className="px-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCheckmark.png"
            alt="tick"
            className="w-8 h-8"
          />
          <p className="pt-1 text-sky">
            Συμμετρική ορατότητα σε όλα τα επίπεδα, από HQ έως πρώτη γραμμή
          </p>
        </div>

        <div className="p-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCrossmark.png"
            alt="tick"
            className="w-8 h-8"
          />
          <p className="pt-1">ESG & CSR χωρίς συμμετοχή, απρόσωπα reports</p>
        </div>
        <div className="p-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCheckmark.png"
            alt="tick"
            className="w-8 h-8"
          />
          <p className="pt-1 text-sky">
            Αυθεντικές ιστορίες με ανθρώπινο αποτύπωμα για ESG/CSR
          </p>
        </div>

        <div className="px-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCrossmark.png"
            alt="tick"
            className="w-8 h-8 "
          />
          <p className="pt-1">Κουλτούρα σε σιγή, σιωπή, απόσταση</p>
        </div>
        <div className="px-10 pb-10 border-r border-mist border-opacity-50 flex gap-3 items-start">
          <img
            src="/images/icons/iconCheckmark.png"
            alt="tick"
            className="w-8 h-8"
          />
          <p className="pt-1 text-sky">
            Κοινότητα, συμμετοχή, υπερηφάνεια, σύνδεση
          </p>
        </div>
      </div>

      {/* text below the table*/}
      <p className="mt-8 text-center italic font-extralight text-sm md:text-base text-[#272E3B]">
        Όταν η εμπειρία της πρώτης γραμμής συναντά την απόφαση των γραφείων, η
        κουλτούρα γίνεται{" "}
        <span className="text-[#4269A7] font-bold">ενεργή</span>.
      </p>
    </section>
  );
}
