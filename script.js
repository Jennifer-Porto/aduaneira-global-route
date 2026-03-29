
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit span');
  btn.textContent = 'Mensagem enviada!';
  setTimeout(() => btn.textContent = 'Enviar mensagem', 3000);
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.servico-card, .sobre-grid, .contato-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});