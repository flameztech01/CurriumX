import { useState } from "react";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xqedyeka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        const data = await response.json();
        setSubmitStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Brand Identity",
    "Technical Consulting",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-28 bg-[#11131A] overflow-hidden"
    >
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      {/* soft glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#6A0DAD]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-400 block mb-4">
            Contact Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Something Exceptional
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an idea, project, or business need in mind? Let&apos;s talk about how
            CurriumX can help bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-7 items-start">
          {/* Left side */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Your Project With Us
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                We work with brands, businesses, and individuals to create modern digital
                solutions that are clean, functional, and built for growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-[#1B1E28] border border-white/10 flex items-center justify-center text-[#C0C0C0] shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:curriumxtech@gmail.com"
                    className="text-white font-semibold hover:text-[#C0C0C0] transition-colors break-all"
                  >
                    curriumxtech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-[#1B1E28] border border-white/10 flex items-center justify-center text-[#C0C0C0] shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone / WhatsApp</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://wa.me/2347025693976"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-[#C0C0C0] transition-colors"
                    >
                      07025693976
                    </a>
                    <a
                      href="https://wa.me/2349063229518"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-[#C0C0C0] transition-colors"
                    >
                      09063229518
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-[#1B1E28] border border-white/10 flex items-center justify-center text-[#C0C0C0] shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-white font-semibold">
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#6A0DAD] via-[#7b2be0] to-[#C0C0C0]" />
              <p className="text-xl md:text-2xl font-light italic text-white text-center leading-relaxed">
                “Great digital products start with a simple conversation.”
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === "success" && (
                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-400/20 rounded-xl">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-green-300 font-semibold">Message sent successfully</p>
                    <p className="text-green-200/80 text-sm">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="text-green-300 hover:text-green-200"
                  >
                    <FiXCircle className="w-4 h-4" />
                  </button>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-400/20 rounded-xl">
                  <FiXCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-red-300 font-semibold">Failed to send message</p>
                    <p className="text-red-200/80 text-sm">{errorMessage}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="text-red-300 hover:text-red-200"
                  >
                    <FiXCircle className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#1B1E28] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/30 focus:border-[#6A0DAD] transition-all text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#1B1E28] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/30 focus:border-[#6A0DAD] transition-all text-white placeholder:text-gray-500"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1B1E28] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/30 focus:border-[#6A0DAD] transition-all text-white appearance-none cursor-pointer"
                >
                  <option value="" className="text-gray-700">
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="text-gray-800">
                      {type}
                    </option>
                  ))}
                </select>

                <div className="absolute right-4 top-[calc(50%+12px)] -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-[#1B1E28] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/30 focus:border-[#6A0DAD] transition-all text-white placeholder:text-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-sm text-gray-400">
                  Or send an email directly to{" "}
                  <a
                    href="mailto:curriumxtech@gmail.com"
                    className="text-[#C0C0C0] font-medium hover:text-white transition-colors"
                  >
                    curriumxtech@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-gray-400">
            <span>✨</span>
            <span>We typically respond within 24 hours</span>
            <span>✨</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;