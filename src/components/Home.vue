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
            <button class="download-button">Hire Me!</button>
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
import gitImage from '../assets/git.png';

import { ref } from 'vue';
const summary = ref([
  'Hello and welcome to my blog! I am thrilled to share my journey, experiences, and insights with you. As a recent MCA graduate, I am passionate about web development and excited to pursue a career as a Software developer'
  ]);

  const profess = ([
    'Passionate and skilled frontend developer fresh out of university, well-versed in HTML5, CSS3, JavaScript and VueJs3 . Excited to apply my knowledge to create engaging web interfaces. Quick learner, committed to staying updated on the latest frontend trends. Strong team player, eager to collaborate and contribute to innovative projects in a dynamic setting, aiming for professional growth'
  ]);

  const skillsummary = ([
    'Skilled in building dynamic and responsive web applications using Vue.js, Vue Router, and Pinia for state management. Proficient in HTML5, CSS3, and JavaScript.'
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
    id:7,
    imageUrl: gitImage,
    name: 'Git',
    proficiencyLevel: 'Basic',
    description: 'Proficient in version control using Git, including basic commands for repository management, branching, and collaboration.'
  }
]);


                
 </script>

<style scoped>
.mich {
    background-image: url('@/assets/back.jpg');
   
    background-size: cover;
    background-position: center;
    
}
.headcontainer{
     display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
}
.h-left {
    width: 50%;
    margin-right: 150px;
    margin-top: 30px;
}

.h-right {
    width: 50%;
    
}

.image {
    margin-left: 80px;
    margin-top: 80px;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    object-fit: cover;
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
</style>
