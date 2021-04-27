# JavaScript Intro

JavaScript is a programming language used in web development. Among the things you can do with JavaScript are write frontend web applications and build servers.

After learning in this lesson about what JavaScript is, you learn about the different data types in JavaScript. Data types are the format in which data is saved in memory. For instance, JavaScript has data type for strings, numbers, arrays, objects, and more. You need to know what the data types are and when and how to work with them.

Throughout the lesson, you will see examples that demonstrate some of the basics of JavaScript and learn about resources that can guide you through the learning process.

In this lesson, you learn:

- [Intro to Frontend JavaScript](#intro-to-frontend-javascript)
- [Variables and Data Types](#variables-and-data-types)
- [What is the DOM](#what-is-the-dom)
- [JavaScript Builtin Functions](#javascript-builtin-functions)

The topics below outline what you learn in the live session. After the live session, you can use this material as a resource for guided self-learning. This document will serve you as a roadmap for gaining repetition with the material that you learn during the live session.

## [Intro to Frontend JavaScript](#intro-to-frontend-javascript)

### What is JavaScript

- JavaScript is a popular language for web development; if you're building a frontend, you're doing it in JavaScript
- JavaScript adds functionality to your web page
- It is common to use JavaScript to dynamically modify HTML and CSS after the web page loads in order to change what the user sees
- Seeing [examples](https://www.w3schools.com/js/js_examples.asp) is a great way to learn what you can do with JavaScript:  
  -- [Number guessing game](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)  
  -- [Change HTML content](https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_inner_html)  
  -- [Change HTML attributes](https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb)  
  -- [Change CSS Style](https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_style)  
  -- [Hide](https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_hide) and [show](https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_show) elements  
  -- Note that the W3Schools examples use inline styling for CSS (i.e., `style=" . . . "`) and HTML attributes for JavaScript (e.g., `onClick`). While these are okay for showing what JS can do, please do not use this approach in your web applications. Instead, use class-based styling for CSS and pure JavaScript for functionality. It's important you learn how to see the W3Schools examples (and other examples online) and translate them into code that is reusable and easier to maintain.
- As you see from the examples, one common thing you do with JavaScript is access HTML elements; as you will see later, you can save the HTML elements as a variable in your JavaScript code; once saved as a variable, you can manipulate it by changing its attributes so that the browser changes what the user sees on the screen
- Use `console.log` to print information to the browser's console; learn about other [console commands](https://css-tricks.com/a-guide-to-console-commands/)
- You commonly will use the Console tab in the inspector while developing in order to understand how the data is flowing through your app
- [ECMAScript 6 (ES6)](https://262.ecma-international.org/6.0/) is the latest version of JavaScript  
  -- When researching answers online, consider the date of the post, as more recent answers are more likely to contain the most modern syntax  
  -- You are learning what people call "vanilla" JavaScript  
  -- JavaScript frameworks and libraries include React, Angular, Vue, and jQuery  
  -- Although you are not learning in this course frameworks and libraries, know that they exist because it can help you sift through information online when researching answers (in particular, lookout for answers in jQuery, denoted by $ throughout the code, which can look confusingly similar to "vanilla")  
  -- Do not mix and match jQuery with "vanilla" JavaScript

### Where to Put JavaScript Code

- When writing JavaScript for frontend, it's best to write your code in a .js file and import it into your HTML file
- In your project's root folder, you should have a 'js' folder, and inside it you put your JavaScript code inside files with a .js file extension
- Import the .js file into your html file using a `script` tag with the `src` attribute equal to the relative path of the .js file (e.g., `<script src="myScript.js"></script>`)
- The `script` tag belongs [at the bottom of your `body` tag](https://www.tutorialspoint.com/How-to-use-external-js-files-in-an-HTML-file)
- It is possible to put `script` tags in the `head` tag, but generally put them in the `body`
- If you import multiple scripts, [the order matters](https://stackoverflow.com/a/8996905) because `script` tags have access to the information in the `script` tags above it but not below it
- See the [discussion at the bottom of this link about external JavaScript](https://www.w3schools.com/js/js_whereto.asp)
- You [also can write JavaScript](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_JavaScript_within_a_webpage) code directly inside `script` tags at the bottom of your HTML `body` (or in the `head`), in which case you do not need to set the `src`
- You can also access JavaScript in HTML tag attributes, like the `onClick` attribute, but it is [bad practice to do so](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#inline_javascript_handlers)
- You will see [examples online](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#internal_javascript) where people write JavaScript like this in the `script` tags and HTML tags; however, it's not reusable and it can be more time consuming to maintain and inefficient for the browser
- You should know how to understand examples online where people write JavaScript like this in the `script` tags and HTML tags and know how to convert that code to an external JavaScript file
- The order in which you write your code matters because the browser reads your code [from top to bottom](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#javascript_running_order)  
  -- You may see errors saying that a variable or function does not exist, and that may be because the object you reference in your code does not yet exist in the browser's memory  
  -- You can write [comments in your code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#comments); comments are not executed by the browser; usually, they are used as notes to developers explaining the code

## [Variables and Data Types](#variables-and-data-types)

### Variables

- Variables are [containers for storing data](https://www.w3schools.com/js/js_variables.asp) in memory
- To declare a variable, use `let` for values that can change and `const` for a value that cannot be changed  
  -- Once you save something to a variable, you can changes its value if you declared it using `let`  
  -- You will see examples online using `var` instead of `let` and `const`; however, you should use `let` and `const` because they are the more modern approaches
- Following your declaration (i.e., `let` or `const`), you need to name your variable  
  -- Use camelCase  
  -- Give it a short, unique, descriptive name  
  -- Good names help your reader (i.e., future you and your coworkers) understand your code  
  -- Function names should start with verbs  
  -- Names for non-functional code should be nouns  
  -- It can help to put the data type in the name (e.g., `const usersArray = []`)
- Following the name, you put the value  
  -- Here is an example: `let userNameString = "ITCStaff"`
- Once something is saved in memory, you can interact with it in your JavaScript code
- You can save any data type to a variable
- One of the objects you can save to a variable is an HTML element
- Here is an example of [getting an HTML element by its `id` and saving it to a variable](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)  
  -- The example changes the text color, but that's just one example of what you can do  
  -- You can access any of the HTML element's attributes; it's as if the HTML element is in your JavaScript file!
- Common things to do with HTML elements inside JavaScript after saving it to a variable:  
  -- Add and remove items from the `classList` to change styles, including whether an element is hidden or displayed  
  -- Add an event listener to call a function only upon a certain event happening  
  -- Enable and disable buttons  
  -- Get the value of an input element  
  -- Create HTML element, add `id`, add class to class list, set the textContent, and append to an HTML element
- Once something is saved as a variable, the variable represents that thing in memory, which means the variable can do the things that the underlying data is capable of  
  -- For instance, a number stored in a variable: you can add, subtract, multiply, divide and more using the variable  
  -- Another is example is a string stored in a variable: you can use that variable to set the text of an HTML element

### Data Types

- JavaScript variables can hold different data types
- Different data types have different properties, meaning that you can do different things with different data types
- String: zero or more text characters stored inside quotes
  - [String definition](https://www.w3schools.com/js/js_strings.asp)
  - [String methods](https://www.w3schools.com/js/js_string_methods.asp)
- Number: integer or decimal
  - [Number definition](https://www.w3schools.com/js/js_numbers.asp)
  - [Number methods](https://www.w3schools.com/js/js_number_methods.asp)
- Boolean: true or false
  - [Boolean definition](https://www.w3schools.com/js/js_booleans.asp)
  - [Boolean methods](https://www.w3schools.com/jsref/jsref_obj_boolean.asp)
- Array: a list of items stored in a single variable
  - [Array definition](https://www.w3schools.com/js/js_arrays.asp)
  - [Array methods](https://www.w3schools.com/js/js_array_methods.asp)
  - [Array sort](https://www.w3schools.com/js/js_array_sort.asp)
  - [Array iterate](https://www.w3schools.com/js/js_array_iteration.asp)
  - Arrays are important to understand, so here's [more about arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - Many of the things you can do with arrays, you can also do with strings
- Object: collection of key:value pairs stored in a single variable
  - [Object definition](https://www.w3schools.com/js/js_objects.asp)
  - [Similar to JSON](https://www.w3schools.com/js/js_json.asp)
  - An object can be more than just key:value pairs; for more discussion about this, [please see MDN's explanation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#normal_objects_and_functions)
- To see examples of the different data types, visit [W3Schools](https://www.w3schools.com/js/js_datatypes.asp)
- JavaScript variables also can be:  
  -- `undefined`: variable defined but has no value  
  -- `null`: variable doesn't exist  
  -- empty values
- You can use `typeof` to find the type of a variable

## [What is the DOM](#what-is-the-dom)

The Document Object Model is commonly known as **The DOM**. Using the DOM, you can interact with your HTML document using JavaScript. With JavaScript, you can access, modify, and otherwise interact with your HTML document and the elements inside it.

First, you learn about what the DOM is. Next, you will look under the hood to learn about the properties and methods available for the HTML document itself and for the elements within it. Using these methods and properties, you can add functionality to your web pages. For instance, you can change the text, add and remove styles, capture user input, and so much more.

- The [DOM](https://www.w3schools.com/js/js_htmldom.asp) is an object-oriented representation of an HTML document
- When a webpage loads, the browser converts the HTML into a DOM
- Every element in an HTML document is part of the document object model for that document. For instance:  
   -- The `document` itself  
   -- The `head`  
   -- The `body`  
   -- The elements inside the body, like `div`, `h1`, `p`
- You saw a [visual representation of the DOM](https://css-tricks.com/dom/) when you looked at the Elements tab in the inspector
- You can modify the DOM [using a scripting language such as JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#dom_and_javascript)
- You can access the DOM in your JavaScript code by creating a `script` inside your HTML document  
  -- It can be a `script` that links to an external JavaScript file or any other type of `script`  
  -- You can immediately begin accessing the DOM and modifying HTML elements  
  -- As you learned in the variables lesson, once you access an HTML element, you can **save it as a variable** and **access its attributes**
- The DOM has various [built-in data types](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#important_data_types)  
  -- Pay special attention to the built-in [data type named `document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)  
  -- The `document` is an object that represents the HTML document as loaded in the browser  
  -- It serves as an entry point for JavaScript into the web page's content  
  -- It provides [global functionality](https://developer.mozilla.org/en-US/docs/Web/API/Document#properties), like accessing the page's URL or adding new elements, through its built-in methods
- Modifying the DOM is modifying the HTML document
- The DOM organizes into objects the properties, methods, and events available for modifying and creating HTML elements
- By defining the HTML elements as objects, JavaScript can do things like:  
  -- Get an existing HTML element and read its attributes  
  -- Change an existing HTML element's attributes  
  -- Add a new HTML element and set its attributes  
  -- Remove an existing HTML element or any of its attributes  
  -- Create and execute new HTML events  
  -- An example using document's built-in method for getting an HTML element by its `id` attribute: `const submitButton = document.getElementById("submitButton")`

## [JavaScript Builtin Functions](#javascript-builtin-functions)

### DOM Methods

- A document object has many [properties and methods](https://www.w3schools.com/jsref/dom_obj_document.asp)
- Commonly used **methods** for the **document** include:  
  -- [`getElementById`](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)  
  -- [`createElement`](https://www.w3schools.com/jsref/met_document_createelement.asp)  
  -- [`getElementsByClassName`](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)  
  -- [`addEventListener`](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
- Element objects also have [properties and methods](https://www.w3schools.com/jsref/dom_obj_all.asp)
- Commonly used **methods** for **elements** include:  
  -- [`appendChild`](https://www.w3schools.com/jsref/met_node_appendchild.asp)  
  -- [`removeChild`](w3schools.com/jsref/met_node_removechild.asp)  
  -- [`addEventListener`](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)  
  -- [`getElementsByTagName`](https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp)
- Commonly used **properties** for **elements** include:  
  -- [`id`](https://www.w3schools.com/jsref/prop_html_id.asp)  
  -- [`classList`](https://www.w3schools.com/jsref/prop_element_classlist.asp)  
  -- [`textContent`](https://www.w3schools.com/jsref/prop_node_textcontent.asp)  
  -- You will see online the use of `innerText` and `innerHTML` instead of `textContent` and you should know [the differences](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

### DOM Events

- The [`addEventListener` method](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) lets you turn a DOM element into an element that listens for an event to happen
- An event can be when a user clicks, types into an input, moves their mouse over an element, and much more
- To turn a DOM object into a listener, access it `getElementById` or create it using `createElement` and then call the `addEventListener` method; [don't use HTML attributes to listen for events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#what_mechanism_should_i_use)
- When calling the `addEventListener` method, you need to pass to it two arguments:  
   -- The [name of the type of event](https://www.w3schools.com/jsref/dom_obj_event.asp) to listen for  
   -- A function that will be triggered when the event happens
- When passing the function in as an argument, it's good practice to pass in the name of the function instead of the entire function definition  
  -- Example: `submitButton.addEventListener('click', sendFormInfo)`  
  -- Assume that `sendFormInfo` is the name of a function  
  -- Notice that you don't include `()` on the end of `sendFormInfo` because you don't want to call the function now; only pass a reference to it  
  -- This makes your code more reusable and easier to read and maintain than defining the function inside the `addEventListener` method
- Inside the listener's function, you can access the [event object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
- The event object makes available to you the details of the event, such as the type of event, the HTML element it happened on, all the attributes of that HTML elements, and more
- You will commonly use the event object to get and modify the attributes of an HTML element, like its text content, styles, and more
- The event object is automatically passed to event handlers and is the first argument in your function definition
- In examples online, you will see the event object represented in code usually as `event`, `e`, or `evt`
- For instance:

```javascript
const getClickEvent = (e) => {
  console.log(e.target.value);
  console.log(e.target.classList);
};

submitButton.addEventListener("click", getClickEvent);
```
