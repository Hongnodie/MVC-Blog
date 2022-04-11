 # MVC-Blog   ![Project License Badge](https://img.shields.io/badge/license-MIT-brightgreen)

  ## Description

  A simple blog using Model-View-Controller paradigm in its architectural structure, Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

  ## Table of Contents

  ***

  * [Installation](#installation)
  * [Usage](#usage)
  * [Screenshot](#screenshot)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ***

  ## Installation

  This app has already been deployed in heroku (https://www.heroku.com/) - A free platform to deploy any front and back end github app. Therefore, open the following link, you will be able to use it:

  ```
  npm i 
  ```

  See feature video at [MVC-Blog feature video](https://drive.google.com/file/d/1HJlikODcMRR1V6zYQyo2iGY91Jqb36VA/view) <br>
  
  Available also at https://watch.screencastify.com/v/YFhs9GV5mcMfxWmyxFC7

  ## Usage

  <details>
  <summary>User Story</summary>

  ```md
  AS A developer who writes about tech
  I WANT a CMS-style blog site
  SO THAT I can publish articles, blog posts, and my thoughts and opinions
  ```

  </details>

  <details>
  <summary>Acceptance Criteria</summary>

    ```md
    GIVEN a CMS-style blog site
    WHEN I visit the site for the first time
        THEN I am presented with the 
            homepage, which includes existing blog posts if any have been posted; 
            navigation links for the homepage and the dashboard; 
            and the option to log in
    WHEN I click on the homepage option
        THEN I am taken to the homepage
    WHEN I click on any other links in the navigation
        THEN I am prompted to either sign up or sign in
    WHEN I choose to sign up
        THEN I am prompted to create a username and password
    WHEN I click on the sign-up button
        THEN my user credentials are saved and I am logged into the site
    WHEN I revisit the site at a later time and choose to sign in
        THEN I am prompted to enter my username and password
    WHEN I am signed in to the site
        THEN I see navigation links for the homepage, the dashboard, and the option to log out
    WHEN I click on the homepage option in the navigation
        THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    WHEN I click on an existing blog post
        THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    WHEN I enter a comment and click on the submit button while signed in
        THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    WHEN I click on the dashboard option in the navigation
        THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    WHEN I click on the button to add a new blog post
        THEN I am prompted to enter both a title and contents for my blog post
    WHEN I click on the button to create a new blog post
        THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    WHEN I click on one of my existing posts in the dashboard
        THEN I am able to delete or update my post and taken back to an updated dashboard
    WHEN I click on the logout option in the navigation
        THEN I am signed out of the site
    WHEN I am idle on the site for more than a set time
        THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
    ```

  </details>

  <details>
  <summary>Database Models Requirements</summary>

  * `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category. <br>

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

  </details>

  <details>
  <summary>Other Demanded Sources</summary>
  <br>

  express-handlebars npm package-(https://www.npmjs.com/package/express-handlebars) to implement Handlebars.js for your Views by pre-difined RegExp placeholder and methods <br>

  Sequelize npm package-(https://www.npmjs.com/package/sequelize) "jquery" in controlling the server (back end), featured in solid transaction support and easy-to-code relations <br>

  dotenv npm package-(https://www.npmjs.com/package/dotenv) a zero-dependency module to provide necessary headers to accessible/allocated port by pre-defining the environment variables. <br>

  bcrypt npm package-(https://www.npmjs.com/package/bcrypt) to encrypt (no decrypt) and check password. <br>

  express-session npm package-(https://www.npmjs.com/package/express-session) - stores the session data on the local user (client) as cookie, note that session and cookie are two sides of a coin which hold highly private and identical info. <br>
  
  connect-session-sequelize npm package-(https://www.npmjs.com/package/connect-session-sequelize) - enabling the login info to remian registered/active on the server side

  </details>

  <details>
  <summary>Instructions on coding</summary>
  <br>

  [Sequelize tutorial](https://sequelize.org/docs/v6/getting-started/) <br>

  [Github Formatting](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)-basic-writing-and-formatting-syntax

  </details>

  #### Demo

  <p float="left" align="center">
    <img src="./assets/13-orm-homework-demo-01.gif" width="30%">
    <img src="./assets/13-orm-homework-demo-02.gif" width="30%">
    <img src="./assets/13-orm-homework-demo-03.gif" width="30%">
  </p>

  ## Screenshot

  <p align="center">
    <img src="./assets/Retail-Shop-Back-End.gif" width="100%">
  </p>
  
  [See code package at Github](https://github.com/Hongnodie/Retail-Shop-Back-End.git)
  
  ## License
  <details>
  
  <summary>MIT License</summary>
  <br>

  Copyright (c) [2022] [Hongnodie]
  > 
  > __Permission is hereby granted, free of charge, to any person obtaining a copy__
  > __of this software and associated documentation files (the "Software"), to deal__
  > __in the Software without restriction, including without limitation the rights__
  > __to use, copy, modify, merge, publish, distribute, sublicense, and/or sell__
  > __copies of the Software, and to permit persons to whom the Software is__
  > __furnished to do so, subject to the following conditions:__
  > 
  > The above copyright notice and this permission notice shall be included in all
  > copies or substantial portions of the Software.
  > 
  > THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  > IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  > FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  > AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  > LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  > OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  > SOFTWARE.    
  </details>

  ## Contributing

  This is built by Hongnodie. 
  
  ## Questions?

  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 

  >Email  : 92ganhong@gmail.com 

  >GitHub : [Hongnodie](https://github.com/Hongnodie)