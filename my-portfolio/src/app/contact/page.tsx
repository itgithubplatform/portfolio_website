'use client';

import ContactForm from '@/components/sections/contact-form';
import SocialIcons from '@/components/icons/social-icons';
import FadeIn from '@/components/animations/fade-in';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-5xl font-bold text-center mb-8">
            Contact <span className="text-gradient">Me</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </FadeIn>

        <ContactForm />

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">Or connect with me on social media</p>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
