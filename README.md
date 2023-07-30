# JS/XML_Project


 
# Travel Advisor - Restaurant Finder

## Introduction
The Travel Advisor - Restaurant Finder project is a web application that allows users to find restaurants and places of interest using the Travel Advisor API. The application provides a user-friendly interface where users can search for restaurants based on their location and view the results. Additionally, the application integrates the OpenWeather API to display weather details for the selected location.

## Technologies Used
- Node.js: A JavaScript runtime environment used for server-side development.
- Express: A minimal and flexible web application framework for Node.js.
- Pug: A high-performance templating engine for generating dynamic HTML templates.
- YELP API: An API marketplace that provides access to various APIs, including the restaurant data source used in this project.
- OpenWeather API: An API used to retrieve weather details for the selected location.

## Functionality
The Restaurant Finder application offers the following functionality:
- Search: Users can search for restaurants and places of interest based on their desired location.
- Error Handling: The application handles API request failures and invalid input gracefully, displaying informative error messages to users.
- Responsive Design: The website is designed to be responsive and accessible across various devices and screen sizes.
- Weather: Users can view the current weather at the selected location to help them plan their visit.

## APIs Used
- YELP API: [Yelp API Documentation](https://docs.developer.yelp.com/reference/v3_business_search)
- OpenWeather API: [OpenWeather API Documentation](https://openweathermap.org/current)

## How to Run the Project
To run the Travel Advisor - Restaurant Finder project after downloading it from GitHub, follow the steps below:

1. Install Node.js: Ensure you have Node.js installed on your system. You can download it from the official website: [Node.js](https://nodejs.org/)

2. Clone the repository: Open a terminal or command prompt and run the following command to clone the repository:
   ```
   git clone https://github.com/your-username/travel-advisor.git
   ```

3. Install dependencies: Change into the project directory and install the required dependencies using npm (Node Package Manager):
   ```
   cd travel-advisor
   npm install
   ```

4. Obtain API Keys: Obtain API keys from Yelp and OpenWeather by signing up for their developer accounts. Replace the placeholder API keys in the project with your actual API keys.

5. Start the server: Run the following command to start the server:
   ```
   npm start
   ```

6. Access the application: Once the server is running, open your web browser and navigate to `http://localhost:3000`. You should see the Travel Advisor - Restaurant Finder application running.

## Conclusion
The Travel Advisor - Restaurant Finder application provides an easy-to-use interface for users to discover restaurants and places of interest in their desired locations. With API integration and responsive design, the project showcases skills in web development and API handling. It serves as a valuable portfolio piece, demonstrating proficiency in building functional and user-friendly web applications.