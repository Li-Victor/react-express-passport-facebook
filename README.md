# react-express-passport-facebook

extending [**Passport-Facebook example**](https://github.com/passport/express-4.x-facebook-example). Using React as the front end, instead of the ejs view engine.

This project uses 

* Create-React-App
* React Router v4
* Redux
* Redux Thunk
* Axios
* Express
* Express session
* Passport Facebook

## Installation
First [**yarn**](https://yarnpkg.com/en/) must be installed globally. <br/>
Make sure to make a `.env` file, following the `env.sample`, with your own Facebook Client ID and Facebook Client Secret. <br/>
To set up this project, in the root directory, run `yarn run build` command in the terminal.

In server.js file, make sure to uncomment and comment the code for whichever mode. If in production, you need `res.direct('/')`. If in development, you need `res.redirect('http://localhost:3000');`

**Server.js**
```javascript
// run in production
res.redirect('/');

// run in development
// res.redirect('http://localhost:3000');
```

To run in development mode with live-reloading for express and create-react-app, run `yarn run dev`. <br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run in production mode, run `yarn run prod`. <br/>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
