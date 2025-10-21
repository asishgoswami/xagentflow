import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Instagram } from "lucide-react";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      "Outbound Call Automation",
      "Inbound Call Handling",
      "Workflow Automation",
      "Custom Solutions",
    ],
    Company: ["About Us", "Contact"],
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/xagentflow?igsh=MW9kbndjeDRuMGN1Mw==",
      label: "Instagram",
    },

    {
      icon: X,
      href: "https://x.com/AsishGoswa66864?t=0vJvNxWtXjChtCDwO4SjHw&s=09",
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  XAgentFlow
                </span>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
                Transforming businesses through intelligent automation
                solutions. Scale your operations, reduce costs, and delight
                customers with our cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "xagentflow@gmail.com" },
                  { icon: Phone, text: "+91 7894163802" },
                  { icon: MapPin, text: "India,Odisha" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="h-5 w-5 text-blue-400" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-4 text-lg">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href="#"
                          whileHover={{ x: 5 }}
                          className="text-slate-300 hover:text-blue-400 transition-colors duration-300 block"
                        >
                          {link}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Newsletter Signup */}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400">
              © {currentYear} XAgentFlow. All rights reserved.
            </div>

            {/* Legal Links */}

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    </footer>
  );
};

export default Footer;
