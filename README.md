# Ionic2 jwt example
This repository contains example of a client side implementation of JWT authentication using Ionic2.
The server side code related to this project can be found [here](https://github.com/letsila/slim3-jwt-example)

## Login page
<p>The login page contains just a login and password inputs.</p>
<img src="https://raw.githubusercontent.com/letsila/ionic2-jwt-example/master/screenshots/login.png" width="200" style="border: 1px solid lightgrey"/>
<p>Once the user have provided valid credentials, a token will be issued by the server and saved
under localstorage on our ionic app. Then the user is redirected to the home page.</p>

## Home page
<p>From the home page, the user can request restricted data (which is going to send a GET request with authorization header to the server) or logout.</p>
<img src="https://raw.githubusercontent.com/letsila/ionic2-jwt-example/master/screenshots/home-page.png" width="200"/>
<img src="https://raw.githubusercontent.com/letsila/ionic2-jwt-example/master/screenshots/home-page-buttons.png" width="200"/>





