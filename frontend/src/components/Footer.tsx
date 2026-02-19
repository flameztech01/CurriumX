
import { FiLinkedin, FiTwitter, FiInstagram, FiHeart } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FiLinkedin className="w-5 h-5" />, name: 'LinkedIn', href: 'https://linkedin.com/company/curriumx' },
    { icon: <FiTwitter className="w-5 h-5" />, name: 'Twitter', href: 'https://twitter.com/curriumx' },
    { icon: <FiInstagram className="w-5 h-5" />, name: 'Instagram', href: 'https://instagram.com/curriumx' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#4B0082] to-[#6A0DAD] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column - Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-white">Currium</span>
                <span className="text-[#C0C0C0]">X</span>
              </span>
            </div>
            <p className="text-[#F2F2F2] text-lg max-w-md leading-relaxed">
              Building digital products with clarity and precision.
            </p>
            
            {/* Made with love tagline */}
            <div className="flex items-center gap-2 text-sm text-[#F2F2F2]/80 pt-4">
              <span>Made with</span>
              <FiHeart className="text-[#C0C0C0] animate-pulse" />
              <span>for the digital future</span>
            </div>
          </div>

          {/* Center Column - Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-[#C0C0C0]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F2F2F2] hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Socials & Contact */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-[#C0C0C0]">Connect With Us</h3>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.name}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                    {social.icon}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#F2F2F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="space-y-2 text-sm text-[#F2F2F2]/80">
              <p>Have a project in mind?</p>
              <a 
                href="mailto:hello@curriumx.com" 
                className="text-white hover:text-[#C0C0C0] transition-colors duration-300 font-medium"
              >
                hello@curriumx.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line with Decoration */}
        <div className="mt-16 pt-8 border-t border-white/20 relative">
          {/* Decorative element */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#F2F2F2]/80">
              © {currentYear} CurriumX. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-[#F2F2F2]/80 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#F2F2F2]/80 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;