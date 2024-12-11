const container = document.querySelectorAll('.container, .sidebar-menu, .buttonOpen, .bar, .navbar, .content');
const items = document.querySelectorAll('.menu');
const button    = document.getElementById('btn-open');
const containerPortfolio = document.getElementById('container-portfolio');
const content = document.getElementById('project');
// membuat fungsi untuk trigger button
function slideIn() {
        container.forEach((open) => {
            open.classList.toggle('slide');
        })
    }
 function slideOut() {
    container.forEach((close) => {
        close.classList.remove('slide');
    });

    content.classList.add('fullsize');
    
 }   
    // memanggil nama fungsi 
    button.addEventListener('click', slideIn);
    
    // memanggil function slideOut untuk close navbar
    items.forEach((closeNavbar) => {
        closeNavbar.addEventListener('click', slideOut)
    });

// ========================================================


// ==========================================================

// ganti tema
const buttonTema = document.getElementById('tema');
const btnChange = document.querySelectorAll('.tema, body, .bar, .profile, .photo, .typewriter, .media, .sidebar-menu, .navbar, .about-me, .footer, .skills, .project, #contact');

    function tema () {
        btnChange.forEach((themes) => {
            themes.classList.toggle('change');
        })
    }
    buttonTema.addEventListener('click', tema);



// ================================================================ //



    // script untuk scroll 
    const namaku = document.getElementById("namaku");
    const jalan = document.getElementById("berjalan");


  window.addEventListener("scroll", () => {

    const scrollY = window.scrollY; // Mendapatkan posisi scroll vertikal
    const screen = window.innerWidth;
    if(screen <= 768){
        
        namaku.style.transform = `translateY(-${scrollY}px)`; // Menggerakkan elemen ke atas
        jalan.style.transform = `translateY(-${scrollY}px)`; // Menggerakkan elemen ke atas
    }
  });


//   ======================================================================


//   ======================================================================

// script untuk animasi typewriter
const texts = ["FrontEnd Developer", "Freelancer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenTexts = 1500;

const typewriterText = document.getElementById("typewriter-text");

function typeText() {
    if (charIndex < texts[index].length) {
        typewriterText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typewriterText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        index = (index + 1) % texts.length; // Loop to the next text
        setTimeout(typeText, typingSpeed);
    }
}

// Mulai efek typewriter
typeText();


// ===============================================
// code untuk observer
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.about-me, .section-title, .skills');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.5 });
  
    boxes.forEach(box => observer.observe(box));
  });

// ===============================================
// code untuk progress bar

// ==================================================================

const buttonShowFoto = document.getElementById('foto');
const showFoto = document.getElementById('photo-profile');

  buttonShowFoto.addEventListener('click', ()=> {
    showFoto.classList.add('show-foto');
  });