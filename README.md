Candy Logger
======


Ashely Allphin

UTA-VIRT-FSF-PT-01-2020-U-LOL Homework #14

Deployed to Heroku [here](https://candy-codingbootcamp-14.herokuapp.com/).
<br/><br/>


## Overview

This is a candy logger app using MySQL, Node, Express, Handlebars and a homemade ORM.

### Functionality

All of the candies in the database are displayed using the `selectAll()` method: 
![homepage][image]

[image]: public/assets/images/candy-index.png "Homepage"  
<br/>


* When a user submits a candy's name in the new candy form, the app will display the candy on the left side of the page, waiting to be devoured, using the `insertOne()` method.

    Adding new candy: 
    ![new-candy][image1]

    [image1]: public/assets/videos/new-candy.gif "Adding New Candy Action"  
<br/><br/>

* Each candy in the waiting area also has a `Devour!` button. When the user clicks it, the candy will move to the right side of the page, using the `updateOne()` method.

    Devouring candy: 
    ![devour-candy][image2]

    [image2]: public/assets/videos/devour-candy.gif "Devouring Candy Action"  
  <br/><br/>


* The app will store every candy in a database, whether devoured or not.

    Table uses Devoured BOOLEAN to display whether devoured or not: 
    ![db_table][image3]

    [image3]: public/assets/images/db-table.png "db_table"  
<br/><br/>


#### Directory structure

All the files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── candys_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── candy.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── candy_style.css
│       └── img
│           └── candy.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
<br/><br/>



## Technologies Used
* MySQL
* Node 
* Express
* Handlebars
* ORM
* HTML, CSS