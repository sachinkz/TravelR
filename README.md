# TravelR
A simple full-stack MERN app for travelers to share the places they visited

# follow these steps for installation

1. Clone the repository:

2 Redirect to the root folder wher you can find 2 folders called frontend and backend 

3 Redirect to frontend folder
  cd frontend
  npm install

4 redirect to  backend folder
  cd ..
  cd backend 
  npm install

5 create an .env file in frontend and add these datas
  REACT_APP_BACKEND_URL=http://localhost:5000/api
  REACT_APP_ASSETS_URL=http://localhost:5000
  REACT_APP_GOOGLE_API_KEY= your google maps api key

6 add a nodemon.json file in backend folder with following datas
    "MONGO_USER": "username of mongodb",
    "MONGO_PASSWORD": "mongodb cluster password",
    "MONGO_DB": "database name",
    "JWT_KEY":"a random unique code for json web token"

7 start both front end and backend
   redirect to both files and type the command  npm start

8 The React app should now be running on http://localhost:3000.
