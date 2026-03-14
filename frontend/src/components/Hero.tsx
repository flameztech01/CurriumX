import { FiSend, FiEye } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/image1.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />

        {/* Exact dark overlay style like template */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117]/95 via-[#0f1117]/80 to-[#0f1117]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">

          {/* Label */}
          <span className="text-sm tracking-widest text-gray-300 uppercase mb-4 block">
            IT SOFTWARE SOLUTION
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            IT Software
            <br />
            Tech & Solutions
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-lg max-w-xl mb-10">
            CurriumX builds powerful digital systems, websites and applications
            that help businesses scale, innovate and dominate online.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold px-8 py-4 rounded shadow-lg transition"
            >
              <FiSend />
              Start Project
            </a>

            <a
              href="#our-work"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded hover:bg-white/10 transition"
            >
              <FiEye />
              View Portfolio
            </a>

          </div>
        </div>

        {/* Stats cards like the design */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-full max-w-md lg:max-w-xl">
          {/* <div className="bg-white shadow-xl rounded flex overflow-hidden">

            <div className="flex-1 text-center py-6 px-4">
              <h3 className="text-2xl font-bold text-[#111]">99.0K</h3>
              <p className="text-gray-500 text-sm">Total Customers</p>
            </div>

            <div className="w-[1px] bg-gray-200"></div>

            <div className="flex-1 text-center py-6 px-4">
              <h3 className="text-2xl font-bold text-[#111]">100%</h3>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>

          </div> */}
        </div>

      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1117] to-transparent"></div>
    </section>
  );
};

export default Hero;