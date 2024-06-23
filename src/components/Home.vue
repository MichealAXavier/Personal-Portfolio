<template>
    <div class="mich">
        <div class="headcontainer">
        <div class="h-right">
            <img :src="imageUrl" alt="Background Image" class="image" />
        </div>
        <div class="h-left">
            <h1 class="headbgc">MICHEAL XAVIER A</h1>
            <h2 class="headbgc">Software Developer</h2>
            <p class="text2" v-html="summary"></p>
            
        </div>
        </div>
    </div>
<!--Professional Summary-->
    <div class="summary">
        <h2 class="headbg">PROFESSIONAL SUMMARY</h2>
      <p class="text2" v-html="profess"></p>
        </div>
<!--Education Section-->
        <div class="education">
            <h2 class="headbg">Education</h2>
            <div class="educard">
            <div class="card" v-for="entry in educationData" :key="entry.course">
                <div class="card-body">
              <h5 class="card-title">{{ entry.course }}</h5>
              <p class="card-title"> {{ entry.college }}</p>
              <p class="card-title">{{ entry.place }}</p>
              <p class="card-title">{{ entry.year }}</p>
                
            </div>
            </div>
            </div>
        </div>
<!--Skills & Certifications-->
<div>
    <h1 class="headbg">Skills</h1>
    <p class="text3" v-html="skillsummary"></p>
</div>
        <div class="skill">
        <div class="skillcard" v-for = "skill in skillsData" :key="skill.id">
             <img :src="skill.imageUrl" class="skill-image" alt="SKill Logo">
            
              <h5 class="skillhead">{{ skill.name }}</h5>
              <div class="cardbg">
                <div class="cardcontent">
              <h4>Proficiency Level: <span class="span">{{ skill.proficiencyLevel }}</span></h4>
              
              <h1>Description:</h1>
              <p class="skillpara">{{ skill.description }}</p>
                </div>
            </div>

        </div>
        </div>


</template>

<script setup>
import xavierImage from '../assets/Photo.jpeg';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.jpg';
import vueImage from '../assets/vue.png';
import routerImage from '../assets/router.png';
import piniaImage from '../assets/pinia.jpg';
import csImage from '../assets/cs.png';
import aspImage from '../assets/net.jpg';
import sqlImage from '../assets/sql.png';
import phpImage from '../assets/php.png';
import gitImage from '../assets/git.png';

