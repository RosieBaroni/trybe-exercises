//Exercício de Fixação - Parte III - Qual seletor usar?

//backgroundColor no header
let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "green";

//backgroungColor section lado esquerdo
let emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "orange";

//backgroungColor h3 section lado esquerdo
let emergencyTasksTitles = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyTasksTitles.length; i += 1) {
  emergencyTasksTitles[i].style.backgroundColor = "violet";
};

//backgroungColor section lado direito
let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "yellow";

//backgroungColor h3 section lado direito
let noEmergencyTasksTitles = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyTasksTitles.length; i += 1) {
  noEmergencyTasksTitles[i].style.backgroundColor = "black";
};

//backgroungColor footer
let footerContainer = document.getElementById("footer-container");
footerContainer.style.backgroundColor = "darkgreen";