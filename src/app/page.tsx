"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Diamond, Instagram, Scissors, User } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmall"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Inicio",
          id: "hero",
        },
        {
          name: "Servicios",
          id: "services",
        },
        {
          name: "Equipo",
          id: "team",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ]}
      brandName="Palancar Barbershop"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Palancar Barbershop"
      description="Premium grooming in the heart of Hialeah. Elevate your style with masters of the craft. Grooming for the modern man. \n\nCorte premium en el corazón de Hialeah. Mejore su estilo con maestros del oficio."
      buttons={[
        {
          text: "Reservar Cita",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/barber-with-scissors-barbershop_140725-7670.jpg?_wi=1"
      imageAlt="luxury barbershop interior modern"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Tradición y Estilo Superior",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/from-hands-shaving-neck_23-2147778916.jpg",
          alt: "professional barber grooming client",
        },
      ]}
      description="In Palancar Barbershop, we blend tradition with modern techniques to deliver a premium service in Hialeah. \n\nEn Palancar Barbershop, fusionamos la tradición con técnicas modernas para brindar un servicio premium en Hialeah."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Scissors,
          title: "Fade & Custom Cut",
          description: "Precision fades and custom styles tailored to you.",
        },
        {
          icon: Diamond,
          title: "Beard Grooming",
          description: "Expert beard trimming and maintenance.",
        },
        {
          icon: User,
          title: "Full Grooming",
          description: "Complete service for the modern man.",
        },
      ]}
      title="Nuestros Servicios"
      description="Expert grooming services designed for your unique look."
    />
  </div>

  <div id="menu" data-section="menu">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Popular",
          price: "$25",
          subtitle: "Beard Maintenance",
          buttons: [
            {
              text: "Book",
              href: "#contact",
            },
          ],
          features: [
            "Trimming",
            "Shaping",
            "Oiling",
          ],
        },
        {
          id: "standard",
          badge: "Best Value",
          price: "$35",
          subtitle: "Premium Fade Cut",
          buttons: [
            {
              text: "Book",
              href: "#contact",
            },
          ],
          features: [
            "Classic Fade",
            "Taper",
            "Styling",
          ],
        },
        {
          id: "full",
          badge: "Elite",
          price: "$50",
          subtitle: "Full Grooming",
          buttons: [
            {
              text: "Book",
              href: "#contact",
            },
          ],
          features: [
            "Full Cut",
            "Beard Trim",
            "Eyebrows",
            "Style",
          ],
        },
      ]}
      title="Precios / Menu"
      description="Transparent pricing for exceptional results."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      members={[
        {
          id: "m1",
          name: "Carlos R.",
          role: "Master Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-bearded-black-male-with-tattoo-cross-arms-dressed-white-shirt_613910-15917.jpg",
        },
        {
          id: "m2",
          name: "Luis M.",
          role: "Fade Expert",
          imageSrc: "http://img.b2bpic.net/free-photo/gardening-tools_23-2148013407.jpg",
        },
        {
          id: "m3",
          name: "Juan P.",
          role: "Grooming Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-tattoo-his-face-with-crossed-arms-dressed-white-shirt-grey-background_613910-8120.jpg",
        },
        {
          id: "m4",
          name: "Diego V.",
          role: "Senior Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/man-looking-away-barber-shop_23-2148353460.jpg",
        },
      ]}
      title="Nuestro Equipo"
      description="Meet our professional barbers in Hialeah."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Antonio S.",
          role: "Regular Client",
          company: "Hialeah",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-young-man-with-headphone-around-his-neck-looking-camera_23-2148042690.jpg",
        },
        {
          id: "t2",
          name: "Mario F.",
          role: "Business Owner",
          company: "Miami",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-redhead-model-man-flannel-shirt-gray-background_613910-20187.jpg",
        },
        {
          id: "t3",
          name: "Jorge L.",
          role: "Professional",
          company: "Hialeah",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-bearded-man-smiling-looking-away-while-professional-barber-giving-him-haircut-copyspace_7502-5640.jpg",
        },
        {
          id: "t4",
          name: "Pedro G.",
          role: "Local Resident",
          company: "Miami",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/client-hairdresser-posing-selfie_23-2147778771.jpg",
        },
        {
          id: "t5",
          name: "Ramon C.",
          role: "Frequent Client",
          company: "Hialeah",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-barber-combing-moustache-client_23-2147778841.jpg",
        },
      ]}
      title="Reseñas de Clientes"
      description="See why our customers trust Palancar Barbershop."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do I need an appointment?",
          content: "Yes, we highly recommend booking online or calling.",
        },
        {
          id: "q2",
          title: "Do you offer walk-ins?",
          content: "We prioritize appointments, but accept walk-ins when available.",
        },
        {
          id: "q3",
          title: "Where are you located?",
          content: "We are located in Hialeah, Miami.",
        },
      ]}
      title="Preguntas Frecuentes"
      description="Frequently asked questions about our grooming services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contacto"
      title="Agenda tu Cita Hoy"
      description="Ready to look your best? Reach out to us now."
      mediaAnimation="slide-up"
      buttonText="Enviar"
      imageSrc="http://img.b2bpic.net/free-photo/barber-with-scissors-barbershop_140725-7670.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Palancar Barbershop"
      copyrightText="© 2025 Palancar Barbershop. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
