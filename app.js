let btn = document.getElementById("btn");
let input = document.getElementById("input");

console.log(btn)

let copier = (e) => {
    e.preventDefault();
    
  if (input.value == "" || input.value == " ") {
    btn.innerText = "Copy";
  } else {
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    btn.innerText = "Copied";

    setTimeout(() => {
      btn.innerText = "Copy";
    }, 2000);
  }
};

btn.addEventListener("click", copier);