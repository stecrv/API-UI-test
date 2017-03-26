#REST API TEST

## how to install and run

1. copy the content of test in one of your folder
2. run a local web server, e.g.: python -m SimpleHTTPServer
3. Go to your browser and run http://localhost:8000

## Code explanation

The object `rest` (inside `/src/rest.js`) can manage multiple endpoints (just one to start) and multiple output format

The file `/src/app.js` include:

-  A simple application that creates and initialise Rest object 
-  Browser events on the page - Simple HTML layout

## Next steps

1. add a proper highlighter (that was a request for this test, but I try to use a simple solution)
1. include the code inside app.js into a single object (useful to integrate the application inside other pages)
1. minify and aggregate all the js code (using grunt, web pack? any)
1. add unit tests with TDD (mocha.js)