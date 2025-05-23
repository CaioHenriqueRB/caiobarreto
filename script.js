function copiarEmail() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copiado: " + email);
  });
}

let idiomaAtual = 'pt';

function trocarIdioma() {
  const btn = document.getElementById('btn-idioma');
  if (idiomaAtual === 'pt') {
    document.querySelector('.tag').textContent = "Hi, I'm Caio 👋🏼";
    document.querySelector('h1').innerHTML = "Technology and creativity<br />to transform ideas<br />into digital experiences.";
    document.querySelector('.btn').textContent = "Contact me";
    btn.style.backgroundImage = "url('https://flagcdn.com/us.svg')";

    // Tradução das seções principais
    document.querySelector('.sobre-mim-texto h2').textContent = "About me";
    document.querySelectorAll('.sobre-mim-texto p')[0].textContent =
      "I'm Caio Barreto, a full-stack developer focused on creating digital solutions that deliver results. I work with web development, automations, and BI dashboards, always aiming to simplify processes and boost businesses.";
    document.querySelectorAll('.sobre-mim-texto p')[1].textContent =
      "Currently, I work on projects ranging from responsive websites to API integrations, automations using n8n, and data visualizations with Python. I have experience turning ideas into real, functional digital products, focusing on performance and usability.";
    document.querySelectorAll('.sobre-mim-texto p')[2].textContent =
      "I believe technology is not about code, but about impact. That's what I seek in every project: to deliver value in a simple, strategic, and effective way.";

    // Tradução do título e descrição do portfólio
    document.querySelector('.portfolio-section h2').innerHTML = "<span style=\"font-weight:700;\">Selected</span> Works";
    document.querySelector('.portfolio-desc').textContent =
      "A collection of the most impactful projects, chosen to represent quality and dedication in every detail. Explore some of my best results.";

    // Tradução dos projetos (ajuste conforme a ordem dos cards)
    const projetos = document.querySelectorAll('.portfolio-card');
    if (projetos[0]) {
      projetos[0].querySelector('h3').textContent = "🌱 Solo Link – Smart Irrigation with AI";
      projetos[0].querySelector('.portfolio-type').textContent = "AgroTech / Artificial Intelligence";
      projetos[0].querySelector('.portfolio-date').textContent = "April 2025";
      projetos[0].querySelector('p').textContent =
        "Underground sensor system and artificial intelligence that optimizes water use in irrigated agriculture. The app and proprietary sensors monitor soil moisture in depth and send real-time alerts, allowing the central pivot to irrigate only where necessary. Reduces costs, avoids waste, and brings precision to the field.";
    }
    if (projetos[1]) {
      projetos[1].querySelector('h3').textContent = "🌹 Personalized Website for My Girlfriend";
      projetos[1].querySelector('.portfolio-type').textContent = "LoveTech / Customized Emotion";
      projetos[1].querySelector('.portfolio-date').textContent = "March 2024";
      projetos[1].querySelector('p').textContent =
        "I created a fully personalized website as a romantic gift. The page displays our names, photos, a special message, and a counter showing how long we've been together — in years, months, days, hours, minutes, and seconds. It features a responsive design, an emotionally sensitive layout, and subtle animations. A project that blends coding with feeling.";
    }
    if (projetos[2]) {
      projetos[2].querySelector('h3').textContent = "BI Dashboard for Retail";
      projetos[2].querySelector('.portfolio-type').textContent = "Business Intelligence";
      projetos[2].querySelector('.portfolio-date').textContent = "January 2025";
      projetos[2].querySelector('p').textContent =
        "Development of an interactive dashboard for real-time sales and inventory analysis, using Python, Power BI, and ERP API integrations. The project provided strategic insights and automated reports for quick decision-making.";
    }
    if (projetos[3]) {
      projetos[3].querySelector('h3').textContent = "Financial Reports Automation";
      projetos[3].querySelector('.portfolio-type').textContent = "Automation & Python";
      projetos[3].querySelector('.portfolio-date').textContent = "February 2025";
      projetos[3].querySelector('p').textContent =
        "Automation project for financial reports for a mid-sized company, using Python and integration with Google Sheets and banking APIs. The system reduced manual work time by 80%, ensuring accuracy and agility in decision-making.";
    }

    idiomaAtual = 'en';
  } else {
    document.querySelector('.tag').textContent = "Olá, sou Caio 👋🏼";
    document.querySelector('h1').innerHTML = "Tecnologia e criatividade<br />para transformar ideias<br />em experiências digitais.";
    document.querySelector('.btn').textContent = "Entrar em contato";
    btn.style.backgroundImage = "url('https://flagcdn.com/br.svg')";

    document.querySelector('.sobre-mim-texto h2').textContent = "Sobre mim";
    document.querySelectorAll('.sobre-mim-texto p')[0].textContent =
      "Sou Caio Barreto, desenvolvedor full-stack focado em criar soluções digitais que geram resultado. Trabalho com desenvolvimento web, automações e dashboards de BI, sempre com o objetivo de simplificar processos e potencializar negócios.";
    document.querySelectorAll('.sobre-mim-texto p')[1].textContent =
      "Atualmente, atuo com projetos que envolvem desde criação de sites responsivos até integrações com APIs, automações usando n8n e visualizações de dados com Python. Tenho experiência em transformar ideias em produtos digitais reais e funcionais, com foco em performance e usabilidade.";
    document.querySelectorAll('.sobre-mim-texto p')[2].textContent =
      "Acredito que tecnologia não é sobre códigos, mas sobre impacto. E é isso que busco em cada projeto: entregar valor de forma simples, estratégica e eficaz.";

    document.querySelector('.portfolio-section h2').innerHTML = "<span style=\"font-weight:700;\">Trabalhos</span> Selecionados";
    document.querySelector('.portfolio-desc').textContent =
      "Uma coleção dos projetos mais impactantes, escolhidos para representar a qualidade e dedicação em cada detalhe. Explore alguns dos meus melhores resultados.";

    const projetos = document.querySelectorAll('.portfolio-card');
    if (projetos[0]) {
      projetos[0].querySelector('h3').textContent = "🌱 Solo Link – Irrigação inteligente com IA";
      projetos[0].querySelector('.portfolio-type').textContent = "AgroTech / Inteligência Artificial";
      projetos[0].querySelector('.portfolio-date').textContent = "Abril 2025";
      projetos[0].querySelector('p').textContent =
        "Sistema de sensores subterrâneos e inteligência artificial que otimiza o uso da água na agricultura irrigada. O app junto com os sensores de fabricação propria monitora a umidade do solo em profundidade e envia alertas em tempo real, permitindo que o pivô central irrige apenas onde é necessário. Reduz custos, evita desperdícios e traz precisão para o campo.";
    }
    if (projetos[1]) {
      projetos[1].querySelector('h3').textContent = "🌹 Site Personalizado para Minha Namorada";
      projetos[1].querySelector('.portfolio-type').textContent = "LoveTech / Emoção Personalizada";
      projetos[1].querySelector('.portfolio-date').textContent = "Março 2024";
      projetos[1].querySelector('p').textContent =
        "Criei um site 100% personalizado como presente romântico. A página exibe nosso nome, fotos, mensagem especial e um contador que mostra há quanto tempo estamos juntos — em anos, meses, dias, horas, minutos e segundos. Design responsivo, layout sensível ao toque emocional e animações sutis. Um projeto que une programação com sentimento.";
    }
    if (projetos[2]) {
      projetos[2].querySelector('h3').textContent = "Dashboard de BI para Varejo";
      projetos[2].querySelector('.portfolio-type').textContent = "Business Intelligence";
      projetos[2].querySelector('.portfolio-date').textContent = "Janeiro 2025";
      projetos[2].querySelector('p').textContent =
        "Desenvolvimento de dashboard interativo para análise de vendas e estoque em tempo real, utilizando Python, Power BI e integrações com APIs de ERPs. O projeto proporcionou insights estratégicos e automação de relatórios para tomada de decisão rápida.";
    }
    if (projetos[3]) {
      projetos[3].querySelector('h3').textContent = "Automação de Relatórios Financeiros";
      projetos[3].querySelector('.portfolio-type').textContent = "Automação & Python";
      projetos[3].querySelector('.portfolio-date').textContent = "Fevereiro 2025";
      projetos[3].querySelector('p').textContent =
        "Projeto de automação de relatórios financeiros para uma empresa de médio porte, utilizando Python e integração com Google Sheets e APIs bancárias. O sistema reduziu em 80% o tempo gasto com tarefas manuais, garantindo precisão e agilidade na tomada de decisão.";
    }

    idiomaAtual = 'pt';
  }
}

