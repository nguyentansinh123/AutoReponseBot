"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuItem,
  NavigationMenuLink, 
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Auto<span className="text-purple-500">mate</span>
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {["Features", "Pricing", "Documentation", "About"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <Link href="#" legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={`px-4 py-2 text-sm font-medium text-white hover:text-purple-400 transition-colors rounded-md hover:bg-zinc-900/50 focus:bg-zinc-900/50`}
                      >
                        {item}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signup">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-zinc-800">
                Sign Up
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Login
              </Button>
            </Link>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;