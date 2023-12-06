export const Data = [
  {
      title: `Design a simple HTML form.`,
      code: `<!DOCTYPE html>

      <html>
      
      <head>
      
          <title>Simple Form</title>
      
      </head>
      
      <body>
      
          <form action="/submit" method="post">
      
              <label for="username">Username:</label>
      
              <input type="text" id="username" name="username" required>
      
              <br>
              <label for="password">Password:</label>
      
              <input type="password" id="password" name="password" required>
      
              <br>
      
              <input type="submit" value="Submit">
      
          </form>
      
      </body>
      
      </html>`,
  },
  {
      title: `Develop a Student registration form using HTML Form elements.`,
      code: `<!DOCTYPE html>
      <html>
      
      <head>
          <title>Student Registration Form</title>
      </head>
      
      <body>
      
          <form action="/submit" method="post">
              <label for="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required>
      
              <br>
      
              <label for="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required>
      
              <br>
      
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
      
              <br>
      
              <label for="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" required>
      
              <br>
      
              <label for="gender">Gender:</label>
              <select id="gender" name="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </select>
      
              <br>
      
              <input type="submit" value="Submit">
          </form>
      
      </body>
      
      </html>`,
  },
  {
      title: `Demonstrate any six HTML form elements with suitable example.`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>HTML Form Elements</title>
      </head>
      
      <body>
      
          <form action="/submit" method="post">
              <label for="firstName">1. Text Input:</label>
              <input type="text" id="firstName" name="firstName" required>
      
              <br>
      
              <label for="email">2. Email Input:</label>
              <input type="email" id="email" name="email" required>
      
              <br>
      
              <label for="password">3. Password Input:</label>
              <input type="password" id="password" name="password" required>
      
              <br>
      
              <label for="birthdate">4. Date Input:</label>
              <input type="date" id="birthdate" name="birthdate" required>
      
              <br>
      
              <label for="country">6. Dropdown (Select) Menu:</label>
              <select id="country" name="country" required>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
              </select>
      
              <br>
      
              <label>7. Checkbox:</label>
              <input type="checkbox" id="subscribe" name="subscribe" value="yes">
              <label for="subscribe">Subscribe to Newsletter</label>
      
              <br>
      
              <input type="submit" value="Submit">
          </form>
      
      </body>
      
      </html>`,
  },
  {
      title: `Write table and list elements in HTML5.`,
      code: `TABLE:

      <!DOCTYPE html>
      <html ">
      <head>
          <title>HTML5 Table Example</title>
      </head>
      <body>
      
          <h2>Sample Table</h2>
      
          <table border=1>
              <thead>
                  <tr>
                      <th>Header 1</th>
                      <th>Header 2</th>
                      <th>Header 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Row 1, Cell 1</td>
                      <td>Row 1, Cell 2</td>
                      <td>Row 1, Cell 3</td>
                  </tr>
                  <tr>
                      <td>Row 2, Cell 1</td>
                      <td>Row 2, Cell 2</td>
                      <td>Row 2, Cell 3</td>
                  </tr>
                  <tr>
                      <td>Row 3, Cell 1</td>
                      <td>Row 3, Cell 2</td>
                      <td>Row 3, Cell 3</td>
                  </tr>
              </tbody>
          </table>
      
      </body>
      </html>
      
      LIST 
      
      <!DOCTYPE html>
      <html >
      <head>
          <title>HTML5 List Examples</title>
      </head>
      <body>
      
          <h2>Unordered List (ul)</h2>
          <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
          </ul>
      
          <h2>Ordered List (ol)</h2>
          <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
          </ol>
      
          <h2>Definition List </h2>
          <dl>
              <dt>Term 1</dt>
              <dd>Definition 1</dd>
              
              <dt>Term 2</dt>
              <dd>Definition 2</dd>
              
              <dt>Term 3</dt>
              <dd>Definition 3</dd>
          </dl>
      
      </body>
      </html>`,
  },
  {
      title: `Write inline, internal and external CSS with suitable examples`,
      code: `INLINE:

      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Inline CSS Example</title>
      </head>
      
      <body>
      
          <h1 style="color: blue; text-align: center;">This is a Heading with Inline CSS</h1>
          <p style="font-size: 18px; color: green;">This is a paragraph with inline styling.</p>
      
      </body>
      
      </html>
      
      INTERNAL:
      
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Internal CSS Example</title>
      </head>
      
      <body>
      
          <h1>This is a Heading with Internal CSS</h1>
          <p>This is a paragraph with internal styling.</p>
      
          <style>
              h1 {
                  color: blue;
                  text-align: center;
              }
      
              p {
                  font-size: 18px;
                  color: green;
              }
          </style>
      
      </body>
      
      </html>
      
      
      EXTERNAL :
      
      <!DOCTYPE html>
      <html>
      
      <head>
          <title>External CSS Example</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      
      <body>
      
          <h1>This is a Heading with External CSS</h1>
          <p>This is a paragraph with external styling.</p>
      
      </body>
      
      </html>
      
      
      
      /* styles.css */
      
      h1 {
      color: blue;
      text-align: center;
      }
      
      p {
      font-size: 18px;
      color: green;
      }`,
  },
  {
      title: `Write different types of CSS selectors with examples.`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>CSS Selectors Example</title>
      
          <style>
              /* Universal Selector */
              * {
                  margin: 0;
                  padding: 0;
              }
      
              /* Type Selector (Element Selector) */
              p {
                  color: blue;
              }
      
              /* Class Selector */
              .highlight {
                  background-color: yellow;
              }
      
              /* ID Selector */
              #header {
                  font-size: 24px;
              }
      
              /* Descendant Selector */
              ul li {
                  list-style-type: square;
              }
      
              /* Child Selector */
              nav>.nav-item {
                  font-weight: bold;
              }
      
              /* Attribute Selector */
              a[href^="https://"] {
                  color: green;
              }
      
              /* Pseudo-class Selector */
              p:first-child {
                  font-weight: bold;
              }
          </style>
      
      </head>
      
      <body>
      
          <div id="header">Header</div>
      
          <ul>
              <li class="nav-item">Item 1</li>
              <li class="nav-item">Item 2</li>
              <li class="nav-item">Item 3</li>
          </ul>
      
          <p>This is a paragraph with a <span class="highlight">highlighted</span> word.</p>
      
          <a href="https://example.com">Visit Example</a>
      
      </body>
      
      </html>`,
  },
  {
      title: `Demonstrate CSS boarder and background properties with examples`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
      
          <title>CSS Border and Background Example</title>
      
          <style>
              /* Border and Background for Header */
              header {
                  background-color: #333;
                  color: white;
                  text-align: center;
                  padding: 10px;
                  border-bottom: 2px solid #fff;
              }
      
              /* Border and Background for Main Content */
              main {
                  padding: 20px;
                  border: 1px solid #ddd;
                  background-color: #f8f8f8;
              }
      
              /* Border and Background for Button */
              button {
                  padding: 10px;
                  border: 2px solid #4CAF50;
                  background-color: #4CAF50;
                  color: white;
                  cursor: pointer;
                  border-radius: 5px;
              }
          </style>
      </head>
      
      <body>
      
          <header>
              <h1>CSS Border and Background Example</h1>
          </header>
      
          <main>
              <p>This is the main content with a background and border.</p>
              <button>Click me</button>
          </main>
      
      </body>
      
      </html>`,
  },
  {
      title: `Demonstrate background and text properties of CSS.`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
      
          <title>CSS Background and Text Properties Example</title>
      
          <style>
              /* Background and Text for Body */
              body {
                  background-color: #f4f4f4;
                  color: #333;
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  line-height: 1.6;
              }
      
              /* Background and Text for Header */
              header {
                  background-color: #333;
                  color: white;
                  text-align: center;
                  padding: 20px;
              }
      
              /* Background and Text for Main Content */
              main {
                  padding: 20px;
                  background-color: #fff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              /* Background and Text for Paragraph */
              p {
                  background-color: #e0f7fa;
                  padding: 10px;
                  border: 1px solid #4CAF50;
              }
          </style>
      </head>
      
      <body>
      
          <header>
              <h1>CSS Background and Text Properties Example</h1>
          </header>
      
          <main>
              <p>This is the main content with a white background, box shadow, and green-bordered paragraphs.</p>
              <p>Another paragraph with a different background color and border.</p>
          </main>
      
      </body>
      
      </html>`,
  },
  {
      title: `Write a JavaScript to find the sum of n numbers.`,
      code: `<!DOCTYPE html>
      <html>
      
      <head>
          <title>Sum of n Numbers</title>
          <script>
              function calculateSum() {
                  // Prompt the user for the value of n
                  var n = parseInt(prompt("Enter the number of values (n):"));
      
                  // Validate if n is a positive integer
                  if (isNaN(n) || n <= 0) {
                      alert("Please enter a valid positive integer for n.");
                      return;
                  }
      
                  var sum = 0;
      
                  // Prompt the user to enter n numbers and calculate the sum
                  for (var i = 1; i <= n; i++) {
                      var number = parseFloat(prompt("Enter number " + i + ":"));
      
                      // Validate if the entered value is a number
                      if (isNaN(number)) {
                          alert("Please enter valid numbers.");
                          return;
                      }
      
                      sum += number;
                  }
      
                  // Display the sum
                  alert("The sum of the entered numbers is: " + sum);
              }
          </script>
      </head>
      
      <body>
      
          <h2>Sum of n Numbers</h2>
      
          <button onclick="calculateSum()">Calculate Sum</button>
      
      </body>
      
      </html>`,
  },
  {
      title: `Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.`,
      code: `<!DOCTYPE html>
      <html>
      
      <head>
          <title>Count Occurrences of Letter</title>
          <script>
              function countOccurrences(str, letter) {
                  // Convert both the string and letter to lowercase for case-insensitive comparison
                  str = str.toLowerCase();
                  letter = letter.toLowerCase();
      
                  var count = 0;
      
                  // Loop through each character in the string
                  for (var i = 0; i < str.length; i++) {
                      // Check if the current character is equal to the specified letter
                      if (str[i] === letter) {
                          count++;
                      }
                  }
      
                  // Display the result
                  alert("The letter '" + letter + "' occurs " + count + " times in the string.");
              }
          </script>
      </head>
      
      <body>
      
          <h2>Count Occurrences of Letter</h2>
      
          <!-- Example usage: -->
          <script>
              // Call the function with a string and a letter
              countOccurrences("Hello, Woorld!", "o");
          </script>
      
      </body>
      
      </html>`,
  },
  {
      title: `Write a recursive function with suitable example`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Recursive Function Example</title>
          <script>
              function factorial(n) {
                  // Base case: factorial of 0 or 1 is 1
                  if (n === 0 || n === 1) {
                      return 1;
                  } else {
                      // Recursive case: n! = n * (n-1)!
                      return n * factorial(n - 1);
                  }
              }
      
              // Example usage:
              document.addEventListener("DOMContentLoaded", function () {
                  const number = 4;
                  const result = factorial(number);
                  alert(\`The factorial of \${number} is: \${result}\`);
              });
          </script>
      </head>
      
      <body>
      
          <h2>Recursive Function Example</h2>
      
      </body>
      
      </html>`,
  },
  {
      title: `Write a java script program to display squares and cubes of 1 to 10 numbers in table format`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Squares and Cubes Table</title>
          <style>
              table {
                  border-collapse: collapse;
                  width: 50%;
                  margin: 20px auto;
              }
      
              th,
              td {
                  border: 1px solid #ddd;
                  padding: 10px;
                  text-align: center;
              }
      
              th {
                  background-color: #f2f2f2;
              }
          </style>
      </head>
      
      <body>
      
          <h2>Squares and Cubes Table</h2>
      
          <table>
              <thead>
                  <tr>
                      <th>Number</th>
                      <th>Square</th>
                      <th>Cube</th>
                  </tr>
              </thead>
              <tbody id="table-body"></tbody>
          </table>
      
          <script>
              document.addEventListener("DOMContentLoaded", function () {
                  // Get the table body element
                  const tableBody = document.getElementById("table-body");
      
                  // Generate rows for numbers 1 to 10 and their squares and cubes
                  for (let i = 1; i <= 10; i++) {
                      const square = i ** 2;
                      const cube = i ** 3;
      
                      // Create a new row
                      const row = document.createElement("tr");
      
                      // Add cells for number, square, and cube
                      row.innerHTML = \`
                          <td>\${i}</td>
                          <td>\${square}</td>
                          <td>\${cube}</td>
                      \`;
      
                      // Append the row to the table body
                      tableBody.appendChild(row);
                  }
              });
          </script>
      
      </body>
      
      </html>`,
  },
  {
      title: `Write a java script function to display the factorial of a given number.`,
      code: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <title>Factorial Calculator</title>
          <style>
              body {
                  text-align: center;
                  margin: 50px;
              }
          </style>
      </head>
      <body>
      
          <h2>Factorial Calculator</h2>
      
          <label for="number">Enter a number:</label>
          <input type="number" id="number">
          <button onclick="calculateFactorial()">Calculate Factorial</button>
      
          <p id="result"></p>
      
          <script>
              function calculateFactorial() {
                  // Get the user input
                  const userInput = document.getElementById("number").value;
      
                  // Convert the input to a number
                  const number = parseInt(userInput);
      
                  // Check if the input is a valid positive integer
                  if (isNaN(number) || number < 0) {
                      alert("Please enter a valid positive integer.");
                      return;
                  }
      
                  // Call the factorial function
                  const result = factorial(number);
      
                  // Display the result
                  document.getElementById("result").innerText = \`The factorial of \${number} is: \${result}\`;
              }
      
              function factorial(n) {
                  // Base case: factorial of 0 or 1 is 1
                  if (n === 0 || n === 1) {
                      return 1;
                  } else {
                      // Recursive case: n! = n * (n-1)!
                      return n * factorial(n - 1);
                  }
              }
          </script>
      
      </body>
      </html>
      `,
  },
  {
      title: `Demonstrate different types of mouse events with example.`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Mouse Events Example</title>
          <style>
              div {
                  width: 200px;
                  height: 200px;
                  background-color: lightblue;
                  margin: 20px;
                  padding: 10px;
                  text-align: center;
              }
          </style>
      </head>
      
      <body>
      
          <h2>Mouse Events Example</h2>
      
          <div id="mouseEventDemo" onmouseover="handleMouseOver()" onmouseout="handleMouseOut()" onclick="handleClick()">Hover
              over me</div>
      
          <script>
              function handleMouseOver() {
                  document.getElementById("mouseEventDemo").innerHTML = "Mouse Over!";
                  document.getElementById("mouseEventDemo").style.backgroundColor = "lightgreen";
              }
      
              function handleMouseOut() {
                  document.getElementById("mouseEventDemo").innerHTML = "Hover over me";
                  document.getElementById("mouseEventDemo").style.backgroundColor = "lightblue";
              }
      
              function handleClick() {
                  alert("Mouse Clicked!");
              }
          </script>
      
      </body>
      
      </html>`,
  },
  {
      title: `Demonstrate event bubbling with example`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
      
          <title>Event Bubbling Example</title>
          <style>
              div {
                  padding: 20px;
                  margin: 10px;
                  border: 1px solid #333;
              }
          </style>
      </head>
      
      <body>
      
          <h2>Event Bubbling Example</h2>
      
          <div id="outer" onclick="handleEvent('outer')">
              Outer
              <div id="middle" onclick="handleEvent('middle')">
                  Middle
                  <div id="inner" onclick="handleEvent('inner')">
                      Inner
                  </div>
              </div>
          </div>
      
          <script>
              function handleEvent(element) {
                  alert(\`Event bubbled from \${element} element.\`);
              }
          </script>
      
      </body>
      
      </html>`,
  },
  {
      title: `Write a function to sort array elements`,
      code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Array Sorting Example</title>
      </head>
      
      <body>
      
          <h2>Array Sorting Example</h2>
          <p>unsortedArray: [5, 2, 8, 1, 7]</p>
          <p id="sortedArrayTag"></p>
          <script>
              function sortArray(arr) {
                  // Use the Array.sort() method to sort the array
                  arr.sort(function (a, b) {
                      return a - b; // Compare function for ascending order
                      // For descending order, use: return b - a;
                  });
      
                  return arr; // Return the sorted array
              }
      
              // Example usage:
              const unsortedArray = [5, 2, 8, 1, 7];
              const sortedArray = sortArray(unsortedArray);
      
              console.log("Original Array:", unsortedArray);
              console.log("Sorted Array:", sortedArray);
              document.getElementById('sortedArrayTag').innerHTML = "Sorted array: [" + sortedArray + "]"
          </script>
      
      </body>
      
      </html>`,
  },
];
