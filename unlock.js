let unlockForm = document.getElementById("unlock-form");
let audio = document.getElementById("audio");
let coming = document.getElementById("coming-text");
<<<<<<< HEAD
if (Date.now() > new Date('2023-04-21')) {
    audio.style.display = 'flex';
    unlockForm.style.display = 'none';
    coming.style.display = 'none';
    unlock.value = "";
}
=======
>>>>>>> 3beac70 (first run)

unlockForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let unlock = document.getElementById("unlock");

<<<<<<< HEAD
  if (unlock.value.toLowerCase() == "top ten state") {
=======
  if (unlock.value == "we made hell a home") {
>>>>>>> 3beac70 (first run)

    audio.style.display = 'flex';
    unlockForm.style.display = 'none';
    coming.style.display = 'none';
    unlock.value = "";
<<<<<<< HEAD
   
=======
>>>>>>> 3beac70 (first run)
  }
});
