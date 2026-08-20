# Chapter: HTML Forms

## 1. What is a Form?
An HTML form is used to collect information from users.
Examples:
- Login form
- Registration form
- Contact form
- Feedback form
- College admission form
- Job application form

Simple idea:
```
User
 ↓
Fill Form
 ↓
Submit
 ↓
Data can be processed/stored
```

## 2. `<form>` Tag
The `<form>` tag creates the form.
```html
<form>
    <!-- form elements -->
</form>
```
Example:
```html
<form>
    <label>Name:</label>
    <input type="text">
</form>
```

## 3. `<label>` Tag ⭐
`<label>` gives a name/description to an input.
Jab v hum for dalte hai to jes element ke liye hai wo uske id dalte hai 
```html
<label>Name:</label>
<input type="text">
```
Output concept:
```
Name:
[________________]
```
**Better practice**
Connect the label with the input using `for` and `id`:
```html
<label for="name">Name:</label>
<input type="text" id="name">
```
Here: `for="name"` → `id="name"`. They are connected.

## 4. `<input>` Tag
`<input>` is used to take user input.
```html
<input type="text">
```
`<input>` is a void element, so it does not need: `</input>`. ❌ Don't write that.

## 5. `type="text"`
Used for normal text.
```html
<label for="name">Name:</label>
<input type="text" id="name">
```
Example:
Name:
[ Gaurav              ]

## 6. `placeholder`
Shows a temporary hint inside the input.
```html
<input type="text" placeholder="Enter your name">
```
Example:
[ Enter your name     ]
Once the user starts typing, the placeholder disappears.
**Important**: `placeholder` is not the actual value.

## 7. `value`
`value` gives the input an initial value.
```html
<input type="text" value="Gaurav">
```
Output:
[ Gaurav ]
Difference:
- `placeholder` → hint
- `value` → actual initial value

## 8. `name` Attribute ⭐
`name` gives the form field a name when its data is submitted.
```html
<input type="text" name="username">
```
Students often confuse `id` and `name`.
Remember:
- `id` → identifies the element in the page
- `name` → identifies the form data

The expression `username=john` refers to how the data is sent to the server when the form submits, not how you write the HTML attribute.

Here is how it works under the hood:

