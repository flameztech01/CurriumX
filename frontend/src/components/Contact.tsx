import { useState } from 'react';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission here
    console.log('Form submitted:', formData);
    setTimeout(() => setIsSubmitting(false), 1500); // Simulate submission
  };

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Brand Identity',
    'Technical Consulting',
    'Other'
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6A0DAD]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4B0082]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, #6A0DAD 1px, transparent 1px),
                          linear-gradient(to bottom, #6A0DAD 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <span className="text-[#6A0DAD] font-semibold text-sm uppercase tracking-wider mb-2 block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] bg-clip-text text-transparent">
                  Let's Build Something Exceptional
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] rounded-full mb-6"></div>
              <p className="text-lg text-[#6E6E6E] max-w-lg">
                Have an idea or project in mind? Let's bring it to life.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#F9F9F9] rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6A0DAD] to-[#4B0082] rounded-lg flex items-center justify-center text-white">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E]">Email us directly at:</p>
                  <a href="mailto:hello@curriumx.com" className="text-[#4B0082] hover:text-[#6A0DAD] font-medium transition-colors">
                    hello@curriumx.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F9F9F9] rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6A0DAD] to-[#4B0082] rounded-lg flex items-center justify-center text-white">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E]">Call us:</p>
                  <a href="tel:+1234567890" className="text-[#4B0082] hover:text-[#6A0DAD] font-medium transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F9F9F9] rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6A0DAD] to-[#4B0082] rounded-lg flex items-center justify-center text-white">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E]">Visit us:</p>
                  <p className="text-[#4B0082] font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-6">
              <p className="text-sm text-[#9E9E9E] mb-3">Trusted by innovative companies</p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                    <span className="text-[#6E6E6E] font-bold text-xs">Logo{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#F2F2F2]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
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
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#F2F2F2] rounded-lg focus:outline-none focus:border-[#6A0DAD] focus:ring-2 focus:ring-[#6A0DAD]/20 transition-all duration-300 text-[#4B4B4B]"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
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
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#F2F2F2] rounded-lg focus:outline-none focus:border-[#6A0DAD] focus:ring-2 focus:ring-[#6A0DAD]/20 transition-all duration-300 text-[#4B4B4B]"
                  placeholder="your@email.com"
                />
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-[#4B0082] mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#F2F2F2] rounded-lg focus:outline-none focus:border-[#6A0DAD] focus:ring-2 focus:ring-[#6A0DAD]/20 transition-all duration-300 text-[#4B4B4B] appearance-none cursor-pointer"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#6E6E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4B0082] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#F2F2F2] rounded-lg focus:outline-none focus:border-[#6A0DAD] focus:ring-2 focus:ring-[#6A0DAD]/20 transition-all duration-300 text-[#4B4B4B] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-6 py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-semibold rounded-lg text-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FiSend className="group-hover:rotate-12 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Under Form Email */}
              <div className="text-center pt-4">
                <p className="text-sm text-[#6E6E6E]">
                  Or email us directly at:{' '}
                  <a 
                    href="mailto:hello@curriumx.com" 
                    className="text-[#6A0DAD] hover:text-[#4B0082] font-medium transition-colors"
                  >
                    hello@curriumx.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-[#9E9E9E]">
            <span>✨</span>
            <span>We typically respond within 24 hours</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;