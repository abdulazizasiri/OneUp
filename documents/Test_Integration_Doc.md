## 10.0  Testing


### 10.1 Unit Test Plan
This part of the document is a unit test plan for OneUp. It will serve as a guideline for how we will test certain functions of our front-end components and back-end software. The unit tests are organized by the high level components that make up the front-end/backend.

#### 10.1.1 Unit Test Descriptions - Front-end


- 10.1.1.1 Home Page Unit Tests

	- 10.1.1.1.1 Logo: Clicking the OneUp logo on top left corner always navigates back to homepage.
	- 10.1.1.1.2 Video Categories: Selecting between ‘Week’ and ‘All-time’ categories renders respective list for each.
	- 10.1.1.1.3 Upvote/Downvote: Upvote/Downvote displays updated vote -- increments once and limited to one upvote (more on this in integration plan below)
	- 10.1.1.1.4 Username Click: Clicking username link on each video links to respective user’s profile.
	- 10.1.1.1.5 Video Click: Clicking on video window pops up video modal with respective data.


- 10.1.1.2 Video Modal Unit Tests (Some unit tests in the video modal may be repetitive to those in the home page because they display the same information.)

	- 10.1.1.2.1 Modal Close: Clicking ‘x’ on top right corner of modal closes modal and returns back to home page.
	- 10.1.1.2.2 Username Click: Clicking username link on each video links to respective user’s profile.
	- 10.1.1.2.3 Upvote/Downvote: Upvote/Downvote displays updated vote -- increments once and limited to one upvote
	- 10.1.1.2.4 Next Modal: Clicking left or right arrows on modal switches to next video (in order by rank)
	- 10.1.1.2.5 Video Player: Clicking play button in middle of video plays video (more on this in back-end tests)


- 10.1.1.3 Profile Page Unit Tests

	-  10.1.1.3.1 Upload Clip Form: Clicking on ‘+’ in profile page renders upload clip form which requires video title, description, and video attachment.
	- 10.1.1.3.2 Settings Form: Clicking on settings button pops up settings form in which users can change info. 



#### 10.1.2 Unit Test Description - Back-end


- 10.1.2.1 User Data Unit Test- This section is just to make sure data is being stored correctly to the database. Integration of some of these components are below in 10.2 Integration Test Plan.

	- 10.1.2.1.1 Create Account Data: Creating account takes in data from forms that can be successfully stored in the database 
	- 10.1.2.1.2 Login Data: Logging in takes in username and password and successfully stored into database. 
	- 10.1.2.1.2 Settings Data: Settings takes in new data that is successfully updated in the database


- 10.1.2.2 Video Data Unit Tests

	- 10.1.2.2.1 Metadata: Video description and title are stored in the database.
	- 10.1.2.2.2 Video file: Video file stored in database as a link from a file system (in the future it will link from S3).
	- 10.1.2.2.3 Upvote: Upvote count is updated in database for each video.



### 10.2 Integration Test Plan
The second portion of our document describes a plan for testing integration of our components and how they work together. This is just a list of tests between our components and are not organized in any specific way


#### 10.2.1 Integration Test Description

- 10.2.1.1 Creating Account: User information including hashed password saved to database and renders relevant info on profile page (username, name, bio, social media links).

-  10.2.1.2 Signing In: When login occurs, password is compared to hashed password. If incorrect, error alert.

-  10.2.1.3 Changing Settings: Changed settings successfully update database and render to profile page.

- 10.2.1.4 Upvoting/Downvoting a Video: Only allowed one upvote/downvote per video, saves to database, and updates list after page refreshed. 

-  10.2.1.5 Uploading a Video: Uploading a video with its respective data is rendered to the homepage at the bottom of the list.



### 10.3 Module Dependencies
This section describes components in our tests that are strictly dependant on one another to run.


<p align="center">
	<img src="../images/module-depnd.png" >
	
</p>
