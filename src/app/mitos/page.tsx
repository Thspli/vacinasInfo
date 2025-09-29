'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Myth {
  id: number;
  myth: string;
  truth: string;
  category: string;
}

export default function Mitos() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const myths: Myth[] = [
    {
      id: 1,
      myth: 'Vacinas causam autismo',
      truth: 'Essa é uma das desinformações mais perigosas e já foi completamente desmentida pela ciência. O estudo que alegava essa conexão foi retratado e seu autor perdeu a licença médica por fraude. Múltiplos estudos com milhões de crianças não encontraram nenhuma ligação entre vacinas e autismo.',
      category: 'seguranca'
    },
    {
      id: 2,
      myth: 'Vacinas contêm substâncias tóxicas perigosas',
      truth: 'As vacinas contêm ingredientes em quantidades extremamente pequenas e seguras. Por exemplo, o timerosal (conservante com mercúrio) foi removido da maioria das vacinas por precaução, mas nunca foi comprovado que causasse danos. As quantidades de alumínio em vacinas são menores do que as encontradas no leite materno e fórmulas infantis.',
      category: 'seguranca'
    },
    {
      id: 3,
      myth: 'É melhor ter imunidade natural do que pela vacina',
      truth: 'A imunidade natural requer contrair a doença, o que pode causar complicações graves ou morte. As vacinas proporcionam imunidade sem os riscos da doença. Por exemplo, a infecção por sarampo pode causar encefalite e morte, enquanto a vacina é segura e eficaz.',
      category: 'eficacia'
    },
    {
      id: 4,
      myth: 'Vacinas não são necessárias porque as doenças já foram erradicadas',
      truth: 'As doenças só estão sob controle PORQUE a vacinação continua. Quando as taxas de vacinação caem, as doenças voltam. Vimos surtos de sarampo em diversos países devido à queda na cobertura vacinal. A poliomielite ainda existe em alguns países e pode retornar se pararmos de vacinar.',
      category: 'eficacia'
    },
    {
      id: 5,
      myth: 'Bebês são muito jovens para serem vacinados',
      truth: 'Os calendários de vacinação são cuidadosamente elaborados para proteger bebês quando eles são mais vulneráveis. O sistema imunológico dos bebês é capaz de responder a múltiplas vacinas. Atrasar a vacinação deixa as crianças desprotegidas em um período crítico.',
      category: 'seguranca'
    },
    {
      id: 6,
      myth: 'Vacinas sobrecarregam o sistema imunológico',
      truth: 'O sistema imunológico lida com milhares de antígenos diariamente. As vacinas modernas contêm muito menos antígenos do que as antigas. Um bebê enfrenta mais desafios imunológicos comendo ou tocando objetos do que com todas as vacinas do calendário.',
      category: 'seguranca'
    },
    {
      id: 7,
      myth: 'Vacinas foram desenvolvidas rápido demais, não são seguras',
      truth: 'As vacinas de mRNA (como as da COVID-19) usam tecnologia estudada há décadas. O desenvolvimento foi acelerado devido a investimentos massivos, trabalho paralelo de fases de teste e priorização regulatória, não por pular etapas de segurança. Bilhões de doses comprovaram a segurança.',
      category: 'desenvolvimento'
    },
    {
      id: 8,
      myth: 'Pessoas saudáveis não precisam de vacinas',
      truth: 'Qualquer pessoa pode contrair e transmitir doenças, mesmo sendo saudável. Vacinar-se protege você e pessoas vulneráveis ao seu redor que não podem se vacinar (bebês, imunodeprimidos, idosos). Doenças evitáveis podem causar complicações graves mesmo em pessoas saudáveis.',
      category: 'eficacia'
    },
    {
      id: 9,
      myth: 'Vacinas alteram o DNA',
      truth: 'Isso é biologicamente impossível. As vacinas de mRNA não entram no núcleo celular onde está o DNA. O mRNA é temporário e degradado rapidamente pelo corpo após instruir as células a produzirem proteínas que geram resposta imune.',
      category: 'desenvolvimento'
    },
    {
      id: 10,
      myth: 'Efeitos colaterais das vacinas são piores que as doenças',
      truth: 'Efeitos colaterais graves são extremamente raros. Os efeitos comuns (dor no local, febre leve) são temporários e leves. As complicações das doenças que previnem são muito mais graves: paralisia (poliomielite), morte (sarampo), câncer (HPV), entre outras.',
      category: 'seguranca'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'seguranca', name: 'Segurança' },
    { id: 'eficacia', name: 'Eficácia' },
    { id: 'desenvolvimento', name: 'Desenvolvimento' }
  ];

  const filteredMyths = selectedCategory === 'todos' 
    ? myths 
    : myths.filter(m => m.category === selectedCategory);

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Mitos e Verdades sobre Vacinas</h1>
          <p className={styles.subtitle}>
            Desmentindo as informações falsas mais comuns e trazendo fatos baseados em ciência
          </p>
        </div>
      </section>

      <section className={styles.warning}>
        <div className={styles.container}>
          <div className={styles.warningBox}>
            <span className={styles.warningIcon}>⚠️</span>
            <div>
              <h3>Cuidado com a Desinformação</h3>
              <p>
                A desinformação sobre vacinas pode ter consequências fatais. Todas as informações aqui 
                são baseadas em evidências científicas e organizações de saúde confiáveis como OMS, CDC e Fiocruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <h3>Filtrar por categoria:</h3>
            <div className={styles.filterButtons}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={selectedCategory === cat.id ? styles.filterActive : styles.filterButton}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.mythsList}>
            {filteredMyths.map(item => (
              <div key={item.id} className={styles.mythCard}>
                <div className={styles.mythHeader}>
                  <span className={styles.mythIcon}>❌</span>
                  <h3>MITO</h3>
                </div>
                <p className={styles.mythText}>{item.myth}</p>
                
                <div className={styles.truthHeader}>
                  <span className={styles.truthIcon}>✅</span>
                  <h3>VERDADE</h3>
                </div>
                <p className={styles.truthText}>{item.truth}</p>
              </div>
            ))}
          </div>

          <div className={styles.sources}>
            <h3>📚 Fontes Confiáveis</h3>
            <p>Para mais informações baseadas em evidências, consulte:</p>
            <ul>
              <li>Organização Mundial da Saúde (OMS/WHO)</li>
              <li>Centers for Disease Control and Prevention (CDC)</li>
              <li>Fundação Oswaldo Cruz (Fiocruz)</li>
              <li>Sociedade Brasileira de Imunizações (SBIm)</li>
              <li>Ministério da Saúde do Brasil</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}