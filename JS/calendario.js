const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function render() {
  let output = "";

  const thisMonth = months[new Date().getMonth()];

  for (let month of months) {
    const active = thisMonth == month ? "active" : "";
    output += `<div class="${active}">${month}</div>`;
  }

  return output;
}

app.querySelector("main").innerHTML = render();
app.querySelector("header span").innerHTML = new Date().getFullYear();

 function toggleMode() {
        const html = document.documentElement
        html.classList.toggle("dark-mode")
      }
      
      function addFontSize(amountToAdd) {
        const style = window.getComputedStyle(document.body)
        let percent = Number(style.getPropertyValue("--font-size").split("%")[0])
        percent += amountToAdd
        document.documentElement.style.setProperty("--font-size", percent + "%")
      }
      
      function dimFontSize(amountToAdd) {
        const style = window.getComputedStyle(document.body)
        let percent = Number(style.getPropertyValue("--font-size").split("%")[0])
        percent -= amountToAdd
        document.documentElement.style.setProperty("--font-size", percent + "%")
      }