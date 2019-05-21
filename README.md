# Giving-Project

## Team Members:
 - Chris Fethke (cfethke) - Full Stack
 - Shash Sinha (ssinha11) - Full Stack
 - Mustafa Ghani (mghani1) - Full Stack
 - Olivia Pritt (opritt) - Designer (dropped course after initial designs)

## Developer Roles

Chris (cfethke):
- Search Page front-end and back-end functionality
    - Category search and quick-buttons components
    - Keyword search and all associated components
    - Filtered search and all associated components

- Home Page front-end and back-end functionality
    - Scroll list construction and all associated components

- Other Components
    - Heart-shaped favorite button
    - Four start icon component for ratings

- Charity Navigator API Interaction
    - All URL parsing and API Requests
    - Charity data passing between server and client


Shash (ssinha11): 
- Set up entire dev environment for team
    - React-native app navigation structure
    - Git repository structure
    - Did native integration of most third party packages (React Native package installation is a lot more involved than React and most packages has different instructions that are often out of date for both Android and iOS).
 - Implemented and tested whole authentication flow for app including security such as user tokens making use of https://jwt.io/ and Bcrypt for both back end and front-end.
 - Integrated inital Google Maps Map for both iOS and Android into app.
 - Created responsive react landing page website (https://givingapp.github.io/) for Client to potentially use if and when he releases app.
 - Set up and managed AWS EC2 and Mongodb instances
 - Styled and the whole app including navigation so it looked the same on both iOS and Android i.e. headers, custom cross platform font, image and video assets etc.
 - Coordinated with client for meetings, feedback etc.
 - Handled Android development and testing completely.
 - Did peer programming with Mustafa
 - Worked on multiple Medium priority features that were not polished enough to make it into this handin but will be before handing off to Client in two days such as Facebook integration and local time based reminder notifications to donate.

Mustafa (mghani1): 
- Sign Up Page
    - Implemented inital input validation
    - Worked on back-end, saving user data to mongodb

- Login-in Page 
    - Implemented inital input validation
    - Worked on back-end comparing info to mongodb 

- Favoriting
    - Implemented back-end functionality
        - For favoriting charities 
        - Appends to list in user instance in monogdb

- Details Page 
    - Styled charity information 
    - Redirected user to charity donation site 

## Folder structure
```
Giving-Project/
├── Giving/
   └── ### THIS FOLDER CONTAINS THE MOBILE CLIENT AND SERVER CODE OF THE STABLE BUILD
```

## High Level Architecure (MERN Stack)

- MongoDB - (Database for user information)
- Express - (Server endpoints/routing)
- React-Native - (Mobile Client Side Front-End)
- Node.js - (Server)

## Build Instructions (For Handing In)

Environment Dependencies - App will not build/run on Brown CS department machines without the following:
 - XCode and Android Studio (for Emulators)
 - React-Native CLI tool
 - Node.js and npm

Server:
- Server is currently running on an AWS EC2 instance. This EC2 instance will be shut down shortly after grading to prevent further charges to our personal credit cards. After this point, the server must be run locally or using another cloud server.
- To run server locally, ```cd``` into ```Giving-Project/Giving/Server```. Then run ```npm install``` to obtain all the required node.js dependencies, and then ```npm start``` to run the server.
    - Wait until server console has logged the ```Home Page List Data Retrieved and Stored!!``` message before rendering the react-native app. Otherwise the home page will not be able to retrieve and display charity list data.
- Server will not run (locally or on EC2) without the required config.js file, which contains App Dev and API credentials.
    - Additionally, these API credentials (ID and Password) will become invalid shortly after grading to prevent further charges to our personal credit cards. 

React-Native App:
- Once the required IDE dependencies are installed and configured, ```cd``` into ```Giving-Project/Giving```. Then run ```npm install``` to obtain all the required node.js dependencies, and then use ```react-native run-ios``` or ```react-native run-android``` to run the client-side react-native app in the respective emulator.
- If the Server is being run locally, you must also change the ```SERVER_URI``` value within ```Giving-Project/Giving/src/constants.js``` to match your localhost URI.

## Requirements Checklist

_N.B. Any feature that does not have high priority was considered optional for our specifications._

- High Priority:
    - Users are able to skip signing in/logging in
        - (COMPLETE) The App's welcome screen includes a "Skip Straight to Charities" button that brings the user right into the app's home screen

    - Support for both iOS and Android
        - (COMPLETE) App builds and runs on both XCode's iOS simulator and Android Studio's simulator. Can also be run on actual mobile devices with a corresponding deployment setup for each environment. 

    - Users are able to create an account using an email address and user name
        - (COMPLETE) The App's welcome screen includes a "Continue with Email" button that brings the user right to an email login screen. User's then have the option to sign in with an existing account or create a new account. Valid email, username, and password checking are included as well. Passwords are encrypted with bcrypt before getting stored in the mongoDB database.

    - Sort charities by overall rating
        - (COMPLETE) Search filtering gives users the option to show only rated charities, and also allows users to find charities with a particular minimum rating (0 stars, 1 star, 2 stars, 3 stars, 4 stars). Ratings are decided and delivered by Charity Navigator. 

    - Easily identify charities that are in a specific location anywhere in the US
        - (COMPLETE) Search filtering gives the users the option to find charities based on any US state, city, or zip code location.

    - Easily Navigate to the actual websites of charities presented in the app
        - (COMPLETE) Pressing on any charity listing (both on the home page and in the search results) will bring the user to a details screen that displays all of the critical information for that particular charity. Each details page includes a "Donate Now" button that will navigate the user to that particular charities home URL.

    - Robust charity filter system and search
        - (COMPLETE) Search page includes three different search methods. User's can click any of the included "quick buttons" to search by Cause. They can also use the search bar to find charities based on any keyword input. Finally, users can use the included filters to find charities based on a number of parameters, including category, rating, government funding, scope of work, and location.

    - Superior UI & UX to similar apps
        - (COMPLETE) We believe our application provides a very user friendly navigation experience on par with industry standard react native apps. After our designer left the group, we made modifications to our original design, taking inspiration from apps such as GrubHub and Spotify. Design modifications were supported by user testing and feedback. 

- Medium Priority:
    - Users are able to create an account using their existing Facebook account
        - (PARTIALLY COMPLETE) The welcome screen contains a custom "Continute with Facebook" button. We were able to complete this feature only using Facebook's default login component, which we chose to exclude from our final submission, as we felt that it did not match with our overall technical and design considerations.

    - Ability to favorite charities
        - (PARTIALLY IMPLEMENTED) All charity listings (on the home page, in the search results, and on the details screen) include a favorite button heart icon. When the user is logged in, pressing this button will add the appropriate charity's Employer Identification Number (EIN) to a list of favorited charities associated with that user's login credentials in our mongoDB database. 

    - First Time Users are presented with a swipe tutorial
        - (DEPRECATED) We originally had a functional swipe tutorial, but after losing our designer we decided to remove this feature, as we no longer had the ability to create the illustrations required. This feature was presented to the client during initial meetings.

- Low Priority
    - Easily identify charities that are nearby
        - (PARTIALLY IMPLEMENTED) The Local Charities page includes a fully functional map, provided by the Google Maps API. This map currently shows the charities within the Brown University Zip Code, for demonstration purposes only. Further implementaion was limited by the Charity Navigator API, which does not currenly provide coordinate values compatable with the Google Maps API, unless first processed. 

## Additional Info:

Before our actual handoff with the client we will implement a couple of the medium features to a reasonable standard (i.e. bring them into the main stable app) and also give him a full in person walkthrough of how to run and set up the app on his machine.
