export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-dark to-steel text-mist spx-6 py-4 flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-24">
      {/* Logo */}
      <div className="flex items-center space-x-12">
        <img src="/images/logoLeoLight.png" alt="LEO" className="w-24 h-auto" />
      </div>

      {/* Links */}
      <ul className="flex space-x-10  text-sm md:text-base lg:text-lg  font-thin">
        <li>
          <a href="#" className="hover:text-white">
            Τι είναι
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Οφέλη
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Πώς λειτουργεί
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Αποτελέσματα
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Επικοινωνία
          </a>
        </li>
      </ul>

      {/* Call to Action */}
      <a
        href="#"
        className="bg-gradient-to-b from-[#455068] via-white to-[#455068] text-[#2C3961] font-semibold px-4 py-2 rounded-lg border border-[#4269A7] shadow-md hover:opacity-90 transition"
      >
        ΞΕΚΙΝΑ ΤΩΡΑ
      </a>
    </nav>
  );
}
