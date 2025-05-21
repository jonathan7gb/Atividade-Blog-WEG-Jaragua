function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const hamburguer = document.getElementById("hamburguer");

    sidebar.classList.toggle("active");
    hamburguer.classList.toggle("active"); // muda a cor
  }