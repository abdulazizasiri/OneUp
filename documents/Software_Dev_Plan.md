## 4.0 Software Development Plan

### 4.1 Plan Introduction

This Software Development Plan documents the planned development for the OneUp web application which aims to expose young skateboard talent through crowdsource curation.

The app will essentially be a video database of user uploaded skate clips that are curated by upvotes and downvotes from other users. Skaters are constantly aiming to get sponsored while building their personal brand, and Oneup is a space where they can surface up democratically. Our approach for the development of this web application is split up into three main sections: user interface, server-side, database. We plan on designing the user interface before concurrently building the server-side and database. We have allocated our time according to the difficulty of each layer (more time to building the server and database compared to the front end).

Milestones

- Week 04 (9/20): Project Proposal
- Week 05 (9/27): 
	- Software Requirements Specification 
	- Development Schedule of Software Development Plan
- Week 06 (10/2): Mockups/Wireframes
- Week 07 (10/11): Completed Software Development Plan Document
- Week 09 (10/27): Completed Front-End Development
- Week 10 (11/1): 
	- Project Preliminary Design Review Presentation
	- Architecture Section of the Software Design Description Document 
- Week 12 (11/15): 
	- Project Critical Design Review Presentation
	- Completed Software Design Description Document 
- Week 14 (11/29): 
	- Alpha/Beta Demonstration
	- Test and Integration Plan
	- Complete Back-End Development
- Week 15 (12/6): 
	- User’s Manual Final Updates
- Week 16 (12/13): 
	- User’s Manual Final Updates
	- Final Product Delivery
	- Final Project Presentation

	
#### 4.1.1 Project Deliverables

- Week 04 (9/20) -- Project Proposal
	- Proposal document of our idea and vision for OneUp which includes description and justification.
	- Presentation of our idea for feedback before officially committing.
	- General idea for implementation tools of the project, including software, frameworks, and 3rd party modules
- Week 05 (9/27) -- Software Requirements Specification & Development Schedule of Software Development Plan
	- Software Requirements Specification (SRS) document which includes the low-level details and requirements of our system. This includes CSCIs, CSCs, and CSUs that reflect the functionality of each layer within the 3 tier architecture. 
	- Development schedule (GANTT chart) to display how long a task should take.
	- Tasks split up between the team of three.
- Week  07 (10/11) -- Software Development Plan Document
	- Software Development Plan (SDP) which describes the process to building the application including scheduling and software/hardware resources. 
	- Organize meetings, communication lines, and assign official titles to each team member
- Week 10 (11/1) -- Architecture Section of the Software Design Description Document
	- Architectural Design Specification document which presents the system components and their relation to one another. 
- Week 12 (11/15) -- Software Design Description Document 
	- The Design Description Document provides every detail of the software and it’s components (CSC/CSU). 
- Week 14 (11/29) -- Test and Integration Plan
	- Testing document to uncover bugs and defects. Includes unit tests and integrations tests on software.
- Week 15 (12/6) -- User’s Manual
	- Preliminary User’s Manual that describes in detail how to use the software
- Week 16 (12/13) -- User’s Manual & Product Delivery
	- Final User’s Manual with complete detail and instructions for the software (edited from preliminary user’s manual).
	- Completed Product Delivery with all documents on GitHub.
	- Plans to update/upgrade the web application such as the GUI or functionality along with web app maintenance 
	

### 4.2 Project Resources

#### 4.2.1 Hardware Resources

Development and demonstration for the project require the same hardware:
- MacBook Pro
	- Processor: 2.5 GHz Intel Core i7
	- Memory: 16 GB 1600 MHz DDR3
	- Graphics: Intel Iris Pro 1536 MB
- WiFi/Ethernet
- AWS Servers
	
#### 4.2.2 Software Resources

