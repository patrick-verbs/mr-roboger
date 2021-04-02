# <a name="MrRoboger"></a>"Mr. Roboger's Neighborhood"
#### Patrick Lee | _[See this project on GitHub Pages](https://patrick-verbs.github.io/mr-roboger)_ _(...when it's live)_

## __If you're an Epicodus student__ (or anyone else!) you're free to use this README as a template for your own work :)
<details><summary><strong>Contents</strong></summary>
<ul>
  <li><a href="#About">About</a></li>
  <ul>
    <li><a href="#Description">Description</a></li>
    <li><a href="#Install">Installation & Setup</a></li>
    <li><a href="#Technologies">Technologies Used</a></li>
    <li><a href="#Bugs">Known Bugs</a></li>
    <li><a href="#Specs">Test Specs</a></li>
  </ul>
  <li><a href="#License">License</a></li>
  <li><a href="#Contact">Contact</a></li>
</ul>
</details>

# <a name="About"></a>About
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > About_
?

## <a name="Description"></a>Description
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Description_
This project was initially created as an assignment. The goal was to demonstrate proficiency in Test-Driven Development and the use of arrays and loops in JavaScript.

## <a name="Install"></a>Installation & Setup
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Installation & Setup_
The goal of this project is to demonstrate Test-Driven Development. To see this in action:
- Navigate to this project's [GitHub Pages site](https://github.com/patrick-verbs/mr-roboger) or open _index.html_ in your own cloned or forked repository
- Open your browser's JavaScript console on the page
- In a separate browser tab/window, head to the [Test Specs](#Specs) section below
- Find a table (headed with the word "__Describe__" followed by a function name)
- Read about what the function _should_ do on the "__Test__" row
- Input the code from the "__Code__" row into your open JavaScript console
- Compare your returned result to that which is described on the "__Expected Output__" row

This project's repository and contained source is available under the MIT License. If you want to have a look under the hood or use any and all components, have at it! If you have a GitHub account, you can Clone or Fork this repository.

## <a name="Technologies"></a>Technologies Used
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Technologies Used_
- __HTML5__
- __JavaScript__ with __[jQuery v. 3.6.0](https://jquery.com/)__
- __CSS3__ with __[Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)__

## <a name="Bugs"></a>Known Bugs
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Known Bugs_

## <a name="Specs"></a>Test Specs
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Specs_
### Passing

| _Describe:_            | _listCountToInput(number)_ |
|------------------------|--------------|
| __Test:__              | It returns -1 if a number less than 0 is entered. |
| __Code 1:__            | listCountToInput(-0.5); |
| __Expected Output 1:__ | -1 |
| __Code 2:__            | listCountToInput(-1); |
| __Expected Output 2:__ | -1 |
| __Code 3:__            | listCountToInput(-100); |
| __Expected Output 3:__ | -1 |
|                        ||
|                        ||
|                        ||
| __Test:__              | It returns -1 if a non-number value (including a numeric string, e.g. "7") is entered. |
| __Code 1:__            | listCountToInput("hello"); |
| __Expected Output 1:__ | -1 |
| __Code 2:__            | listCountToInput("123abc"); |
| __Expected Output 2:__ | -1 |
| __Code 3:__            | listCountToInput("1"); |
| __Expected Output 3:__ | -1 |
|                        ||
|                        ||
|                        ||
| __Test:__              | It returns an array holding the input number. |
| __Code 1:__            | listCountToInput(0); |
| __Expected Output 1:__ | [0] |
| __Code 2:__            | listCountToInput(100); |
| __Expected Output 2:__ | [100] |
|                        ||
|                        ||
|                        ||

---
### Failing
| _Describe:_          | _listCountToInput(number)_ |
|----------------------|--------------|
| __Test:__            | It should return an array holding a sequential count to the input number. |
| __Code:__            | listCountToInput(0);<br>listCountToInput(100); |
| __Expected Output:__ | [0];<br>[100]; |
|                      |     |
|                      |     |
|                      |     |
| __Test:__            | It should ignore decimals, returning values based on the integer preceding any entered decimals (i.e., round down). |
| __Code:__            | listCountToInput(0.5);<br>listCountToInput(3.1415); |
| __Expected Output:__ | 0;<br>3; |

---
### Template
| _Describe:_          | _testTemplate()_ |
|----------------------|--------------|
| __Test:__            | It should do the thing! |
| __Code:__            | testTemplate("Do the thing!") |
| __Expected Output:__ | "So here's the thing..." |
|                      |     |
|                      |     |
|                      |     |
| __Test:__            | It should also do this other thing... |
| __Code:__            | testTemplate("Another!") |
| __Expected Output:__ | "And another thing!" |

# <a name="License"></a>License
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > License_
<details>
<summary><a href="https://opensource.org/licenses/MIT"><strong>MIT</strong></a></summary>
<pre>
MIT License

Copyright (c) 2021 Patrick Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</pre>
</details>

Copyright © 2021 Patrick Lee

# <a name="Contact"></a>Contact
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > Contact_
#### Patrick Lee | patricklee1138[at]live[dot]com