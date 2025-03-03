import React, { useState, useEffect } from 'react'
import './Page.css'
import logo from './assets/MUA-Logo.png'
import arrow from './assets/icons/arrow.png'
import introImage from './assets/intro.png'
import introImage2 from './assets/intro-1.png'
import mapImage from './assets/sections/client-section/mapa.png'
import brandsTop from './assets/sections/client-section/brands-top.png'
import brandsBottom from './assets/sections/client-section/brands-bottom.png'
import PixelCard from './components/PixelCard'
import { BsWhatsapp, BsInstagram, BsTiktok } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ConsComp from './components/ConsComp'

{/**IMAGES */}
import lasNubes from './assets/sections/proyects-section/las-nubes.png'
import serafines from './assets/sections/proyects-section/serafines.png'
import gloria from './assets/sections/proyects-section/gloria.png'
import cartagena from './assets/sections/proyects-section/cartagena.png'
import quintaGolondrina from './assets/sections/proyects-section/quinta-golondrina.png'

import focus from './assets/sections/proyects-section/focus-lab.png'
import dogDay from './assets/sections/proyects-section/dogday-sanpedro.png'
import innateS from './assets/sections/proyects-section/innate-sanpedro.png'
import innate from './assets/sections/proyects-section/innate.png'
import airbnb from './assets/sections/proyects-section/airbnb.png'
import adesso from './assets/sections/proyects-section/adesso.png'
import dogDayCD from './assets/sections/proyects-section/dogday-cdmx.png'
import dogDayQ from './assets/sections/proyects-section/dogday-qro.png'


// import from cons
import cons1 from './assets/cons/1.png'
import cons2 from './assets/cons/2.png'
import cons3 from './assets/cons/3.png'
import cons4 from './assets/cons/4.png'
import cons5 from './assets/cons/5.png'
import cons6 from './assets/cons/6.png'
import cons7 from './assets/cons/7.png'
import cons8 from './assets/cons/8.png'
import cons9 from './assets/cons/9.png'
import cons10 from './assets/cons/10.png'
import cons11 from './assets/cons/11.png'
import cons12 from './assets/cons/12.png'
import cons13 from './assets/cons/13.png'
import cons14 from './assets/cons/14.png'

// Importar las imágenes del slider
const slideImages = [
  new URL('./assets/sections/landing-section/01.JPG', import.meta.url).href,
  new URL('./assets/sections/landing-section/02.JPG', import.meta.url).href,
  new URL('./assets/sections/landing-section/03.JPG', import.meta.url).href,
  new URL('./assets/sections/landing-section/04.JPG', import.meta.url).href
];

// Logos de clientes (asegúrate de tener estas imágenes)
const clientLogos1 = [
  ['brands-bottom.png', 'brands-top.png', 'brands-bottom.png'],
  // Puedes agregar más grupos de 3 si necesitas
].map(group => group.map(logo => 
  new URL(`./assets/sections/client-section/${logo}`, import.meta.url).href
));

const clientLogos2 = [
  ['focuslab.png', 'sendero.png', 'innate.png'],
  // Puedes agregar más grupos de 3 si necesitas
].map(group => group.map(logo => 
  new URL(`./assets/sections/client-section/${logo}`, import.meta.url).href
));

