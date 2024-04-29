# WillBeThere Event Management System
Welcome to the repository for WillBeThere, an intuitive online RSVP service designed to simplify event organization and attendance tracking. With WillBeThere, registered users can effortlessly create events, share event links with friends, and easily manage RSVPs to ensure smooth event coordination. Whether you're hosting a small gathering or a large-scale event, WillBeThere provides the tools you need to streamline the planning process and enhance attendee engagement. Join us in revolutionizing event management with WillBeThere!
### Screenshot
![](/src/assets/preview.png)
## Key Features
### Core Features
- User Registration: Only registered users can create events, ensuring security and accountability.
- Flexible Location Input: Event locations are not validated, providing flexibility for organizers.
- Selective Email Distribution: Only users who indicate attendance receive event location details via email.
- RSVP Management: Event organizers can view RSVPs, plus-ones, and total guests for effective planning.
### Nice-to-Have Features
- Congratulatory Messages: Attendees can send congratulatory messages to organizers when they RSVP. 
- Customizable Messages: Organizers can choose which congratulatory messages to display or hide on the event page.
- Guest List Control: Organizers can display or hide the guest list and total guest count.
- Item Contribution: Guests can bring items, and organizers can include item lists in event details.
- RSVP Status Management: Registered guests can view and update their RSVP status for events they've RSVP'd to.
- Social Authentication: Users can register using Google or other social accounts for convenience.
- Event Dashboard: Display ongoing or upcoming events for users to explore and potentially RSVP to.
- Event Reminders: Automatic reminders sent to attendees who indicated attendance.
- Photo Uploads: Attendees can upload event photos, enhancing post-event engagement.
## Database Schema
### Users
- id: Unique identifier
- username: User's username
- password: User's hashed password
### Events
- id: Unique identifier
- userId: ID of the user who created the event
- name: Event name
- date: Event date
- time: Event time
- location: Event location
- items: Array of items guests can bring
- eventImageUrl: URL for event image
### RSVPs
- id: Unique identifier
- eventId: ID of the event RSVP'd to
- congratulatoryMessage: Optional message from attendee to organizer
- items: Array of items attendee will bring
- name: Attendee's name
- email: Attendee's email
- attending: Boolean indicating attendance status
- additionalPeople: Array of names of additional people attending
## Authentication
Users can register using:
- Email and password
- Google
### Integrations
- Cloudinary: Image upload for event images and attendee photo uploads.
- Email Service Provider: Sending event details and reminders via email.
- Google Authentication and other social accounts: Social login integration for user registration and login.
## Tech Stack
- Frontend: ReactJS
- Backend: Django
- Database: Postgres
## Deployment
- Frontend: Vercel
- Backend: Render
- Database: Supabase
## Getting Started
Clone the repository.
Set up the backend and database according to deployment instructions.
Configure authentication providers.
Run the frontend and backend locally for development.
## Contributors
- Abdulbasit Abdullahi: [Github repository](https://github.com/bibhestee)
- Aaliyah Junaid: [Github repository](https://github.com/Leeyah-123)
- Emmanuel Tofunmi: [Github repository](https://github.com/Hemazyn)
- Andrew Ezeani: [Github repository](https://github.com/ezeaniiandrew)
## Acknowledgments
Queen Arit: [Senior Software Engineer](https://twitter.com/AritDeveloper)
