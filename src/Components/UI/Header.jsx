import React, { useState } from 'react';
import logo from '../../Assests/websiteLogo.png';
import { NavLink } from 'react-router-dom';

const languageOptions = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/us.svg' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/fr.svg' },
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/de.svg' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/es.svg' },
  { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/it.svg' },
  { code: 'jp', name: '日本語', flag: 'https://flagcdn.com/jp.svg' },
  { code: 'kr', name: '한국어', flag: 'https://flagcdn.com/kr.svg' },
  { code: 'in', name: 'हिन्दी', flag: 'https://flagcdn.com/in.svg' },
];

function Header() {
  const [selectedLang, setSelectedLang] = useState(languageOptions);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="header-container">
      <div className="logo-ctr">
        <NavLink>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav className="page-ctr">
        <ul>
          <li>
            <NavLink to="smartcart">Caper Smart Cart</NavLink>
          </li>
          <li>
            <NavLink to="retailers">For Retailers</NavLink>
          </li>
          <li>
            <NavLink to="resource">Resources</NavLink>
          </li>
          <li className="get-lang-wrapper">
            <NavLink to="contact" className="btn1">Get Caper Today</NavLink>

            <div className="lang-dropdown">
              <button className="dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Get
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  {languageOptions.map((lang) => (
                    <li key={lang.code} className="dropdown-item" onClick={() => handleSelect(lang)}>
                      <img src={lang.flag} alt={lang.name} className="flag-icon" />
                      {lang.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
