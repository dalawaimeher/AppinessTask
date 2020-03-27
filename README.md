# AppinessTask
Task 3
When listing all categories, print the number of products associated to that category.
● The code should be well structured
● Must have proper comments
● Should document the workflow and how to run the code
Descriptions :
There should be two models products and categories. Each category must have multiple products.
When listing all categories, number of products associated to that category should be returned as response.

***********************
1. I have split my code into parts have written them in different folders in src folder
2. I have choosed MongoDB structure
 Model folder - in this i have mentioned 2 models
    2.1 categories_model - model of catergories 
    2.2 products_model -  model of products
3. Routes folder - i have mentioned getproducts route in this
4. Controller Folder - i have mentioned controller part in this
5. Validation folder - I have choosed Hapi.js for json validation
    5.1 mentioned validation part
6. Factory Folder - i have written business logic in this
7. in servers folder
    7.1 mongoserver file - i have mentioned connection of mongo in mongoserver folder
    7.2 - nodeServer file - i have mentioned server connection
8. To run in local 
      - install npm modeules(command - npm i)
      - Run command in cmd : npm start
