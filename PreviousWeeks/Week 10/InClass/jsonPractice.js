// Practice JSON manipulation

// Example JSON from Slides
// ---------- 1) DATA STRUCTURE ----------
const jsondata = `{
"students": [
{
"name": "John",
"major": "Computer Science"
},
{
"name": "Emma",
"major": "Information Technology"
},
{
"name": "Michael",
"major": "Software Engineering"
}
]
}`;

let data = JSON.parse(jsondata).students;

// ---------- 2) MANIPULATION ----------
// Console Output Major of 2nd student
console.log(data[1].major);

// Console Output Name of 1st student
console.log(data[0].name);

// Console Output All Student Names
for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
}

// Example JSON from JSON EXAMPLE
// ---------- 1) DATA STRUCTURE ----------
const jsonExample = `{
 "students": [
  {
   "name": "John",
   "age": 20,
   "major": "Computer Science",
   "details": {
        "year": "Sophomore",
        "semester": "Fall"
   },
   "grades": {
    "webProgramming": "A",
    "python": "B+",
    "database": "A-"
   }
  },
  {
   "name": "Emma",
   "age": 21,
   "major": "Information Technology",
   "details": {
        "year": "Junior",
        "semester": "Spring"
   },
    "grades": {
    "webProgramming": "A-",
    "python": "A",
    "database": "B+"
   }
  },
  {
   "name": "Michael",
   "age": 22,
   "major": "Software Engineering",
   "details": {
        "year": "Senior",
        "semester": "Fall"
   },
   "grades": {
    "webProgramming": "B+",
    "python": "A",
    "database": "A"
   }
  }
 ]
}`;

// ---------- 2) MANIPULATION ----------
let data2 = JSON.parse(jsonExample).students;

// Console Output Major of 2nd student
console.log(data2[1].major);

// Console Output Name of 1st student
console.log(data2[0].name);

// Console Output All Student Names
for (let i = 0; i < data2.length; i++) {
    console.log(data2[i].name);
}

// for each loop to output all student names
data2.forEach(student => {
    console.log(student.name);
});