
let count = 0
function increment(){
  count += 1;
  document.getElementById("count-el").textContent = count
}
function save(){
document.getElementById("save-el").textContent += count + " - " 
document.getElementById("count-el").textContent = 0
count = 0
}

function clearCount(){
  document.getElementById("save-el").textContent = 0
}
