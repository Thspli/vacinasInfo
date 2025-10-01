'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

export default function Processo() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const section = entry.target as HTMLDivElement;
        const index = sectionsRef.current.findIndex(ref => ref === section);
        if (entry.isIntersecting && index !== -1) {
          setVisibleSections(prev => new Set(prev).add(index));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) {
      sectionsRef.current[index] = el as HTMLDivElement;
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>A Jornada de uma Vacina</h1>
          <p className={styles.heroSubtitle}>
            Da pesquisa científica à proteção do seu corpo: descubra cada etapa deste processo fascinante
          </p>
          <div className={styles.scrollIndicator}>
            <span>Role para explorar</span>
            <div className={styles.arrow}>↓</div>
          </div>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
      </section>

      {/* Fase 1: Pesquisa e Desenvolvimento */}
      <section 
        ref={(el) => addToRefs(el, 0)}
        className={`${styles.section} ${visibleSections.has(0) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.phaseNumber}>FASE 1</div>
          <div className={styles.contentRow}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Pesquisa e Desenvolvimento</h2>
              <p className={styles.sectionText}>
                Tudo começa no laboratório. Cientistas estudam o patógeno (vírus ou bactéria) 
                para entender como ele funciona, como infecta células e como o sistema imunológico 
                pode combatê-lo.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>🔬</span>
                  <div>
                    <h4>Identificação do Antígeno</h4>
                    <p>Cientistas identificam qual parte do patógeno pode estimular resposta imune</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>🧬</span>
                  <div>
                    <h4>Desenvolvimento do Protótipo</h4>
                    <p>Criação da fórmula inicial usando diferentes tecnologias (vírus inativado, mRNA, etc)</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>🐭</span>
                  <div>
                    <h4>Testes Pré-clínicos</h4>
                    <p>Estudos em células e animais para avaliar segurança e resposta imunológica</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.visualContent}>
              <div className={styles.microscope}>
                <div className={styles.microscopeBody}></div>
                <div className={styles.microscopeLens}></div>
                <div className={styles.microscopeBase}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase 2: Testes Clínicos */}
      <section 
        ref={(el) => addToRefs(el, 1)}
        className={`${styles.section} ${styles.sectionAlt} ${visibleSections.has(1) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.phaseNumber}>FASE 2</div>
          <div className={styles.contentRow}>
            <div className={styles.visualContent}>
              <div className={styles.clinicalTrials}>
                <div className={styles.phase}>
                  <div className={styles.phaseCircle}>I</div>
                  <span>20-100 pessoas</span>
                </div>
                <div className={styles.phase}>
                  <div className={styles.phaseCircle}>II</div>
                  <span>100-1000 pessoas</span>
                </div>
                <div className={styles.phase}>
                  <div className={styles.phaseCircle}>III</div>
                  <span>1000-30000 pessoas</span>
                </div>
              </div>
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Testes Clínicos em Humanos</h2>
              <p className={styles.sectionText}>
                Após aprovação em testes pré-clínicos, a vacina passa por três fases rigorosas 
                de testes em voluntários humanos. Cada fase avalia segurança e eficácia.
              </p>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}>1</div>
                  <div className={styles.timelineContent}>
                    <h4>Fase I - Segurança</h4>
                    <p>Pequeno grupo para testar segurança e dosagem adequada</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}>2</div>
                  <div className={styles.timelineContent}>
                    <h4>Fase II - Eficácia</h4>
                    <p>Grupo maior para avaliar se a vacina gera resposta imune</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}>3</div>
                  <div className={styles.timelineContent}>
                    <h4>Fase III - Confirmação</h4>
                    <p>Milhares de pessoas para confirmar eficácia e monitorar reações raras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase 3: Aprovação Regulatória */}
      <section 
        ref={(el) => addToRefs(el, 2)}
        className={`${styles.section} ${visibleSections.has(2) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.phaseNumber}>FASE 3</div>
          <div className={styles.contentRow}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Aprovação e Registro</h2>
              <p className={styles.sectionText}>
                Agências regulatórias como ANVISA, FDA e EMA analisam todos os dados dos testes 
                clínicos. Apenas vacinas que comprovam segurança e eficácia são aprovadas.
              </p>
              <div className={styles.approvalSteps}>
                <div className={styles.approvalStep}>
                  <div className={styles.stepIcon}>📄</div>
                  <h4>Submissão de Dados</h4>
                  <p>Análise detalhada de todos os resultados dos estudos clínicos</p>
                </div>
                <div className={styles.approvalStep}>
                  <div className={styles.stepIcon}>🔍</div>
                  <h4>Revisão Rigorosa</h4>
                  <p>Especialistas avaliam cada aspecto da segurança e eficácia</p>
                </div>
                <div className={styles.approvalStep}>
                  <div className={styles.stepIcon}>✅</div>
                  <h4>Autorização</h4>
                  <p>Aprovação para fabricação e distribuição ao público</p>
                </div>
              </div>
            </div>
            <div className={styles.visualContent}>
              <div className={styles.certificate}>
                <div className={styles.certHeader}>APROVADO</div>
                <div className={styles.certBody}>
                  <div className={styles.certSeal}>✓</div>
                  <div className={styles.certLines}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase 4: Fabricação */}
      <section 
        ref={(el) => addToRefs(el, 3)}
        className={`${styles.section} ${styles.sectionAlt} ${visibleSections.has(3) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.phaseNumber}>FASE 4</div>
          <div className={styles.contentRow}>
            <div className={styles.visualContent}>
              <div className={styles.factory}>
                <div className={styles.factoryBuilding}></div>
                <div className={styles.factoryChimney}></div>
                <div className={styles.factorySmoke}></div>
                <div className={styles.vials}>
                  <div className={styles.vial}></div>
                  <div className={styles.vial}></div>
                  <div className={styles.vial}></div>
                </div>
              </div>
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Produção em Larga Escala</h2>
              <p className={styles.sectionText}>
                A vacina é produzida em laboratórios especializados seguindo rigorosos padrões 
                de qualidade. Cada lote passa por testes antes de ser liberado.
              </p>
              <div className={styles.productionSteps}>
                <div className={styles.prodStep}>
                  <span className={styles.prodNumber}>01</span>
                  <h4>Cultivo</h4>
                  <p>Crescimento do vírus/bactéria ou produção do antígeno</p>
                </div>
                <div className={styles.prodStep}>
                  <span className={styles.prodNumber}>02</span>
                  <h4>Purificação</h4>
                  <p>Remoção de impurezas e isolamento do componente ativo</p>
                </div>
                <div className={styles.prodStep}>
                  <span className={styles.prodNumber}>03</span>
                  <h4>Formulação</h4>
                  <p>Adição de adjuvantes e conservantes necessários</p>
                </div>
                <div className={styles.prodStep}>
                  <span className={styles.prodNumber}>04</span>
                  <h4>Envase</h4>
                  <p>Colocação em frascos estéreis e rotulagem</p>
                </div>
                <div className={styles.prodStep}>
                  <span className={styles.prodNumber}>05</span>
                  <h4>Controle de Qualidade</h4>
                  <p>Testes rigorosos de cada lote antes da liberação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase 5: Distribuição */}
      <section 
        ref={(el) => addToRefs(el, 4)}
        className={`${styles.section} ${visibleSections.has(4) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.phaseNumber}>FASE 5</div>
          <div className={styles.contentRow}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Distribuição e Armazenamento</h2>
              <p className={styles.sectionText}>
                As vacinas são transportadas em condições controladas (cadeia de frio) até 
                chegarem aos postos de saúde. A temperatura correta garante a eficácia.
              </p>
              <div className={styles.coldChain}>
                <div className={styles.chainStep}>
                  <div className={styles.chainIcon}>🏭</div>
                  <p>Laboratório</p>
                  <span>-70°C a 8°C</span>
                </div>
                <div className={styles.chainArrow}>→</div>
                <div className={styles.chainStep}>
                  <div className={styles.chainIcon}>🚚</div>
                  <p>Transporte</p>
                  <span>Refrigerado</span>
                </div>
                <div className={styles.chainArrow}>→</div>
                <div className={styles.chainStep}>
                  <div className={styles.chainIcon}>🏥</div>
                  <p>Posto de Saúde</p>
                  <span>2°C a 8°C</span>
                </div>
              </div>
            </div>
            <div className={styles.visualContent}>
              <div className={styles.truck}>
                <div className={styles.truckCabin}></div>
                <div className={styles.truckBody}></div>
                <div className={styles.wheel}></div>
                <div className={styles.wheel}></div>
                <div className={styles.snowflake}>❄️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase 6: Aplicação */}
      <section 
        ref={(el) => addToRefs(el, 5)}
        className={`${styles.section} ${styles.sectionAlt} ${visibleSections.has(5) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.phaseNumber}>FASE 6</div>
          <div className={styles.contentRow}>
            <div className={styles.visualContent}>
              <div className={styles.injection}>
                <div className={styles.syringe}>
                  <div className={styles.syringeBarrel}></div>
                  <div className={styles.syringePlunger}></div>
                  <div className={styles.syringeNeedle}></div>
                </div>
                <div className={styles.arm}></div>
              </div>
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Aplicação da Vacina</h2>
              <p className={styles.sectionText}>
                A vacina é aplicada por profissional de saúde treinado. A via de administração 
                (intramuscular, subcutânea, oral) varia conforme o tipo de vacina.
              </p>
              <div className={styles.applicationInfo}>
                <div className={styles.infoBox}>
                  <h4>💉 Intramuscular</h4>
                  <p>Maioria das vacinas (braço ou coxa)</p>
                </div>
                <div className={styles.infoBox}>
                  <h4>💊 Subcutânea</h4>
                  <p>Abaixo da pele (tríplice viral, varicela)</p>
                </div>
                <div className={styles.infoBox}>
                  <h4>👄 Oral</h4>
                  <p>Gotas na boca (poliomielite, rotavírus)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase 7: No Corpo - Resposta Imune */}
      <section 
        ref={(el) => addToRefs(el, 6)}
        className={`${styles.section} ${styles.sectionHighlight} ${visibleSections.has(6) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.phaseNumber}>FASE 7</div>
          <h2 className={styles.centerTitle}>Dentro do Seu Corpo</h2>
          <p className={styles.centerSubtitle}>
            Veja o que acontece após a vacinação - uma batalha microscópica que salva vidas
          </p>
          
          <div className={styles.immuneSteps}>
            <div className={styles.immuneStep}>
              <div className={styles.immuneNumber}>1</div>
              <div className={styles.immuneIcon}>🦠</div>
              <h3>Reconhecimento</h3>
              <p>
                O antígeno da vacina é detectado por células dendríticas, que agem como sentinelas 
                do sistema imunológico
              </p>
            </div>

            <div className={styles.immuneArrow}>↓</div>

            <div className={styles.immuneStep}>
              <div className={styles.immuneNumber}>2</div>
              <div className={styles.immuneIcon}>📢</div>
              <h3>Ativação</h3>
              <p>
                As células dendríticas apresentam o antígeno aos linfócitos T, ativando a resposta 
                imune adaptativa
              </p>
            </div>

            <div className={styles.immuneArrow}>↓</div>

            <div className={styles.immuneStep}>
              <div className={styles.immuneNumber}>3</div>
              <div className={styles.immuneIcon}>⚔️</div>
              <h3>Produção de Anticorpos</h3>
              <p>
                Linfócitos B produzem anticorpos específicos contra o patógeno. São proteínas que 
                reconhecem e neutralizam o invasor
              </p>
            </div>

            <div className={styles.immuneArrow}>↓</div>

            <div className={styles.immuneStep}>
              <div className={styles.immuneNumber}>4</div>
              <div className={styles.immuneIcon}>🧠</div>
              <h3>Memória Imunológica</h3>
              <p>
                Células de memória são criadas e ficam "patrulhando" o corpo. Se o patógeno real 
                aparecer, a resposta é rápida e eficaz
              </p>
            </div>
          </div>

          <div className={styles.immuneVisualization}>
            <div className={styles.antibodyAnimation}>
              <div className={styles.antibody}></div>
              <div className={styles.antibody}></div>
              <div className={styles.antibody}></div>
              <div className={styles.pathogen}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase Final: Proteção */}
      <section 
        ref={(el) => addToRefs(el, 7)}
        className={`${styles.section} ${styles.sectionFinal} ${visibleSections.has(7) ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.finalContent}>
            <div className={styles.shield}>
              <div className={styles.shieldBody}>🛡️</div>
              <div className={styles.shieldGlow}></div>
            </div>
            <h2 className={styles.finalTitle}>Você Está Protegido!</h2>
            <p className={styles.finalText}>
              Agora seu sistema imunológico está preparado. Se você entrar em contato com o patógeno 
              real, seu corpo irá reconhecê-lo instantaneamente e combatê-lo antes que cause doença.
            </p>
            <div className={styles.protectionStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10-14</div>
                <div className={styles.statLabel}>dias para imunidade completa</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>Anos</div>
                <div className={styles.statLabel}>de proteção (varia por vacina)</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>90-99%</div>
                <div className={styles.statLabel}>eficácia típica</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.container}>
          <h2>Uma Jornada Científica Extraordinária</h2>
          <p>
            Da pesquisa à proteção, cada vacina percorre um caminho rigoroso de desenvolvimento, 
            testes e controle de qualidade. É a ciência trabalhando para salvar vidas.
          </p>
        </div>
      </section>
    </div>
  );
}