import { ref } from 'vue';
const summary = ref([
  'Hello and welcome to my blog! I am thrilled to share my journey, experiences, and insights with you. As a recent MCA graduate, I am passionate about web development and excited to pursue a career as a Software developer'
  ]);

  const profess = ([
    'Passionate and skilled software developer fresh out of university, well-versed in HTML5, CSS3, JavaScript, VueJs3, C#, ASP .NET MVC, PHP and SQL. Excited to apply my knowledge to create engaging web applications. Quick learner, committed to staying updated on the latest technologies. Strong team player, eager to collaborate and contribute to innovative projects in a dynamic setting, aiming for professional growth.'
  ]);

  const skillsummary = ([
    'MCA graduate skilled in front-end technologies like HTML, CSS, JavaScript, and Vue.js 3 (with Vue Router and Pinia). Proficient in back-end development using C# and ASP.NET MVC, along with SQL for database management. Competent in PHP for server-side scripting and integrating full-stack solutions. Strong problem-solving skills and familiarity with Agile methodologies. Proven ability to develop robust, scalable, and maintainable web applications.'
  ])

                const imageUrl = ref(xavierImage);
                 const educationData = ref([
                 {
                   course:'Master of Computer Applications',
                   college: 'Manonmaniam Sundaranar University',
                   place: 'Tirunelveli',
                   year: '2022-2024'
                 },
                 {
                   course:'Bachelor of Computer Applications',
                   college: 'Sacred Heart College of Arts and Science',
                   place: 'Dindigul',
                   year: '2018-2021'
                 },
                 {
                   course:'HSC',
                   college: 'Govt. Hr. Sec. School',
                   place: 'Sendamaram',
                   year: '2017-2018'
                 }
                 ]);

                 const skillsData = ref([
  { 
    id:1,
    imageUrl: htmlImage,
    name: 'HTML',
    proficiencyLevel: 'Advanced',
    description: 'Proficient in crafting semantic, accessible HTML5 structures, ensuring clean and maintainable code for web applications.'
  },
  {
    id:2,
    imageUrl: cssImage,
    name: 'CSS',
    proficiencyLevel: 'Advanced',
    description: 'Experienced in designing responsive and visually appealing layouts using CSS3, including Flexbox and Grid.'
  },
  {
    id:3,
    imageUrl: jsImage,
    name: 'JavaScript',
    proficiencyLevel: 'Intermediate',
    description: 'Skilled in modern JavaScript, capable of developing interactive and dynamic web applications, utilizing features like arrow functions, methods, objects, Functions and modules for efficient code organization.'
  },
  {
    id:4,
    imageUrl: vueImage,
    name: 'Vue.js',
    proficiencyLevel: 'Intermediate',
    description: 'Capable of developing dynamic single-page applications using Vue.js, in components, reactivity, and lifecycle hooks.'
  },
  {
    id:5,
    imageUrl: routerImage,
    name: 'Vue Router',
    proficiencyLevel: 'Intermediate',
    description: 'Proficient in implementing client-side routing in Vue.js applications, enabling navigation between views with nested routes and route guards.'
  },
  {
    id:6,
    imageUrl: piniaImage,
    name: 'Pinia',
    proficiencyLevel: 'Intermediate',
    description: 'Skilled in state management using Pinia, managing application state efficiently and ensuring seamless data flow across components.'
  },

  {
  id: 7,
  imageUrl: csImage,
  name: 'C#',
  proficiencyLevel: 'Intermediate',
  description: 'Proficient in C# programming for developing robust and efficient back-end solutions.'
},
{
  id: 8,
  imageUrl: aspImage,
  name: 'ASP.NET MVC',
  proficiencyLevel: 'Intermediate',
  description: 'Experienced in developing web applications using the ASP.NET MVC framework, following the Model-View-Controller pattern.'
},
{
  id: 9,
  imageUrl: phpImage,
  name: 'PHP',
  proficiencyLevel: 'Intermediate',
  description: 'Competent in using PHP for server-side scripting and building dynamic web applications.'
},
{
  id: 10,
  imageUrl: sqlImage,
  name: 'SQL',
  proficiencyLevel: 'Advanced',
  description: 'Strong understanding of SQL for designing, querying, and managing relational databases, including optimization techniques.'
},
  
  {
    id:11,
    imageUrl: gitImage,
    name: 'Git',
    proficiencyLevel: 'Basic',
    description: 'Proficient in version control using Git, including basic commands for repository management, branching, and collaboration.'
  }
]);


                
 </script>

<style scoped>
.mich {
    background-image: url('@/assets/back1.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh; /* Adjust the height as needed */
}

.headcontainer {
    display: flex;
    flex-direction: column; /* Change to column on smaller screens */
    align-items: center;
    width:100%; /* Center content */
}

.h-left{
width: 70%;
margin-right: 480px;
}
.h-right {
    width: 30%;
     /* Full width on smaller screens */
    
}

.image {
    width: 200px; /* Adjust image size */
    height: 200px; /* Adjust image size */
    border-radius: 50%;
    object-fit: cover;
    margin: 20px 0; /* Adjust spacing */
}

.download-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.download-button i {
    margin-right: 5px;
}

/* Media Queries */
@media (min-width: 768px) {
    .headcontainer {
        flex-direction: row; /* Align items in a row on larger screens */
    }

    .h-left {
        width: 50%;
        margin-right: 30px;
        margin-top: 50px;
    }

    .h-right {
        width: 50%;
    }

    .image {
        width: 250px;
        height: 250px;
        margin-left: 80px;
        margin-top: 80px;
    }
}

@media (max-width: 480px) {
    .image {
        width: 150px;
        height: 150px;
        margin-left: 0;
        margin-top: 30px;
    }

    .download-button {
        padding: 8px 16px;
    }
}
</style>
