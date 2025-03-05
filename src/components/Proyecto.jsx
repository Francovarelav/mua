import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import CircularGallery from './CircularSlider';
import Loader from './Loader';
import './Proyecto.css';

// Importar imágenes locales
import ln1 from '../assets/lasNubes/1.JPG';
import ln2 from '../assets/lasNubes/2.JPG';
import ln3 from '../assets/lasNubes/3.JPG';
import ln4 from '../assets/lasNubes/4.JPG';
import ln8 from '../assets/lasNubes/planos.png';
import ln5 from '../assets/lasNubes/planos2.png';
import ln6 from '../assets/lasNubes/planos3.png';
import ln7 from '../assets/lasNubes/planos4.png';

// Imágenes de Serafines
import sf1 from '../assets/serafines/1.JPG';
import sf2 from '../assets/serafines/2.png';
import sf3 from '../assets/serafines/3.png';
import sf4 from '../assets/serafines/4.png';
import sf5 from '../assets/serafines/5.png';
import sf6 from '../assets/serafines/6.png';

// import 18 from gloria
import g1 from '../assets/gloria/1.png';
import g2 from '../assets/gloria/2.png';
import g3 from '../assets/gloria/3.png';
import g4 from '../assets/gloria/4.png';
import g5 from '../assets/gloria/5.jpg';
import g6 from '../assets/gloria/6.jpg';
import g7 from '../assets/gloria/7.jpg';
import g8 from '../assets/gloria/8.jpg';
import g9 from '../assets/gloria/9.jpg';
import g10 from '../assets/gloria/10.jpg';
import g11 from '../assets/gloria/11.jpg';
import g12 from '../assets/gloria/12.jpg';
import g13 from '../assets/gloria/13.jpg';
import g14 from '../assets/gloria/14.jpg';
import g15 from '../assets/gloria/15.jpg';
import g16 from '../assets/gloria/16.jpg';
import g17 from '../assets/gloria/17.jpg';
import g18 from '../assets/gloria/18.jpg';


// import 4 for cartagena, no planos
import c1 from '../assets/cartagena/1.JPG';
import c2 from '../assets/cartagena/2.JPG';
import c3 from '../assets/cartagena/3.JPG';
import c4 from '../assets/cartagena/4.JPG';

// quinta = 7
import q1 from '../assets/quinta/1.JPG';
import q2 from '../assets/quinta/2.JPG';
import q3 from '../assets/quinta/3.JPG';
import q4 from '../assets/quinta/4.JPG';
import q5 from '../assets/quinta/5.png';
import q6 from '../assets/quinta/6.png';
import q7 from '../assets/quinta/7.png';

// focus lab
import f1 from '../assets/focus/1.png';
import f2 from '../assets/focus/2.jpg';
import f3 from '../assets/focus/3.jpg';
import f4 from '../assets/focus/4.jpg';
import f5 from '../assets/focus/5.jpg';
import f6 from '../assets/focus/6.jpg';

// dog day san pedro
import d1 from '../assets/dogdaysan/1.png';
import d2 from '../assets/dogdaysan/2.png';
import d3 from '../assets/dogdaysan/3.JPG';
import d4 from '../assets/dogdaysan/4.JPG';
import d5 from '../assets/dogdaysan/5.JPG';
import d6 from '../assets/dogdaysan/6.JPG';
import d7 from '../assets/dogdaysan/7.JPG';
import d9 from '../assets/dogdaysan/9.JPG';

// inate san pedro
import is1 from '../assets/inateSan/1.png';
import is2 from '../assets/inateSan/2.JPG';


// innate saltillo

import isal1 from '../assets/innateSal/1.png';
import isal2 from '../assets/innateSal/2.png';
import isal3 from '../assets/innateSal/3.png';
import isal4 from '../assets/innateSal/4.png';
import isal5 from '../assets/innateSal/5.png';
import isal6 from '../assets/innateSal/6.png';
import isal7 from '../assets/innateSal/7.png';

