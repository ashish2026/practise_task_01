// task-1 :  console log the secondary school location of Sophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC Primary School" },
          { location: "Peters burg" },
        ],
      },
      {
        primary: [
          { school_name: "ABC secondary School" },
          { location: "Peters burg" },
        ],
      },
    ],
  },
};

const schoolLocation = data.Sophia.study[0].primary[1].location
// console.log(schoolLocation)

// task -2: console log & output Petersburg
let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Harry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

const StudentCity = students[2222].address.city
console.log(StudentCity)

// task-3: access and then show hablurder add,
//Show output beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Basic",
    },
  ],
};

const dataName = data2.data[0].bookDetails.name
console.log(dataName)