### 1. In Your HTML
You define the attribute `name="username"` inside the tag:
```html
<input type="text" id="user-input" name="username" value="john">
```
- `name` is the HTML attribute name.
- `username` is the value of the name attribute.
- `john` is what the user typed into the box (the field's value).

### 2. What the Backend Receives
When a user clicks the Submit button, the browser packages the input into a Key-Value Pair:
`Key (the attribute's value) = Value (what the user typed)`
Because your HTML has `name="username"` and the user typed "john", the browser sends:
`username=john`
- Key: `username` (comes from `name="username"`)
- Value: `john` (comes from what was typed)

### Code Breakdown
If you change the `name` attribute in HTML, the key sent to your backend changes:

| HTML Input Tag | User Types | Data Sent to Backend |
|---|---|---|
| `<input name="username">` | john | `username=john` |
| `<input name="first_name">` | john | `first_name=john` |
| `<input name="user_id">` | 12345 | `user_id=12345` |

The backend script (like PHP, Node.js, or Python) uses that key (`username`) to read the data:
```javascript
// Node.js example receiving the form data
const user = req.body.username; // "john"
```
If you don't include a `name` attribute on an `<input>`, the browser completely ignores that field when submitting the form, and the server receives nothing from it.

## 9. `required`
Makes a field mandatory.
```html
<input type="text" required>
```
If the user tries to submit without entering it, the browser shows a validation message.

## 10. `maxlength`
Limits the maximum number of characters.
```html
<input type="text" maxlength="20">
```
Maximum: 20 characters

## 11. `minlength`
Sets the minimum number of characters.
```html
<input type="text" minlength="5">
```

## 12. `readonly`
User can see the value but cannot change it.
```html
<input type="text" value="India" readonly>
```
`readonly`: The user cannot edit the value, but they can click, highlight, and copy it. Crucially, the form STILL sends this data when submitted.

## 13. `disabled`
Disables the input.
```html
<input type="text" value="Not Available" disabled>
```
Difference:
- `readonly` → cannot edit
- `disabled` → disabled completely

`disabled`: The field is completely inactive (grayed out). The user cannot click, focus, or copy it. The form DOES NOT send this data when submitted.
Example: Use `readonly` for a pre-filled Order ID you need sent to the server. Use `disabled` for a "State" dropdown that only activates after the user selects "Country".

## 14. Password Input
Use: `<input type="password">`
Example:
```html
<label for="password">Password:</label>
<input type="password" id="password" placeholder="Enter password">
```
The characters are hidden: [ •••••••• ]

## 15. Email Input ⭐
```html
<input type="email" placeholder="Enter your email">
```
The browser can perform basic email validation.

## 16. Number Input
```html
<input type="number" min="1" max="100">
```
Useful for: Age, Quantity, Marks, Number of students

## 17. `min` and `max`
```html
<input type="number" min="18" max="60">
```
Allowed range: 18 → 60

## 18. Radio Button ⭐⭐⭐
Used when the user should select one option from a group.
```html
<p>Gender:</p>
<input type="radio" name="gender" value="male">
<label>Male</label>

<input type="radio" name="gender" value="female">
<label>Female</label>
```
Why same name? This is extremely important.
`name="gender"` for both means they belong to the same group. Therefore, normally only one can be selected.
○ Male
○ Female

## 19. Checkbox ⭐⭐⭐
Used when the user can select multiple options.
```html
<p>Skills:</p>
<input type="checkbox" name="skill" value="html">
<label>HTML</label>

<input type="checkbox" name="skill" value="css">
<label>CSS</label>

<input type="checkbox" name="skill" value="javascript">
<label>JavaScript</label>
```
Output:
☐ HTML
☐ CSS
☐ JavaScript
Multiple options can be selected.

## 20. Radio vs Checkbox
Very important for students.
- **Radio**: Choose one (○ Male, ○ Female)
- **Checkbox**: Choose multiple (☐ HTML, ☐ CSS, ☐ JavaScript)

## 21. Date
```html
<input type="date">
```
Browser provides a date picker.

## 22. Time
```html
<input type="time">
```

## 23. Month
```html
<input type="month">
```

## 24. Week
```html
<input type="week">
```
For beginner students, date and time are much more important than month and week.

## 25. File Upload ⭐⭐⭐
Used to allow users to select a file.
```html
<input type="file">
```
Example:
Choose File [ No file chosen ]

You can restrict file types:
```html
<input type="file" accept="image/*">
```
For PDFs:
```html
<input type="file" accept=".pdf">
```

## 26. Color
```html
<input type="color">
```
Shows a color picker.

## 27. Range
```html
<input type="range" min="0" max="100">
```
Creates a slider.
0 ───────●──────── 100

## 28. Search
```html
<input type="search" placeholder="Search...">
```
Used for search boxes.

While all three display a basic text box on the screen, they tell the browser and mobile devices what specific behavior to apply:
- `type="url"`: Automatically validates that the user typed a proper web address. On mobile phones, it automatically pops up a custom keyboard with a built-in .com key and a / key.
- `type="search"`: Designed specifically for search bars. On mobile, the keyboard "Enter" key changes to "Search". Browsers also frequently add a quick "X" button inside the field so users can clear their query with one tap.

## 29. URL
```html
<input type="url" placeholder="Enter website URL">
```

## 30. Telephone
```html
<input type="tel" placeholder="Enter phone number">
```
`tel` is especially useful on mobile devices because browsers may show a phone-friendly keyboard.

## `textarea` rows and cols
Unlike a single-line `<input>`, a `<textarea>` allows multiple lines of text.
- `rows`: Defines the visible height (how many lines of text fit vertically before scrolling).
- `cols`: Defines the visible width (how many average character widths fit horizontally).
```html
<!-- A box 5 lines high and ~40 characters wide -->
<textarea rows="5" cols="40" name="user_feedback"></textarea>
```
(Note: While rows and cols set the default HTML size, modern web development typically uses CSS like width and height to control the exact layout.)

## 31. Hidden Input
```html
<input type="hidden" name="userId" value="101">
```
It is not visible to the user. This is an advanced concept. Don't spend much time on it initially.

## 32. Submit Button ⭐⭐⭐
```html
<input type="submit" value="Submit">
```
Or better:
```html
<button type="submit">Submit</button>
```

## 33. Reset Button
```html
<input type="reset" value="Reset">
```
It resets the form fields to their initial values.

## 34. `<button>` Tag
```html
<button type="submit">Submit</button>
```
Button types: `submit`, `reset`, `button`
Example:
```html
<button type="button">Click Me</button>
```
`type="button"` doesn't automatically submit the form.

## 35. `<textarea>` ⭐⭐⭐
Used for multiple lines of text.
```html
<textarea rows="5" cols="40" placeholder="Enter your message"></textarea>
```
Good for: Address, Feedback, Comments, Messages

## 36. `<select>` ⭐⭐⭐
Used to create a dropdown.
```html
<label for="city">City:</label>
<select id="city" name="city">
    <option>Lucknow</option>
    <option>Delhi</option>
    <option>Mumbai</option>
    <option>Patna</option>
</select>
```
Output:
City: [ Lucknow ▼ ]

## 37. `<option>`
Each item inside `<select>` is an `<option>`.
```html
<select>
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
</select>
```

## 38. `selected`
Sets the default selected option.
```html
<select>
    <option>HTML</option>
    <option selected>CSS</option>
    <option>JavaScript</option>
</select>
```
CSS will be selected initially.

## 39. `multiple` in Select
Allows multiple options to be selected.
```html
<select multiple>
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
</select>
```

## 40. `<fieldset>` ⭐
Groups related form controls.
```html
<fieldset>
    <legend>Personal Information</legend>

    <label>Name:</label>
    <input type="text">
    <br><br>

    <label>Email:</label>
    <input type="email">
</fieldset>
```

## 41. `<legend>`
Provides a title for `<fieldset>`.
```html
<fieldset>
    <legend>Personal Information</legend>
    ...
</fieldset>
```
Output concept:
```
┌─ Personal Information ─────────┐
│                                │
│ Name:  [____________]          │
│ Email: [____________]          │
│                                │
└────────────────────────────────┘
```

## 42. `<datalist>` ⭐ Advanced
Provides suggestions while typing.
```html
<label for="browser">Choose Browser:</label>
<input list="browsers" id="browser">

<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Edge">
    <option value="Safari">
</datalist>
```
The user can type and select from suggestions.

## 43. `<output>` — Advanced
Used to display the result of a calculation or user action.
```html
<output>100</output>
```
For beginners, you can keep this as advanced HTML because JavaScript is commonly involved with dynamic output.

## 44. Form `action`
Now comes an important concept.
```html
<form action="/submit">
```
`action` tells the browser: Where should the form data be sent after submission?
For example:
```html
<form action="/register">
```
The data is intended to go to: `/register`. Don't go deeply into backend processing yet.

## 45. Form `method`
`method` tells the browser how to send the form data.
Two important methods:
```html
<form method="get">
```
and:
```html
<form method="post">
```
- **GET**: Data is generally included in the URL.
- **POST**: Data is sent in the request body.

For your BCA beginners:
- GET → data goes through URL
- POST → data goes through request body
The actual server-side processing will come later with backend development.

## 46. Complete Registration Form Practical ⭐⭐⭐
This is a great final practical for your Forms chapter.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration Form</title>
</head>
<body>
    <h1>Student Registration Form</h1>
    <form>
        <fieldset>
            <legend>Personal Information</legend>
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>
            <br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <br><br>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br><br>
            
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="17" max="60">
            <br><br>
            
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob">
            <br><br>
            
            <p>Gender:</p>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
        </fieldset>
        <br>
        
        <fieldset>
            <legend>Course Information</legend>
            <label for="course">Select Course:</label>
            <select id="course" name="course">
                <option value="">Select Course</option>
                <option value="bca">BCA</option>
                <option value="btech">B.Tech</option>
                <option value="mca">MCA</option>
            </select>
            <br><br>
            
            <p>Skills:</p>
            <input type="checkbox" id="html" name="skills" value="html">
            <label for="html">HTML</label>
            <input type="checkbox" id="css" name="skills" value="css">
            <label for="css">CSS</label>
            <input type="checkbox" id="javascript" name="skills" value="javascript">
            <label for="javascript">JavaScript</label>
        </fieldset>
        <br>
        
        <fieldset>
            <legend>Additional Information</legend>
            <label for="photo">Upload Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*">
            <br><br>
            
            <label for="message">Address:</label>
            <br>
            <textarea id="message" name="message" rows="5" cols="40" placeholder="Enter your address"></textarea>
        </fieldset>
        <br>
        
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
</body>
</html>
```
