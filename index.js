const inputEl = document.getElementById("input");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("cpy");

function generate() {
  let char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ0123456789<>?:}{+_)(*&^%$#@!";
  let password_length = 14;
  let password = "";
  for (let index = 0; index < password_length; index++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber + 1);
    inputEl.value = password;
  }
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value)
    alert("Copy Password");

}

copyEl.addEventListener("click",()=>{
    copyPassword();
})


generateEl.addEventListener("click", () => {
  generate();
});
