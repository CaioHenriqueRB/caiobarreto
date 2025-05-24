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
    document.querySelector('.btn').innerHTML = `Contact me
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style="display:inline;vertical-align:middle;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="seta-gradient" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00d8ff"/>
            <stop offset="1" stop-color="#0078d7"/>
          </linearGradient>
        </defs>
        <path d="M4 18L18 4" stroke="url(#seta-gradient)" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M8 4H18V14" stroke="url(#seta-gradient)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    btn.style.backgroundImage = "url('https://flagcdn.com/us.svg')";

    // Tradução dos botões de copiar e currículo
    document.querySelector('.email-copiar button').textContent = "Copy";
    document.querySelector('.email + button, .email > button[hrref]').textContent = "Resume";

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
      projetos[0].querySelector('.portfolio-view-btn').textContent = "View project";
      projetos[0].querySelectorAll('.portfolio-github-link').forEach(link => {
        link.setAttribute('title', 'View repository on GitHub');
      });
    }
    if (projetos[1]) {
      projetos[1].querySelector('h3').textContent = "🌹 Personalized Website for My Girlfriend";
      projetos[1].querySelector('.portfolio-type').textContent = "LoveTech / Customized Emotion";
      projetos[1].querySelector('.portfolio-date').textContent = "March 2024";
      projetos[1].querySelector('p').textContent =
        "I created a fully personalized website as a romantic gift. The page displays our names, photos, a special message, and a counter showing how long we've been together — in years, months, days, hours, minutes, and seconds. It features a responsive design, an emotionally sensitive layout, and subtle animations. A project that blends coding with feeling.";
      projetos[1].querySelector('.portfolio-view-btn').textContent = "View project";
      projetos[1].querySelectorAll('.portfolio-github-link').forEach(link => {
        link.setAttribute('title', 'View repository on GitHub');
      });
    }

    // Traduzir "Me fale sobre seu próximo projeto"
    document.querySelector('.footer-topbar-content h2').innerHTML =
      '<span style="font-weight:700;color:#222;">Tell me about your </span><span style="font-weight:700;color:#888;">next<br>project</span>';

    idiomaAtual = 'en';
  } else {
    document.querySelector('.tag').textContent = "Olá, sou Caio 👋🏼";
    document.querySelector('h1').innerHTML = "Tecnologia e criatividade<br />para transformar ideias<br />em experiências digitais.";
    document.querySelector('.btn').innerHTML = `Entrar em contato
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style="display:inline;vertical-align:middle;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="seta-gradient" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00d8ff"/>
            <stop offset="1" stop-color="#0078d7"/>
          </linearGradient>
        </defs>
        <path d="M4 18L18 4" stroke="url(#seta-gradient)" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M8 4H18V14" stroke="url(#seta-gradient)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    btn.style.backgroundImage = "url('https://flagcdn.com/br.svg')";

    // Botões de copiar e currículo em português
    document.querySelector('.email-copiar button').textContent = "Copiar";
    document.querySelector('.email + button, .email > button[hrref]').textContent = "Currículo";

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
      projetos[0].querySelector('.portfolio-view-btn').textContent = "Ver projeto";
      projetos[0].querySelectorAll('.portfolio-github-link').forEach(link => {
        link.setAttribute('title', 'Ver repositório no GitHub');
      });
    }
    if (projetos[1]) {
      projetos[1].querySelector('h3').textContent = "🌹 Site Personalizado para Minha Namorada";
      projetos[1].querySelector('.portfolio-type').textContent = "LoveTech / Emoção Personalizada";
      projetos[1].querySelector('.portfolio-date').textContent = "Março 2024";
      projetos[1].querySelector('p').textContent =
        "Criei um site 100% personalizado como presente romântico. A página exibe nosso nome, fotos, mensagem especial e um contador que mostra há quanto tempo estamos juntos — em anos, meses, dias, horas, minutos e segundos. Design responsivo, layout sensível ao toque emocional e animações sutis. Um projeto que une programação com sentimento.";
      projetos[1].querySelector('.portfolio-view-btn').textContent = "Ver projeto";
      projetos[1].querySelectorAll('.portfolio-github-link').forEach(link => {
        link.setAttribute('title', 'Ver repositório no GitHub');
      });
    }

    document.querySelector('.footer-topbar-content h2').innerHTML =
      '<span style="font-weight:700;color:#222;">Me fale sobre seu </span><span style="font-weight:700;color:#888;">proximo<br>projeto</span>';

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
