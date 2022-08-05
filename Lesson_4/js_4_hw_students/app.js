const students = [
  { name: "Vasya", mark: 3.8, email: "vasya@gmail.com", isAdmin: false },
  { name: "Helen", mark: 3.4, email: "helen@gmail.com", isAdmin: false },
  { name: "Marina", mark: 4.0, email: "marina@gmail.com", isAdmin: true },
  { name: "Alex", mark: 4.2, email: "alex@gmail.com", isAdmin: false },
  { name: "Martin", mark: 4, email: "martin@gmail.com", isAdmin: true },
  { name: "Denys", mark: 3.7, email: "denys@gmail.com", isAdmin: false },
  { name: "Daniel", mark: 4.8, email: "daniel@gmail.com", isAdmin: true },
  { name: "John", mark: 3.6, email: "jogn@gmail.com", isAdmin: false },
  { name: "Phil", mark: 4.5, email: "phil@gmail.com", isAdmin: false },
  { name: "Anna", mark: 3.8, email: "anna@gmail.com", isAdmin: false },
];

console.log(students);

function logAdmins(students) {
  //вернуть из функции список тех, у кого поле isAdmin: true
  return students
    .filter(function (student) {
      return student.isAdmin;
    })
    .map(function (student) {
      return student.name;
    });
}
logAdmins(students);

function filterByMark(students) {
  //ввести оценку через prompt
  //и вернуть из функции список тех, у кого в поле mark оценка >= чем введенная ранее
  let mark = prompt("Введите оценку");
  return students.filter(function (student) {
    return student.mark >= Number(mark);
  });
}
filterByMark(students);

function renderStudents(students) {
  //по аналогии с курсами валют
  let htmlStr = "";
  for (let item in students) {
    let index = +item + 1;
    let student = students[item];
    htmlStr += `<tr>
			<td>${index}</td>
			<td>${student.name}</td>
			<td>${student.mark}</td>
			<td>${student.email}</td>
			<td>${student.isAdmin}</td>
		</tr>`;
  }
  document.querySelector(".students tbody").innerHTML = htmlStr;
}
renderStudents(students);

function getAverageMark(students) {
  //вернуть среднюю оценку (2 знака после запятой) из списка students
  let totalMark = students.reduce(function (acc, student) {
    return acc + student.mark;
  }, 0);
  return (totalMark / students.length).toFixed(2);
}
getAverageMark(students);

function getEmailList(students) {
  //вернуть список состоящий из только поля email студентов
  // пример результата: ['vasya@gmail.com', 'helen@gmail.com', ..., 'anna@gmail.com']

  return students.map(function (student) {
    return student.email;
  });
}
getEmailList(students);

function getDataList(students) {
  //вернуть список, состоящий из name и email студентов
  //пример результата: [{name: 'Vasya', email: 'vasya@gmail.com'}, {name: 'Helen', email: 'helen@gmail.com'}, ..., {name: 'Anna', email: 'anna@gmail.com'}]
  return students.map(function (student) {
    return { name: student.name, email: student.email };
  });
}
getDataList(students);
