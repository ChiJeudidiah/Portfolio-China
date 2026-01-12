import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Page/Accueil.css';
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
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80&fit=crop"
            ],
            technologies: ["ReactJS", "Bootstrap", "UI/UX Design"]
        },
        {
            id: 4,
            title: "TontoloNova DiaRaiky",
            description: "Projet en groupe - Simulation 3D développée dans Unity pour la sensibilisation à l'aménagement durable à Mahintsy. Modélisation des espaces verts, gestion des ressources et visualisation des impacts environnementaux.",
            images: [
                "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&auto=format&fit=crop&q=80&fit=crop"
            ],
            technologies: ["Unity", "C#", "3D Modeling"]
        },
        {
            id: 5,
            title: "Mariage",
            description: "Projet en groupe - Plateforme d'organisation de mariage proposant des services complets : réservation de robes et costumes, location de voitures, organisation de fêtes, animations et gestion des salles. Solution tout-en-un pour planifier l'événement parfait.",
            images: [
                "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80&fit=crop"
            ],
            technologies: ["Codeigniter", "Laragon", "MySQL"]
        },
        {
            id: 6,
            title: "e-HC",
            description: "Application web en binôme - Plateforme complète pour entreprise informatique avec double interface : partie publique (à propos, recrutement) et espace employés (modification de compte, fiche de paie, envoi de projets à l'admin, gestion des congés et visites médicales).",
            images: [
                "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=80&fit=crop"
            ],
            technologies: ["ReactTS", "MongoDB"]
        },
    ]);

    const aproposRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const projetRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

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

        await new Promise(resolve => setTimeout(resolve, 300));

        setActiveImageIndex(index);

        setIsSwapping(false);
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

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'CV_BELAHY_China.pdf';
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

    const languages = [
        { name: 'HTML', icon: 'fab fa-html5', color: '#E44D26' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: '#264DE4' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F0DB4F' },
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'React Native', icon: 'fas fa-mobile-alt', color: '#61DAFB' }
    ];

    const educationItems = [
        {
            date: "2024 - 2025",
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

                            <h2 className="profession">Designer & Développeur FrontEnd</h2>

                            <p className="description">
                                Passionné par la création d'interfaces modernes et intuitives<br />
                                Spécialisé en React TypeScript et design UI/UX
                            </p>

                            <div className="buttons">
                                <button className="btn-primary" onClick={() => scrollToSection('projet')}>
                                    Voir mes projets
                                </button>
                                <button className="btn-secondary" onClick={downloadCV}>
                                    Voir mon CV
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
                                    <h3 className="languages-title">Langages Maîtrisés</h3>
                                    <div className="languages-grid">
                                        {languages.map((lang, index) => (
                                            <div
                                                key={index}
                                                className={`language-card ${isAproposVisible ? 'visible' : ''}`}
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <div
                                                    className="language-icon-container"
                                                    style={{ backgroundColor: `${lang.color}20` }}
                                                >
                                                    <i
                                                        className={lang.icon}
                                                        style={{ color: lang.color }}
                                                    ></i>
                                                </div>
                                                <h4 className="language-name">{lang.name}</h4>
                                                <div className="language-progress">
                                                    <div
                                                        className="progress-bar"
                                                        style={{
                                                            width: '100%',
                                                            backgroundColor: lang.color
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
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
                                                <h4>React TypeScript</h4>
                                                <p>Développement d'applications modernes avec React et TypeScript</p>
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

                        {/* Navigation pour mobile */}
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
                                            }}
                                            aria-label={`Aller au projet ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Liste des projets pour desktop */}
                        {!isMobile && (
                            <div className={`projet-list ${isProjetVisible ? 'visible' : ''}`}>
                                {projects.map((project, index) => (
                                    <button
                                        key={project.id}
                                        className={`projet-list-item ${index === activeProjectIndex ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveProjectIndex(index);
                                            setActiveImageIndex(0);
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
                                    <div className="gallery-navigation">
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
                                        />
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
                                                <img
                                                    src={img}
                                                    alt={`Miniature ${index + 1}`}
                                                />
                                            </button>
                                        ))}
                                    </div>
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

                                    {/* Message d'alerte en bas du formulaire */}
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