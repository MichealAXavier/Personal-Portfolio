<template>
  <div class="contact-container">
    <h1 class="headbg">Contact Me</h1>
    <div class="contact-content">
      <div class="contact-boxes">
        <a href="https://www.linkedin.com/in/michealxaviera/" target="_blank" class="contact-box">
          <img src="@/assets/linkedin.png" alt="LinkedIn" />
          LinkedIn
        </a>
        <a href="https://github.com/MichealAXavier" target="_blank" class="contact-box">
          <img src="@/assets/github.png" alt="GitHub" />
          GitHub
        </a>
        <a href="https://michealxavier.w3spaces.com" target="_blank" class="contact-box">
          <img src="@/assets/portfolio.jpg" alt="Portfolio" />
          Portfolio
        </a>
        <a href="mailto:armxavier13@gmail.com" class="contact-box">
          <img src="@/assets/gmail.jpg" alt="Email" />
          Gmail
        </a>
      </div>
      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" v-model="form.subject" required />
        </div>
        <button type="submit" class="send-button">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: ''
      }
    };
  },
  methods: {
    sendEmail() {
      const { name, email, subject } = this.form;
      const mailtoLink = `mailto:armxavier13@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(subject)}`;
      window.location.href = mailtoLink;
    }
  }
};
</script>

<style scoped>
.contact-container {
  text-align: center;
  padding: 20px;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-boxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
}

.contact-box {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
}

.contact-box:hover {
  background-color: #e0e0e0;
}

.contact-box img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.contact-form {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.send-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #0056b3;
}

/* Media Queries */
@media (max-width: 768px) {
  .contact-boxes {
    flex-direction: column;
    align-items: center;
  }

  .contact-box {
    width: 100%;
    max-width: 250px;
  }

  .contact-form {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .contact-box {
    padding: 10px;
  }

  .form-group input {
    padding: 6px;
  }

  .send-button {
    padding: 8px 16px;
  }
}
</style>
