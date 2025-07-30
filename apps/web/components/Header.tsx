'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@workspace/ui/components/ui/button';

export default function Header() {
  return (
    <section className="container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 text-center relative">
      <div className="absolute -left-10 top-[200px] sm:top-[250px] md:top-[300px] -translate-y-1/2 size-[400px] sm:size-[600px] md:size-[800px] bg-purple-400 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute -right-10 top-[200px] sm:top-[250px] md:top-[300px] -translate-y-1/2 size-[400px] sm:size-[600px] md:size-[800px] bg-orange-400 rounded-full blur-3xl opacity-20 z-0"></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 relative z-10 font-geist_sans leading-tight">
        Craft Stunning Blog
        <br />
        Thumbnails in Seconds
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto relative z-10 px-2 sm:px-0">
        Transform your content’s first impression with Lomo—where professional design meets
        simplicity. Choose backgrounds, perfect text colors, and customize layouts effortlessly.
      </p>
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Link href="/editor">
          <Button
            className="bg-black hover:bg-black/90 text-white rounded-2xl px-6 sm:px-8 py-6 sm:py-8 text-base sm:text-lg relative z-30 
          group overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 
            bg-gradient-to-r from-transparent via-white/30 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[100%] 
            transition-all duration-500"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 
            bg-gradient-to-r from-transparent via-white/20 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[100%] 
            transition-all duration-500 delay-75"
            />
            Get started
            <ArrowRight className="ml-3" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
