export default function HowAppWorksSection() {
  return (
    <section className="bg-midnight text-mist py-16 px-6 md:px-12 lg:px-24 font-inter">
      {/* Τίτλος */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="/images/LeoOrange.png"
            alt="leos icon"
            className="w-8 h-8"
          />
          <h2 className="text-xl md:text-2xl font-bold">
            Πώς λειτουργεί η εφαρμογή LEO app?
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Card 1 */}
        <div className="bg-[#2F3C55] p-6 rounded-2xl flex flex-col items-center border border-sky bg-gradient-to-r from-[#344e78] via-[#7B8BAC] to-[#455068]">
          <h3 className="text-lg font-semibold mb-2">
            Μοιράσου την εμπειρία σου
          </h3>
          <img
            src="/images/card1.png"
            alt="Μοίρασε την εμπειρία σου"
            className="rounded-xl mb-6 w-full max-w-[320px]  h-60 object-contain"
          />
          <p className="text-sm text-mist">
            Ο εργαζόμενος καταγράφει εμπειρία, συμβουλή ή περιστατικό απευθείας
            στην εφαρμογή.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2F3C55] p-6 rounded-2xl flex flex-col items-center border border-sky bg-gradient-to-r from-[#344e78] via-[#7B8BAC] to-[#455068]">
          <h3 className="text-lg font-semibold mb-2">
            Όλοι έχουν φωνή
            <br />Η φωνή γίνεται κοινότητα
          </h3>
          <img
            src="/images/card2.png"
            alt="Η φωνή γίνεται κοινότητα"
            className="rounded-xl mb-6 w-full max-w-[320px] h-60 object-contain"
          />
          <p className="text-sm text-mist">
            Η εμπειρία ανοίγει διάλογο, με σχόλια, αντιδράσεις και διανομή
            μεταξύ ρόλων.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2F3C55] p-6 rounded-2xl flex flex-col items-center border border-sky bg-gradient-to-r from-[#344e78] via-[#7B8BAC] to-[#455068]">
          <h3 className="text-lg font-semibold mb-2">Το νόημα αναδεικνύεται</h3>
          <img
            src="/images/card3.png"
            alt="Το νόημα αναδεικνύεται"
            className="rounded-xl mb-6 w-full max-w-[320px] h-60 object-contain"
          />
          <p className="text-sm text-mist">
            Η εφαρμογή εντοπίζει insights, αναδεικνύει σημεία και προτείνει
            δράσεις με βάση το περιεχόμενο.
          </p>
        </div>
      </div>

      {/* text below cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-center text-ice">
        <p className="text-xs italic text-ice_color">
          Αυθεντική, άμεση αφήγηση.
        </p>
        <p className="text-xs italic text-ice_color">
          Όλοι συμμετέχουν. Όλοι έχουν λόγο.
        </p>
        <p className="text-xs italic text-ice_color">
          Το AI βοηθά να ξεχωρίσει το ουσιαστικό.
        </p>
      </div>
    </section>
  );
}
