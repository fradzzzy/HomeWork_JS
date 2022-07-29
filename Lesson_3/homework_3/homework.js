console.table(countries);

function getNames(countries) {
    /*
        дописать функцию, чтоб getNames возвращало список имен стран
        (массив countryNames, каждый элемент этого массива - название страны (поле name у каждого объекта))
    */

    
		var countryNames = [];

		for (item of countries) {
	
		countryNames.push(item.name);
		
	}

	return countryNames;
}


var names = getNames(countries);
console.log(names);
//пример: после getNames(countries) в names будет храниться ['Afganistan', 'Angola', ...]


function getCapitals(countries) {
    /*
        дописать функцию, чтоб getCapitals возвращало список столиц от каждой страны
        (массив countryCapitals, каждый элемент этого массива - название столицы страны (поле capital у каждого объекта страны))
    */

  

		var countryCapitals = [];

		for (item of countries) {
	
		countryCapitals.push(item.capital);
		
	}
	return countryCapitals;
}

var capitals = getCapitals(countries);
//пример: после getCapitals(countries) в capitals будет храниться ['Kyiv', 'London', ...]


function getAverageArea(countries) {
    /*
        дописать функцию, чтоб getAverageArea возвращало среднюю площадь из массива countries.
        получается, нужно посчитать среднее арифметическое. название поля - area
        результат с точностью до 1 знака после запятой
    */
  

	
	var countryAreas = [];

	for(item of countries) {
		countryAreas.push(item.area);
	}

		
		
		var averageArea = countryAreas.map(i=>x+=i, x=0).reverse()[0] / countries.length;
		return averageArea.toFixed(1);
}

var average = getAverageArea(countries)
//пример: в average -> 601162.3

function getUniqueRegions(countries) {
    /*
        Возвращает список уникальных названий регионов (поле region)

    */
    //return uniqueRegions;
		var uniqueRegions = [];

		for(item of countries){
			if (!uniqueRegions.includes(item.region)) {
				uniqueRegions.push(item.region);
			}
		}	
			return uniqueRegions;
		}

var unique = getUniqueRegions(countries);
//пример: unique -> ["Asia", "Europe", "Africa", "Oceania", "Americas", "Polar", "Antarctic Ocean", "Antarctic"]