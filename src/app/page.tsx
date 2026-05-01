"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import { Instagram, Scissors, Sparkles, Droplets, Zap, Eye, User } from "lucide-react";

export default function LandingPage() {
  const handleLinkClick = (href: string) => {
    if (href?.startsWith('tel:')) {
      window.location.href = href;
    }
  };

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
      button={{ text: "305-824-9966", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }}
      buttonClassName="min-w-fit px-3 text-xs md:text-sm"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Palancar Barbershop"
      description="Corte premium en el corazón de Hialeah. Mejore su estilo con maestros del oficio. Servicio de barbería diseñado para el hombre moderno."
      buttons={[{ text: "Reservar Cita", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ApasF6ZFfKJ3lLObBgGARvGnPS/uploaded-1777601004182-ilf1hmww.png"
      imageAlt="interior moderno de barbería"
      buttonClassName="text-sm md:text-base"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Tradición y Estilo Superior" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/from-hands-shaving-neck_23-2147778916.jpg", alt: "barbero profesional cuidando al cliente" },
      ]}
      buttons={[{ text: "Reservar Cita", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }]}
    />
  </div>

  <div id="team" data-section="team">
    <TeamCardEleven
      title="Nuestro Equipo"
      animationType="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={false}
      description="Nuestros maestros del oficio a tu servicio."
      groups={[
        { 
            id: "g1", 
            groupTitle: "Master Barbers", 
            members: [
                { id: "carlos", title: "Carlos Palancar", subtitle: "Master Barber", detail: "Experto en cortes clásicos" },
                { id: "erick", title: "Erick Cabrera", subtitle: "Master Barbero", detail: "Especialista en degradados" },
                { id: "carlosjr", title: "Carlos Palancar Jr.", subtitle: "Master Barbero", detail: "Estilista versátil" },
                { id: "brian", title: "Brian Teran", subtitle: "Master Barbero", detail: "Técnico de barba" },
                { id: "jose", title: "Jose Fernandez", subtitle: "Master Barbero", detail: "Cortes modernos" },
                { id: "rusbel", title: "Rusbel Hernandez", subtitle: "Master Barbero", detail: "Atención al detalle", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ApasF6ZFfKJ3lLObBgGARvGnPS/uploaded-1777601004182-ilf1hmww.png" }
            ]
        }
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { icon: Scissors, title: "Corte de Pelo", description: "$25" },
        { icon: Sparkles, title: "Cortes", description: "$15" },
        { icon: Droplets, title: "Lavado de Cabeza", description: "$10" },
        { icon: Zap, title: "Afeitado", description: "$10" },
        { icon: User, title: "Barba", description: "$20" },
        { icon: Scissors, title: "Candado", description: "$10" },
        { icon: Eye, title: "Cejas", description: "$10" },
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
        { id: "p1", badge: "Corte", price: "$25", subtitle: "Corte de Pelo", buttons: [{ text: "Llamar", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }], features: [] },
        { id: "p2", badge: "Cortes", price: "$15", subtitle: "Cortes", buttons: [{ text: "Llamar", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }], features: [] },
        { id: "p3", badge: "Lavado", price: "$10", subtitle: "Lavado de Cabeza", buttons: [{ text: "Llamar", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }], features: [] },
        { id: "p4", badge: "Afeitado", price: "$10", subtitle: "Afeitado", buttons: [{ text: "Llamar", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }], features: [] },
        { id: "p5", badge: "Barba", price: "$20", subtitle: "Barba", buttons: [{ text: "Llamar", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }], features: [] },
        { id: "p6", badge: "Candado", price: "$10", subtitle: "Candado", buttons: [{ text: "Llamar", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }], features: [] },
        { id: "p7", badge: "Cejas", price: "$10", subtitle: "Cejas", buttons: [{ text: "Llamar", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }], features: [] },
      ]}
      title="Menú de Precios"
      description="Servicios de calidad para ti."
      planButtonClassName="whitespace-nowrap text-xs md:text-sm px-3"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "¿Cuál es su dirección?", content: "4955 West 6th Ave, Hialeah, FL 33012" },
        { id: "q2", title: "¿Cuál es su horario?", content: "Lunes a Sábados 9:00 AM - 7:00 PM" },
        { id: "q3", title: "¿Teléfonos de contacto?", content: "305-824-9966 Oficina / 786-302-3671 Celular" },
      ]}
      title="Información de Contacto"
      description="Llame para su próxima cita."
      faqsAnimation="slide-up"
      buttons={[{ text: "Reservar Cita", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") }]}
    />
  </div>

  <div id="contact-text" data-section="contact-text">
    <ContactText 
      text="¿Listo para tu próximo corte? Llámanos hoy."
      buttons={[
        { text: "305-824-9966 (Oficina)", href: "tel:305-824-9966", onClick: () => handleLinkClick("tel:305-824-9966") },
        { text: "786-302-3671 (Celular)", href: "tel:786-302-3671", onClick: () => handleLinkClick("tel:786-302-3671") }
      ]}
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={true}
      containerClassName="max-w-7xl mx-auto"
      contentClassName="max-w-7xl mx-auto"
      buttonClassName="whitespace-nowrap px-4 text-sm"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Palancar Barbershop"
      copyrightText="© 2025 Palancar Barbershop."
      socialLinks={[
        { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
