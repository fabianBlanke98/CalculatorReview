# CalculatorReview
I´m currently working on a calculator app for a school project, however im stuck on the JavasScript code, and need some help.


Create a program that runs in a browser of your choice written in Javascript 
and HTML5 possibly supplemented with CSS3. The program has the following 
Functionalities:

1. The program "Javascript Calculator" asks for random two 
enter integers (between -100 and +100) in a <input> tag. 

2. In a third <input> tag you enter a number that you think is the result. 

3. The user can choose from 4 different operations: addition, subtraction, divide 
and multiply. For each operation there is a button. The user chooses a 
operation by pressing the appropriate button.

4. After pressing one of the buttons, the program calculates the result of 
the chosen operation and displays the outcome on the screen.

5. The program will also compare the result you calculated with the 
the computer calculated result. There are two possibilities:

a. The outcome you have devised yourself is good. A message will appear: The by you 
calculated answer is good. The color of the text is green.

b. The outcome you have devised yourself is wrong. A message will appear: The door 
your calculated answer is wrong. The color of the text is red.

6.  As you know, dividing by zero is not allowed. Input from zero in the input provides a 
error message: You divide by zero, this is not possible! This text is in red 
displayed.

this is the current Code i have, i just have no idea on how to make this Javascript code work, i cant seem to find the awnser i need anywhere. please help





<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculator</title>
    
  </head>
  <body>
  <pre>
    <h1>Javascript Calculator</h1>
    Enter a number:         <input type="number" name="" id="number_1">
    Enter a second number:  <input type="number" name="" id="number_2">
    Self calculated number:   <input type="number" name="" id="number_3">

    Get Result: <input type="number" name="" id="number_3">
  </pre> 


        <div class="calculate">
            <button type="button" class="button">addup</button>
            <button type="button" class="button">Substraction</button>
            <button type="button" class="button">Divide</button>
            <button type="button" class="button">Multiply</button>
        </div>


        <script src="./app.js"></script>
  </body>
</html>
