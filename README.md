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
This project was initially created as an assignment. The goal was to demonstrate test-driven development practices with a themed integer counter that incorporates arrays and loop handling. Part of the theme was returning string responses for one "Mr. Roboger," so I wanted to push the theme a little further with a [pixel-art robot character](https://opengameart.org/content/green-robot) animated by Filidor Wiese's awesome [Spriteling](https://github.com/filidorwiese/spriteling) library.

## <a name="Description"></a>Description
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Description_
"Mr. Roboger's Neighborhood" was required to take an input number from a user, then count upward from zero to that number. Along the way, _Mr. Roboger_ (or Mr. Roboger_s_, depending on interpretation of an apostrophe in the assignment!) is supposed to interject by replacing all numbers containing the digit 1 (e.g. 1, 10, 11, 100) with the text "Beep!" &mdash; and all numbers containing a 2 with "Boop!", and all those with a 3 with "Won't you be my neighbor?"

I needed more practice separating logic, so I had all the above rules set as default values and generalized the function so users could change which digits are searched for (instead of just 1, 2, and 3) as well as change Mr. Roboger's responses :)

And then I decided I wanted to add animated sprites, and went down a rabbit-hole the weekend after the assignment was submitted...<br>
<img src="img/128px-Green_Robot_by_GrafxKid.png" alt="A spritesheet depicting a green robot in various positions" width="25%">

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
  - __[Spriteling](https://github.com/filidorwiese/spriteling)__ by Filidor Wiese
- __CSS3__ with __[Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)__
- __"[Green Robot](https://opengameart.org/content/green-robot)"__ and __"[City Mega Pack](https://opengameart.org/content/city-mega-pack)"__ sprite sheets by __[GrafxKid](https://opengameart.org/users/grafxkid)__, edited in Adobe Photoshop
- __[Mario Kart DS font](https://www.dafont.com/mario-kart-ds.font)__ recreated by __[David at dafont.com](https://www.dafont.com/profile.php?user=736583)__

## <a name="Bugs"></a>Known Bugs
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Known Bugs_
- _replaceNumbersIfDigit(array, targetDigit, newValue)_ will successfully locate digits 1-9 in a number but it will not find 0 if that is passed (numbers have infinite zeroes and I haven't written special casing)

## <a name="Specs"></a>Test Specs
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > [About](#About) > Specs_
### Passing

| _Describe:_            | _countToThis(number)_ |
|------------------------|--------------|
| __Test:__              | It returns -1 if a number less than 0 is entered. |
| __Code 1:__            | countToThis(-0.5); |
| __Expected Output 1:__ | -1 |
| __Code 2:__            | countToThis(-1); |
| __Expected Output 2:__ | -1 |
| __Code 3:__            | countToThis(-100); |
| __Expected Output 3:__ | -1 |
|                        ||
|                        ||
|                        ||
| __Test:__              | It returns -1 if a non-number value (including a numeric string, e.g. "7") is entered. |
| __Code 1:__            | countToThis("hello"); |
| __Expected Output 1:__ | -1 |
| __Code 2:__            | countToThis("123abc"); |
| __Expected Output 2:__ | -1 |
| __Code 3:__            | countToThis("1"); |
| __Expected Output 3:__ | -1 |
|                        ||
|                        ||
|                        ||
| __Test:__              | It returns an array holding the input number. |
| __Code 1:__            | countToThis(0); |
| __Expected Output 1:__ | [0] |
| __Code 2:__            | countToThis(100); |
| __Expected Output 2:__ | [100] |
|                        ||
|                        ||
|                        ||
| __Test:__              | It ignores decimals, rounding values down to the integer preceding any entered decimal. |
| __Code 1:__            | countToThis(0.5); |
| __Expected Output 1:__ | 0 |
| __Code 2:__            | countToThis(3.1415); |
| __Expected Output 2:__ | 3 |
|                        ||
|                        ||
|                        ||
| __Test:__              | It returns an array holding a sequential count to the input number. |
| __Code 1:__            | countToThis(0); |
| __Expected Output 1:__ | [0] |
| __Code 2:__            | countToThis(10); |
| __Expected Output 2:__ | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] |
|                        ||
|                        ||
|                        ||

| _Describe:_            | _replaceNumbersIfDigit(array)_ |
|------------------------|--------------|
| __Test:__              | It returns an input array. |
| __Code 1:__            | replaceNumbersIfDigit([1, 2, 3]); |
| __Expected Output 1:__ | [1, 2, 3] |
|                        ||
|                        ||
|                        ||
| __Test:__              | It returns -1 if passed no argument, or an argument that is not an array. |
| __Code 1:__            | replaceNumbersIfDigit(); |
| __Expected Output 1:__ | -1 |
| __Code 2:__            | replaceNumbersIfDigit(10); |
| __Expected Output 2:__ | -1 |
| __Code 3:__            | replaceNumbersIfDigit("abc"); |
| __Expected Output 3:__ | -1 |
|                        ||
|                        ||
|                        ||
| __Test:__              | It changes all occurences of numbers containing the _digit_ 1 to the string "Beep!". |
| __Code 1:__            | replaceNumbersIfDigit([98, 99, 100, 101]); |
| __Expected Output 1:__ | [98, 99, "Beep!", "Beep!"] |
| __Code 2:__            | replaceNumbersIfDigit([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]); |
| __Expected Output 2:__ | ["Beep!", 4, 9, "Beep!", 25, 36, 49, 64, "Beep!", "Beep!"] |
|                        ||
|                        ||
|                        ||

| _Describe:_            | _countToThis(number)_ |
|------------------------|--------------|
| __Test:__              | It passes an array to _replaceNumbersIfDigit()_ and returns that function's result. |
| __Code 1:__            | countToThis(11); |
| __Expected Output 1:__ | [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"] |
|                        ||
|                        ||
|                        ||

| _Describe:_            | _replaceNumbersIfDigit(array, targetDigit)_ |
|------------------------|--------------|
| __Test:__              | It takes an additional parameter so it can target digits other than 1. |
| __Code 1:__            | replaceNumbersIfDigit([0, 1, 2, 3], 3); |
| __Expected Output 1:__ | [0, 1, 2, "Beep!"] |
| __Code 2:__            | squaresArray = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];<br>replaceNumbersIfDigit(squaresArray, 6); |
| __Expected Output 2:__ | [1, 4, 9, "Beep!", 25, "Beep!", 49, "Beep!", 81, 100] |
|                        ||
|                        ||
|                        ||

| _Describe:_            | _replaceNumbersIfDigit(array, targetDigit, newValue)_ |
|------------------------|--------------|
| __Test:__              | It takes additional parameter "newValue" and can rewrite with values other than the string "Beep!". |
| __Code 1:__            | replaceNumbersIfDigit([0, 1, 2, 3], 3, "Hello!"); |
| __Expected Output 1:__ | [0, 1, 2, "Hello!"] |
| __Code 2:__            | squaresArray = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];<br>replaceNumbersIfDigit(squaresArray, 6, 1138); |
| __Expected Output 2:__ | [1, 4, 9, 1138, 25, 1138, 49, 1138, 81, 100] |
|                        ||
|                        ||
|                        ||

| _Describe:_            | _countToThis(number)_ |
|------------------------|--------------|
| __Test:__              | It first calls  _replaceNumbersIfDigit()_ to replace numbers containing a 2 with "Boop!", _then_ calls it again to replace remaining numbers containing a 1 with "Beep!". |
| __Code 1:__            | countToThis(15); |
| __Expected Output 1:__ | [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Beep!", "Beep!", "Beep!"] |
|                        ||
|                        ||
|                        ||
| __Test:__              | It first calls  _replaceNumbersIfDigit()_ to replace numbers containing a 3 with "Won't you be my neighbor?", then those with a 2 with "Boop!", then those containing a 1 with "Beep!". |
| __Code 1:__            | countToThis(15); |
| __Expected Output 1:__ | [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!"] |
|                        ||
|                        ||
|                        ||

---
### Failing
| _Describe:_            | _replaceNumbersIfDigit(array)_ |
|------------------------|--------------|
| __Test:__              | It should change all occurences of numbers containing the _digit_ 1 to the string "Beep!".<br>__Digit detection fails due to [binary handling of floating point numbers](https://stackoverflow.com/questions/5153061/simple-subtraction-bug-in-javascript).__ |
| __Code 1:__            | replaceNumbersIfDigit([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]); |
| __Expected Output 1:__ | ["Beep!", 4, 9, "Beep!", 25, 36, 49, 64, ___"Beep!"___, "Beep!"] |
| __Actual Output 1:__   | ["Beep!", 4, 9, "Beep!", 25, 36, 49, 64, ___81___, "Beep!"]
| __Code 2:__            | 8.1 - Math.floor(8.1); |
| __Expected Output 2:__ | 0.1 |
| __Actual Output 2:__   | 0.09999999999999964 |
| __Code 3:__            | 8.1 - 8; |
| __Expected Output 3:__ | 0.1 |
| __Actual Output 3:__   | 0.09999999999999964 |
|                        ||
| __Fixed using toFixed()__ | See [this question](https://stackoverflow.com/questions/5153061/simple-subtraction-bug-in-javascript). Leaving this here for posterity. |


---
### Template
| _Describe:_            | _testTemplate()_ |
|------------------------|--------------|
| __Test:__              | It should do the thing! |
| __Code:__              | testTemplate("Do the thing!"); |
| __Expected Output:__   | "So here's the thing..." |
|                        ||
|                        ||
|                        ||
| __Test:__              | It should also do this other thing... |
| __Code:__              | testTemplate("Another!"); |
| __Expected Output:__   | "And another thing!" |

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

Copyright ?? 2021 Patrick Lee

# <a name="Contact"></a>Contact
###### _[Mr. Roboger](https://github.com/patrick-verbs/mr-roboger) > Contact_
#### Patrick Lee | patricklee1138[at]live[dot]com