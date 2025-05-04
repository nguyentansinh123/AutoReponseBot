"use client";

import React from 'react';
import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-[-30%] right-[-20%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
        <motion.div 
          className="absolute inset-0"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          style={{ 
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(91, 33, 182, 0.03), transparent 35%)',
            backgroundSize: "200% 200%"
          }}
        />
      </motion.div>
      
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0 }}
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
      
      <motion.div
        className="z-10 w-full max-w-md px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-5"
          >
            <div className="inline-block p-2 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-500">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome to <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">Automate</span>
          </motion.h1>
          <motion.p 
            className="text-zinc-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sign in to continue to your dashboard
          </motion.p>
        </div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <SignIn 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-zinc-900/70 backdrop-blur-md shadow-xl border border-zinc-800/80 rounded-xl overflow-hidden",
                headerTitle: "text-white text-xl",
                headerSubtitle: "text-zinc-400 text-sm",
                formButtonPrimary: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-700 shadow-md text-white font-medium transition-all duration-200",
                formFieldLabel: "text-zinc-300 font-medium",
                formFieldInput: "bg-zinc-800/50 border-zinc-700/80 text-white focus:ring-purple-500 focus:border-purple-500 rounded-md",
                footerActionText: "text-zinc-400",
                footerActionLink: "text-purple-400 hover:text-purple-300 font-medium",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-purple-400 hover:text-purple-300",
                formFieldAction: "text-purple-400 hover:text-purple-300",
                otpCodeFieldInput: "bg-zinc-800/50 border-zinc-700 text-white focus:ring-purple-500 focus:border-purple-500",
                dividerLine: "bg-zinc-700/50",
                dividerText: "text-zinc-500 bg-zinc-900",
                socialButtonsBlockButton: "border-zinc-700/80 hover:bg-zinc-800 transition-all duration-200",
                socialButtonsBlockButtonText: "text-white",
                formFieldInputShowPasswordButton: "text-zinc-400 hover:text-white",
                navbar: "hidden",
                header: "pb-3",
                main: "px-6 py-4",
                footer: "pt-3",
                formFieldLabelRow: "mb-1",
                formFieldRow: "mb-4",
              },
              layout: {
                socialButtonsPlacement: "bottom"
              }
            }}
          />
        </motion.div>
      </motion.div>
      
      <Link href="/">
        <motion.div 
          className="absolute top-8 left-8 flex items-center group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="mr-2 bg-gradient-to-br from-purple-500 to-blue-500 p-1.5 rounded-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-white group-hover:opacity-90 transition-opacity">
            Auto<span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">mate</span>
          </span>
        </motion.div>
      </Link>
      
      <motion.div 
        className="absolute bottom-8 text-center text-xs text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Need help? <a href="#" className="text-purple-400 hover:text-purple-300">Contact Support</a>
      </motion.div>
    </div>
  );
};

export default Page;