<h1>Restaurant Page - TOP project</h1>
Progress - JavaScript 25%<br>

This Project's goal:

<pre>
  1. Start project with the similar workflow as the practice for webpack
  2. Plan out your webpage layout
  3. Identify the resources needed for the webpage, images to be used
  4. Create a .gitignore with 
       a. 'node_modules/'
       b. 'dist/'
       c. .gitignore
     on the list. 
</pre>

Acknowledgements

<h4>Background Image</h4>
https://www.pexels.com/photo/fixed-tables-and-chairs-2728186/ (author: Karl Solano)

2025-10-08 18:20 <br>
Problem Encountered recently: <br>
Tried to compile using "npx webpack" after recent system update. npx returned with <br>  
an error "Could not determine executable to run". Determined that all the packages <br>
are there and install by checking with package.json. Also check the entries on <br>
webpack.config.js, all the entries were as per: <br>

<pre>
  https://www.theodinproject.com/lessons/javascript-webpack
</pre>

After some trial and errors and a lot of internet searching I came to the conclusion <br>
that node_modules/ and dist/ directory can be removed. But reinstalling would mean<br>
that package.json and package-lock.json might have some 'stale' package information.<br>
So, the action taken was to remove node_modules/ and dist/ directory along with <br>
package.json and package-lock.json. After that I reinstalled all the required modules.<br>

<pre>
  npm install --save-dev webpack webpack-cli html-webpack-plugin style-loader css-loader
  npm install --save-dev html-loader webpack-dev-server
</pre>

After this I ran 'npx webpack' without any errors. But notice that I did not reinitialize<br>
npm after the purge. This was reflected in the package.json file as it only shows the<br>
"devDependencies" section.<br>

Then I decided to properly do an 'npm init' first before reinstalling all the packages.<br>
Doing this got to this error:

<pre>
 [jobs:hist - 0:19458]$ npx webpack
assets by status 7.47 KiB [cached] 2 assets
assets by path . 2.41 KiB
  asset main.js 1.57 KiB [compared for emit] (name: main)
  asset index.html 861 bytes [compared for emit]
./src/index.js 709 bytes [built] [code generated] [1 error]

ERROR in ./src/index.js 4:0
Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (4:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|  * index.js - restaurant webpage
|  **/
> import "./style.css";
| import elementCreator from "./element_creator.js";
| import loadHomePage from "./home.page.js";

webpack 5.102.1 compiled with 1 error in 433 ms
</pre>

This would mean that some part in the sections above "devDependencies" contains an error.<br>
It was between:

<pre>
  "type": "commonjs",
  "main": "webpack.config.js",
</pre>

Deleting

<pre>
  "type": "commonjs",
</pre>

solved the problem.
