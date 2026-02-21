import { useState } from 'react';
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status messages when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
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
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: ''
        });
      } else {
        const data = await response.json();
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide success message after 5 seconds
      if (submitStatus === 'success') {
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
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
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-green-700 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                  <button 
                    onClick={() => setSubmitStatus(null)}
                    className="text-green-500 hover:text-green-700 transition-colors"
                  >
                    <FiXCircle className="w-4 h-4" />
                  </button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
                  <FiXCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-red-700 font-medium">Failed to send message</p>
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  </div>
                  <button 
                    onClick={() => setSubmitStatus(null)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FiXCircle className="w-4 h-4" />
                  </button>
                </div>
              )}

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
              <div className="relative">
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
                <div className="absolute right-3 top-[calc(50%+12px)] transform -translate-y-1/2 pointer-events-none">
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
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
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

      {/* Add animation styles */}
      {/* <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style> */}
    </section>
  );
};

export default Contact;