(function(){
  emailjs.init("LzAu_opjwjdNYYq1V"); // USER ID do EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  const params = {
      from_name: document.getElementById("nome").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("mensagem").value
  };

  const serviceID = "service_nxlnpaq"; // Service ID do EmailJS
  const templateID = "template_jiqdrpb"; // Template ID do EmailJS

  emailjs.send(serviceID, templateID, params)
      .then(response => {
          alert("Email enviado com sucesso!");
          document.getElementById("contact-form").reset();
      })
      .catch(error => {
          alert("Erro ao enviar email: " + JSON.stringify(error));
      });
});