- Sublime Text Editor
- Atom Text Editor
- macOS
- Node.js v8.6.0
- React.js v16.0.0
- Express v4.16.2
- EJS v2.5.7
- Webpack v3.6.0
- Babel v6.26.0
- Nodemon v1.12.1
- Bootstrap
- GitHub
- GridFS (for MongoDB videos)


### 4.3 Project Organization

As mentioned, the project consists of integrating a front-end, back-end, and database. Each team member will have a lead role for each part of this particular architecture (Abdulaziz as the front-end lead, Justin as the back-end lead, and Khiem as the overall product/project manager). However, since our team consists of only 3 people, we will primarily have shared roles across all layers of the architecture.

The team meets every Wednesday at 6:30 pm to discuss the current state of the project and goals that have yet to be accomplished. Aside from the weekly team meetings, we communicate through an app called “Slack” to discuss implementation strategies or any concerns.

Name            | Role
----------------|----------------------
Khiem Lu	| Product/Project Manager, Front-End Design, Database Developer, Back-End Developer
Justin Lee 	| Back-End Lead,  Front-End Developer, Database Design
Abdulaziz Asiri | Front-End Lead, Back-End Developer, Database Developer


### 4.4 Project Schedule

#### 4.4.1 GANTT Chart

<p align="center">
	<img src="../images/GANTT.png" alt="High Level Diagram">
	
</p>

Note: We will be meeting and discussing almost every other day.

#### 4.4.2 Task/Resource Table

We plan on doing everything together without splitting up the workload too much.


Task     					     | Hardware              | Software                          | Person     
---------------------------------------------------- | --------------------- | --------------------------------- |------------
Front end, server, database			     | Macbook Pro           | Node.js, React, MongoDB, macOS    | Khiem, Justin, Abdulaziz
Home page, video window, upvoting system             | Macbook Pro           | Node.js, React, MongoDB, macOS    | Khiem
User profile, login window, settings                 | Macbook Pro           | Node.js, React, MongoDB, macOS    | Justin
Uploading videos, about page, sharing videos         | Macbook Pro           | Node.js, React, MongoDB, macOS	 | Abdulaziz



#### 4.4.3 Class Schedule

http://bjohnson.lmu.build/cmsi401web/classnotes.html

- Week 01
   - Meet & Greet
   - Intro & Syllabus
   - Generic Production Process Steps
   - Parts of the Software Engineering Process
   - Project Ideas
   
- Week 02
   - Presentation for possible project – Dr. Bo Oppenheim
   - RFP Details
   - Life Cycle Models
   - Horror stories and Ethics
   
- Week 03
   - SOW Documents
   - Needs Analysis
   - Requirements Documents
   - Peer Review Process
   
- Week 04
   - Project proposal presentation(s)
   - Software Development Plan
   - To Be Announced
   
- Week 05
   - Requirements Document
   - Preliminary Schedule
   - Brief Intro to UML
   
- Week 06
   - Reading/Synopsis assignment 1 essay papers due/discussions
   - Architectural Design
   - Design Reviews
   
- Week 07
   - Software Development Plan Document
   - Unit and Integration Test
   - Review and Discussion of Deliverables
   
- Week 08
   - Special Guest Speaker: TBA
   
- Week 09
   - Student project status updates
   
- Week 10
   - Prelimineary Design Review Presentations
   - Software Design Description Document (Architecture Section)
   - Student project status updates
   - Special Guest Speaker: To Be Announced
   
- Week 11
   - Project Team Meetings and Coding for remainder of class
   
- Week 12
   - Student project status updates
   - Critical Design Review (CDR) Presentations
   - Software Design Description Document (Detailed Section)
   
- Week 13
   - Project Team Meetings and Coding for remainder of class

- Week 14
   - AlphaBeta Project Presentations
   - Test Plan Document

- Week 15 
   - Code Peer Review
   - User's Manual Final Updates
   - Student project status updates
   - Project Management Review and Spin Doctoring
   
- Week 16
   - Final SDF Submission; All Feedback Incorporated


