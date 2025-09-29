import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Vacinas Salvam Vidas
          </h1>
          <p className={styles.heroSubtitle}>
            Informação baseada em ciência para proteger você e sua família
          </p>
          <div className={styles.heroButtons}>
            <Link href="/importancia" className={styles.btnPrimary}>
              Saiba Mais
            </Link>
            <Link href="/mitos" className={styles.btnSecondary}>
              Mitos e Verdades
            </Link>
          </div>
        </div>
        <div className={styles.heroIllustration}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>2-3M</div>
            <div className={styles.statLabel}>Vidas salvas por ano</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Eficácia média</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>200+</div>
            <div className={styles.statLabel}>Anos de história</div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Por que vacinar?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🛡️</div>
              <h3>Proteção Individual</h3>
              <p>As vacinas protegem você contra doenças graves e potencialmente fatais.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>👨‍👩‍👧‍👦</div>
              <h3>Proteção Coletiva</h3>
              <p>A imunização em massa cria barreiras que protegem toda a comunidade.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔬</div>
              <h3>Ciência Comprovada</h3>
              <p>Décadas de pesquisa e bilhões de doses aplicadas comprovam a segurança.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💰</div>
              <h3>Economia em Saúde</h3>
              <p>Prevenir é mais eficiente e econômico do que tratar doenças.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Fique Informado</h2>
          <p>Não deixe que informações falsas coloquem sua saúde em risco</p>
          <Link href="/mitos" className={styles.btnPrimary}>
            Descubra a Verdade
          </Link>
        </div>
      </section>
    </div>
  );
}