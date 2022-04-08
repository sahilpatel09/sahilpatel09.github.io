---
title: "Simple & Unique Login Page Design for Auto Repair Dashboard Website"
path: /simple-and-unique-login-page-design-for-auto-repair-dashboard-website
date: 2022-01-25
summary: "In this article, I have shown how to make a simple and full screen Login screen. I have used HTML, CSS and some bootstrap classes."
image: "https://solobytes.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1643642516979%2F8OMj7qQ4P.png%3Fw%3D800%26h%3D420%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
tags: ['Vue.js', 'Design' ]
---

In this article, I have shown how to make a simple and full screen Login screen. I have used HTML, CSS and some bootstrap classes. You can eliminate bootstrap and do it yourself. I have used it because it is just a prototype design.

# The Dark Design

![dark design](https://cdn.hashnode.com/res/hashnode/image/upload/v1643642647408/KCP6XmLDD.png?auto=compress,format&format=webp)

This is the login page design with black background. The original design is with darker grey color.





# Basic HTML Template


```html{codeTitle: "In src/main.js"}

<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />

<!--   Bootstrap CDN -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.min.css"
      integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Login Page Auto Repair</title>
  </head>
  <body>
  </body>
</html>


```
Here, this is a simple HTML template with Bootstrap CDN added with a link tag.

Create an external stylesheet and add it, or embed internally like me.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

# Complete CSS

```css

<style>
.whiteColor {
  color: white !important;
}
.link {
  color: #f1471d;
}
.link:hover {
  color: #f46c4a;
  font-weight: bolder;
  font-style: italic;
  transition: 300ms color;
}
.buttonColor {
  color: ghostwhite;
  background-color: #bb3615;
}
.form-body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  height:100vh;
  width:100vw;
  background-color: #1a1a1a;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="text"] {
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #345;
  outline: none;
  border: none;
  color: #d3d3d3;
}

.form-signin input[type="email"] {
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #345;
  outline: none;
  border: none;
  color: #d3d3d3;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #345;
  outline: none;
  border: none;
  color: #d3d3d3;
}

.form-signin input[type="checkbox"] {
  color: red;
}

.acc {
  font-size: 16px;
  color: #f1471d;
  float: right;
  padding-top: 3px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a9a9a9;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a9a9a9;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #a9a9a9;
}
</style>


```

# HTML 

```HTML
<div class="text-center form-body">
    <form class="form-signin">
      <img class="mb-2" src="https://github.com/sahilpatel09/Auto-Repair-Appointment-Dashboard/blob/main/docs/images/autologo.png?raw=true" alt="" height="170" />
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <div class="checkbox mb-3">
        <label class="whiteColor">
          <input type="checkbox" value="remember-me" class="text-white" />
          Remember me
        </label>
      </div>
      <button class="btn btn-lg buttonColor btn-block" type="submit">
        Sign in
      </button>
      <div class="checkbox mb-3">
        <label class="acc">
          <span class="text-white">Don't have an account.</span>
          <a href="/signup" class="link text-decoration-none">Sign Up.</a>
        </label>
      </div>
      <p class="mt-5 mb-3 text-muted">
        &copy; California Muscle Car Repair <br /> All Rights Reserved.
      </p>
    </form>
  </div>

```

That's it. This is all the HTML & CSS needed for the simple Login screen. Do not forget to add the Bootstrap CDN.

If you want to take a look at a live code, here is the working codepen demo.
[Full-screen Login Page Demo on Codepen](https://codepen.io/sahilpatel09/pen/bGYEVbK?editors=1100)

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="bGYEVbK" data-user="sahilpatel09" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sahilpatel09/pen/bGYEVbK">
  Login Page Design for Auto Website Appointments</a> by Sahil Patel (<a href="https://codepen.io/sahilpatel09">@sahilpatel09</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>




