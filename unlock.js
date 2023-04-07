let unlockForm = document.getElementById("unlock-form");
let audio = document.getElementById("audio");
let coming = document.getElementById("coming-text");
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a16bf3b (yes)
if (Date.now() > new Date('2023-04-21')) {
    audio.style.display = 'flex';
    unlockForm.style.display = 'none';
    coming.style.display = 'none';
    unlock.value = "";
}
<<<<<<< HEAD
=======
>>>>>>> 3beac70 (first run)
=======
>>>>>>> a16bf3b (yes)

unlockForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let unlock = document.getElementById("unlock");

<<<<<<< HEAD
<<<<<<< HEAD
  if (unlock.value.toLowerCase() == "top ten state") {
=======
  if (unlock.value == "we made hell a home") {
>>>>>>> 3beac70 (first run)
=======
  if (unlock.value == "top ten state") {
>>>>>>> a16bf3b (yes)

    audio.style.display = 'flex';
    unlockForm.style.display = 'none';
    coming.style.display = 'none';
    unlock.value = "";
<<<<<<< HEAD
<<<<<<< HEAD
   
=======
>>>>>>> 3beac70 (first run)
=======
   
>>>>>>> a16bf3b (yes)
  }
});
