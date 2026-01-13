import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Page/Accueil.css';
import cvFile from '../assets/BELAHY China Jeudidiah.pdf';
import tour1 from "../assets/Images/Tour1.png";
import tour2 from "../assets/Images/Tour2.png";
import tour3 from "../assets/Images/Tour3.png";
import tour4 from "../assets/Images/Tour4.png";
import tour5 from "../assets/Images/Tour5.png";
import tour6 from "../assets/Images/Tour 6.png";
import tour7 from "../assets/Images/Tour 7.png";
import d1 from "../assets/Images/drama1.png";
import d2 from "../assets/Images/d2.png";
import d3 from "../assets/Images/d3.png";
import d4 from "../assets/Images/d4.png";
import d5 from "../assets/Images/d5.png";
import d6 from "../assets/Images/d6.png";
import ts from "../assets/Images/ts.png";
import bg1 from "../assets/Images/bj1.png";
import bg2 from "../assets/Images/bj2.png";
import bg3 from "../assets/Images/bj3.png";
import bg4 from "../assets/Images/bj4.png";
import bg5 from "../assets/Images/bj5.png";
import bg6 from "../assets/Images/bj6.png";
import bg8 from "../assets/Images/bj8.png";
import bg9 from "../assets/Images/bj9.png";
import ttn1 from "../assets/Images/ttn1.png";
import ttn2 from "../assets/Images/ttn2.png";
import ttn3 from "../assets/Images/ttn3.png";
import ttn4 from "../assets/Images/ttn4.png";
import ttn5 from "../assets/Images/ttn5.png";
import ttn6 from "../assets/Images/ttn6.png";
import s1 from "../assets/Images/s1.jpg";
import s2 from "../assets/Images/s2.jpg";
import s3 from "../assets/Images/s3.jpg";
import s4 from "../assets/Images/s4.jpg";
import s5 from "../assets/Images/s5.jpg";
import s6 from "../assets/Images/s6.jpg";
import s7 from "../assets/Images/s7.jpg";
import s8 from "../assets/Images/s8.jpg";
import s9 from "../assets/Images/s9.jpg";
import s10 from "../assets/Images/s10.jpg";
import ch1 from "../assets/Images/hc1.jpg";
import ch2 from "../assets/Images/hc2.png";
import ch3 from "../assets/Images/hc3.png";
import ch4 from "../assets/Images/hc4.png";
import ch5 from "../assets/Images/hc5.png";
import ch6 from "../assets/Images/hc6.png";
import ch7 from "../assets/Images/ch7.png";
import ch8 from "../assets/Images/ch8.png";
import ch9 from "../assets/Images/ch9.png";
import ch10 from "../assets/Images/hc10.png";
import ch11 from "../assets/Images/hc11.png";
import ch12 from "../assets/Images/ch12.png";
import ch13 from "../assets/Images/hc13.png";
import ch14 from "../assets/Images/ch14.png";




interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
}

