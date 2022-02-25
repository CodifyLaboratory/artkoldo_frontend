
// Все в одном респонсе
[
  {
    id: 1,
    categoryName: "Живопись",
    section: [
      {
        id: 1,
        categoryId: 1,
        options: [
          "abstraction",
          "Современное искусство",
          "Абстрактный экспрессионизм",
          "Экспрессионизм",
        ],
      },
      {
        id: 2,
        sectionName: "Темы",
        options: [],
      },
    ],
  },
];


// Get filter categories
// /filterCategories

//Response
[
  {
    id: 1,
    name: 'painting',
  },
  {
    id: 2,
    name: 'remeslinniki',
  },
  {
    id: 3,
    name: 'Keramika',
  }
]

// Get filter sections
 [
    {
      id: 1,
      categoryId: 1,
      options: [
        "abstraction",
        "Современное искусство",
        "Абстрактный экспрессионизм",
        "Экспрессионизм",
      ],
    },

    {
      id: 2,
      categoryId: 1,
      sectionName: "Темы",
      options: [],
    },
]