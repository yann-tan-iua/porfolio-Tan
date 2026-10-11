// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contact');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Petite validation
    if (nom.length < 2) {
      alert("Veuillez entrer un nom valide.");
      return;
    }
    if (!email.includes('@')) {
      alert("Veuillez entrer un email valide.");
      return;
    }
    if (message.length < 10) {
      alert("Votre message est trop court (10 caractères minimum).");
      return;
    }

    // Simulation d'envoi réussi
    const bouton = form.querySelector('button[type="submit"]');
    const texteOriginal = bouton.textContent;
    
    bouton.textContent = "Envoi en cours...";
    bouton.disabled = true;

    setTimeout(() => {
      // Ici tu pourrais connecter un vrai service plus tard (EmailJS, Formspree...)
      alert(`Merci ${nom} ! Ton message a bien été reçu.\nJe te réponds vite sur ${email}`);
      
      form.reset();
      bouton.textContent = texteOriginal;
      bouton.disabled = false;
    }, 1200);
  });

  // Petite animation smooth scroll pour ton menu
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});