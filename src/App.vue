<template>
  <div class="header">
    
    <div class="menuleft">
      <h1 class="h1">Micheal Xavier A</h1>
   </div>

    <div class="menuright">
      <nav class="menu-bar">
        <router-link to="/home" class="nav-link">Home</router-link>
        <router-link to="/project" class="nav-link">Project</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        
      </nav>
    </div>

  </div>
  
  <div>
    <router-view/>
  </div>
  

  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 MICHEAL XAVIER A</p>
    </div>
  </footer>
</template>







<style scoped>
.header {
     background-image: url('assets/back2.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px; /* Add padding to maintain space around content */
    width: 100%;
}

.menuright {
    width: 50%; /* Full width by default */
    max-width: 50%; /* Max width set to 50% of parent for larger screens */
    
}

.menuleft {
    width: 50%; /* Full width by default */
    max-width: 50%; /* Max width set to 50% of parent for larger screens */
  
}

.h1 {
    text-align: left;
    font-family: 'Times New Roman', Times, serif;
    color: rgb(0, 0, 0);
    margin-top: 20px; /* Adjust top margin for better spacing */
    margin-bottom: 10px; /* Adjust bottom margin for better spacing */
}

.body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
}

.para {
    font-size: 25px;
    position: static;
}

.menu-bar {
    display: flex;
    flex-direction: column; /* Change to column on smaller screens */
}

.nav-link {
    margin-right: 0; /* Remove margin between menu items for smaller screens */
    margin-bottom: 10px; /* Add margin between menu items vertically */
    text-decoration: none;
    color: #000000;
    position: relative;
    font-size: 40px; /* Decrease font size for smaller screens */
    flex-shrink: 0;
    width: 30%; /* Full width for menu items */
    text-align: center; /* Center align text */
}

.nav-link:hover {
    text-decoration: none;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 30px;
    width: 70%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
}

.nav-link:hover::after {
    background-color: rgb(255, 255, 255);
}


.footer {
    margin-top: 20px; /* Adjust top margin for better spacing */
    background-image: url('./assets/footer.png');
    background-repeat: no-repeat;
    background-size: cover; /* Ensure the background image covers the entire footer */
    color: #fff;
    padding: 20px;
    text-align: center;
}

.footer-content {
    display: flex;
    flex-direction: row; /* Ensure items are aligned horizontally */
    justify-content: center; /* Center align content horizontally */
    align-items: center; /* Center align content vertically */
    text-align: center;
    color: #000000;
    margin-top: 200px; /* Adjust top margin for better spacing */
}

.footer-content p {
    margin: 0;
}
</style>

<!-- Media Queries -->
<style scoped>
@media (min-width: 768px) {
    .header {
        flex-direction: row; /* Align items in a row on larger screens */
        align-items: center; /* Center align items vertically */
        justify-content: space-between; /* Ensure space between header items */
    }

    .menuright, .menuleft {
        max-width: 50%; /* Limit max width to 50% on larger screens */
    }

    .menu-bar {
        flex-direction: row; /* Display menu items in a row on larger screens */
    }

    .nav-link {
        margin-right: 30px; /* Restore margin between menu items */
        margin-bottom: 0; /* Remove margin bottom for menu items */
        font-size: 25px; /* Increase font size for larger screens */
    }

    .footer-content {
        flex-direction: row; /* Align items in a row on larger screens */
    }
}

@media (max-width: 767px) {
    .menuright, .menuleft {
        max-width: 100%; /* Full width for menu items on smaller screens */
        margin: 10px; /* Adjust margin for better spacing */
    }

    .menu-bar {
        flex-direction: column; /* Display menu items in a column on smaller screens */
    }

    .nav-link {
        font-size: 18px; /* Further decrease font size for smaller screens */
    }

    .footer {
        background-size: contain; /* Adjust background size to fit content on smaller screens */
    }

    .footer-content {
        flex-direction: column; /* Change to column layout on smaller screens */
        margin-top: 50px; /* Adjust top margin for better spacing */
    }
}
</style>
