import React, { useState } from 'react';
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xqedyeka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        const data = await response.json();
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Brand Identity',
    'Technical Consulting',
    'Other',
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#F8F8FC] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6A0DAD]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4B0082]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
              Contact Us
            </span>
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B0082] mb-4">
            Let&apos;s Build Something Exceptional
          </h2>

          <p className="text-[#6E6E6E] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an idea, project, or business need in mind? Let&apos;s talk about how
            CurriumX can help bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left side */}
          <div className="space-y-6">
            <div className="bg-white border border-[#ECECEC] rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-[#4B0082] mb-4">
                Start Your Project With Us
              </h3>
              <p className="text-[#6E6E6E] text-base md:text-lg leading-relaxed">
                We work with brands, businesses, and individuals to create modern digital
                solutions that are clean, functional, and built for growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white border border-[#ECECEC] rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A0DAD] to-[#4B0082] flex items-center justify-center text-white shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E] mb-1">Email</p>
                  <a
                    href="mailto:curriumxtech@gmail.com"
                    className="text-[#4B0082] font-semibold hover:text-[#6A0DAD] transition-colors break-all"
                  >
                    curriumxtech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-[#ECECEC] rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A0DAD] to-[#4B0082] flex items-center justify-center text-white shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E] mb-1">Phone / WhatsApp</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://wa.me/2347025693976"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4B0082] font-semibold hover:text-[#6A0DAD] transition-colors"
                    >
                      07025693976
                    </a>
                    <a
                      href="https://wa.me/2349063229518"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4B0082] font-semibold hover:text-[#6A0DAD] transition-colors"
                    >
                      09063229518
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-[#ECECEC] rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A0DAD] to-[#4B0082] flex items-center justify-center text-white shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E] mb-1">Location</p>
                  <p className="text-[#4B0082] font-semibold">
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] rounded-3xl p-8 text-white">
              <p className="text-xl md:text-2xl font-light italic text-center">
                “Great digital products start with a simple conversation.”
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#ECECEC] p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <FiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-green-700 font-semibold">Message sent successfully</p>
                    <p className="text-green-600 text-sm">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <FiXCircle className="w-4 h-4" />
                  </button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <FiXCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-red-700 font-semibold">Failed to send message</p>
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FiXCircle className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4B0082] mb-2">
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
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EAEAEA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/20 focus:border-[#6A0DAD] transition-all text-[#333]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4B0082] mb-2">
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
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EAEAEA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/20 focus:border-[#6A0DAD] transition-all text-[#333]"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-[#4B0082] mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EAEAEA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/20 focus:border-[#6A0DAD] transition-all text-[#333] appearance-none cursor-pointer"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <div className="absolute right-4 top-[calc(50%+12px)] -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#6E6E6E]"
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
                  className="block text-sm font-medium text-[#4B0082] mb-2"
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
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EAEAEA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/20 focus:border-[#6A0DAD] transition-all text-[#333] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F28C38] hover:bg-[#dd7c2d] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
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
                <p className="text-sm text-[#6E6E6E]">
                  Or send an email directly to{' '}
                  <a
                    href="mailto:curriumxtech@gmail.com"
                    className="text-[#6A0DAD] font-medium hover:text-[#4B0082] transition-colors"
                  >
                    curriumxtech@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-[#8A8A8A]">
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