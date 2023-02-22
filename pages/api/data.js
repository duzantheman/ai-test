export const execName = 'John Doe'

export const execProfile = [
  {
    label: 'Essential',
    sections: [
      {
        label: 'Personal',
        fields: [
          {
            label: 'email',
            type: 'email',
            placeholder: 'Email',
            value: 'email@example.com',
          },
          {
            label: 'phone',
            type: 'tel',
            placeholder: 'Phone',
            value: '1234567890',
          },
          {
            label: 'birthday',
            type: 'date',
            placeholder: 'Birthday',
            value: '2000-01-01',
          },
          {
            label: 'Password manager',
            type: 'text',
            placeholder: 'Password manager',
            value: '1Password',
          }
        ]
      },
      {
        label: 'Work',
        fields: [
          {
            label: 'email',
            type: 'email',
            placeholder: 'Email',
            value: 'email@mycompany.com',
          },
          {
            label: 'company',
            type: 'text',
            placeholder: 'Company',
            value: 'My Company',
          },
          {
            label: 'role',
            type: 'text',
            placeholder: 'Role',
            value: 'Software Engineer',
          },
          {
            label: 'industry',
            type: 'text',
            placeholder: 'Industry',
            value: 'Software',
          },
          {
            label: 'website',
            type: 'url',
            placeholder: 'Website',
            value: 'https://mycompany.com',
          }
        ]
      },
      // add Shipping section with home and office fields
      {
        label: 'Shipping',
        fields: [
          {
            label: 'home',
            type: 'text',
            placeholder: 'Home address',
            value: '123 Main St, San Francisco, CA 94105',
          },
          {
            label: 'office',
            type: 'text',
            placeholder: 'Office address',
            value: '123 Main St, San Francisco, CA 94105',
          }
        ]
      },
    ]
  },
  {
    label: 'Work',
    sections: [
      // add a Misc section with "Health insurance" and "Key contacts" fields
      {
        label: 'Misc',
        fields: [
          {
            label: 'health insurance',
            type: 'text',
            placeholder: 'Health insurance',
            value: 'Blue Cross Blue Shield',
          },
          {
            label: 'key contacts',
            type: 'text',
            placeholder: 'Key contacts',
            value: 'John Doe, Jane Doe',
          }
        ],
      },
      // add an "Email templates" section with "Intro" and "Thank you" fields
      {
        label: 'Email templates',
        fields: [
          {
            label: 'intro',
            type: 'text',
            placeholder: 'Intro',
            value: 'Hi, my name is John Doe and I am a software engineer at My Company. I am reaching out to you because I am interested in learning more about your company and the role of Software Engineer.',
          },
          {
            label: 'thank you',
            type: 'text',
            placeholder: 'Thank you',
            value: 'Thank you for your time and consideration. I look forward to hearing from you.',
          },
        ]
      },
      // add an Anniversaries section with "Company anniversary" fields
      {
        label: 'Anniversaries',
        fields: [
          {
            label: 'company anniversary',
            type: 'date',
            placeholder: 'Company anniversary',
            value: '2000-03-01',
          },
        ],
      },
    ]
  },
  {
    label: 'Personal',
    sections: [
      // add a "Family" section with "Family members" and "Pets" fields
      {
        label: 'Family',
        fields: [
          {
            label: 'family members',
            type: 'text',
            placeholder: 'Family members',
            value: 'John Doe, Jane Doe',
          },
          {
            label: 'pets',
            type: 'text',
            placeholder: 'Pets',
            value: 'Dog, Cat',
          }
        ]
      },
      // add a "Anniversaries" section with "Wedding anniversary" and "Birthday" fields
      {
        label: 'Anniversaries',
        fields: [
          {
            label: 'wedding anniversary',
            type: 'date',
            placeholder: 'Wedding anniversary',
            value: '2000-02-01',
          },
          {
            label: 'birthday',
            type: 'date',
            placeholder: 'Birthday',
            value: '2000-01-01',
          }
        ]
      },
      // add a "Food" section with "allergies", "favorite coffee shop", "favorite lunch place" and "favorite dinner place" fields
      {
        label: 'Food',
        fields: [
          {
            label: 'allergies',
            type: 'text',
            placeholder: 'Allergies',
            value: 'Peanuts',
          },
          {
            label: 'favorite coffee shop',
            type: 'text',
            placeholder: 'Favorite coffee shop',
            value: 'Starbucks',
          },
          { 
            label: 'favorite lunch place',
            type: 'text',
            placeholder: 'Favorite lunch place',
            value: 'Chipotle',
          },
          {
            label: 'favorite dinner place',
            type: 'text',
            placeholder: 'Favorite dinner place',
            value: 'Cheesecake Factory',
          }
        ]
      }
    ]
  },
  {
    label: 'Travel',
    sections: [
      // add a "Air travel" section with "Preferred airline", "Preferred class", "Preferred seating", "Preferred airport", and "Frequent flyer program" fields
      {
        label: 'Air travel',
        fields: [
          {
            label: 'preferred airline',
            type: 'text',
            placeholder: 'Preferred airline',
            value: 'Delta',
          },
          {
            label: 'preferred class',
            type: 'text',
            placeholder: 'Preferred class',
            value: 'First',
          },
          {
            label: 'preferred seating',
            type: 'text',
            placeholder: 'Preferred seating',
            value: 'Window',
          },
          {
            label: 'preferred airport',
            type: 'text',
            placeholder: 'Preferred airport',
            value: 'SFO',
          },
          {
            label: 'frequent flyer program',
            type: 'text',
            placeholder: 'Frequent flyer program',
            value: 'Delta SkyMiles',
          }
        ]
      },
      // add a "Hotel & Airbnb" section with "Preferred accommodation", "Preferred style", "Reward program" fields
      {
        label: 'Hotel & Airbnb',
        fields: [
          {
            label: 'preferred accommodation',
            type: 'text',
            placeholder: 'Preferred accommodation',
            value: 'Hotel',
          },
          {
            label: 'preferred style',
            type: 'text',
            placeholder: 'Preferred style',
            value: 'Luxury',
          },
          {
            label: 'reward program',
            type: 'text',
            placeholder: 'Reward program',
            value: 'Marriott Bonvoy',
          }
        ]
      },
      // add a "Car rental" section with "Preferred car rental company", "Preferred make or model", "rewards program" "Preferred taxi or company or app" fields
      {
        label: 'Car rental',
        fields: [
          {
            label: 'preferred car rental company',
            type: 'text',
            placeholder: 'Preferred car rental company',
            value: 'Hertz',
          },
          {
            label: 'preferred make or model',
            type: 'text',
            placeholder: 'Preferred make or model',
            value: 'Tesla Model S',
          },
          {
            label: 'rewards program',
            type: 'text',
            placeholder: 'Rewards program',
            value: 'Hertz Gold Plus Rewards',
          },
          {
            label: 'preferred taxi or company or app',
            type: 'text',
            placeholder: 'Preferred taxi or company or app',
            value: 'Uber',
          }
        ]
      }
    ]
  }
]

// export const conversation = [
//   {
//     id: '1',
//     name: 'John Doe',
//     message: 'Hey Jane, could you help me setup a doctor\'s appointment for next week?',
//   },
//   // {
//   //   id: '2',
//   //   name: 'Jane Doe',
//   //   message: 'Sure, I\'ll send you a few options.',
//   // },
//   // {
//   //   id: '3',
//   //   name: 'John Doe',
//   //   message: 'Thanks!',
//   // },
// ]
