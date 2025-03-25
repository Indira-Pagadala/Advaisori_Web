
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 dot-pattern opacity-80 rotate-45"></div>
              </div>
              <span className="text-2xl font-playfair text-white tracking-wider">
                Adv<span className="text-secondary italic">ai</span>sori
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming businesses through AI-powered solutions and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-white transition-colors">AI Strategy</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-white transition-colors">Process Automation</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-white transition-colors">Custom AI Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/book" className="text-muted-foreground hover:text-white transition-colors">Book Consultation</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-secondary" />
                <span>contact@advaisori.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-secondary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-secondary" />
                <span>123 Innovation Ave, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white/10 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Advaisori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
