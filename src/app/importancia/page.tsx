import styles from './page.module.css';

export default function Importancia() {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>A Importância das Vacinas</h1>
          <p className={styles.subtitle}>
            Entenda como as vacinas revolucionaram a saúde pública e continuam salvando milhões de vidas
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.article}>
            <h2>Uma das maiores conquistas da humanidade</h2>
            <p>
              As vacinas representam uma das intervenções médicas mais bem-sucedidas da história. 
              Desde a primeira vacina contra a varíola, desenvolvida por Edward Jenner em 1796, 
              a vacinação tem sido responsável pela erradicação, controle e prevenção de inúmeras 
              doenças infecciosas que antes causavam epidemias devastadoras.
            </p>

            <div className={styles.highlight}>
              <h3>💡 Você Sabia?</h3>
              <p>
                A varíola, que matou cerca de 300 milhões de pessoas no século XX, foi completamente 
                erradicada do planeta em 1980 graças à vacinação em massa.
              </p>
            </div>

            <h2>Como as vacinas funcionam?</h2>
            <p>
              As vacinas funcionam preparando o sistema imunológico para reconhecer e combater 
              patógenos específicos. Elas contêm versões enfraquecidas ou inativadas de vírus ou 
              bactérias, ou apenas partes desses microrganismos, que estimulam o corpo a produzir 
              anticorpos sem causar a doença.
            </p>

            <div className={styles.process}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h4>Exposição Segura</h4>
                <p>A vacina introduz um antígeno que simula o patógeno</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h4>Resposta Imune</h4>
                <p>O sistema imunológico reconhece e cria anticorpos</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h4>Memória Imunológica</h4>
                <p>O corpo memoriza como combater a doença real</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h4>Proteção Duradoura</h4>
                <p>Resposta rápida e eficaz em caso de exposição</p>
              </div>
            </div>

            <h2>Imunidade de Rebanho</h2>
            <p>
              Quando uma grande porcentagem da população é vacinada, cria-se uma proteção indireta 
              chamada imunidade de rebanho ou coletiva. Isso protege pessoas que não podem ser 
              vacinadas, como bebês, idosos ou pessoas com sistemas imunológicos comprometidos.
            </p>

            <div className={styles.immunity}>
              <div className={styles.immunityCard}>
                <h4>👶 Proteção aos Vulneráveis</h4>
                <p>Bebês muito jovens para vacinar ficam protegidos quando outros se vacinam</p>
              </div>
              <div className={styles.immunityCard}>
                <h4>🏥 Menos Hospitalizações</h4>
                <p>Redução drástica de internações por doenças evitáveis</p>
              </div>
              <div className={styles.immunityCard}>
                <h4>🌍 Erradicação de Doenças</h4>
                <p>Com cobertura adequada, doenças podem desaparecer completamente</p>
              </div>
            </div>

            <h2>Impacto Global das Vacinas</h2>
            <p>
              Segundo a Organização Mundial da Saúde (OMS), a vacinação previne entre 2 e 3 milhões 
              de mortes anualmente. Doenças que antes eram comuns e frequentemente fatais, como 
              poliomielite, sarampo, difteria e coqueluche, agora são raras em países com altas 
              taxas de vacinação.
            </p>

            <div className={styles.diseases}>
              <h3>Doenças Controladas por Vacinas:</h3>
              <ul>
                <li>✅ Varíola (erradicada)</li>
                <li>✅ Poliomielite (quase erradicada)</li>
                <li>✅ Sarampo (redução de 80% em mortes desde 2000)</li>
                <li>✅ Difteria (redução de 90% globalmente)</li>
                <li>✅ Tétano neonatal (redução de 85%)</li>
                <li>✅ Coqueluche (controlada em países desenvolvidos)</li>
                <li>✅ Rubéola (eliminada em várias regiões)</li>
                <li>✅ HPV (prevenção de diversos cânceres)</li>
              </ul>
            </div>

            <h2>Segurança e Eficácia</h2>
            <p>
              As vacinas passam por rigorosos testes de segurança antes de serem aprovadas. 
              O processo inclui várias fases de ensaios clínicos com milhares de participantes 
              e continua sendo monitorado após a aprovação. Bilhões de doses foram administradas 
              com segurança ao redor do mundo.
            </p>

            <div className={styles.safety}>
              <div className={styles.safetyItem}>
                <span className={styles.icon}>🔬</span>
                <div>
                  <h4>Testes Rigorosos</h4>
                  <p>Fases pré-clínicas e 3 fases de testes clínicos</p>
                </div>
              </div>
              <div className={styles.safetyItem}>
                <span className={styles.icon}>📊</span>
                <div>
                  <h4>Monitoramento Contínuo</h4>
                  <p>Vigilância permanente de efeitos adversos</p>
                </div>
              </div>
              <div className={styles.safetyItem}>
                <span className={styles.icon}>✅</span>
                <div>
                  <h4>Aprovação Regulatória</h4>
                  <p>Análise criteriosa por agências de saúde</p>
                </div>
              </div>
            </div>

            <div className={styles.conclusion}>
              <h3>🎯 Conclusão</h3>
              <p>
                A vacinação é uma das formas mais seguras e eficazes de proteger a saúde individual 
                e coletiva. Ao se vacinar, você não apenas se protege, mas também contribui para a 
                proteção de toda a comunidade, especialmente dos mais vulneráveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}