// Actualizar el objeto projectsData para incluir todos los proyectos
const projectsData = {
  'las-nubes': {
    title: 'Las Nubes',
    location: 'Av. Lazaro Cardenas',
    year: '2023',
    images: [lasNubes]
  },
  'serafines': {
    title: 'Serafines',
    location: 'Col. Cumbres Providencia',
    year: '2023',
    images: [serafines]
  },
  'gloria': {
    title: 'Gloria',
    location: 'Col. Cumbres Providencia',
    year: '2024',
    images: [gloria]
  },
  'cartagena': {
    title: 'Cartagena',
    location: 'Col. Residencial Hacienda',
    year: '2023',
    images: [cartagena]
  },
  'quinta-golondrina': {
    title: 'Quinta Golondrina',
    location: 'Col. Cuauhtémoc',
    year: '2023',
    images: [quintaGolondrina]
  },
  'focus-lab': {
    title: 'Focus Lab',
    location: 'San Pedro',
    year: '2023',
    images: [focus]
  },
  'dog-day-sp': {
    title: 'Dog Day San Pedro',
    location: 'Valle Oriente, San Pedro',
    year: '2023',
    images: [dogDay]
  },
  'innate-sp': {
    title: 'Innate San Pedro',
    location: 'San Pedro',
    year: '2024',
    images: [innateS]
  },
  'innate-saltillo': {
    title: 'Innate Saltillo',
    location: 'Saltillo',
    year: '2023',
    images: [innate]
  },
  'airbnb': {
    title: 'Airbnb',
    location: 'Apodaca',
    year: '2024',
    images: [airbnb]
  },
  'adesso': {
    title: 'Adesso',
    location: 'Barrio Antiguo',
    year: '2023',
    images: [adesso]
  },
  'dog-day-cdmx': {
    title: 'Dog Day CDMX',
    location: 'Mundo E',
    year: '2023',
    images: [dogDayCD]
  },
  'dog-day-qro': {
    title: 'Dog Day Querétaro',
    location: 'Zibatá',
    year: '2023',
    images: [dogDayQ]
  }
};

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenProject, setFullscreenProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(nextSlide);
        setNextSlide((nextSlide + 1) % slideImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleActiveProjectChange = (projectName) => {
    setActiveProject(projectName);
  };

  const handleCardClick = (projectId) => {
    console.log('Navegando a:', projectId);
    navigate(`/proyecto/${projectId}`);
  };

  const handleViewProject = () => {
    if (activeProject) {
      const projectId = activeProject.id.toLowerCase().replace(/\s+/g, '-');
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        setFullscreenProject(project);
      }
    }
  };

  return (
    <>
      <nav className={`mainNav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <img src={logo} alt="MUA Arquitectos" className={isScrolled ? 'visible' : ''} />
        </div>
        <div className={`nav-links ${!isScrolled ? 'centered' : ''}`}>
          <a href="#inicio">INICIO</a>
          <a href="#intro">INTRO</a>
          <a href="#portafolio">PORTAFOLIO</a>
          <a href="#contacto">CONTACTO</a>
        </div>
      </nav>

      <section className="landing" id="inicio">
        <img 
          src={slideImages[currentSlide]} 
          alt="" 
          className={`landing-image current ${isTransitioning ? 'fade-out' : ''}`}
        />
        <img 
          src={slideImages[nextSlide]} 
          alt="" 
          className={`landing-image next ${isTransitioning ? 'fade-in' : ''}`}
        />
        <div className="landingInfo">
          <img src={logo} alt="MUA Arquitectos" className="landing-logo" />
        </div>

        <div className="verMas">
          <a href="#intro">VER MAS</a>
          <img src={arrow} alt="Ver más" className="arrow" />
        </div>
      </section>

      {/* Intro Sections */}
      <div className="intro-sections-container">
        {/* First Intro Section */}
        <section id="intro" className="intro-section">
          <div className="intro-container">
            <h2 className="intro-title">HOLA</h2>
            
            <div className="intro-content">
              <div className="intro-image-container">
                <img src={introImage} alt="Intro" className="intro-image" />
              </div>
              
              <div className="intro-text">
                <p>
                  Mi nombre es Carlos Ramón Martínez Flores 
                  y es un honor presentarles 
                  mi portafolio de arquitectura. 
                  A lo largo de los años, he tenido la 
                  oportunidad de trabajar en una variedad 
                  de proyectos, desde casas habitación 
                  hasta construcciones 
                  industriales y comerciales. Cada 
                  uno refleja mi pasión por el diseño, 
                  la sostenibilidad y la innovación. 
                  Me encanta encontrar el equilibrio 
                  entre lo estético y lo funcional, 
                  cuidando que los proyectos sean 
                  sostenibles y respetuosos con 
                  el medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Intro Section */}
        <section className="intro-section">
          <div className="intro-container">
            <div className="intro-content">
              <div className="intro-text">
                <p>
                  El proceso de diseño que MUA Arquitectos 
                  utiliza comienza con una comprensión 
                  profunda de las necesidades 
                  y deseos del cliente. A partir de ahí, 
                  se desarrollan conceptos 
                  que integran funcionalidad y estética, 
                  utilizando herramientas 
                  avanzadas de modelado 3D y técnicas 
                  de visualización. La colaboración 
                  constante con ingenieros, constructores y 
                  otros profesionales 
                  asegura que cada proyecto 
                  sea ejecutado a la perfección.
                </p>
              </div>
              
              <div className="intro-image-container">
                <img src={introImage2} alt="Proceso de diseño" className="intro-image" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Clients Section */}
      <section className="clients-section">
        <h2 className="section-title">CLIENTES</h2>
        
        <div className="clients-container">
          <div className="clients-content">
            <div className="map-side">
              <img src={mapImage} alt="Mapa de cobertura" className="map-image" />
              <div className="map-locations">
              </div>
            </div>

            <div className="brands-side">
              <div className="brands-slider">
                {/* Top slider */}
                <div className="brands-row">
                  <div className="brands-track">
                    <img src={brandsTop} alt="Brands" />
                    <img src={brandsTop} alt="Brands" />
                  </div>
                </div>

                {/* Bottom slider */}
                <div className="brands-row">
                  <div className="brands-track reverse">
                    <img src={brandsBottom} alt="Brands" />
                    <img src={brandsBottom} alt="Brands" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proyectos" id="portafolio">
        <h2 className="section-title">PROYECTOS</h2>
        <h2 className="subProyTitle">CASA HABITACIÓN</h2>
        
        <div className="projects-grid">
          <PixelCard 
            variant="pink" 
            projectId="las-nubes"
          >
            <div className="card-info" style={{backgroundImage: `url(${lasNubes})`}}>
              <h1 className="title-card">Las Nubes</h1>
              <p className="location-card">Av. Lazaro Cardenas</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard 
            variant="pink" 
            projectId="serafines"
          >
            <div className="card-info" style={{backgroundImage: `url(${serafines})`}}>
              <h1 className="title-card">Serafines</h1>
              <p className="location-card">Col. Cumbres Providencia</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard 
            variant="pink" 
            projectId="gloria"
          >
            <div className="card-info" style={{backgroundImage: `url(${gloria})`}}>
              <h1 className="title-card">Gloria</h1>
              <p className="location-card">Col. Cumbres Providencia</p>
              <p className="year-card">2024</p>
            </div>
          </PixelCard>

          <PixelCard variant="default" projectId="cartagena">
            <div className="card-info" style={{backgroundImage: `url(${cartagena})`}}>
              <h1 className="title-card">
                Cartagena
              </h1>
              <p className="location-card">Col. Residencial Hacienda</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard variant="pink" projectId="quinta-golondrina">
            <div className="card-info" style={{backgroundImage: `url(${quintaGolondrina})`}}>
              <h1 className="title-card">
                Quinta Golondrina
              </h1>
              <p className="location-card">Col. Cuauhtémoc</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>
        </div>

        <h2 className="subProyTitle">COMERCIAL</h2>
        <div className="projects-grid">
          <PixelCard variant="pink" projectId="focus-lab">
            <div className="card-info" style={{backgroundImage: `url(${focus})`}}>
              <h1 className="title-card">
                Focus Lab
              </h1>
              <p className="location-card">San Pedro</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard variant="blue" projectId="dog-day-sp">
            <div className="card-info" style={{backgroundImage: `url(${dogDay})`}}>
              <h1 className="title-card">
                Dog Day San Pedro
              </h1>
              <p className="location-card">Valle Oriente, San Pedro</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard variant="yellow" projectId="innate-sp">
            <div className="card-info" style={{backgroundImage: `url(${innateS})`}}>
              <h1 className="title-card">
                Innate
              </h1>
              <p className="location-card">San Pedro</p>
              <p className="year-card">2024</p>
            </div>
          </PixelCard>

          <PixelCard variant="pink" projectId="innate-saltillo">
            <div className="card-info" style={{backgroundImage: `url(${innate})`}}>
              <h1 className="title-card">
                Innate
              </h1>
              <p className="location-card">Saltillo</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard variant="yellow" projectId="airbnb">
            <div className="card-info" style={{backgroundImage: `url(${airbnb})`}}>
              <h1 className="title-card">
                Airbnb
              </h1>
              <p className="location-card">Aodaca</p>
              <p className="year-card">2024</p>
            </div>
          </PixelCard>

          <PixelCard variant="default" projectId="adesso">
            <div className="card-info" style={{backgroundImage: `url(${adesso})`}}>
              <h1 className="title-card">
                Adesso
              </h1>
              <p className="location-card">Barrio Antiguo</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard variant="pink" projectId="dog-day-cdmx">
            <div className="card-info" style={{backgroundImage: `url(${dogDayCD})`}}>
              <h1 className="title-card">
                Dog Day CDMX
              </h1>
              <p className="location-card">Mundo E</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>

          <PixelCard variant="pink" projectId="dog-day-qro">
            <div className="card-info" style={{backgroundImage: `url(${dogDayQ})`}}>
              <h1 className="title-card">
                Dog Day Querétaro
              </h1>
              <p className="location-card">Zibatá</p>
              <p className="year-card">2023</p>
            </div>
          </PixelCard>
        </div>
      </section>

      {/* Cons Section */}
      <section className="cons-section">
        <h2 className="subProyTitle">CONSTRUCCIONES</h2>
        <div className="cons-grid">
          <ConsComp cons={cons1} date="2021" />
          <ConsComp cons={cons2} date="2022" />
          <ConsComp cons={cons3} date="2022" />
          <ConsComp cons={cons4} date="2020" />
          <ConsComp cons={cons5} date="2022" />
          <ConsComp cons={cons6} date="2021" />
          <ConsComp cons={cons7} date="2021" />
          <ConsComp cons={cons8} date="2021" />
          <ConsComp cons={cons9} date="2021" />
          <ConsComp cons={cons10} date="2021" />
          <ConsComp cons={cons11} date="2021" />
          <ConsComp cons={cons12} date="2021" />
          <ConsComp cons={cons13} date="2021" />
          <ConsComp cons={cons14} date="2022" />

        </div>
      </section>

      <section className="contact-section" id="contacto">
        <h2 className="section-title">CONTACTO</h2>
        
        <div className="contact-grid">
          <div className="contact-item">
            <a href="https://wa.me/528110630899" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon whatsapp">
                <BsWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>Contáctanos directamente</p>
            </a>
          </div>

          <div className="contact-item">
            <a href="mailto:mua.arquitecto@gmail.com">
              <div className="contact-icon email">
                <MdEmail />
              </div>
              <h3>Correo</h3>
              <p>mua.arquitecto@gmail.com</p>
            </a>
          </div>

          <div className="contact-item">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon instagram">
                <BsInstagram />
              </div>
              <h3>Instagram</h3>
              <p>Síguenos en Instagram</p>
            </a>
          </div>

          <div className="contact-item">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon tiktok">
                <BsTiktok />
              </div>
              <h3>TikTok</h3>
              <p>Síguenos en TikTok</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              id="mua-img"
              src={logo}
              alt="Logo of the company"
            />
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegación</h4>
              <a href="#inicio">INICIO</a>
              <a href="#intro">INTRO</a>
              <a href="#portafolio">PORTAFOLIO</a>
              <a href="#contacto">CONTACTO</a>
            </div>
            
            <div className="footer-column">
              <h4>Redes Sociales</h4>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TIKTOK</a>
              <a href="mailto:mua.arquitecto@gmail.com">CORREO</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
              <a href="https://wa.me/528110630899" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 MUA Arquitectos. Todos los derechos reservados.</p>
          <p>Página web creada por Neil Rodriguez y Franco Varela</p>
        </div>
      </footer>
    </>
  )
}

export default Page