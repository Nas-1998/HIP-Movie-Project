**\ Product Name: Movie Explorer**

**\ Purpose**

The purpose of Movie Explorer is to create an intuitive and user-friendly web-based application that allows users to search for movies, explore detailed information, and curate a list of their favorite movies. The application will leverage the OMDb API to retrieve accurate and comprehensive movie data.

**\ Target Audience**

Movie enthusiast : Individuals with a keen interest in movies, seeking detailed information and curated lists.  
Casual viewers : Users who enjoy discovering and tracking movies with minimal effort.

**\ Product Backlog**

The Product Backlog contains all the features and functionalities that need to be developed for the platform. Here are the user stories prioritized in the Product Backlog(30 storypoints):

User Stories and Story Points

1. User Story 1: As a user, I want to search for the movies  
   Story Points: 9  
2. User Story 2: As a user, I want to receive detailed information about a particular movie  
   Story Points: 7  
3. User Story 3: As a user, I want to add new movie to the existing list  
   Story Points: 7  
4. User Story 4: As a user I would like the option to see information on popular films and upcoming releases.  
   Story Points: 5  
5. User Story 5: Search for Oscar winning films.

Story Points: 5

 Team Roles and Dependencies

1\. Front end developer  
   Role: Focuses on developing the user interface of the platform, ensuring a smooth and responsive experience for users.  
   Priority: High  
   Dependency: Will be dependent on UI/UX Designer for design assets and guidance.  
   Impact: A critical role in ensuring that the user has a smooth transition when using the application.  
2\. Back end developer  
Role: Implements the logic for retrieving data from the OMDb API, manages user data (e.g., favorite lists), and handles any server-side processes. Ensures that the application communicates effectively with the API and handles data securely.  
Priority: High  
Dependency: None  
Impact: Ensures that the application can retrieve and display accurate movie data, and manage user interactions with the favorite list effectively.

3\. UI/UX designer  
  Role : Creates the visual design, wireframes, and user experience flow for the application. Ensures that the interface is intuitive, user-friendly, and aesthetically pleasing.  
Priority : High  
Dependency: None  
Impact: Directly impacts user satisfaction

4\. QA tester  
Role : Tests the application to identify and document bugs or usability issues. Ensures that the functionality works as intended and that the application is stable and reliable.  
Priority : Medium  
Dependency: Dependent on both Front-end developer and Back-end developer for complete features to test.  
Impact: Contribute to overall product quality.

**Sprint Planning** 

**Sprint 1 : Focus on search functionality**  
**Goal**: Implement the core search functionality where users can search for movies and view detailed information about a specific movie.  
**Duration**: 2 weeks

**Sprint 1 Planning**  
![Sprint 1 plan](assets/Sprint%201%20plan.png)

**Team Members**:

* Front-End Developer  
* Back-End Developer  
* UI/UX Designer  
* QA Tester (towards the end of the sprint)

**User Stories included:**

User Story 1: As a user, I want to search for the movies  
   Story Points: 9  
User Story 2: As a user, I want to search for the detailed information about a particular movie  
   Story Points: 7

**Tasks**:

UI/UX Designer to create wireframes and designs for the search page and movie details page.

Front-End Developer to implement the search functionality and integrate the designs.

Back-End Developer to set up API integration with OMDb for movie data retrieval.

QA Tester to start testing search functionality and detailed movie views towards the end of the sprint.

**\#Sprint 2 : Focus on add to favorites list functionality- Change request**  
**Goal**: Implement User story 4 where the user is then able to see a list of upcoming releases and popular releases.

**Change Request:** Our goal has changed and now a new user story is requiring us to implement a favorite function where the user can add their favorite movies to a favorite list and the previous task is no longer the main focus.  
**Duration**: 2 weeks

**Sprint 2 planning**  
![Sprint 2 plan](assets/Sprint%202%20Plan.png)

**Team Members**:

* Front-End Developer  
* Back-End Developer  
* UI/UX Designer  
* QA Tester (towards the end of the sprint)

**User Stories included:**

User Story 4 : As a user, I want to save their favorite movie to the favorite list.  
 Story Points: 7