// airbnb 14
import air1 from '../assets/airbnb/1.png';
import air2 from '../assets/airbnb/2.png';
import air3 from '../assets/airbnb/3.png';
import air4 from '../assets/airbnb/4.png';
import air5 from '../assets/airbnb/5.png';
import air6 from '../assets/airbnb/6.png';
import air7 from '../assets/airbnb/7.jpg';
import air8 from '../assets/airbnb/8.jpg';
import air9 from '../assets/airbnb/9.jpg';
import air10 from '../assets/airbnb/10.jpg';
import air11 from '../assets/airbnb/11.jpg';
import air12 from '../assets/airbnb/12.jpg';
import air13 from '../assets/airbnb/13.jpg';

// adesso 
import ad1 from '../assets/adessp/1.png';
import ad2 from '../assets/adessp/2.JPG';
import ad3 from '../assets/adessp/3.JPG';
import ad4 from '../assets/adessp/4.JPG';
import ad5 from '../assets/adessp/5.JPG';
import ad6 from '../assets/adessp/6.JPG';
import ad7 from '../assets/adessp/7.JPG';
import ad8 from '../assets/adessp/8.JPG';
import ad9 from '../assets/adessp/9.JPG';
import ad10 from '../assets/adessp/10.JPG';

// dog day cdmx
import ddc1 from '../assets/dogdayCd/1.JPG';
import ddc2 from '../assets/dogdayCd/2.JPG';
import ddc3 from '../assets/dogdayCd/3.JPG';
import ddc4 from '../assets/dogdayCd/4.JPG';
import ddc5 from '../assets/dogdayCd/5.JPG';
import ddc6 from '../assets/dogdayCd/6.JPG';
import ddc7 from '../assets/dogdayCd/7.JPG';
import ddc8 from '../assets/dogdayCd/8.JPG';
import ddc9 from '../assets/dogdayCd/9.png';

// dog day qro
import dq1 from '../assets/dogdayQ/1.JPG';
import dq2 from '../assets/dogdayQ/2.JPG';
import dq3 from '../assets/dogdayQ/3.JPG';
import dq4 from '../assets/dogdayQ/4.JPG';
import dq5 from '../assets/dogdayQ/5.JPG';
import dq6 from '../assets/dogdayQ/6.JPG';
import dq7 from '../assets/dogdayQ/7.JPG';
import dq8 from '../assets/dogdayQ/8.JPG';
import dq9 from '../assets/dogdayQ/9.JPG';
import dq10 from '../assets/dogdayQ/10.JPG';
import dq13 from '../assets/dogdayQ/13.JPG';
import dq14 from '../assets/dogdayQ/14.png';
import dq15 from '../assets/dogdayQ/15.png';





const Proyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlano, setSelectedPlano] = useState(null);
  const [isPlanoLoading, setIsPlanoLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Precargar imágenes
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 500);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedPlano) {
        setSelectedPlano(null);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [selectedPlano]);

  const proyectosData = {
    'las-nubes': {
      title: 'Las Nubes',
      location: 'Av. Lazaro Cardenas',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: ln1,
      planos: [ln5, ln6, ln7, ln8], // Imágenes de planos para Las Nubes
      circleConfig: {
        items: [
          { image: ln1, text: '' },
          { image: ln2, text: '' },
          { image: ln3, text: '' },
          { image: ln4, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      }
    },
    'serafines': {
      title: 'Serafines',
      location: 'Col. Cumbres Providencia',
      year: '2023',
      description: 'Residencia moderna que fusiona elegancia y funcionalidad...',
      mainImage: sf1,
      planos: [sf4, sf5, sf6], // Imágenes de planos para Serafines
      circleConfig: {
        items: [
          { image: sf1, text: '' },
          { image: sf2, text: '' },
          { image: sf3, text: '' },
          { image: sf1, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      }
    },
    'gloria': {
      title: 'Gloria',
      location: 'Col. Cumbres Providencia',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: g7,
      planos: [g1, g2, g3, g4], // Imágenes de planos para Gloria
      circleConfig: {
        items: [
          { image: g5, text: '' },
          { image: g6, text: '' },
          { image: g7, text: '' },
          { image: g8, text: '' },
          { image: g9, text: '' },
          { image: g10, text: '' },
          { image: g11, text: '' },
          { image: g12, text: '' },
          { image: g13, text: '' },
          { image: g14, text: '' },
          { image: g15, text: '' },
          { image: g16, text: '' },
          { image: g17, text: '' },
          { image: g18, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'cartagena': {
      title: 'Cartagena',
      location: 'Col. Residencial Hacienda',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: c1,
      planos: null, // Imágenes de planos para Cartagena
      circleConfig: {
        items: [
          { image: c1, text: '' },
          { image: c2, text: '' },
          { image: c3, text: '' },
          { image: c4, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'quinta-golondrina': {
      title: 'Quinta Golondrina',
      location: 'Col. Cuauhtémoc',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: q1,
      planos: [q5, q6, q7], // Imágenes de planos para Quinta
      circleConfig: {
        items: [
          { image: q1, text: '' },
          { image: q2, text: '' },
          { image: q3, text: '' },
          { image: q4, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'focus-lab': {
      title: 'Focus Lab',
      location: 'San Pedro',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: f2,
      planos: [f1], // Imágenes de planos para Focus Lab
      circleConfig: {
        items: [
          { image: f2, text: '' },
          { image: f3, text: '' },
          { image: f4, text: '' },
          { image: f5, text: '' },
          { image: f6, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'dog-day-sp': {
      title: 'Dog Day San Pedro',
      location: 'Valle Oriente San Pedro',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: d3,
      planos: [d1, d2], // Imágenes de planos para Dog Day San Pedro

      circleConfig: {
        items: [
          { image: d3, text: '' },
          { image: d4, text: '' },
          { image: d5, text: '' },
          { image: d6, text: '' },
          { image: d7, text: '' },
          { image: d9, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },  
    },
    'innate-sp': {
      title: 'Innate San Pedro',
      location: 'San Pedro',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: is2,
      planos: [is2], // Imágenes de planos para Inate San Pedro
      circleConfig: {

        items: [
          { image: is2, text: '' },
          { image: is1, text: '' },
          { image: is2, text: '' },
          { image: is1, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'innate-saltillo': {
      title: 'Innate Saltillo',
      location: 'Saltillo',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: isal2,
      planos: [isal1], // Imágenes de planos para Inate Saltillo
      circleConfig: {
        items: [
          { image: isal2, text: '' },
          { image: isal3, text: '' },
          { image: isal4, text: '' },
          { image: isal5, text: '' },
          { image: isal6, text: '' },
          { image: isal7, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'innate-puebla': {
      title: 'Innate Puebla',
      location: 'Puebla',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: isal2,
      planos: [isal1], // Imágenes de planos para Inate Saltillo
      circleConfig: {
        items: [
          { image: isal2, text: '' },
          { image: isal3, text: '' },
          { image: isal4, text: '' },
          { image: isal5, text: '' },
          { image: isal6, text: '' },
          { image: isal7, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'airbnb': {
      title: 'Airbnb',
      location: 'Apodaca',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: air7,
      planos: [air1, air2, air3, air4, air5, air6], // Imágenes de planos para AirBnb
      circleConfig: {
        items: [
          { image: air7, text: '' },
          { image: air8, text: '' },
          { image: air9, text: '' },
          { image: air10, text: '' },
          { image: air11, text: '' },
          { image: air12, text: '' },
          { image: air13, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'adesso': {
      title: 'Adesso',
      location: 'Barrio Antiguo',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: ad2,
      planos: [ad1], // Imágenes de planos para Adesso
      circleConfig: {
        items: [
          { image: ad2, text: '' },
          { image: ad3, text: '' },
          { image: ad4, text: '' },
          { image: ad5, text: '' },
          { image: ad6, text: '' },
          { image: ad7, text: '' },
          { image: ad8, text: '' },
          { image: ad9, text: '' },
          { image: ad10, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'dog-day-cdmx': {
      title: 'Dog Day CDMX',
      location: 'Mundo E',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: ddc2,
      planos: [ddc9], // Imágenes de planos para Dog Day CDMX
      circleConfig: {
        items: [
          { image: ddc1, text: '' },
          { image: ddc2, text: '' },
          { image: ddc3, text: '' },
          { image: ddc4, text: '' },
          { image: ddc5, text: '' },
          { image: ddc6, text: '' },
          { image: ddc7, text: '' },
          { image: ddc8, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },
    'dog-day-qro': {
      title: 'Dog Day Querétaro',
      location: 'Zibatá',
      year: '2023',
      description: 'Proyecto residencial que integra espacios abiertos y luz natural...',
      mainImage: dq1,
      planos: [dq14, dq15], // Imágenes de planos para Dog Day Querétaro
      circleConfig: {
        items: [
          { image: dq1, text: '' },
          { image: dq2, text: '' },
          { image: dq3, text: '' },
          { image: dq4, text: '' },
          { image: dq5, text: '' },
          { image: dq6, text: '' },
          { image: dq7, text: '' },
          { image: dq8, text: '' },
          { image: dq9, text: '' },
          { image: dq10, text: '' },
          { image: dq13, text: '' },
        ],
        bend: 0,
        textColor: "#ffffff",
        borderRadius: 0.05,
        font: isMobile ? "bold 18px Sen" : "bold 24px Sen"
      },
    },



    // ... otros proyectos
  };

  const proyecto = proyectosData[id];

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }

  const { circleConfig } = proyecto;

  if (isLoading) {
    return <Loader />;
  }

  const openPlano = (plano) => {
    setIsPlanoLoading(true);
    
    // Preload the image
    const img = new Image();
    img.src = plano;
    img.onload = () => {
      setSelectedPlano(plano);
      setIsPlanoLoading(false);
    };
    
    document.body.style.overflow = 'hidden';
  };

  const closePlano = () => {
    setSelectedPlano(null);
    setIsPlanoLoading(false);
    document.body.style.overflow = 'auto';
  };

  const handlePlanoLoad = () => {
    setIsPlanoLoading(false);
  };

  return (
    <div className={`proyecto-container ${isVisible ? 'visible' : ''}`}>
      <button className="back-button" onClick={() => navigate(-1)}>
        <BsArrowLeft /> Volver
      </button>

      <div className="proyecto-header">
        <h1>{proyecto.title}</h1>
        <div className="proyecto-info">
          <p className="location">{proyecto.location}</p>
          <p className="year">{proyecto.year}</p>
          <p className="description">{proyecto.description}</p>
        </div>
      </div>

      <div className="proyecto-content">
        <div className="proyecto-main-image">
          <img src={proyecto.mainImage} alt={proyecto.title} />
        </div>

        <div className="circle-gallery-container">
          <CircularGallery {...circleConfig} />
        </div>

        {proyecto.planos && proyecto.planos.length > 0 && (
          <div className="proyecto-planos">
            <h2>Planos Arquitectónicos</h2>
            <p className="planos-info">Haz clic en cualquier plano para verlo en pantalla completa</p>
            <div className="plano-image">
              {proyecto.planos.map((plano, index) => (
                <div key={index} className="plano-item" onClick={() => openPlano(plano)}>
                  <img 
                    src={plano} 
                    alt={`Planos ${index + 1} de ${proyecto.title}`} 
                  />
                  <div className="plano-overlay">
                    <span className="zoom-icon">🔍</span>
                    <span className="zoom-text">Click para ampliar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Simple Fullscreen View */}
      {selectedPlano && (
        <div className="fullscreen-overlay" onClick={closePlano}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            {isPlanoLoading && (
              <div className="plano-loading">Cargando...</div>
            )}
            <img 
              src={selectedPlano} 
              alt="Plano en pantalla completa"
              onLoad={handlePlanoLoad}
            />
            <button 
              className="fullscreen-close" 
              onClick={closePlano}
              aria-label="Cerrar vista de pantalla completa"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyecto; 