let rates = [];
let storedRates = [];

function todayDate() {
  let today = function () {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    return today;
  };
  let dateItem = document.querySelector("#dateFilter");
  return dateItem.setAttribute("value", today());
}
todayDate();

function renderRates(rates) {
  const htmlStr = rates.reduce(function (acc, rate) {
    return (
      acc +
      `<tr>
                    <td>${rate.r030}</td>
                    <td>${rate.txt}</td>
                    <td>${rate.rate}</td>
                    <td>${rate.cc}</td>
                    <td>${rate.exchangedate}</td>
                </tr>`
    );
  }, "");
  document.querySelector(".table tbody").innerHTML = htmlStr;
}

document.getElementById("search").onkeyup = function (e) {
  let searchValue = e.currentTarget.value.toLowerCase().trim();
  const filteredRates = (storedRates.length ? storedRates : rates).filter(
    function (rate) {
      const cc = rate.cc.toLowerCase();
      const txt = rate.txt.toLowerCase();
      return txt.includes(searchValue) || cc.includes(searchValue);
    }
  );
  renderRates(filteredRates);
};

document.getElementById("dateFilter").onchange = function (e) {
  let chooseDate = e.currentTarget.value.replaceAll("-", "");
  todayDate(chooseDate);

  document.getElementById("search").value = "";
};

todayDate = function (date) {
  fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      rates = data.map(function (rate) {
        return {
          r030: rate.r030,
          txt: rate.txt,
          rate: rate.rate,
          cc: rate.cc,
          exchangedate: rate.exchangedate,
        };
      });
      renderRates(rates);
    });
};
