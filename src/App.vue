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
  background-image: url('assets/back1.jpg');
  /*background-color:#ffd000ea;*/
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
}



  .menuright{
    width: 60%;
    margin-right: 20px;
    margin-top: 20px;
    margin-left: 90px;

  }
  .menuleft{
    width: 40%;
    margin-left: 20px;
  }


.h1{
      text-align: left;
      font-family: 'Times New Roman', Times, serif;
      color: rgb(0, 0, 0);
     
      
}
body, html {
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
}

.nav-link {
    margin-right: 30px; /* Adjust spacing between menu items */
    text-decoration: none;
    color: #000000; /* Adjust text color */
    position: relative;
    font-size: 30px;
    flex-shrink: 0;
    width: 120px; /* Fixed width for menu items */
}

.nav-link:hover {
    text-decoration: none;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 70%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
}

.nav-link:hover::after {
    background-color: rgb(255, 255, 255); 
}

.footer {
    margin-top: 2px;
    background-image:url('./assets/footer.png'); 
    background-repeat: no-repeat;
    
    color: #fff;
    padding: 20px; 
    text-align: center; 

}

.footer-content {
   margin-top: 190px;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    text-align: center;
    color: #000000;
}

.footer-content p {
    margin: 0; /* Remove default margin */
}




</style>


