// JavaScript snippet to rotate male and female Akan names by the current day of the week
const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function getNameOfTheDay() {
  const today = new Date();
  const day = today.getDay(); // 0=Sunday...6=Saturday
  const akanIndex = day === 0 ? 6 : day - 1;

  return {
    male: maleNames[akanIndex],
    female: femaleNames[akanIndex]
  };
}

const nameOfTheDay = getNameOfTheDay();
// Example: update your HTML elements with IDs 'male-name' and 'female-name'
document.getElementById('male-name').textContent = nameOfTheDay.male;
document.getElementById('female-name').textContent = nameOfTheDay.female;
