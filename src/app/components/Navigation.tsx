'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Início' },
    { href: '/importancia', label: 'Importância' },
    { href: '/processo', label: 'Como Funciona' },
    { href: '/mitos', label: 'Mitos e Verdades' },
    { href: '/calendario', label: 'Calendário' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>💉</span>
          <span className={styles.logoText}>VacinasInfo</span>
        </Link>

        <button 
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className={isOpen ? styles.openIcon : styles.closeIcon}>☰</span>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.activeLink : styles.link}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}