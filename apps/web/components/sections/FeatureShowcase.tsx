'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Palette, LayoutGrid, Settings2, Download, ChevronRight, Image as ImageIcon, Type, MousePointer, Share } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Palette,
    title: 'Pick Your Background',
    description: 'Select from vibrant gradients, textures, or upload your own(coming).',
    step: 'Step 1',
    illustration: {
      type: 'gradient-showcase',
      gradients: [
        'bg-gradient-to-br from-purple-400 to-blue-600',
        'bg-gradient-to-br from-pink-400 to-red-600',
        'bg-gradient-to-br from-green-400 to-blue-500',
        'bg-gradient-to-br from-yellow-400 to-orange-500',
        'bg-gradient-to-br from-indigo-400 to-purple-600',
        'bg-gradient-to-br from-teal-400 to-cyan-500',
      ]
    },
  },
  {
    icon: LayoutGrid,
    title: 'Choose a Layout',
    description: 'Find the perfect structure for your text and images.',
    step: 'Step 2',
    illustration: {
      type: 'layout-options',
      layouts: [
        { name: 'Grid', icon: LayoutGrid },
        { name: 'Split', icon: ImageIcon },
        { name: 'Overlay', icon: Type },
        { name: 'Minimal', icon: MousePointer },
      ]
    },
  },
  {
    icon: Settings2,
    title: 'Customize Everything',
    description:
      'Tweak colors, fonts, and positioning. Add drop shadows, borders, or opacity effects.',
    step: 'Step 3',
    illustration: {
      type: 'customization-panel',
      tools: ['Colors', 'Fonts', 'Shadows', 'Borders', 'Spacing', 'Effects']
    },
  },
  {
    icon: Download,
    title: 'Download & Share',
    description: 'Get your thumbnail in one click and make your blog stand out.',
    step: 'Step 4',
    illustration: {
      type: 'export-options',
      formats: ['PNG', 'JPG', 'SVG'],
      sizes: ['1920x1080', '1280x720', '800x600']
    },
  },
];

const renderIllustration = (illustration: any) => {
  if (!illustration) return null;

  switch (illustration.type) {
    case 'gradient-showcase':
      return (
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {illustration.gradients.map((gradient: string, index: number) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`aspect-square rounded-lg sm:rounded-xl ${gradient} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
              />
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Choose from beautiful gradients
          </p>
        </div>
      );

    case 'layout-options':
      return (
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {illustration.layouts.map((layout: any, index: number) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-muted/50 rounded-lg p-3 sm:p-4 hover:bg-muted transition-colors cursor-pointer"
              >
                <layout.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                <p className="text-center text-xs sm:text-sm font-medium">{layout.name}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Select your preferred layout
          </p>
        </div>
      );

    case 'customization-panel':
      return (
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="space-y-2 sm:space-y-3">
            {illustration.tools.map((tool: string, index: number) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center justify-between bg-muted/50 rounded-lg p-2 sm:p-3"
              >
                <span className="text-xs sm:text-sm font-medium">{tool}</span>
                <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-primary/20 rounded-full">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 80 + 20}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Fine-tune every detail
          </p>
        </div>
      );

    case 'export-options':
      return (
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <p className="text-xs sm:text-sm font-medium mb-2">Export Formats</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {illustration.formats.map((format: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {format}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium mb-2">Available Sizes</p>
              <div className="space-y-1 sm:space-y-2">
                {illustration.sizes.map((size: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                    className="bg-muted/50 rounded-lg p-1.5 sm:p-2 text-center text-xs sm:text-sm"
                  >
                    {size}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Download in your preferred format
          </p>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground text-sm">Illustration coming soon...</p>
        </div>
      );
  }
};

export default function FeatureShowcase() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
        <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
          Create stunning thumbnails in four simple steps
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setSelectedFeature(index)}
              className={`w-full text-left p-3 sm:p-4 lg:p-6 rounded-xl transition-colors ${
                selectedFeature === index
                  ? 'bg-primary/5 border-l-4 border-primary'
                  : 'hover:bg-muted'
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`p-1.5 sm:p-2 rounded-lg ${selectedFeature === index ? 'bg-primary/10' : 'bg-muted'}`}
                >
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-base sm:text-lg truncate pr-2">{feature.title}</h3>
                    <ChevronRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform ${selectedFeature === index ? 'rotate-90' : ''}`}
                    />
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="relative h-[280px] sm:h-[320px] lg:h-[400px] bg-muted/30 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 order-1 lg:order-2 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full"
            >
              <div className="bg-background rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg h-full flex flex-col">
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">Current Step</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">{features[selectedFeature]?.step}</div>
                </div>
                
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  {renderIllustration(features[selectedFeature]?.illustration)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
