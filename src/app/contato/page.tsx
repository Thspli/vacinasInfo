'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Entre em Contato</h1>
          <p className={styles.subtitle}>
            Tem dúvidas sobre vacinas? Estamos aqui para ajudar com informações confiáveis
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.formSection}>
              <h2>Envie sua mensagem</h2>
              {submitted ? (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✅</span>
                  <h3>Mensagem enviada com sucesso!</h3>
                  <p>Responderemos em breve. Obrigado pelo contato!</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nome completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida sobre vacinas</option>
                      <option value="calendario">Calendário de vacinação</option>
                      <option value="mito">Desmentir informação</option>
                      <option value="efeito">Efeitos adversos</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Descreva sua dúvida ou mensagem..."
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h3>📍 Postos de Vacinação</h3>
                <p>
                  Encontre o posto de vacinação mais próximo através do site do Ministério da Saúde 
                  ou entre em contato com a secretaria de saúde de sua cidade.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>📞 Telefones Úteis</h3>
                <ul>
                  <li><strong>Disque Saúde:</strong> 136</li>
                  <li><strong>SAMU:</strong> 192</li>
                  <li><strong>Ouvidoria SUS:</strong> 136</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>🌐 Links Importantes</h3>
                <ul>
                  <li>Ministério da Saúde</li>
                  <li>Fiocruz</li>
                  <li>Sociedade Brasileira de Imunizações</li>
                  <li>Organização Mundial da Saúde</li>
                </ul>
              </div>

              <div className={styles.emergencyCard}>
                <h3>⚠️ Emergência?</h3>
                <p>
                  Em caso de reação alérgica grave após vacinação, procure atendimento médico 
                  imediatamente ou ligue para o SAMU (192).
                </p>
              </div>
            </div>
          </div>

          <div className={styles.faq}>
            <h2>Perguntas Frequentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h4>Onde posso me vacinar?</h4>
                <p>
                  As vacinas do calendário nacional estão disponíveis gratuitamente em postos de 
                  saúde (UBS) de todo o país. Algumas vacinas também estão disponíveis em clínicas 
                  particulares.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Preciso de documentos?</h4>
                <p>
                  Sim, leve um documento de identidade com foto e a carteira de vacinação. 
                  Se não tiver a carteira, uma nova será fornecida.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>As vacinas são gratuitas?</h4>
                <p>
                  Todas as vacinas do Programa Nacional de Imunizações (PNI) são totalmente 
                  gratuitas em postos de saúde públicos.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Posso tomar várias vacinas no mesmo dia?</h4>
                <p>
                  Sim, é seguro tomar múltiplas vacinas no mesmo dia. O calendário de vacinação 
                  é elaborado considerando a segurança de aplicações simultâneas.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Esqueci de tomar uma dose, e agora?</h4>
                <p>
                  Procure um posto de saúde para atualizar sua carteira de vacinação. Não é 
                  necessário reiniciar o esquema vacinal, apenas completar as doses faltantes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Grávidas podem se vacinar?</h4>
                <p>
                  Sim, algumas vacinas são recomendadas durante a gravidez (como influenza e 
                  dTpa). Outras são contraindicadas. Consulte seu médico para orientação específica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}