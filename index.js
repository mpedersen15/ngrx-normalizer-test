const { normalize, schema } = require('normalizr');

const nestedPlan = {
  id: 'plan1',
  name: `Matt's Plan`,
  description: `Matt's first mock plan for testing Normalizr`,
  dateCreated: new Date().getTime(),
  contributors: [
    {
      id: 'userMatt',
      name: 'Matt'
    },
    {
      id: 'userRyan',
      name: 'Ryan'
    }
  ],
  revisions: [
    {
      id: 'revision2',
      dateModified: new Date().getTime(),
      wallList: [
        {
          id: 'wall2.1',
          x: 15,
          y: 10,
          length: 120,
          height: 120,
          blockList: [
            {
              id: 'block2.1.1',
              x: 0,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block2.1.2',
              x: 36,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block2.1.3',
              x: 72,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            }
          ]
        },{
          id: 'wall2.2',
          x: 150,
          y: 100,
          length: 240,
          height: 144,
          blockList: [
            {
              id: 'block2.2.1',
              x: 0,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block2.2.2',
              x: 36,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block2.2.3',
              x: 72,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            }
          ]
        }
      ]
    },
    {
      id: 'revision1',
      dateModified: new Date().getTime(),
      wallList: [
        {
          id: 'wall1.1',
          x: 15,
          y: 10,
          length: 120,
          height: 120,
          blockList: [
            {
              id: 'block1.1.1',
              x: 0,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block1.1.2',
              x: 36,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block1.1.3',
              x: 72,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            }
          ]
        },{
          id: 'wall1.2',
          x: 150,
          y: 100,
          length: 240,
          height: 120,
          blockList: [
            {
              id: 'block1.2.1',
              x: 0,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block1.2.2',
              x: 36,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            },
            {
              id: 'block1.2.3',
              x: 72,
              y: 0,
              width: 36,
              height: 41,
              type: 'stock'
            }
          ]
        }
      ]
    }
  ]
};

const nestedPlans = [
  {
    id: 'plan1',
    name: `Matt's Plan`,
    description: `Matt's first mock plan for testing Normalizr`,
    dateCreated: new Date().getTime(),
    contributors: [
      {
        id: 'userMatt',
        name: 'Matt'
      },
      {
        id: 'userRyan',
        name: 'Ryan'
      }
    ],
    revisions: [
      {
        id: 'revision2',
        dateModified: new Date().getTime(),
        wallList: [
          {
            id: 'wall2.1',
            x: 15,
            y: 10,
            length: 120,
            height: 120,
            blockList: [
              {
                id: 'block2.1.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block2.1.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block2.1.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          },{
            id: 'wall2.2',
            x: 150,
            y: 100,
            length: 240,
            height: 144,
            blockList: [
              {
                id: 'block2.2.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block2.2.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block2.2.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          }
        ]
      },
      {
        id: 'revision1',
        dateModified: new Date().getTime(),
        wallList: [
          {
            id: 'wall1.1',
            x: 15,
            y: 10,
            length: 120,
            height: 120,
            blockList: [
              {
                id: 'block1.1.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block1.1.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block1.1.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          },{
            id: 'wall1.2',
            x: 150,
            y: 100,
            length: 240,
            height: 120,
            blockList: [
              {
                id: 'block1.2.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block1.2.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: 'block1.2.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'plan2',
    name: `Matt's Second Plan`,
    description: `Matt's second mock plan for testing Normalizr`,
    dateCreated: new Date().getTime(),
    contributors: [
      {
        id: 'userMatt',
        name: 'Matt'
      },
      {
        id: 'userRyan',
        name: 'Ryan'
      }
    ],
    revisions: [
      {
        id: '1revision2',
        dateModified: new Date().getTime(),
        wallList: [
          {
            id: '1wall2.1',
            x: 15,
            y: 10,
            length: 120,
            height: 120,
            blockList: [
              {
                id: '1block2.1.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block2.1.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block2.1.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          },{
            id: '1wall2.2',
            x: 150,
            y: 100,
            length: 240,
            height: 144,
            blockList: [
              {
                id: '1block2.2.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block2.2.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block2.2.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          }
        ]
      },
      {
        id: '1revision1',
        dateModified: new Date().getTime(),
        wallList: [
          {
            id: '1wall1.1',
            x: 15,
            y: 10,
            length: 120,
            height: 120,
            blockList: [
              {
                id: '1block1.1.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block1.1.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block1.1.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          },{
            id: '1wall1.2',
            x: 150,
            y: 100,
            length: 240,
            height: 120,
            blockList: [
              {
                id: '1block1.2.1',
                x: 0,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block1.2.2',
                x: 36,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              },
              {
                id: '1block1.2.3',
                x: 72,
                y: 0,
                width: 36,
                height: 41,
                type: 'stock'
              }
            ]
          }
        ]
      }
    ]
  }
]

userSchema = new schema.Entity('user');
blockSchema = new schema.Entity('block');
wallSchema = new schema.Entity('wall', {
  blockList: [ blockSchema ]
});

revisionSchema = new schema.Entity('revision', {
  wallList: [ wallSchema ]
});

const planSchema = {
  contributors: [ userSchema ],
  revisions: [ revisionSchema ]
};

const plansSchema = [ planSchema ];

const nestedBlogPost = {
    "id": "123",
    "author": {
      "id": "1",
      "name": "Paul"
    },
    "title": "My awesome blog post",
    "comments": [
      {
        "id": "324",
        "commenter": {
          "id": "2",
          "name": "Nicole"
        }
      }
    ]
  };


// const normalizedPlan = normalize(nestedPlan, planSchema);
const normalizedPlan = normalize(nestedPlans, plansSchema);

console.log('Normalized plan', JSON.stringify(normalizedPlan));

/* // Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article 
const article = new schema.Entity('articles', { 
  author: user,
  comments: [ comment ]
});

const normalizedData = normalize(nestedBlogPost, article);

console.log(normalizedData);
 */

