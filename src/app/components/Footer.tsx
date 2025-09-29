'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.logo}>
              <span className={styles.logoIcon}>💉</span>
              VacinasInfo
            </h3>
            <p className={styles.description}>
              Informações confiáveis e baseadas em ciência sobre a importância das vacinas 
              para a saúde individual e coletiva.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Navegação</h4>
            <ul className={styles.links}>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/importancia">Importância</Link></li>
              <li><Link href="/mitos">Mitos e Verdades</Link></li>
              <li><Link href="/calendario">Calendário de Vacinação</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Recursos</h4>
            <ul className={styles.links}>
              <li><a href="/calendario" onClick={(e) => e.preventDefault()}>Calendário de Vacinação</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Carteira Digital</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Postos de Saúde</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Fontes Confiáveis</h4>
            <ul className={styles.links}>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Ministério da Saúde</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>OMS/WHO</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Fiocruz</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>SBIm</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} VacinasInfo. Todos os direitos reservados.
          </p>
          <p className={styles.disclaimer}>
            Este site tem caráter informativo e educacional. Para orientações específicas, 
            consulte sempre um profissional de saúde qualificado.
          </p>
        </div>
      </div>
    </footer>
  );
}