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
        { name: "Inicio", id: "hero" },
        { name: "Servicios", id: "services" },
        { name: "Equipo", id: "team" },
        { name: "FAQ", id: "faq" },
        { name: "Contacto", id: "contact" },
      ]}
      brandName="Palancar Barbershop"
      button={{ text: "Reservar" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Palancar Barbershop"
      description="Corte premium en el corazón de Hialeah. Mejore su estilo con maestros del oficio. Servicio de barbería diseñado para el hombre moderno."
      buttons={[{ text: "Reservar Cita", href: "#contact" }]}
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
        { icon: Scissors, title: "Fade & Corte Personalizado", description: "Fades de precisión y estilos a medida para usted." },
        { icon: Diamond, title: "Cuidado de Barba", description: "Recorte y mantenimiento profesional para su barba." },
        { icon: User, title: "Grooming Completo", description: "Servicio integral diseñado para el hombre actual." },
      ]}
      title="Nuestros Servicios"
      description="Servicios de barbería expertos para resaltar su imagen única."
    />
  </div>

  <div id="menu" data-section="menu">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "basic", badge: "Popular", price: "$25", subtitle: "Mantenimiento de Barba", buttons: [{ text: "Reservar", href: "#contact" }], features: ["Recorte", "Perfilado", "Aceite"] },
        { id: "standard", badge: "Recomendado", price: "$35", subtitle: "Corte y Fade Premium", buttons: [{ text: "Reservar", href: "#contact" }], features: ["Fade Clásico", "Taper", "Estilizado"] },
        { id: "full", badge: "Elite", price: "$50", subtitle: "Grooming Total", buttons: [{ text: "Reservar", href: "#contact" }], features: ["Corte Completo", "Barba", "Cejas", "Estilizado"] },
      ]}
      title="Menú de Precios"
      description="Tarifas transparentes por resultados excepcionales."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      members={[
        { id: "m1", name: "Carlos R.", role: "Maestro Barbero", imageSrc: "http://img.b2bpic.net/free-photo/positive-bearded-black-male-with-tattoo-cross-arms-dressed-white-shirt_613910-15917.jpg" },
        { id: "m2", name: "Luis M.", role: "Experto en Fades", imageSrc: "http://img.b2bpic.net/free-photo/gardening-tools_23-2148013407.jpg" },
        { id: "m3", name: "Juan P.", role: "Especialista en Estilo", imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-tattoo-his-face-with-crossed-arms-dressed-white-shirt-grey-background_613910-8120.jpg" },
        { id: "m4", name: "Diego V.", role: "Barbero Senior", imageSrc: "http://img.b2bpic.net/free-photo/man-looking-away-barber-shop_23-2148353460.jpg" },
      ]}
      title="Nuestro Equipo"
      description="Conozca a nuestros barberos profesionales en Hialeah."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Antonio S.", role: "Cliente Frecuente", company: "Hialeah", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-young-man-with-headphone-around-his-neck-looking-camera_23-2148042690.jpg" },
        { id: "t2", name: "Mario F.", role: "Empresario", company: "Miami", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-redhead-model-man-flannel-shirt-gray-background_613910-20187.jpg" },
        { id: "t3", name: "Jorge L.", role: "Profesional", company: "Hialeah", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-bearded-man-smiling-looking-away-while-professional-barber-giving-him-haircut-copyspace_7502-5640.jpg" },
        { id: "t4", name: "Pedro G.", role: "Residente Local", company: "Miami", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/client-hairdresser-posing-selfie_23-2147778771.jpg" },
      ]}
      title="Reseñas de Clientes"
      description="Vea por qué nuestros clientes confían en Palancar Barbershop."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "¿Necesito una cita previa?", content: "Sí, recomendamos altamente reservar en línea para garantizar su turno." },
        { id: "q2", title: "¿Cuál es su horario en Hialeah?", content: "Atendemos de lunes a sábado desde las 9:00 AM hasta las 7:00 PM." },
        { id: "q3", title: "¿Qué métodos de pago aceptan?", content: "Aceptamos efectivo, tarjetas de crédito y aplicaciones de pago móvil." },
        { id: "q4", title: "¿Realizan cortes para niños?", content: "Sí, ofrecemos cortes especializados para niños con total paciencia y cuidado." },
      ]}
      title="Preguntas Frecuentes"
      description="Todo lo que necesitas saber antes de tu visita a nuestra barbería en Miami."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Contacto"
      title="Agenda tu Cita en Hialeah"
      description="Estamos ubicados en Hialeah, Miami. Reserva tu espacio y transforma tu estilo con los mejores profesionales."
      mediaAnimation="slide-up"
      buttonText="Enviar mensaje"
      imageSrc="http://img.b2bpic.net/free-photo/barber-with-scissors-barbershop_140725-7670.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Palancar Barbershop"
      copyrightText="© 2025 Palancar Barbershop. Todos los derechos reservados."
      socialLinks={[
        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}