"use client";

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  state: boolean;
  message?: string;
  children?: ReactNode;
}

const Loader = ({ state, message = "Loading your dashboard", children }: LoaderProps) => {
  return (
    <AnimatePresence>
      {state && (
        <motion.div 
          className="fixed inset-0 bg-[#030303] flex flex-col items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background gradients */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-[-30%] right-[-20%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-30%] left-[-20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {children || (
              <>
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
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;