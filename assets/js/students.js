let students = [
  {
      id: 1,
      name: "Atakan",
      lastname: "Arıkan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 2,
      name: "Busenur",
      lastname: "Savaş",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 3,
      name: "Ece",
      lastname: "Kubilay",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 4,
      name: "Elif Yağmur",
      lastname: "Şahin",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 5,
      name: "Gaye",
      lastname: "Dinç",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 6,
      name: "Gökdeniz",
      lastname: "Keleş",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 7,
      name: "Hilal",
      lastname: "Baran",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 8,
      name: "Mehmet Akif",
      lastname: "Küçükyılmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 9,
      name: "Merve",
      lastname: "Özel",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 10,
      name: "Muhammet Ali",
      lastname: "Şafak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 11,
      name: "Ömer",
      lastname: "Kuluç",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  }
];

const studentTableBody = document.querySelector('#student-table tbody');
const maleTableBody = document.querySelector('#male-student-table tbody');
const femaleTableBody = document.querySelector('#female-student-table tbody');

students.forEach(student => {
    const row = document.createElement('tr'); 

    const idCell = document.createElement('td');
    idCell.innerHTML = student.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.innerHTML = student.name;
    row.appendChild(nameCell);

    const lastnameCell = document.createElement('td');
    lastnameCell.innerHTML = student.lastname;
    row.appendChild(lastnameCell);

    const genderCell = document.createElement('td');
    genderCell.innerHTML = student.gender;
    row.appendChild(genderCell);

    const sectionCell = document.createElement('td');
    sectionCell.innerHTML = student.section;
    row.appendChild(sectionCell);

    const roleCell = document.createElement('td');
    roleCell.innerHTML = student.role;
    row.appendChild(roleCell);
    
    let countFemale = 0;
    let countMale = 0;
    
    if (student.gender === 'Erkek') {
        countMaleStudent++;
        countMaleStudent.innerText = countMale;
        maleTableBody.appendChild(row);
        
    } else if (student.gender === 'Kadın') {
        countFemaleStudent++;
        countFemaleStudent.innerText = countFemale;
        femaleTableBody.appendChild(row);
       
    }
});

