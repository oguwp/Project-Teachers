"use strict"; // to enable strict mode and modern JavaScript functionality

// declaring teacher objects
let teacher1 = {
  name: 'Birgitte Kirk Iversen',
  initials: 'bki',
  mail: "bki@baaa.dk",
  phone: "72 28 63 16",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  website: "www.baaa.dk",
  hairColor: "Brunt Hår",
  subjectArea: "Multimedia",
  img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg"
};

let teacher2 = {
  name: 'Rasmus Cederdorff',
  initials: 'Race',
  mail: "race@baaa.dk",
  phone: "72 28 63 16",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  website: "www.baaa.dk",
  hairColor: "Blond Hår",
  subjectArea: "Multimedia",
  img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp"
};

let teacher3 = {
  name: 'Kim Elkjær Marcher-Jepsen',
  initials: 'Kije',
  mail: "kije@baaa.dk",
  phone: "72 28 63 16",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  website: "www.baaa.dk",
  hairColor: "Bald",
  subjectArea: "Multimedia",
  img: "https://www.baaa.dk/media/3zihz21l/kim-elkjaer-marcher-jepsen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335276900000&format=webp"
};

let teacher4 = {
  name: 'Jeanne Bødker Nissen',
  initials: 'jebn',
  mail: "jebn@baaa.dk",
  phone: "72 28 63 16",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  website: "www.baaa.dk",
  hairColor: "Brunt Hår",
  subjectArea: "Multimedia",
  img: "https://www.baaa.dk/media/le0azlgf/jeanne-b%C3%B8dker-nissen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335264530000&format=webp"
};

let teacher5 = {
  name: 'Hanne Skjærlund Andersen',
  initials: 'hasa',
  mail: "hasa@baaa.dk",
  phone: "72 28 63 16",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  website: "www.baaa.dk",
  hairColor: "Brunt Hår",
  subjectArea: "Multimedia",
  img: "https://www.baaa.dk/media/f0xh1yfs/hanne-skj%C3%A6rlund-andersen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335249970000&format=webp"
};

let teacher6 = {
  name: 'Jan Skovgård Jensen',
  initials: 'jsj',
  mail: "jsj@baaa.dk",
  phone: "72 28 63 16",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  website: "www.baaa.dk",
  hairColor: "Brunt Hår",
  subjectArea: "Multimedia",
  img: "https://www.baaa.dk/media/5qhfbypg/jan-skovg%C3%A5rd-jensen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335261930000&format=webp"
};

// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(teacher4);
console.log(teacher5);
console.log(teacher6);


// Teacher 1
document.querySelector("#teacher-grid").innerHTML +=
  "<stuff>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  teacher1.department + "<br>" +
  teacher1.hairColor + "<br>" +
  teacher1.subjectArea + "<br>" +
  "<a href='https://www.baaa.dk/:" + teacher1.website + "'>" + teacher1.website + "</a>" + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" + "<br>" +
  "<a href='tel:" + teacher1.phone + "'>" + teacher1.phone + "</a>" + 
  "</stuff>";

// Teacher 2
document.querySelector("#teacher-grid").innerHTML +=
"<stuff>" +
"<img src='" + teacher2.img + "'>" +
"<h3>" + teacher2.name + "</h3>" +
teacher2.position + "<br>" +
teacher2.department + "<br>" +
teacher2.hairColor + "<br>" +
teacher2.subjectArea + "<br>" +
"<a href='https://www.baaa.dk/:" + teacher2.website + "'>" + teacher2.website + "</a>" + "<br>" +
"<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" + "<br>" +
"<a href='tel:" + teacher2.phone + "'>" + teacher2.phone + "</a>" + 
"</stuff>";

// Teacher 3
document.querySelector("#teacher-grid").innerHTML +=
"<stuff>" +
"<img src='" + teacher3.img + "'>" +
"<h3>" + teacher3.name + "</h3>" +
teacher3.position + "<br>" +
teacher3.department + "<br>" +
teacher3.hairColor + "<br>" +
teacher3.subjectArea + "<br>" +
"<a href='https://www.baaa.dk/:" + teacher3.website + "'>" + teacher3.website + "</a>" + "<br>" +
"<a href='mailto:" + teacher3.mail + "'>" + teacher3.mail + "</a>" + "<br>" +
"<a href='tel:" + teacher3.phone + "'>" + teacher3.phone + "</a>" + 
"</stuff>";

// Teacher 4
document.querySelector("#teacher-grid").innerHTML +=
"<stuff>" +
"<img src='" + teacher4.img + "'>" +
"<h3>" + teacher4.name + "</h3>" +
teacher4.position + "<br>" +
teacher4.department + "<br>" +
teacher4.hairColor + "<br>" +
teacher4.subjectArea + "<br>" +
"<a href='https://www.baaa.dk/:" + teacher4.website + "'>" + teacher4.website + "</a>" + "<br>" +
"<a href='mailto:" + teacher4.mail + "'>" + teacher4.mail + "</a>" + "<br>" +
"<a href='tel:" + teacher4.phone + "'>" + teacher4.phone + "</a>" + 
"</stuff>";

// Teacher 5
document.querySelector("#teacher-grid").innerHTML +=
"<stuff>" +
"<img src='" + teacher5.img + "'>" +
"<h3>" + teacher5.name + "</h3>" +
teacher5.position + "<br>" +
teacher5.department + "<br>" +
teacher5.hairColor + "<br>" +
teacher5.subjectArea + "<br>" +
"<a href='https://www.baaa.dk/:" + teacher5.website + "'>" + teacher5.website + "</a>" + "<br>" +
"<a href='mailto:" + teacher5.mail + "'>" + teacher5.mail + "</a>" + "<br>" +
"<a href='tel:" + teacher5.phone + "'>" + teacher5.phone + "</a>" + 
"</stuff>";

// Teacher 6
document.querySelector("#teacher-grid").innerHTML +=
"<stuff>" +
"<img src='" + teacher6.img + "'>" +
"<h3>" + teacher6.name + "</h3>" +
teacher6.position + "<br>" +
teacher6.department + "<br>" +
teacher6.hairColor + "<br>" +
teacher6.subjectArea + "<br>" +
"<a href='https://www.baaa.dk/:" + teacher6.website + "'>" + teacher6.website + "</a>" + "<br>" +
"<a href='mailto:" + teacher6.mail + "'>" + teacher6.mail + "</a>" + "<br>" +
"<a href='tel:" + teacher6.phone + "'>" + teacher6.phone + "</a>" + 
"</stuff>";