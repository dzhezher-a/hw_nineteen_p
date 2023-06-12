const btnOne = document.querySelector(".https-check-btn-one");
const btnTwo = document.querySelector(".https-check-btn-two");

function checkProtocol() {
  let url = "github.com/dzhezher-a/hw_nineteen_p";
  const httpsRegex = new RegExp(/^https?:\/\//);
  if (!httpsRegex.test()) {
    url = "https://" + url;
  }

  window.open(url, "_blank");
}

btnOne.addEventListener("click", checkProtocol);
btnTwo.addEventListener("click", checkProtocol);
