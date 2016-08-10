# API Server - Express + RethinkDB

v0.0.1
======

### Data Models

```javascript
{
  user1: {
    username: "yomolify",
    fullname: "Amol Sidhu",
    email: "sidhu.amol@gmail.com",
    password: "678SDA&(76AS!^AsdnmzxcsaLKJsh2789", // never store password without encrypting it,
    foodEntries: // an infinitely expanding array of food entries
    [{
      name: "Banana", // user defined 
      type: "Fruit", // user defined
      photo: TODO, // figure out how to upload and store
      created_at: Timestamp, // auto generated
      updated_at: Timestamp, // auto generated
    },
    {
      name: "Rajma Chawal",
      type: "Lunch",
      photo: TODO,
      created_at: Timestamp,
      updated_at: Timestamp,
    }]
  },
  user2: {
    username: "akwin",
    fullname: "Akanksha Sharma",
    email: "akankshasharma2415@gmail.com",
    password: "(*&%$fgj&(76AS!^Asdnmzxqwe*)&b,k%^",
    foodEntries: 
    [{
      name: "Pasta & Chicken",
      type: "Big meal",
      photo: TODO,
      created_at: Timestamp,
      updated_at: Timestamp,
    },
    {
      name: "Orange Juice",
      type: "Fluid",
      photo: TODO,
      created_at: Timestamp,
      updated_at: Timestamp,
    }]
  }
}
```