// Carrossel animado de habilidades com logos
const skills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  // Símbolo de IA (exemplo: ícone do OpenAI)
  { name: "IA", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" }
];

function renderSkillsMarquee() {
  const carousel = document.getElementById('skills-carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.skills-track');
  if (!track) return;

  // Duplicar as habilidades várias vezes para garantir fluidez e largura suficiente
  let allSkills = [];
  // Garante pelo menos 3x a largura da tela
  while (allSkills.length < 18) {
    allSkills = allSkills.concat(skills);
  }

  track.innerHTML = allSkills.map(skill =>
    `<div class="skills-item">
      <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" class="skills-logo"/>
    </div>`
  ).join('');

  // Ajustar a animação dinamicamente conforme o tamanho do conteúdo
  setTimeout(() => {
    const trackWidth = track.scrollWidth;
    const duration = Math.max(10, trackWidth / 80); // velocidade adaptativa
    track.style.animationDuration = duration + "s";
  }, 100);
}

window.addEventListener('DOMContentLoaded', () => {
  renderSkillsMarquee();
  // Define a bandeira inicial cobrindo todo o botão
  const btn = document.getElementById('btn-idioma');
  if (btn) btn.style.backgroundImage = "url('https://flagcdn.com/br.svg')";
  resetSkillsInterval();
});