const Accueil: React.FC = () => {
    const [activeSection, setActiveSection] = useState('accueil');
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const [isAproposVisible, setIsAproposVisible] = useState(false);
    const [isEducationVisible, setIsEducationVisible] = useState(false);
    const [isProjetVisible, setIsProjetVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);

    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isSwapping, setIsSwapping] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showImageNumbers, setShowImageNumbers] = useState(true);

    const [projects] = useState<Project[]>([
        {
            id: 1,
            title: "VISITERMADA",
            description: "Site web VISITERMADA est éfféctué par les RAITRA qui aidera les visiteurs à tout savoir sur Madagascar.Vous pouvez aperçevoir les hôtels,les activités,les parcs,les guides dans chaque provinces de Madagascar. Notre but c'est de vous aider à visiter Madagascar avec bonheur.",
            images: [
                tour1,
                tour2,
                tour3,
                tour4,
                tour5,
                tour6,
                tour7,
            ],
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
        },
        {
            id: 2,
            title: "DRAMALOVERS",
            description: "Projet personnel de design UI/UX - Plateforme de streaming de dramas asiatiques avec interface intuitive. Développé en ReactJS avec design responsive et expérience utilisateur optimisée.",
            images: [
                d1,
                d2,
                d3,
                d4,
                d5,
                d6,
            ],
            technologies: ["ReactJS", "CSS3", "UI Design"]
        },
        {
            id: 3,
            title: "Bijouterie CJ",
            description: "Projet personnel - Site vitrine pour une bijouterie avec catalogue de produits, design élégant et interface administrateur pour gestion des articles. Focus sur l'expérience utilisateur et présentation visuelle.",
            images: [
                bg1,
                bg2,
                bg3,
                bg4,
                bg5,
                bg6,
                bg8,
                bg9
            ],
            technologies: ["ReactJS", "Bootstrap", "UI/UX Design"]
        },
        {
            id: 4,
            title: "TontoloNova DiaRaiky",
            description: "Projet en groupe - Simulation 3D développée dans Unity pour la sensibilisation à l'aménagement durable à Mahintsy. Modélisation des espaces verts, gestion des ressources et visualisation des impacts environnementaux.",
            images: [
                ttn1,
                ttn2,
                ttn3,
                ttn4,
                ttn5,
                ttn6
            ],
            technologies: ["Unity", "C#", "3D Modeling"]
        },
        {
            id: 5,
            title: "Lakozia",
            description: "Projet personnel : Site vitrine qui montre des recettes de cuisine que les utilisateurs peuvent faire chez eux. Ils peuvent aussi acheter les ingredients qu'ils ont besoins",
            images: [
                s1,
                s2,
                s3,
                s4,
                s5,
                s6,
                s7,
                s8,
                s9,
                s10
            ],
            technologies: ["Woordpress"]
        },
        {
            id: 6,
            title: "e-HC",
            description: "Application web en binôme - Plateforme complète pour entreprise informatique avec double interface : partie publique (à propos, recrutement) et espace employés (modification de compte, fiche de paie, envoi de projets à l'admin, gestion des congés et visites médicales).",
            images: [
                ch1,
                ch2,
                ch3,
                ch4,
                ch5,
                ch6,
                ch7,
                ch8,
                ch9,
                ch10,
                ch11,
                ch12,
                ch13,
                ch14
            ],
            technologies: ["ReactTS", "MongoDB", "Node.JS/Express"]
        },
    ]);

    const aproposRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const projetRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const fullscreenOverlayRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);

        if (sectionId === 'accueil') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                switch (sectionId) {
                    case 'apropos':
                        setIsAproposVisible(true);
                        break;
                    case 'education':
                        setIsEducationVisible(true);
                        break;
                    case 'projet':
                        setIsProjetVisible(true);
                        break;
                    case 'contact':
                        setIsContactVisible(true);
                        break;
                }
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition < windowHeight * 0.5) {
            setActiveSection('accueil');
        } else if (scrollPosition < windowHeight * 1.5) {
            setActiveSection('apropos');
        } else if (scrollPosition < windowHeight * 2.5) {
            setActiveSection('education');
        } else if (scrollPosition < windowHeight * 3.5) {
            setActiveSection('projet');
        } else {
            setActiveSection('contact');
        }

        checkSectionsVisibility();
    };

    const checkSectionsVisibility = () => {
        const windowHeight = window.innerHeight;

        if (aproposRef.current && !isAproposVisible) {
            const rect = aproposRef.current.getBoundingClientRect();
            if (rect.top <= windowHeight - 100) setIsAproposVisible(true);
        }

        if (educationRef.current && !isEducationVisible) {
            const rect = educationRef.current.getBoundingClientRect();
            if (rect.top <= windowHeight - 100) setIsEducationVisible(true);
        }

        if (projetRef.current && !isProjetVisible) {
            const rect = projetRef.current.getBoundingClientRect();
            if (rect.top <= windowHeight - 100) setIsProjetVisible(true);
        }

        if (contactRef.current && !isContactVisible) {
            const rect = contactRef.current.getBoundingClientRect();
            if (rect.top <= windowHeight - 100) setIsContactVisible(true);
        }
    };

    const checkMobile = () => {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);
    };

    const nextProject = () => {
        setActiveProjectIndex((prev) => (prev + 1) % projects.length);
        setActiveImageIndex(0);
    };

    const prevProject = () => {
        setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setActiveImageIndex(0);
    };

    const nextImage = () => {
        const currentProject = projects[activeProjectIndex];
        setActiveImageIndex((prev) => (prev + 1) % currentProject.images.length);
    };

    const prevImage = () => {
        const currentProject = projects[activeProjectIndex];
        setActiveImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
    };

    const handleThumbnailClick = async (index: number) => {
        if (isSwapping || index === activeImageIndex) return;

        setIsSwapping(true);
        setShowImageNumbers(false);

        await new Promise(resolve => setTimeout(resolve, 300));

        setActiveImageIndex(index);

        setIsSwapping(false);
    };

    const handleImageClick = () => {
        setShowImageNumbers(false);
    };

    const openFullScreen = () => {
        setIsFullScreen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeFullScreen = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        setIsFullScreen(false);
        document.body.style.overflow = 'auto';
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (fullscreenOverlayRef.current && e.target === fullscreenOverlayRef.current) {
            closeFullScreen();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);
        checkMobile();

        setTimeout(checkSectionsVisibility, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isAproposVisible, isEducationVisible, isProjetVisible, isContactVisible]);

    useEffect(() => {
        if (isFullScreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isFullScreen]);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'CV_BELAHY_China_Jeudidiah.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const serviceID = 'service_g85znd1';
            const templateID = 'template_sjx9v5s';
            const publicKey = 'qb9YATAAcIjpGTNX1';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'belahychinajeudidiah@gmail.com',
                reply_to: formData.email,
                date: new Date().toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            const result = await emailjs.send(
                serviceID,
                templateID,
                templateParams,
                publicKey
            );

            console.log('✅ Email envoyé avec succès:', result.status);

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('❌ Erreur complète:', error);

            interface EmailJSError {
                status?: number;
                text?: string;
            }

            const emailError = error as EmailJSError;

            if (emailError.status === 404) {
                alert('Erreur 404: Vérifiez Service ID ou Template ID');
            } else if (emailError.text?.includes('Invalid')) {
                alert('Clé ou identifiants invalides');
            } else {
                alert('Erreur: ' + (emailError.text || 'Veuillez réessayer'));
            }

            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const menuItems = [
        { id: 'accueil', name: 'Accueil', iconClass: 'fas fa-home' },
        { id: 'apropos', name: 'À propos', iconClass: 'fas fa-user' },
        { id: 'education', name: 'Éducation', iconClass: 'fas fa-graduation-cap' },
        { id: 'projet', name: 'Projet', iconClass: 'fas fa-briefcase' },
        { id: 'contact', name: 'Contact', iconClass: 'fas fa-envelope' }
    ];

    const frontendSkills = [
        { name: 'HTML', icon: 'fab fa-html5', color: '#E44D26' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: '#264DE4' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F0DB4F' }
    ];

    const frameworkSkills = [
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'React Native', icon: 'fas fa-mobile-alt', color: '#61DAFB' },
        { name: 'TypeScript', icon: ts, color: '#3178C6', isImage: true }
    ];

    const toolsSkills = [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' }
    ];

    const educationItems = [
        {
            date: "2022 - 2025",
            title: "Etudiante en Informatique (L3)",
            institution: "Institut Supérieur Polytechnique de Madagascar",
            details: "Informatique, Statistique Appliquée et Intelligence Artificielle"
        },
        {
            date: "Septembre 2024",
            title: "Diplôme de Langue Française",
            institution: "Alliance Française Andavamamba Antananarivo",
            details: "Diplôme de Langue Française B1 session Septembre 2024"
        },
        {
            date: "01 Octobre 2024 - 03 Octobre 2024",
            title: "Certificat de Formation Laravel",
            institution: "Orange Digital Center Antananarivo Madagascar",
            details: "Développement d'applications web en Laravel"
        },
        {
            date: "2022-2023",
            title: "Diplôme du Baccalauréat série D",
            institution: "Lycée Privé Saint Joseph Antsirabe",
            details: ""
        }
    ];

    return (
        <div className="accueil-container">
            {isFullScreen && (
                <div
                    className="fullscreen-overlay"
                    ref={fullscreenOverlayRef}
                    onClick={handleOverlayClick}
                >
                    <div className="fullscreen-thumbnails-grid">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                className={`fullscreen-project-thumb ${index === activeProjectIndex ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveProjectIndex(index);
                                    setActiveImageIndex(0);
                                }}
                            >
                                <div className="project-thumb-number">Projet {index + 1}</div>
                                <div className="project-thumb-title">{project.title}</div>
                            </button>
                        ))}
                    </div>
                    <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
                        <div className="fullscreen-header">
                            <div className="fullscreen-project-nav">
                                <div className="fullscreen-project-title-container">
                                    <div className="fullscreen-project-number">Projet {activeProjectIndex + 1}</div>
                                    <h3 className="fullscreen-project-title">{projects[activeProjectIndex].title}</h3>
                                </div>
                            </div>
                            <button className="close-fullscreen-btn" onClick={closeFullScreen}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="fullscreen-image-container">
                            <button className="fullscreen-nav-btn prev" onClick={prevImage}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <img
                                src={projects[activeProjectIndex].images[activeImageIndex]}
                                alt={`${projects[activeProjectIndex].title} - Image ${activeImageIndex + 1}`}
                                className="fullscreen-main-image"
                            />
                            <button className="fullscreen-nav-btn next" onClick={nextImage}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>

                        <div className="fullscreen-info-container">
                            <div className="fullscreen-description-box">
                                <h4 className="fullscreen-description-title">
                                    <i className="fas fa-align-left"></i>
                                    Description
                                </h4>
                                <p className="fullscreen-description-text">{projects[activeProjectIndex].description}</p>
                            </div>

                            <div className="fullscreen-tech-box">
                                <h4 className="fullscreen-tech-title">
                                    <i className="fas fa-code"></i>
                                    Technologies
                                </h4>
                                <div className="fullscreen-tech-list">
                                    {projects[activeProjectIndex].technologies.map((tech, index) => (
                                        <span key={index} className="fullscreen-tech-item">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isMobile && (
                <nav className="vertical-menu">
                    <ul className="menu-items">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`menu-btn ${activeSection === item.id ? 'active' : ''}`}
                                    title={item.name}
                                >
                                    <i className={item.iconClass}></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {isMobile && (
                <nav className="mobile-bottom-nav">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                        >
                            <i className={item.iconClass}></i>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>
            )}

            <main className="main-content">
                <section id="accueil" className="section accueil-section">
                    <div className="background-image"></div>
                    <div className="background-overlay"></div>

                    <div className={`accueil-card ${isMobile ? 'mobile' : ''}`}>
                        <div className="accueil-photo-container">
                            <div className="accueil-photo"></div>
                        </div>

                        <div className="accueil-text-content">
                            <div className="greeting">
                                <span className="hi">Bonjour,</span>
                                <span className="im"> je suis</span>
                                <span className="name">BELAHY China Jeudidiah</span>
                            </div>

                            <h2 className="profession">Designer & Développeuse Front-End</h2>

                            <div className="buttons">
                                <button className="btn-primary" onClick={() => scrollToSection('projet')}>
                                    Voir mes projets
                                </button>
                                <button className="btn-secondary" onClick={downloadCV}>
                                    Télécharger mon CV
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="apropos"
                    className={`section apropos-section ${isAproposVisible ? 'visible' : ''}`}
                    ref={aproposRef}
                >
                    <div className="apropos-bg"></div>

                    <div className="section-content">
                        <div className="about-me-header">
                            <h2 className="section-title">À Propos</h2>
                            <div className="about-me-content">
                                <div className="about-me-text">
                                    <p className="intro-text">
                                        <span className="highlight">Je suis à la recherche d'un stage de 3 mois en développement React TypeScript</span><br />dans le cadre de ma Licence 3 en informatique. Passionné par le design, je possède des compétences en développement web et design UI/UX. Je me spécialise dans la création d'expériences digitales à la fois esthétiques et fonctionnelles.
                                    </p>
                                </div>

                                <div className="stats-grid">
                                    <div className={`stat-card ${isAproposVisible ? 'visible' : ''}`}>
                                        <div className="stat-number">10+</div>
                                        <div className="stat-label">Projets Personnels</div>
                                    </div>

                                    <div className={`stat-card ${isAproposVisible ? 'visible' : ''}`}>
                                        <div className="stat-number">5+</div>
                                        <div className="stat-label">Projets en Groupe</div>
                                    </div>
                                </div>

                                <div className="languages-section">
                                    <h3 className="languages-title">Compétences Techniques</h3>
                                    <div className="skills-columns-container">
                                        <div className="skills-column">
                                            <h4 className="column-title">Front-End</h4>
                                            <div className="column-content">
                                                {frontendSkills.map((skill, index) => (
                                                    <div
                                                        key={index}
                                                        className={`skill-column-item ${isAproposVisible ? 'visible' : ''}`}
                                                        style={{ animationDelay: `${index * 0.1}s` }}
                                                    >
                                                        <div
                                                            className="skill-icon-container"
                                                            style={{ backgroundColor: `${skill.color}20` }}
                                                        >
                                                            <i
                                                                className={skill.icon}
                                                                style={{ color: skill.color }}
                                                            ></i>
                                                        </div>
                                                        <h4 className="skill-name">{skill.name}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="skills-column">
                                            <h4 className="column-title">Langages</h4>
                                            <div className="column-content">
                                                {frameworkSkills.map((skill, index) => (
                                                    <div
                                                        key={index}
                                                        className={`skill-column-item ${isAproposVisible ? 'visible' : ''}`}
                                                        style={{ animationDelay: `${index * 0.1}s` }}
                                                    >
                                                        <div
                                                            className="skill-icon-container"
                                                            style={{ backgroundColor: `${skill.color}20` }}
                                                        >
                                                            {skill.isImage ? (
                                                                <img
                                                                    src={skill.icon}
                                                                    alt={skill.name}
                                                                    className="tsicon"
                                                                />
                                                            ) : (
                                                                <i
                                                                    className={skill.icon}
                                                                    style={{ color: skill.color }}
                                                                ></i>
                                                            )}
                                                        </div>
                                                        <h4 className="skill-name">{skill.name}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="skills-column">
                                            <h4 className="column-title">Outils</h4>
                                            <div className="column-content">
                                                {toolsSkills.map((skill, index) => (
                                                    <div
                                                        key={index}
                                                        className={`skill-column-item ${isAproposVisible ? 'visible' : ''}`}
                                                        style={{ animationDelay: `${index * 0.1}s` }}
                                                    >
                                                        <div
                                                            className="skill-icon-container"
                                                            style={{ backgroundColor: `${skill.color}20` }}
                                                        >
                                                            <i
                                                                className={skill.icon}
                                                                style={{ color: skill.color }}
                                                            ></i>
                                                        </div>
                                                        <h4 className="skill-name">{skill.name}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills-section">
                                    <h3 className="skills-title">Mes Compétences</h3>
                                    <div className="skills-grid">
                                        <div className={`skill-item ${isAproposVisible ? 'visible' : ''}`}>
                                            <div className="skill-icon">
                                                <i className="fab fa-react"></i>
                                            </div>
                                            <div className="skill-info">
                                                <h4>React (JavaScript/TypeScript) </h4>
                                                <p>Développement d'applications modernes avec React(JS/TS)</p>
                                            </div>
                                        </div>

                                        <div className={`skill-item ${isAproposVisible ? 'visible' : ''}`}>
                                            <div className="skill-icon">
                                                <i className="fas fa-paint-brush"></i>
                                            </div>
                                            <div className="skill-info">
                                                <h4>UI/UX Design</h4>
                                                <p>Création d'interfaces utilisateur intuitives et esthétiques</p>
                                            </div>
                                        </div>

                                        <div className={`skill-item ${isAproposVisible ? 'visible' : ''}`}>
                                            <div className="skill-icon">
                                                <i className="fab fa-js"></i>
                                            </div>
                                            <div className="skill-info">
                                                <h4>JavaScript</h4>
                                                <p>Maîtrise du JavaScript moderne (ES6+)</p>
                                            </div>
                                        </div>

                                        <div className={`skill-item ${isAproposVisible ? 'visible' : ''}`}>
                                            <div className="skill-icon">
                                                <i className="fab fa-css3-alt"></i>
                                            </div>
                                            <div className="skill-info">
                                                <h4>CSS</h4>
                                                <p>Stylisation moderne avec CSS3 et animations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="education"
                    className={`section education-section ${isEducationVisible ? 'visible' : ''}`}
                    ref={educationRef}
                >
                    <div className={`education-bg ${isMobile ? 'mobile-bg' : ''}`}></div>

                    <div className="section-content">
                        <h2 className="section-title">Parcours Académique</h2>

                        <div className="education-timeline">
                            {educationItems.map((item, index) => (
                                <div key={index} className={`timeline-item ${isEducationVisible ? 'visible' : ''}`}>
                                    <div className="timeline-date">{item.date}</div>
                                    <div className="timeline-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.institution}</p>
                                        {item.details && <p>{item.details}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="projet"
                    className={`section projet-section ${isProjetVisible ? 'visible' : ''}`}
                    ref={projetRef}
                >
                    <div className="projet-bg"></div>

                    <div className="section-content">
                        <h2 className="section-title">Mes Projets</h2>

                        {isMobile && (
                            <div className="mobile-projects-carousel">
                                <div className="carousel-header">
                                    <button
                                        className="carousel-arrow prev-arrow"
                                        onClick={prevProject}
                                        aria-label="Projet précédent"
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>

                                    <div className="carousel-project-info">
                                        <h3>{projects[activeProjectIndex].title}</h3>
                                        <p>{projects[activeProjectIndex].technologies.slice(0, 2).join(', ')}...</p>
                                    </div>

                                    <button
                                        className="carousel-arrow next-arrow"
                                        onClick={nextProject}
                                        aria-label="Projet suivant"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>

                                <div className="carousel-indicator">
                                    {projects.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`indicator-dot ${index === activeProjectIndex ? 'active' : ''}`}
                                            onClick={() => {
                                                setActiveProjectIndex(index);
                                                setActiveImageIndex(0);
                                                setShowImageNumbers(true);
                                            }}
                                            aria-label={`Aller au projet ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {!isMobile && (
                            <div className={`projet-list ${isProjetVisible ? 'visible' : ''}`}>
                                {projects.map((project, index) => (
                                    <button
                                        key={project.id}
                                        className={`projet-list-item ${index === activeProjectIndex ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveProjectIndex(index);
                                            setActiveImageIndex(0);
                                            setShowImageNumbers(true);
                                        }}
                                    >
                                        <div className="list-item-icon">
                                            <i className="fas fa-project-diagram"></i>
                                        </div>
                                        <div className="list-item-info">
                                            <h4>{project.title}</h4>
                                            <p>{project.technologies.slice(0, 2).join(', ')}...</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="projet-container">
                            <div className={`projet-navigation ${isProjetVisible ? 'visible' : ''}`}>
                                <button
                                    className="nav-arrow prev-arrow"
                                    onClick={prevProject}
                                    aria-label="Projet précédent"
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>

                                <div className="projet-counter">
                                    <span className="current-project">{activeProjectIndex + 1}</span>
                                    <span className="total-projects"> / {projects.length}</span>
                                </div>

                                <button
                                    className="nav-arrow next-arrow"
                                    onClick={nextProject}
                                    aria-label="Projet suivant"
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>

                            <div className={`projet-details ${isProjetVisible ? 'visible' : ''}`}>
                                <div className="projet-info">
                                    <h3 className="projet-title">{projects[activeProjectIndex].title}</h3>
                                    <p className="projet-description">
                                        {projects[activeProjectIndex].description}
                                    </p>

                                    <div className="projet-technologies">
                                        <h4>Technologies utilisées :</h4>
                                        <div className="tech-tags">
                                            {projects[activeProjectIndex].technologies.map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="projet-gallery">
                                    <div className="gallery-header">
                                        <button
                                            className="image-nav prev-image"
                                            onClick={prevImage}
                                            aria-label="Image précédente"
                                        >
                                            <i className="fas fa-chevron-left"></i>
                                        </button>

                                        <div className="image-counter">
                                            <span>{activeImageIndex + 1}</span>
                                            <span> / {projects[activeProjectIndex].images.length}</span>
                                        </div>

                                        <button
                                            className="image-nav next-image"
                                            onClick={nextImage}
                                            aria-label="Image suivante"
                                        >
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </div>

                                    <div className={`current-image-container ${isSwapping ? 'swapping' : ''}`}>
                                        <img
                                            src={projects[activeProjectIndex].images[activeImageIndex]}
                                            alt={`${projects[activeProjectIndex].title} - Image ${activeImageIndex + 1}`}
                                            className="current-image"
                                            onClick={handleImageClick}
                                        />
                                        {showImageNumbers && (
                                            <div className="image-number-overlay">
                                                {activeImageIndex + 1}
                                            </div>
                                        )}
                                    </div>

                                    <div className="image-thumbnails">
                                        {projects[activeProjectIndex].images.map((img, index) => (
                                            <button
                                                key={index}
                                                className={`thumbnail ${index === activeImageIndex ? 'active' : ''} ${isSwapping ? 'disabled' : ''}`}
                                                onClick={() => handleThumbnailClick(index)}
                                                aria-label={`Voir l'image ${index + 1}`}
                                                disabled={isSwapping}
                                            >
                                                <div className="thumbnail-number">{index + 1}</div>
                                                <img
                                                    src={img}
                                                    alt={`Miniature ${index + 1}`}
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    <button className="btn-view-large" onClick={openFullScreen}>
                                        <i className="fas fa-expand"></i>
                                        Voir en plus grand
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    className={`section contact-section ${isContactVisible ? 'visible' : ''}`}
                    ref={contactRef}
                >
                    <div className="contact-bg"></div>

                    <div className="section-content">
                        <h2 className="section-title">Contactez-moi</h2>

                        <div className="contact-container">
                            <div className="contact-info">
                                <div className={`contact-card ${isContactVisible ? 'visible' : ''}`}>
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>Email</h3>
                                        <p>belahychinajeudidiah@gmail.com</p>
                                        <p>Disponible pour répondre sous 24h</p>
                                    </div>
                                </div>

                                <div className={`contact-card ${isContactVisible ? 'visible' : ''}`}>
                                    <div className="contact-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>Téléphone</h3>
                                        <p>+261 38 24 911 00</p>
                                        <p>Lundi au Vendredi, 8h-18h</p>
                                    </div>
                                </div>

                                <div className={`contact-card ${isContactVisible ? 'visible' : ''}`}>
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>Localisation</h3>
                                        <p>Antananarivo, Madagascar</p>
                                    </div>
                                </div>
                                <div className={`contact-card ${isContactVisible ? 'visible' : ''}`}>
                                    <div className="contact-icon">
                                        <i className="fab fa-facebook"></i>
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>Facebook</h3>
                                        <p><a href="https://www.facebook.com/china.jeudidiah">https://www.facebook.com/china.jeudidiah</a></p>
                                    </div>
                                </div>
                                <div className={`contact-card ${isContactVisible ? 'visible' : ''}`}>
                                    <div className="contact-icon">
                                        <i className="fab fa-github"></i>
                                    </div>
                                    <div className="contact-card-content">
                                        <h3>GitHub</h3>
                                        <p>
                                            <a href="https://github.com/ChiJeudidiah" target="_blank" rel="noopener noreferrer">
                                                github.com/ChiJeudidiah
                                            </a>
                                        </p>
                                        <p>Voir mes projets et contributions</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`contact-form-container ${isContactVisible ? 'visible' : ''}`}>
                                <div className="form-header">
                                    <h3>Envoyez un message</h3>
                                    <p>Discutons de votre projet ou opportunité de collaboration</p>
                                </div>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Votre nom complet</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Votre adresse email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="nom@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Votre message</label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Décrivez votre projet ou votre demande..."
                                            rows={5}
                                            required
                                        ></textarea>
                                    </div>

                                    {submitStatus === 'success' && (
                                        <div className="form-alert alert-success">
                                            <i className="fas fa-check-circle"></i>
                                            Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="form-alert alert-error">
                                            <i className="fas fa-exclamation-circle"></i>
                                            Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
                                        </div>
                                    )}

                                    <div className="form-footer">
                                        <div className="form-notice">
                                            <i className="fas fa-shield-alt"></i>
                                            Vos informations sont sécurisées
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn-submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <i className="fas fa-spinner fa-spin"></i>
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-paper-plane"></i>
                                                    Envoyer le message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.facebook.com/china.jeudidiah" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jeudidiah-china-21b362346" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://instagram.com/belahychina" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/ChiJeudidiah" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <h4>@China Jeudidiah</h4>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Accueil;