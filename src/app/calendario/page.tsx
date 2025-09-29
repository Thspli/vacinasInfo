'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Vaccine {
  name: string;
  doses: string;
  description: string;
  diseases: string[];
}

interface AgeGroup {
  age: string;
  vaccines: Vaccine[];
}

export default function Calendario() {
  const [selectedAge, setSelectedAge] = useState('nascimento');

  const calendar: AgeGroup[] = [
    {
      age: 'nascimento',
      vaccines: [
        {
          name: 'BCG',
          doses: 'Dose única',
          description: 'Proteção contra formas graves de tuberculose',
          diseases: ['Tuberculose meníngea', 'Tuberculose miliar']
        },
        {
          name: 'Hepatite B',
          doses: '1ª dose',
          description: 'Primeira dose nas primeiras 24 horas de vida',
          diseases: ['Hepatite B', 'Cirrose', 'Câncer de fígado']
        }
      ]
    },
    {
      age: '2-meses',
      vaccines: [
        {
          name: 'Pentavalente',
          doses: '1ª dose',
          description: 'Protege contra 5 doenças em uma única aplicação',
          diseases: ['Difteria', 'Tétano', 'Coqueluche', 'Haemophilus influenzae B', 'Hepatite B']
        },
        {
          name: 'VIP (Poliomielite)',
          doses: '1ª dose',
          description: 'Vacina injetável contra pólio',
          diseases: ['Poliomielite']
        },
        {
          name: 'Pneumocócica 10',
          doses: '1ª dose',
          description: 'Proteção contra pneumonia e meningite',
          diseases: ['Pneumonia', 'Meningite', 'Otite']
        },
        {
          name: 'Rotavírus',
          doses: '1ª dose',
          description: 'Proteção contra diarreia grave',
          diseases: ['Diarreia por rotavírus', 'Desidratação']
        }
      ]
    },
    {
      age: '4-meses',
      vaccines: [
        {
          name: 'Pentavalente',
          doses: '2ª dose',
          description: 'Segunda dose da vacina pentavalente',
          diseases: ['Difteria', 'Tétano', 'Coqueluche', 'Haemophilus influenzae B', 'Hepatite B']
        },
        {
          name: 'VIP (Poliomielite)',
          doses: '2ª dose',
          description: 'Segunda dose contra pólio',
          diseases: ['Poliomielite']
        },
        {
          name: 'Pneumocócica 10',
          doses: '2ª dose',
          description: 'Reforço da proteção pneumocócica',
          diseases: ['Pneumonia', 'Meningite', 'Otite']
        },
        {
          name: 'Rotavírus',
          doses: '2ª dose',
          description: 'Segunda e última dose',
          diseases: ['Diarreia por rotavírus']
        }
      ]
    },
    {
      age: '6-meses',
      vaccines: [
        {
          name: 'Pentavalente',
          doses: '3ª dose',
          description: 'Terceira dose da vacina pentavalente',
          diseases: ['Difteria', 'Tétano', 'Coqueluche', 'Haemophilus influenzae B', 'Hepatite B']
        },
        {
          name: 'VIP (Poliomielite)',
          doses: '3ª dose',
          description: 'Terceira dose contra pólio',
          diseases: ['Poliomielite']
        }
      ]
    },
    {
      age: '9-meses',
      vaccines: [
        {
          name: 'Febre Amarela',
          doses: 'Dose única',
          description: 'Proteção vitalícia contra febre amarela',
          diseases: ['Febre amarela']
        }
      ]
    },
    {
      age: '12-meses',
      vaccines: [
        {
          name: 'Tríplice Viral',
          doses: '1ª dose',
          description: 'Proteção contra sarampo, caxumba e rubéola',
          diseases: ['Sarampo', 'Caxumba', 'Rubéola']
        },
        {
          name: 'Pneumocócica 10',
          doses: 'Reforço',
          description: 'Dose de reforço pneumocócica',
          diseases: ['Pneumonia', 'Meningite', 'Otite']
        },
        {
          name: 'Meningocócica C',
          doses: 'Reforço',
          description: 'Reforço contra meningite C',
          diseases: ['Meningite C']
        }
      ]
    },
    {
      age: '15-meses',
      vaccines: [
        {
          name: 'DTP',
          doses: '1º reforço',
          description: 'Primeiro reforço da tríplice bacteriana',
          diseases: ['Difteria', 'Tétano', 'Coqueluche']
        },
        {
          name: 'VOP (Poliomielite)',
          doses: '1º reforço',
          description: 'Reforço oral contra pólio',
          diseases: ['Poliomielite']
        },
        {
          name: 'Hepatite A',
          doses: 'Dose única',
          description: 'Proteção contra hepatite A',
          diseases: ['Hepatite A']
        },
        {
          name: 'Tetraviral',
          doses: 'Dose única',
          description: 'Proteção contra sarampo, caxumba, rubéola e varicela',
          diseases: ['Sarampo', 'Caxumba', 'Rubéola', 'Varicela (catapora)']
        }
      ]
    },
    {
      age: '4-anos',
      vaccines: [
        {
          name: 'DTP',
          doses: '2º reforço',
          description: 'Segundo reforço da tríplice bacteriana',
          diseases: ['Difteria', 'Tétano', 'Coqueluche']
        },
        {
          name: 'VOP (Poliomielite)',
          doses: '2º reforço',
          description: 'Segundo reforço oral contra pólio',
          diseases: ['Poliomielite']
        },
        {
          name: 'Varicela',
          doses: 'Reforço',
          description: 'Dose de reforço contra catapora',
          diseases: ['Varicela (catapora)']
        }
      ]
    },
    {
      age: '9-14-anos',
      vaccines: [
        {
          name: 'HPV',
          doses: '2 doses',
          description: 'Proteção contra HPV e cânceres relacionados',
          diseases: ['HPV', 'Câncer de colo de útero', 'Câncer de pênis', 'Verrugas genitais']
        },
        {
          name: 'Meningocócica ACWY',
          doses: '1 dose',
          description: 'Proteção contra 4 tipos de meningite',
          diseases: ['Meningite A, C, W e Y']
        }
      ]
    },
    {
      age: 'adolescentes',
      vaccines: [
        {
          name: 'dT (dupla adulto)',
          doses: 'Reforço a cada 10 anos',
          description: 'Reforço contra difteria e tétano',
          diseases: ['Difteria', 'Tétano']
        },
        {
          name: 'Febre Amarela',
          doses: 'Reforço se necessário',
          description: 'Dose de reforço em áreas de risco',
          diseases: ['Febre amarela']
        },
        {
          name: 'Tríplice Viral',
          doses: 'Atualização se necessário',
          description: 'Duas doses ao longo da vida',
          diseases: ['Sarampo', 'Caxumba', 'Rubéola']
        }
      ]
    },
    {
      age: 'adultos',
      vaccines: [
        {
          name: 'dT (dupla adulto)',
          doses: 'Reforço a cada 10 anos',
          description: 'Manutenção da proteção',
          diseases: ['Difteria', 'Tétano']
        },
        {
          name: 'Hepatite B',
          doses: '3 doses',
          description: 'Se não vacinado anteriormente',
          diseases: ['Hepatite B']
        },
        {
          name: 'Febre Amarela',
          doses: 'Dose única',
          description: 'Para residentes ou viajantes de áreas de risco',
          diseases: ['Febre amarela']
        },
        {
          name: 'Tríplice Viral',
          doses: '2 doses',
          description: 'Se não vacinado anteriormente (até 49 anos)',
          diseases: ['Sarampo', 'Caxumba', 'Rubéola']
        }
      ]
    },
    {
      age: 'gestantes',
      vaccines: [
        {
          name: 'dTpa (tríplice bacteriana acelular)',
          doses: '1 dose a cada gestação',
          description: 'Proteção para mãe e bebê',
          diseases: ['Difteria', 'Tétano', 'Coqueluche']
        },
        {
          name: 'Hepatite B',
          doses: '3 doses',
          description: 'Se não vacinada anteriormente',
          diseases: ['Hepatite B']
        },
        {
          name: 'Influenza',
          doses: '1 dose anual',
          description: 'Proteção contra gripe',
          diseases: ['Influenza (gripe)']
        }
      ]
    },
    {
      age: 'idosos',
      vaccines: [
        {
          name: 'Influenza',
          doses: '1 dose anual',
          description: 'Proteção contra gripe sazonal',
          diseases: ['Influenza (gripe)']
        },
        {
          name: 'Pneumocócica 23',
          doses: '1 dose (reforço após 5 anos)',
          description: 'Proteção ampliada contra pneumonia',
          diseases: ['Pneumonia', 'Meningite']
        },
        {
          name: 'dT (dupla adulto)',
          doses: 'Reforço a cada 10 anos',
          description: 'Manutenção da proteção',
          diseases: ['Difteria', 'Tétano']
        },
        {
          name: 'Herpes Zóster',
          doses: '1 ou 2 doses',
          description: 'Prevenção de cobreiro (a partir de 50 anos)',
          diseases: ['Herpes zóster (cobreiro)']
        }
      ]
    }
  ];

  const ageGroups = [
    { id: 'nascimento', label: 'Ao Nascer', icon: '👶' },
    { id: '2-meses', label: '2 Meses', icon: '🍼' },
    { id: '4-meses', label: '4 Meses', icon: '🍼' },
    { id: '6-meses', label: '6 Meses', icon: '👶' },
    { id: '9-meses', label: '9 Meses', icon: '👶' },
    { id: '12-meses', label: '12 Meses', icon: '🚼' },
    { id: '15-meses', label: '15 Meses', icon: '🚼' },
    { id: '4-anos', label: '4 Anos', icon: '🧒' },
    { id: '9-14-anos', label: '9-14 Anos', icon: '👦' },
    { id: 'adolescentes', label: 'Adolescentes', icon: '🧑' },
    { id: 'adultos', label: 'Adultos', icon: '👨' },
    { id: 'gestantes', label: 'Gestantes', icon: '🤰' },
    { id: 'idosos', label: 'Idosos (60+)', icon: '👴' }
  ];

  const selectedGroup = calendar.find(group => group.age === selectedAge);

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Calendário de Vacinação</h1>
          <p className={styles.subtitle}>
            Confira as vacinas recomendadas para cada faixa etária segundo o Ministério da Saúde
          </p>
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📋</span>
            <div>
              <h3>Calendário Nacional</h3>
              <p>Baseado no Programa Nacional de Imunizações (PNI) do Ministério da Saúde</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🆓</span>
            <div>
              <h3>Gratuito no SUS</h3>
              <p>Todas estas vacinas estão disponíveis gratuitamente em postos de saúde</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📍</span>
            <div>
              <h3>Encontre um Posto</h3>
              <p>Procure a Unidade Básica de Saúde (UBS) mais próxima de você</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Selecione a Faixa Etária</h2>
          
          <div className={styles.ageSelector}>
            {ageGroups.map(group => (
              <button
                key={group.id}
                className={selectedAge === group.id ? styles.ageButtonActive : styles.ageButton}
                onClick={() => setSelectedAge(group.id)}
              >
                <span className={styles.ageIcon}>{group.icon}</span>
                <span className={styles.ageLabel}>{group.label}</span>
              </button>
            ))}
          </div>

          {selectedGroup && (
            <div className={styles.vaccinesList}>
              <h3 className={styles.vaccinesTitle}>
                Vacinas para: {ageGroups.find(g => g.id === selectedAge)?.label}
              </h3>
              
              <div className={styles.vaccinesGrid}>
                {selectedGroup.vaccines.map((vaccine, index) => (
                  <div key={index} className={styles.vaccineCard}>
                    <div className={styles.vaccineHeader}>
                      <h4>{vaccine.name}</h4>
                      <span className={styles.doseBadge}>{vaccine.doses}</span>
                    </div>
                    
                    <p className={styles.vaccineDescription}>{vaccine.description}</p>
                    
                    <div className={styles.diseasesList}>
                      <h5>Protege contra:</h5>
                      <ul>
                        {vaccine.diseases.map((disease, i) => (
                          <li key={i}>{disease}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.importantNotes}>
            <h3>⚠️ Informações Importantes</h3>
            <div className={styles.notesGrid}>
              <div className={styles.noteCard}>
                <h4>💉 Leve a Carteira de Vacinação</h4>
                <p>Sempre leve sua carteira ou caderneta de vacinação ao posto de saúde para registro adequado.</p>
              </div>
              <div className={styles.noteCard}>
                <h4>📅 Respeite os Intervalos</h4>
                <p>Os intervalos entre as doses são importantes para garantir a eficácia da vacina.</p>
              </div>
              <div className={styles.noteCard}>
                <h4>🏥 Vacinas Especiais</h4>
                <p>Algumas vacinas podem estar disponíveis apenas em Centros de Referência para Imunobiológicos Especiais (CRIE).</p>
              </div>
              <div className={styles.noteCard}>
                <h4>🌍 Viagens Internacionais</h4>
                <p>Para viagens internacionais, consulte as recomendações específicas para o país de destino.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}