"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Code, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Automate Your <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Workflow</span>
            </h1>
            
            <p className="text-white text-lg mb-8 max-w-lg">
              Streamline your processes with our intuitive automation platform. Build, deploy, and scale with confidence.
            </p>
            
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-full max-w-md h-64 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl flex items-center justify-center overflow-hidden relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/5"
              />
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: item * 0.1, duration: 0.4 }}
                      className="w-14 h-14 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-lg backdrop-blur-sm border border-white/10"
                    />
                  ))}
                </div>
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "80%" }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="h-1.5 bg-purple-500/80 rounded-full mt-6"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-2xl font-bold text-white text-center mb-12"
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Fast Performance", 
                icon: <Zap className="h-6 w-6 text-yellow-500" />,
                description: "Optimized algorithms that execute in milliseconds" 
              },
              { 
                title: "Developer API", 
                icon: <Code className="h-6 w-6 text-blue-500" />,
                description: "Well-documented APIs for seamless integration" 
              },
              { 
                title: "Secure Platform", 
                icon: <Shield className="h-6 w-6 text-green-500" />,
                description: "Enterprise-grade security to protect your data" 
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                variants={fadeIn}
              >
                <Card className="bg-black border border-zinc-800 h-full overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    {feature.icon}
                    <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-10 rounded-lg border border-purple-900/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
              <p className="text-white">
                Join teams who have transformed their workflow.
              </p>
            </div>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap">
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-zinc-900 py-8 mt-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Automate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["About", "Terms", "Contact"].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-white hover:text-purple-400 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}