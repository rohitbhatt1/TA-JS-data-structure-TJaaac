```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

To add this image here use ![name](./hello.jpg)

2. Answer the following with reason:

- `user == newUser;` // true  Because the value of user has been stored in newUser.
- `user === newUser;` // true Because value and datatype is same.
- `user.name === newUser.name;` // true
- `user.name == newUser.name;` //true.
- `user.sibling == newUser.sibling;` // false
- `user.sibling === newUser.sibling;` // false
- `user.sibling == allBrothers;` // false
- `user.sibling === allBrothers;` // false
- `brothersCopy === allBrothers;` // false
- `brothersCopy == allBrothers;` // false
- `brothersCopy == user.sibling;`// true
- `brothersCopy === user.sibling;` // true.
- `brothersCopy[0] === user.sibling[0];` // true
- `brothersCopy[1] === user.sibling[1];` // true Because value of brothercopy and user.sibling is same.
- `user.sibling[1] === newUser.sibling[1];` // true because value of brothersCopy and user.sibling is same.
