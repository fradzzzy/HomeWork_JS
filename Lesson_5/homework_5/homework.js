console.table(countries);

/* Домашка
1. Отрендерить таблицу стран. в таблицу должны войти поля: name, capital, region, area
2. добавить поисковик (по примеру с занятия), событие на него
3. по событию искать частичные совпадения введенного текста с полями name, capital, region. выдавать полученные результаты в таблицу
4. если нет результатов - показывать соответствующую строку "не найдено" в результатах поиска
*/

function renderCountries(countries) {
  let htmlStr = "";
  for (const item in countries) {
    let index = +item + 1;
    let country = countries[item];
    htmlStr += `<tr>
		<td>${index}</td>
		<td>${country.name}</td>
		<td>${country.capital}</td>
		<td>${country.region}</td>
		<td>${country.area}</td>
	</tr>`;
  }
  document.querySelector(".countries tbody").innerHTML =
    htmlStr ||
    `<tr>
			<td colspan="5" class="text-center">
				Не найдено
			</td>
		</tr>`;
}

renderCountries(countries);

let searchInput = document.querySelector("#search");

searchInput.onkeyup = function (event) {
  let value = event.currentTarget.value.toLowerCase().trim();
  let filteredCountries = countries.filter(function (country) {
    return (
      country.name.toLowerCase().includes(value) ||
      country.region.toLowerCase().includes(value) ||
      country.capital.toLowerCase().includes(value)
    );
  });
  return renderCountries(filteredCountries);
};
