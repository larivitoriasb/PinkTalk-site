// ===========================
// 1. Títulos que brilham ao passar o mouse
// ===========================
const titles = document.querySelectorAll('.glow-title');

titles.forEach(title => {
  title.addEventListener('mouseenter', () => {
    title.style.textShadow = '0 0 12px #fd027fff, 0 0 24px #fd03beff, 0 0 36px #fd0284ff';
    title.style.transition = 'all 0.3s ease';
  });
  title.addEventListener('mouseleave', () => {
    title.style.textShadow = 'none';
  });
});

// ===========================
// 2. Fade-in das seções ao rolar a página
// ===========================
const sections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.6s ease-out';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
    }
  });
});

// Inicializa fade invisível
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
});

// ===========================
// 3. Botão "subir ao topo"
// ===========================
const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.textContent = '🔝';
topBtn.style.display = 'none';
topBtn.style.position = 'fixed';
topBtn.style.bottom = '20px';
topBtn.style.right = '20px';
topBtn.style.padding = '12px 16px';
topBtn.style.border = 'none';
topBtn.style.borderRadius = '12px';
topBtn.style.backgroundColor = '#ff69b4';
topBtn.style.color = 'white';
topBtn.style.fontSize = '20px';
topBtn.style.cursor = 'pointer';
topBtn.style.boxShadow = '0 5px 15px rgba(255,182,193,0.5)';
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// ===========================
// 4. Brilho animado no logo
// ===========================
const logo = document.querySelector('.logo');
if(logo){
  setInterval(() => {
    logo.style.textShadow = `0 0 12px #ff0582ff, 0 0 24px #ffb6c1, 0 0 36px #ffc0cb`;
    setTimeout(() => {
      logo.style.textShadow = 'none';
    }, 800);
  }, 2000);
}

// ===========================
// 5. Glitter atrás das fotos do trio
// ===========================
const glitterContainer = document.querySelector('.glitters-hosts');
if(glitterContainer){
  for(let i=0; i<30; i++){
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');
    glitter.style.left = Math.random() * glitterContainer.offsetWidth + 'px';
    glitter.style.top = Math.random() * glitterContainer.offsetHeight + 'px';
    glitter.style.width = 6 + Math.random()*4 + 'px'; // glitter variável
    glitter.style.height = glitter.style.width;
    glitter.style.animationDuration = (2 + Math.random() * 3) + 's';
    glitterContainer.appendChild(glitter);
  }
}
