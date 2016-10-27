# Ionic2 jwt example
This repository contains example of a client side implementation of JWT authentication using Ionic2.
The server side code related to this project can be found [here](https://github.com/letsila/slim3-jwt-example)

## Login page
The login page is as simple as every login page, with a login and passwords input.
![login page screenshot](https://raw.githubusercontent.com/letsila/ionic2-jwt-example/master/screenshots/login.png | width=100)

Once the user have provided valid credentials, a token will be issued by the server and saved
under localstorage on our ionic app. Then the user is redirected to the home page.

## Home page
From the home page, the user can request restricted data (which is going to send a GET request with authorization header to the server) or logout.

1            |  2
:-------------------------:|:-------------------------:

![home page screenshot](https://raw.githubusercontent.com/letsila/ionic2-jwt-example/master/screenshots/home-page.png | width=100)  |  
![home page controls screenshot](https://raw.githubusercontent.com/letsila/ionic2-jwt-example/master/screenshots/home-page-buttons.png | width=100)





