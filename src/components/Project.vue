
<template>
<div>
    <h1 class="headbg">Projects</h1>
    <p class="text3" v-html="projectsummary"></p></div>
    
 <div class="project" v-for="project in project" :key="project.id" >
     <div class="project-card">
    <h1 class="project-title">{{ project.name }}</h1>
    <h2>Technologies Used:</h2>
    <p class="card-d">{{ project.technologies.join(', ') }}</p>
    <h2>Description:</h2>
    <p class="card-d">{{ project.description }}</p>
   <a class="card-d" :href="project.githubLink" target="_blank">{{ project.githubLink }}</a>

</div>
</div>
</template>
<script setup>
import {ref} from 'vue'
const projectsummary = ref([
  'Recent MCA Graduate with Hands-On Experience in Diverse Projects, Innovatively designed and implemented web applications database management systems. Proficient in using various technologies such as HTML, CSS, JavaScript, Vuejs, PHP, Java and SQL, MongoDB . Demonstrated ability to work both independently and collaboratively in agile environments. Strong problem-solving skills honed through real-world project challenges. Committed to continuous learning and adapting to new technologies.'
]);


const project = ref([
    {
      id:1,
      name: "SpaceX Rockets Details",
      technologies: ["JavaScript", "Vue.js", "Pinia"],
      description: "I created a SpaceX rocket details display interface that fetches data from an API and presents it in cards. Users can filter and find specific rockets, with selected cards updating the router to show details and storing the state using Pinia with the Composition API. This project improved my skills in API integration, data filtering, and state management in Vue 3. It demonstrates my proficiency in creating dynamic and interactive web applications.",
      githubLink: "https://github.com/MichealAXavier/SpaceX-Rockets"
    },
    {
      id:2,
      name: "Book Store",
      technologies: ["JavaScript", "Vue.js", "Pinia"],
      description: "I created a bookstore interface where users can click on a book details card to view more information. The application uses Vue Router to dynamically display the book's ID in the URL. State management with Pinia ensures that book details are efficiently stored and retrieved. This project enhanced my understanding of dynamic routing and state management in Vue 3.",
      githubLink: "https://github.com/MichealAXavier/vue-book-store"
    },
    {
      id:3,
      name: "Mobile Price Compare",
      technologies: ["JavaScript", "Vue.js"],
      description: "I developed a mobile price comparison interface allowing users to select multiple mobiles using checkboxes for side-by-side comparison. The application leverages Vue and JavaScript methods to dynamically display detailed comparisons. This project highlights my ability to create interactive, user-friendly interfaces. It enhanced my skills in data manipulation and real-time updates within a Vue application.",
      githubLink: "https://github.com/MichealAXavier/Mobile-Price-Compare-App"
    },
    {
      id:4,
      name: "Expense Tracker",
      technologies: ["JavaScript", "Vue.js"],
      description: "I developed an expense tracker to calculate daily expenses and income using Vue 3 with the Composition API. The application stores data in localStorage to persist user entries across sessions. This project enhanced my ability to manage state locally and handle real-time calculations within a Vue application. It showcases my skills in building practical, user-centric financial tools.",
      githubLink: "https://github.com/MichealAXavier/Vue-Expense-Tracker"
    },
    {
        id:5,
        name: "Expense Tracker using JavaScript",
        technologies: ["JavaScript"],
        description: "I cloned my expense tracker project using JavaScript to calculate daily expenses and income. The application utilizes localStorage to save and persist user data across sessions. This project helped me deepen my understanding of fundamental JavaScript concepts and DOM manipulation. It highlights my ability to create functional and responsive web applications without relying on frameworks.",
        githubLink: "https://github.com/MichealAXavier/Expense-Tracker-using-JavaScript"
      },
      {
        id:6,
        name: "Ecommerce Furniture Store Management System",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        description: "For my MCA mini project, I developed an eCommerce web management system using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. This system assists small business owners in managing orders, sales, inventory, and payment details, as well as adding products for display. It includes a user-facing eCommerce site where customers can view products, place orders, and check their order status. This project enhances business operations and user experience by integrating robust front-end and back-end technologies.",
        githubLink: "https://github.com/MichealAXavier/ECommerce-Site-Management"
      },
      {
        id:7,
        name: "Hostel Automation System",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        description: "I developed a hostel automation system featuring an admission register for users. Admins can efficiently manage admissions by accepting or rejecting applications, with automated email notifications sent to users. The system also calculates monthly mess bills automatically, reducing charges for days when residents are on leave. Additionally, it includes a complaint management feature for residents to report issues.",
        githubLink: "https://github.com/MichealAXavier/Hostel-Automation-System"
      },
      {
        id:8,
        name: "Student Register System",
        technologies: ["Java SWING", "MySQL"],
        description:"I created a student registration system with CRUD operations using Java Swing for the user interface and MySQL for the database. This system allows users to perform operations like creating, reading, updating, and deleting student records. It provides a user-friendly interface for managing student information efficiently. This project demonstrates proficiency in Java GUI development and database interaction.",
        githubLink: "https://github.com/MichealAXavier/Student-Registration-Form-using-Java-Swing"
      },
      {
        id:9,
        name: "Employee Register System",
        technologies: ["Python Tkinter", "MongoDB"],
        description:"I developed an employee registration system with CRUD operations using Python's Tkinter library for the user interface and MongoDB for the database. This system enables users to perform operations like creating, reading, updating, and deleting employee records. It provides a simple and intuitive interface for efficient management of employee information. This project showcases proficiency in Python GUI development and NoSQL database interaction.",
        githubLink: "https://github.com/MichealAXavier/Student-Registration-Form-using-Java-Swing"
      },
      {
        id:10,
        name: "College Management System",
        technologies: ["Oracle APEX", "SQL"],
        description:"I designed a comprehensive college management system using Oracle APEX for the frontend and SQL for the backend. This system facilitates various administrative tasks such as student enrollment, course management, and faculty scheduling. Leveraging Oracle APEX's intuitive interface, it provides efficient data management and reporting capabilities. This project demonstrates proficiency in Oracle APEX development and SQL database manipulation for educational institutions.",
        //githubLink: "https://github.com/MichealAXavier/Student-Registration-Form-using-Java-Swing"
      },
      
    
  ]);

</script>