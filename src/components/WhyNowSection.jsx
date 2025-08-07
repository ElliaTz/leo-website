import { useState } from "react";

export default function WhyNowSection() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <section className="bg-why-now-gradient text-mist py-16 px-6 md:px-12 lg:px-24 font-inter">
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
      <div className="bg-gradient-to-b from-[#272E3B] via-[#53688F] to-[#272E3B] border border-sky rounded-xl text-center mb-12">
        <div className="grid grid-cols-2 grid-rows-2 rounded-xl overflow-hidden">
          {/* 1 */}
          <div className="border-b border-r border-white/20 px-6 py-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-ice font-semibold mb-1">
              Μετασχηματισμός Εργασίας
            </h3>
            <p className="text-sm text-mist font-extralight">
              ESG, Gen Z, τηλεργασία & αποστασιοποίηση αλλάζουν τον εργασιακό
              τοπίο.
            </p>
          </div>
          {/* 2 */}
          <div className="border-b border-white/20 px-6 py-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-ice font-semibold mb-1">Χαμηλή Συμμετοχή</h3>
            <p className="text-sm text-mist font-extralight">
              Αύξηση του κόστους μείωσης της παραγωγικότητας και αύξηση του
              κόστους αντικατάστασης.
            </p>
          </div>
          {/* 3 */}
          <div className="border-r border-white/20 px-6 py-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-ice font-semibold mb-1">Αναζήτηση Νοήματος</h3>
            <p className="text-sm text-mist font-extralight">
              Οι άνθρωποι δεν θέλουν μόνο μισθό, αλλά και φωνή, συμμετοχή,
              νόημα.
            </p>
          </div>
          {/* 4 */}
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
      <blockquote className="relative text-mist italic font-extralight text-4xl mb-12 text-center max-w-4xl mx-auto">
        {/* Quote icon */}
        <img
          src="/images/icons/iconQuote.png"
          alt="quote icon"
          className="absolute -top-6 -left-2 w-10 h-10 "
        />

        {/*  quote text */}
        <p>
          Η φωνή των εργαζομένων δεν είναι{" "}
          <span className="not-italic">nice-to-have</span>. Είναι{" "}
          <span className="font-semibold text-sky not-italic">
            business asset
          </span>
          .
        </p>
      </blockquote>

      {/* Contact + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact */}
        <div className="text-[#ACB9D2] text-sm ">
          <p className="text-center  text-sm font-extralight px-6 mt-3">
            Το LEO app είναι η απόδειξη ότι όταν οι εργαζόμενοι έχουν φωνή,
            δημιουργούν αξία, και η αξία αυτή είναι μετρήσιμη.
          </p>
          <div className="space-y-3">
            <p className="font-bold text-2xl mb-1 ml-8 mt-10">Contact</p>
            <div className="flex gap-3 items-start">
              <img
                src="/images/icons/iconPhone.png"
                alt="phone"
                className="w-6 h-6 "
              />
              <p className="text-base ">6951979547</p>
            </div>
            <div className="flex gap-3 items-start">
              <img
                src="/images/icons/iconEmail.png"
                alt="email"
                className="w-6 h-6 "
              />
              <p className="text-base">info@conferience.com</p>
            </div>
            <div className="flex gap-3 items-start">
              <img
                src="/images/icons/iconLocation.png"
                alt="location"
                className="w-6 h-6 "
              />
              <p className="text-base">
                12 Bishop Street, Leicester <br />
                LE1 6AF United Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#646e84] border border-[#D0D7DD] rounded-xl px-6 py-12 max-w-md mx-auto "
        >
          <div className="space-y-6">
            <div className="space-y-1 px-4">
              <label
                htmlFor="firstname"
                className="block text-lg text-[#2B3341] font-bold  "
              >
                Όνομα
              </label>
              <input
                type="text"
                placeholder="Όνομα"
                className="w-full px-4 py-2 rounded-md bg-[#D9D9D9] border-2 border-[#4269A7] text-black 
             placeholder:text-gray-500 placeholder:text-sm placeholder:font-light placeholder:opacity-75"
                name="firstname"
                onChange={(e) => handleChanges(e)}
                required
              />
            </div>

            <div className="space-y-1 px-4">
              <label
                htmlFor="lastname"
                className="block text-lg text-[#2B3341] font-bold"
              >
                Επώνυμο
              </label>
              <input
                type="text"
                placeholder="Επώνυμο"
                className="w-full px-4 py-2 rounded-md bg-[#D9D9D9] border-2 border-[#4269A7] text-black 
             placeholder:text-gray-500 placeholder:text-sm placeholder:font-light placeholder:opacity-75"
                name="lastname"
                onChange={(e) => handleChanges(e)}
                required
              />
            </div>

            <div className="space-y-1 px-4">
              <label
                htmlFor="email"
                className="block text-lg text-[#2B3341] font-bold"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-[#D9D9D9] border-2 border-[#4269A7] text-black 
             placeholder:text-gray-500 placeholder:text-sm placeholder:font-light placeholder:opacity-75"
                name="email"
                onChange={(e) => handleChanges(e)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-fit bg-gradient-to-b from-[#272E3B] via-[#455068] to-[#272E3B] 
             text-[#A0CEFD] rounded-xl font-semibold py-3 px-14 mx-auto block mt-12 "
          >
            ΞΕΚΙΝΑ ΤΩΡΑ
          </button>
        </form>
      </div>
      {/*Powered By */}
      <div className="flex items-center justify-center gap-2 mt-16 text-sm text-white opacity-80">
        <img
          src="/images/logoLeoLight.png"
          alt="LEO icon"
          className="h-9 object-contain"
        />
        <span className="font-extralight">is powered by</span>
        <img
          src="/images/logoConferience.png"
          alt="Conferience icon"
          className="h-5 object-contain"
        />
      </div>
    </section>
  );
}
