const students = [
    {
        name: "Jon",
        id: 1,
        grades: [85, 90, 80],
        attendance: 90
    },
    {
        name: "Bob",
        id: 2,
        grades: [60, 58, 65],
        attendance: 75
    },
    {
        name: "Alice",
        id: 3,
        grades: [95, 88, 92],
        attendance: 98,
    },
];

function calculateAverageGrade(student) {
    let sum = 0;
    for (let i = 0; i < student.grades.length; i++) {
        sum += student.grades[i];
    }
    return sum / student.grades.length;
}
console.log(calculateAverageGrade(students[0]));

function getLetterGrade(score) {
    switch (true) {
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        default:
            return "F";
    }
}
console.log(getLetterGrade(students[0].grades[0]));

function getStatus(student) {
    const avg = calculateAverageGrade(student);

    if (avg >= 60 && student.attendance >= 75) {
        return "Passing";
    }
    else { return "Failing";}
}
console.log(getStatus(students[0]))

const studentGrades = students.map(student => {
  const avg = calculateAverageGrade(student);
  return {
    name: student.name,
    grade: getLetterGrade(avg)
  };
});

console.log(studentGrades);

const passingStudents = students.filter(student => {
  return getStatus(student) === "Passing";
});

const sortedStudents = [...students].sort((a, b) => {
  return calculateAverageGrade(b) - calculateAverageGrade(a);
});

console.log(passingStudents);
console.log(sortedStudents);

const student = students.find(s => s.id === 2);
console.log(student);

class Student {
  constructor(name, id, grades, attendance) {
    this.name = name;
    this.id = id;
    this.grades = grades;
    this.attendance = attendance;
  }

  calculateAverageGrade() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  getLetterGrade() {
    const avg = this.calculateAverageGrade();

    switch (true) {
      case avg >= 90:
        return "A";
      case avg >= 80:
        return "B";
      case avg >= 70:
        return "C";
      case avg >= 60:
        return "D";
      default:
        return "F";
    }
  }

  get isPassing() {
    return this.calculateAverageGrade() >= 60 && this.attendance >= 75;
  }
}

class Course {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  getClassAverage() {
    const total = this.students.reduce((acc, student) => {
      return acc + student.calculateAverageGrade();
    }, 0);

    return total / this.students.length;
  }

  getTopStudents(n) {
    return [...this.students]
      .sort((a, b) => b.calculateAverageGrade() - a.calculateAverageGrade())
      .slice(0, n);
  }
}

const course = new Course();

course.addStudent(new Student("Jon", 1, [85, 90, 80], 90));
course.addStudent(new Student("Bob", 2, [60, 58, 65], 75));
course.addStudent(new Student("Alice", 3, [95, 88, 92], 98));

console.log(course.getClassAverage());
console.log(course.getTopStudents(2));

function display(data) {
  const output = document.getElementById("output");
  output.innerHTML = JSON.stringify(data, null, 2);
}

function showAllStudents() {
  display(students);
}

function showPassingStudents() {
  const passing = students.filter(student => getStatus(student) === "Passing");
  display(passing);
}

function displayStudents(list) {
  const output = document.getElementById("output");

  output.innerHTML = list.map(student => {
    const avg = calculateAverageGrade(student);
    const grade = getLetterGrade(avg);

    return `
      <div style="margin-bottom:10px;">
        <strong>${student.name}</strong><br>
        Average: ${avg.toFixed(2)}<br>
        Grade: ${grade}<br>
        Attendance: ${student.attendance}<br>
      </div>
    `;
  }).join("");
}

function showAllStudents() {
  displayStudents(students);
}

function showPassingStudents() {
  const passing = students.filter(student => getStatus(student) === "Passing");
  displayStudents(passing);
}
function showTopStudents() {
  const top = [...students]
    .sort((a, b) => calculateAverageGrade(b) - calculateAverageGrade(a))
    .slice(0, 2);

  displayStudents(top);
}