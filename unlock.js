let unlockForm = document.getElementById("unlock-form");
let audio = document.getElementById("audio");
let coming = document.getElementById("coming-text");
if (Date.now() > new Date('2023-04-21')) {
    audio.style.display = 'flex';
    unlockForm.style.display = 'none';
    coming.style.display = 'none';
    unlock.value = "";
}

unlockForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let unlock = document.getElementById("unlock");

  if (unlock.value.toLowerCase() == "top ten state") {

    audio.style.display = 'flex';
    unlockForm.style.display = 'none';
    coming.style.display = 'none';
    unlock.value = "";
   
  }
});
