/* ******************************************
 * This is the application server
 * ******************************************/

/* ******************************************
 * 1. Line 12 - imports the express package.
 * 2. Lines 14 - creates the "application". 
 * Notice the parentheses? This triggers the 
 * express constructor so that app is now an 
 * object with all the functionality of Express.
 * ******************************************/
const express = require("express")

const app = express()

/* ******************************************
 * Default GET route
 * ***************************************** */

/* ***********************************************************
 * 1. app.get() is an Express handler. Specifically, Express is 
 * watching for a "GET" request.
 * 2. "/" indicates the "route". A route is the path indicated 
 * by the URL. In this case, it is just the base URL, with nothing added.
 * 3. , the comma separates the route, from the function that is 
 * responsible for delivering a response to the request.
 * 4. (req, res) => { ... } is an anonymous function that takes the 
 * request and response objects as parameters.
 * 5. res.send("Welcome home!") is a method of the response object that sends 
 * a message back to the browser. It's not a web page, just a message string.
 * ********************************************************* */
app.get("/", (req, res) => {res.send("Welcome home!")})

/* ******************************************
 * Server host name and port
 * ***************************************** */
const HOST = 'localhost'
const PORT = 3000

/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`)
})