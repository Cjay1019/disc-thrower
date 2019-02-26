# Disc Thrower

### Overview

Disc Thrower is a full stack web application using node and express to handle server and routing functionality, and a custom ORM to preform CRUD functions with a mySQL database. The app is meant to demonstrate the functionality of using an ORM to easily read write and delete data to a database in node. https://disc-thrower-21406.herokuapp.com/

## User Experience

The app consists of one html page with several buttons and a text input field. The buttons in the "Not Thrown" and "Thrown" sections have the buttons that display the names of discs, and the center section contains a text field where you can enter a new disc, as well as controller buttons for various functions. If a user clicks on any of the "Not Thrown" discs, they are deleted and reprinted in the "Thrown" section, where all buttons are un-clickable. If a user presses submit, it creates a unthrown button with the text the user entered, if they press "Reset Discs", all thrown buttons are deleted and rewritten in the unthrown section.

When "Delete" is pressed, all thrown and unthrown buttons turn red and the delete button changes to say "Done Deleting". If the user clicks any of the newly red buttons, the can be checked, and subsequently unchecked. When the done button is clicked, all checked buttons are deleted.

## How It Works

This app uses a few key npm packages in order have maximum functionality. Express is used to handle routing for all the crud operations as well as serving the html. Mysql is used to interface with the mysql database, and handlebars to serve the html with variations based on the database information. The file structure follows the MVC format and uses a modular ORM to handle the transfer of data between the front end and the server.

Upon any button click (excluding delete) the page is refreshed, and newly altered handlebars html is served by express with the buttons being arranged based on how database values have changed. On each refresh, the database is read using the mysql NPM, and the data is looped through and displayed appropriately via the handlebars index file. Each "disc" row has very simple data values consisting of a name, which is of course used for display purposes, and a boolean value of "thrown", which determines where the "disc" buttons are displayed.

Clicking an unthrown disc simply reversed the "thrown" boolean for that particular "disc", causing it's location on the page to change on refresh. When a user enters text and press submit, a new row is added to the table with a "name" of the text entered, and a "thrown" status of false. When the page refreshes, a new button reflects this change. The delete function is the most complicated, for the purposes of user experience. When delete is pressed, any "disc" can then be selected, which saves said buttons name and id in an array on the front end. If said button is clicked again, it's data is removed from the array. JQuery is used to change button colors and the text of "Delete" to "Done Deleting", to make the functionality more intuitive for the user. If done deleting is clicked with no "discs" selected, the jquery reverts all appearances back to normal, and nothing functionally happens. Otherwise, the rows respective to the selected "discs" are deleted from the database, and the page is refreshed, with these changes reflected.
