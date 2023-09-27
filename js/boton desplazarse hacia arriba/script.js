// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtén el botón de desplazamiento hacia arriba
  const btnScrollToTop = document.getElementById("btnScrollToTop");

  // Muestra u oculta el botón dependiendo de la posición del usuario en la página
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollToTop.style.display = "block";
    } else {
      btnScrollToTop.style.display = "none";
    }
  };

  // Agrega el evento de clic al botón para desplazarse hacia arriba
  btnScrollToTop.addEventListener("click", function () {
    // Desplázate hacia arriba de manera suave con un desplazamiento de 500ms
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
