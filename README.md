Task 1 <br>
Design 5 API calls with endpoints namely:<br>
1) /details - GET Request
2) /update - PUT/PATCH Request
3) /image - GET Request
4) /insert - POST Request
5) /delete - DELETE Request
<br>
Create Form and Take customer details and update into tables using API’s and redirect to all users information Page.<br>
All users information Page: Show all users information in a table.<br>
API Documentation:<br>
1)
/details API will fetch details of a specific user given the user_id as a query parameter.<br>
Structure: BASE_URL/details/${user_id}<br>
Returns: object:{...user_details}<br>
2)<br>
/update API updates the details of a specific user given the new details in the request body.<br>
Structure: BASE_URL/update<br>
Request Body: object:{...new_details_of_user}<br>
Returns: Some kind of a success or failure message for acknowledgement<br>
3)<br>
/image gets the image of an user given the user_id as a query parameter<br>
Structure: BASE_URL/image/${user_id}<br>
Returns: object:{...user_image}<br>
4)<br>
/insert inserts a new user to the database<br>
Structure: BASE_URL/insert<br>
Request Body: object:{user_details}<br>
Returns: Some kind of success or failure message<br>
5)<br>
/delete deletes an user from the database given the user_id<br>
Structure: BASE_URL/delete/${user_id}<br>
Returns: A success or failure message<br>
Users table structure<br>
● user_id : A randomly generated UUIDV4<br>
● user_name : The username of an user (May not be unique)<br>
● user_email : The user’s email address (unique)<br>
● user_password: The user’s password<br>
● user_image : The user’s image<br>
● total_orders : Total orders placed by user<br>
● created_at : Timestamp when user was created<br>
● last_logged_in: Timestamp when user last logged in<br>
