# HTML Forms

Forms are used to collect user input, like a login screen or a contact page.

## Basic Form Structure
Everything goes inside the `<form>` tag.
```html
<form action="/submit-data">
    <!-- inputs go here -->
</form>
```

## Inputs and Labels
Always pair your `<input>` with a `<label>` for accessibility.
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" placeholder="Enter name">
```
- `type`: Can be `text`, `password`, `email`, `number`, `radio`, `checkbox`, etc.
- `placeholder`: The grey hint text inside the box before you type.

## Buttons
To submit a form, you need a button!
```html
<button type="submit">Submit</button>
<!-- or -->
<input type="submit" value="Submit">
```
