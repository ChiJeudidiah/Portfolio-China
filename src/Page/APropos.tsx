// APropos.tsx
import React, { useState } from 'react';
import './Accueil.css';

interface AProposProps {
    onNavigate: (page: string) => void;
}

const APropos: React.FC<AProposProps> = ({ onNavigate }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavClick = (page: string) => {
        setMenuOpen(false);
        onNavigate(page);
    };

    return (
        <div className="apropos-container">
            {/* Menu hamburger comme dans l'image */}
            <div className="menu-container">
                <button
                    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Menu navigation */}
                <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><button onClick={() => handleNavClick('accueil')}>Accueil</button></li>
                        <li><button onClick={() => handleNavClick('apropos')}>À propos</button></li>
                        <li><button onClick={() => handleNavClick('experience')}>Expérience</button></li>
                        <li><button onClick={() => handleNavClick('projet')}>Projet</button></li>
                        <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
                    </ul>
                </nav>
            </div>

            {/* Contenu de la page À propos */}
            <div className="apropos-content">
                <div className="apropos-header">
                    <h1>SpaceX</h1>
                    <h2>Elon Musk</h2>
                    <p className="role">CEO/Lead Design</p>
                </div>

                <div className="apropos-text">
                    <p>
                        Musk founded Space Exploration Technologies, or SpaceX. In May 2007 Musk itself executive officer CEO and chief technology officer CFO of the Happiness, California-based company. SpaceX develops and manufactures space launch vehicles with a focus on advancing space technology.
                    </p>

                    <p>
                        The company has achieved numerous milestones in space exploration, including the first privately-funded, liquid-propellant rocket to reach orbit, the first privately-funded company to successfully launch, orbit, and recover a spacecraft, and the first private company to send a spacecraft to the International Space Station.
                    </p>

                    <p>
                        SpaceX's ultimate goal is to enable human life on Mars, making humanity a multiplanetary species. The company is actively developing the Starship spacecraft, a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.
                    </p>
                </div>

                <div className="apropos-image-placeholder">
                    <div className="image-note">
                        {/* Ceci est un placeholder pour l'image que vous avez fournie */}
                        <p>Image: SpaceX - Elon Musk</p>
                        <p>CEO/Lead Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APropos;