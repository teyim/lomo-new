'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    rating: 5,
    quote:
      "As a social media manager, I create thumbnails daily. Lomo's drag-and-drop tool and preset layouts cut my work time by 70%. The HD exports look flawless everywhere!",
    author: 'Marcus L.',
    role: 'Digital Marketing Agency',
  },
  {
    rating: 5,
    quote:
      "I love how Lomo's color suggestions take the guesswork out of design. My thumbnails finally match my brand's aesthetic—no more clashing colors!",
    author: 'Sophie K.',
    role: 'Small Business Owner',
  },
  {
    rating: 5,
    quote:
      "The layout options are insane! I can experiment with overlays, grids, or minimalist styles in seconds. It's like having a designer on standby.",
    author: 'Alex P.',
    role: 'Freelance Writer',
  },
  {
    rating: 5,
    quote:
      "Lomo's collaboration feature lets my team tweak thumbnails together in real-time. It's streamlined our workflow and made feedback loops so much easier.",
    author: 'Nadia V.',
    role: 'Content Team Lead',
  },
  {
    rating: 5,
    quote:
      "I run a nonprofit blog, and Lomo's free tier is a game-changer. The professional results make our content look polished, even on a tight budget.",
    author: 'Ethan T.',
    role: 'Nonprofit Communications Director',
  },
  {
    rating: 5,
    quote: 'Lomo saved me hours of fiddling with Photoshop. The color suggestions are genius!',
    author: 'Jamie R.',
    role: 'Lifestyle Blogger',
  },
  {
    rating: 5,
    quote: 'Finally, a tool that understands what bloggers need. My click-through rates doubled!',
    author: 'Priya T.',
    role: 'Tech Writer',
  },
];




export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-[#0F1117] py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, #ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
      >
        Loved by content creators worldwide
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-fit"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] bg-white/5 backdrop-blur-sm p-6 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C8FF32] text-[#C8FF32]"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-white/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
