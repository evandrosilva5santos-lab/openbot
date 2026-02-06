/* Script principal do Dashboard J.A.R.V.I.S. */
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os cards de skill
  const skillCards = document.querySelectorAll('.skill-card');
  const modal = document.getElementById('skill-modal');
  const closeBtn = modal.querySelector('.close');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDescription = modal.querySelector('.modal-description');
  const modalStats = modal.querySelector('.modal-stats');

  // Dados fictícios para demonstração das modais
  const skillDetails = {
    API: {
      title: 'API',
      description: 'Integração com serviços externos via REST.',
      stats: 'Requests por minuto: 1,240 | Latência média: 85ms | Uptime: 99.98%'
    },
    Scraping: {
      title: 'Scraping',
      description: 'Coleta de dados de fontes públicas.',
      stats: 'Sources monitoradas: 34 | Taxa de sucesso: 92% | Última atualização: 2h atrás'
    },
    Analytics: {
      title: 'Analytics',
      description: 'Análise de métricas em tempo real.',
      stats: 'KPIs monitorados: 12 | Dashboards ativos: 5 | Última captura: 30s atrás'
    },
    AI: {
      title: 'AI',
      description: 'Modelos de linguagem e inferência.',
      stats: 'Modelos carregados: 3 | Inferências por segundo: 45 | Custo mensal: $0 (uso gratuito)'
    },
    Infra: {
      title: 'Infra',
      description: 'Orquestração de containers e Serviços.',
      stats: 'Containers em execução: 8 | Uptime médio: 14d | Utilização de GPU: 27%'
    }
  };

  // Função para abrir o modal com informações da skill
  const openModal = (skillName) => {
    const data = skillDetails[skillName];
    if (data) {
      modalTitle.textContent = data.title;
      modalDescription.textContent = data.description;
      modalStats.textContent = data.stats;
    }
    modal.style.display = 'flex';
  };

  // Função para fechar o modal
  const closeModal = () => {
    modal.style.display = 'none';
  };

  // Evento de clique em cada card
  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      const skillName = card.querySelector('.skill-name').textContent.trim();
      openModal(skillName);
    });
  });

  // Evento de fechar ao clicar no ×
  closeBtn.addEventListener('click', closeModal);

  // Fechar modal ao clicar fora do conteúdo
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Opcional: fechar com Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
});