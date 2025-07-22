document.getElementById("nameForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const day = new Date(dob).getDay();
  const names = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  };
  const meanings = [
    "Born on Sunday",
    "Born on Monday",
    "Born on Tuesday",
    "Born on Wednesday",
    "Born on Thursday",
    "Born on Friday",
    "Born on Saturday"
  ];
  const name = names[gender][day];
  const meaning = meanings[day];
  document.getElementById("result").innerHTML = `<h2>Your Name: ${name}</h2><p>${meaning}</p>`;
});