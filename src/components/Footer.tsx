import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Calendar,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="flex items-center mb-4"
              onClick={scrollToTop}
            >
              <Logo size={68} />
              <span className="text-2xl font-playfair text-white tracking-wider -ml-1">
                Adv<span className="text-secondary italic">ai</span>sori
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming businesses through AI-powered solutions and strategic
              consulting.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/advaisori"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  AI Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Process Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Custom AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
              {/*<li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Careers</a></li> */}
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-secondary" />
                <span>teamadvaisori@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-secondary" />
                <span>+1 (203) 715-1513</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-secondary" />
                <span>Miami, Florida, USA</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} className="text-secondary" />
                <a
                  href="https://calendly.com/teamadvaisori/workflow-automation-consultation?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Book a Consultation
                </a>
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