**Tasks**:

UI/UX Designer to create wireframes and designs for the favorite list

Front-End Developer to implement the “Add to Favorites” functionality and integrate the designs.

Back-End Developer to handle data storage and retrieval of favorite movies

QA Tester to start testing favorite functionality and ensuring that movies can be added and retrieved.

**Sprint 1 Review**

**Search Feature:**

**Achievement:**

We prioritized the first user story to give the MVP to the user. This allows users to start interacting with the core functionality of the application—searching for movies—while the development team continues to build and refine additional features. Sprint 1 team has achieved the following:

* Users can now search for movies by title using the search bar.  
* The application retrieves movie data from the OMDb API and displays a list of matching results.  
* Each search result includes the movie’s title, release year, and poster.

**UI/UX Improvements:**

* Developed a clean and intuitive user interface for the search and movie details pages.  
* Ensured smooth user experience across the platform.

**\#Feedback**

* **Positive Feedback:**  
  * The search functionality is fast and responsive.  
  * Users appreciate the detailed information provided for each movie.  
* **Areas for Improvement:**  
  * Some users suggested a favorite list to add their favorite movie.  
  * Minor UI adjustments were suggested to improve the layout on web applications.

**Sprint 1 During**

![Sprint 1 during](assets/Sprint%201%20during.png)

**Sprint 1 Retrospective**

### **What Went Well**

The team worked well together, with clear communication and coordination between front-end and back-end developers. All planned features were delivered on time, and the sprint goal was fully achieved. The search functionality was implemented with minimal bugs, thanks to thorough testing by the QA team.

**What could be improved**

A more detailed breakdown of tasks at the beginning of the sprint could have helped in better managing time and resources.

**Action Items for Next Sprint**

For the next sprint, we've decided to prioritize implementing user login and registration based on user feedback. This will allow users to securely log in and manage their favorite movie lists, a feature that has been highly requested. As a result, we've postponed the movie recommendation feature to a later sprint to focus on delivering the most valuable functionality first. This reprioritization ensures that users can begin personalizing their experience with the application while laying the groundwork for future enhancements.

**Sprint 1 Final**

![Sprint 1 final](assets/Sprint%201%20final.png)

**Sprint 2 Review**

At the beginning of this sprint we were prepared to move on to our user story 4 which was to “Get new releases and popular film recommendations”, we were also going to move on to finishing the appearance of the index, login and register however, a change request came in where user story 6 requires us to “Save their favorite movie to their own favorite list”.

This meant that we had to adjust and make changes to our plan. We continued with developing the css and finishing the appearance for our site because we want users to be able to experience our vision and at least see the core functions of what we set out to do. What we had to do was delay our start for developing user story 4 as we wouldn't have enough time to implement both things in the same sprint since this change request requires a lot more functionality and design such as, creating a login/registration page so that each user profile could be independent along with their lists, we would also need to work in the backend to store and connect user information along with their favorites list.

We began by developing a UI design for the login and registration page then moved on to writing the html and css for it, as well as connecting them to the main index page so the user is able to navigate easily between the pages.

By the end of this sprint we managed to complete the pages for the login and registration however, we couldn't finish the functionality for those pages in time as well any of the other functionality we needed for authentication and making sure our database was ready.

**Sprint 2 during**

![Sprint 2 during](assets/Sprint%202%20During.png)

**Sprint 2 Retrospective**

**What Went Well**

* What Went Well:  
  * Successfully adjusted to the change request, prioritizing the favorite list feature.  
  * UI design improvements enhanced the user experience.  
  * Completed CSS and design for the main index page which will give the user an official access to our site and vision.

**What could be improved**

One thing we could do to improve things next time would be to anticipate changes better and leave more time for such changes whilst also not hindering our current goal or putting it behind.

**Action Items for Next Sprint**

During the next sprint we will be able to complete the change request and if we have enough time we could begin implementing the user story 4, however we will not be taking on any new user story during the next sprint because we no longer want to overestimate our capacity and leave things to be completed at a reliable and consistent rate.


**Sprint 2 final**
![Sprint 2 final](assets/Sprint%202%20Final.png)