import { useMemo, useState } from "react";
import {
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiHeart,
  FiX,
} from "react-icons/fi";

type ModalType = "privacy" | "terms" | null;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/curriumx",
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/curriumx",
      icon: <FiTwitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/curriumxtechnologies",
      icon: <FiInstagram className="w-5 h-5" />,
    },
  ];

  const modalContent = useMemo(() => {
    if (activeModal === "privacy") {
      return {
        title: "Privacy Policy",
        content: (
          <>
            <p className="text-[#5F5F5F] leading-relaxed">
              At CurriumX, we respect your privacy and are committed to protecting
              the personal information you share with us through this website.
            </p>

            <div className="space-y-4 mt-6 text-[#5F5F5F]">
              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Information We Collect</h4>
                <p className="leading-relaxed">
                  When you contact us through our forms or direct communication channels,
                  we may collect details such as your name, email address, project type,
                  and any information you choose to include in your message.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">How We Use Your Information</h4>
                <p className="leading-relaxed">
                  We use your information solely to respond to inquiries, discuss potential
                  projects, provide our services, and improve communication with clients
                  and prospective clients.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Data Protection</h4>
                <p className="leading-relaxed">
                  We take reasonable steps to safeguard the information submitted through
                  our website. However, no online platform can guarantee absolute security,
                  so users should avoid sending highly sensitive information through public forms.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Third Party Services</h4>
                <p className="leading-relaxed">
                  Some features of this website may rely on trusted third party services
                  such as form handling, hosting, analytics, or media delivery tools.
                  These services may process data as required to make the website function properly.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Your Rights</h4>
                <p className="leading-relaxed">
                  You may request clarification about the information you have submitted to us,
                  or ask that we update or delete it where reasonably applicable.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Contact</h4>
                <p className="leading-relaxed">
                  For privacy related questions, please contact us at{" "}
                  <a
                    href="mailto:curriumxtech@gmail.com"
                    className="text-[#6A0DAD] font-medium hover:text-[#4B0082]"
                  >
                    curriumxtech@gmail.com
                  </a>.
                </p>
              </div>
            </div>
          </>
        ),
      };
    }

    if (activeModal === "terms") {
      return {
        title: "Terms of Service",
        content: (
          <>
            <p className="text-[#5F5F5F] leading-relaxed">
              These Terms of Service govern the use of the CurriumX website and any
              inquiries or service requests made through it.
            </p>

            <div className="space-y-4 mt-6 text-[#5F5F5F]">
              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Use of Website</h4>
                <p className="leading-relaxed">
                  This website is intended to provide information about CurriumX, our services,
                  and our work. Users are expected to use the site lawfully and respectfully.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Project Inquiries</h4>
                <p className="leading-relaxed">
                  Submitting a message through our contact form or other communication channels
                  does not automatically establish a client relationship, partnership, or service agreement.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Intellectual Property</h4>
                <p className="leading-relaxed">
                  All branding, written content, visual assets, layouts, and original materials
                  on this website belong to CurriumX unless otherwise stated. They may not be copied,
                  reproduced, or redistributed without permission.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Service Scope</h4>
                <p className="leading-relaxed">
                  Any actual project engagement, pricing, timelines, deliverables, and obligations
                  will be defined separately through direct communication and formal agreement where applicable.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Limitation of Liability</h4>
                <p className="leading-relaxed">
                  While we strive to keep website information accurate and up to date, CurriumX
                  does not guarantee that all content will always be complete, error free, or
                  uninterrupted at all times.
                </p>
              </div>

              <div>
                <h4 className="text-[#4B0082] font-semibold mb-2">Updates</h4>
                <p className="leading-relaxed">
                  We may revise these terms from time to time to reflect business, legal,
                  or website changes. Continued use of the site implies acceptance of any updated terms.
                </p>
              </div>
            </div>
          </>
        ),
      };
    }

    return null;
  }, [activeModal]);

  return (
    <>
      <footer className="relative bg-[#0F1117] text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#6A0DAD]/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-white/5 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20">
          {/* Top card */}
          <div className="bg-white rounded-[28px] border border-[#ECECEC] shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#6A0DAD] via-[#7b2be0] to-[#C0C0C0]" />

            <div className="px-6 md:px-10 py-10 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Brand */}
                <div className="md:col-span-5">
                  <div className="mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      <span className="text-[#4B0082]">Currium</span>
                      <span className="text-[#C0C0C0]">X</span>
                    </h2>
                  </div>

                  <p className="text-[#5F5F5F] text-base md:text-lg max-w-md leading-relaxed">
                    Building digital products with clarity, precision, and long term value.
                  </p>

                  <div className="flex items-center gap-2 text-sm text-[#6E6E6E] pt-5">
                    <span>Made with</span>
                    <FiHeart className="text-[#6A0DAD]" />
                    <span>for the digital future</span>
                  </div>
                </div>

                {/* Quick links */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold mb-5 text-[#4B0082]">Quick Links</h3>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-[#5F5F5F] hover:text-[#6A0DAD] transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social + contact */}
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold mb-5 text-[#4B0082]">Connect With Us</h3>

                  <div className="flex gap-4 mb-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group"
                      >
                        <div className="w-12 h-12 bg-[#11131A] rounded-xl border border-white/10 flex items-center justify-center text-[#C0C0C0] hover:bg-gradient-to-br hover:from-[#6A0DAD] hover:to-[#4B0082] hover:text-white transition-all duration-300 hover:-translate-y-1">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-[#6E6E6E]">
                    <p>Have a project in mind?</p>
                    <a
                      href="mailto:curriumxtech@gmail.com"
                      className="text-[#4B0082] hover:text-[#6A0DAD] transition-colors duration-300 font-medium"
                    >
                      curriumxtech@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-12 pt-7 border-t border-[#EFEFEF]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-[#6E6E6E]">
                    © {currentYear} CurriumX. All rights reserved.
                  </p>

                  <div className="flex gap-6 text-sm">
                    <button
                      type="button"
                      onClick={() => setActiveModal("privacy")}
                      className="text-[#6E6E6E] hover:text-[#6A0DAD] transition-colors duration-300"
                    >
                      Privacy Policy
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveModal("terms")}
                      className="text-[#6E6E6E] hover:text-[#6A0DAD] transition-colors duration-300"
                    >
                      Terms of Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tiny bottom spacing */}
          <div className="h-10 md:h-12" />
        </div>
      </footer>

      {/* Modal */}
      {activeModal && modalContent && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          ></div>

          <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#ECECEC] overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#6A0DAD] via-[#7b2be0] to-[#C0C0C0]" />

            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-[#EFEFEF]">
              <h3 className="text-2xl font-bold text-[#4B0082]">{modalContent.title}</h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 rounded-full bg-[#F7F7FA] hover:bg-[#EFEFFD] text-[#4B0082] flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 md:px-8 py-6 max-h-[75vh] overflow-y-auto">
              {modalContent.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;