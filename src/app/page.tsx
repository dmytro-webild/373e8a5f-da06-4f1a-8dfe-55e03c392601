"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import { Instagram } from "lucide-react";

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
        { name: "Inicio", id: "hero" },
        { name: "Servicios", id: "services" },
        { name: "Precios", id: "menu" },
        { name: "Contacto", id: "contact" },
      ]}
      brandName="Palancar Barbershop"
      button={{ text: "305-824-9966", href: "tel:3058249966" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Palancar Barbershop"
      description="Corte premium en el corazón de Hialeah. Mejore su estilo con maestros del oficio. Servicio de barbería diseñado para el hombre moderno."
      buttons={[{ text: "Reservar Cita", href: "tel:3058249966" }]}
      imageSrc="http://img.b2bpic.net/free-photo/barber-with-scissors-barbershop_140725-7670.jpg?_wi=1"
      imageAlt="interior moderno de barbería"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Tradición y Estilo Superior" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/from-hands-shaving-neck_23-2147778916.jpg", alt: "barbero profesional cuidando al cliente" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { icon: () => <></>, title: "Corte de Pelo", description: "Desde $25" },
        { icon: () => <></>, title: "Cortes", description: "$15" },
        { icon: () => <></>, title: "Lavado de Cabeza", description: "$10" },
        { icon: () => <></>, title: "Afeitado", description: "$10" },
        { icon: () => <></>, title: "Barba", description: "$20" },
        { icon: () => <></>, title: "Candado", description: "$10" },
        { icon: () => <></>, title: "Cejas", description: "$10" },
      ]}
      title="Nuestros Servicios"
      description="Servicios de barbería profesionales."
    />
  </div>

  <div id="menu" data-section="menu">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", badge: "Disponible", price: "$25", subtitle: "Corte de Pelo", buttons: [{ text: "Reservar 305-824-9966", href: "tel:3058249966" }], features: ["Fade", "Estilo", "Lavado"] }
      ]}
      title="Menú de Precios"
      description="Llame para su próxima cita."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "¿Cuál es su dirección?", content: "4955 West 6th Ave, Hialeah, FL 33012" },
        { id: "q2", title: "¿Cuál es su horario?", content: "Lunes a Sábados 9:00 AM - 7:00 PM" },
        { id: "q3", title: "¿Teléfonos de contacto?", content: "305-824-9966 / 786-302-3671" },
      ]}
      title="Información de Contacto"
      description="Llame para su próxima cita."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Contacto"
      title="Llame para su próxima cita"
      description="4955 West 6th Ave, Hialeah, FL 33012 | 305-824-9966"
      mediaAnimation="slide-up"
      buttonText="305-824-9966"
      imageSrc="http://img.b2bpic.net/free-photo/barber-with-scissors-barbershop_140725-7670.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Palancar Barbershop"
      copyrightText="© 2025 Palancar Barbershop. Llame al 305-824-9966"
      socialLinks={[
        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}