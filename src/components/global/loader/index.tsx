"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen = ({ message = "Loading your dashboard" }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 bg-[#030303] flex flex-col items-center justify-center z-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-30%] right-[-20%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="mb-8 p-3 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-500">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        
        <motion.h3
          className="text-xl font-medium text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {message}
        </motion.h3>
        
        <div className="relative h-2 w-40 bg-zinc-800/50 overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
            animate={{
              left: ["-40%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ width: "40%" }}
          />
        </div>
        
        <motion.p
          className="text-zinc-400 text-sm mt-4"
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Preparing your automations...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;