# Project Summary
---
In this project, we'll provide practice JavaScript problems to help you better understand `promises`.

## Setup

* `Fork` this repository.
* `Clone` your fork.
* Create a `git` branch named `submission`.
* Open `./user.json` and fill in your details.
* Open `./practice.js` with your code editor.
* Open `./index.html` with your browser.

## Directions

Complete all <b>6</b> activities inside of `./practice.js` to make the spec runner pass it's tests.
In order to check the progress of the spec runner, open `./SpecRunner.html` with your browser.
Remember to commit and push your code often. Good luck!

## Resources

<details>

<summary> <code> Promises  </code> </summary>


MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

```js
// Create a new Promise
var myPromise = new Promise(function(resolve, reject) {
  resolve('This promise is now resolved');
});

// Access the value resolved from a promise
myPromise.then(function(promisedValue) {
  console.log(promisedValue);
})

// Reject a promise
var rejectedPromise = new Promise(function(resolve, reject) {
  reject('This promise has been rejected');
})

// catch the rejected value
rejectedPromise.catch(function(rejectedValue) {
  console.error(rejectedValue)
})
```

</details>

## Finished

Create a pull request from your `submission` branch to this project's `master` branch
