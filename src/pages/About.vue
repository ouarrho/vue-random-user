<script>

  export default {
    name: 'AboutPage'
  }

</script>

<template>
  <div class="page">
    <div class="page-container" style="max-width: 40rem;padding-bottom: 4rem;">
      <h1>Random User Application</h1>
      <h2>Overview</h2>
      <p>The Random User application is a simple web application that retrieves a random user's information from the randomuser.me API and displays it on a card. The user can click on the "Randomize" button to generate a new random user's information.</p>
      <h2>Author</h2>
      <p>Ouarrho Oualid</p>
      <h2>Version</h2>
      <p>1.0.0</p>
      <h2>Technologies Used</h2>
      <p>The application is developed using the following technologies:</p>
      <ul>
        <li>JavaScript</li>
        <li>Vue.js framework</li>
        <li>CSS</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Features</h2>
      <p>The Random User application has the following features:</p>
      <ul>
        <li>The ability to retrieve a random user's information from the randomuser.me API</li>
        <li>The ability to display the user's information on a card</li>
        <li>The ability to generate a new random user's information by clicking on the "Randomize" button</li>
        <li>The ability to display the user's profile picture, name, email address, and phone number</li>
      </ul>
      <h2>Getting Started</h2>
      <p>To run the Random User application, follow these steps:</p>
      <ol>
        <li>Clone the repository to your local machine.</li>
        <li>Open the project in your preferred code editor.</li>
        <li>Run <code>npm install</code> in your terminal to install the project's dependencies.</li>
        <li>Run <code>npm run serve</code> in your terminal to start the application.</li>
        <li>Open your web browser and navigate to <code>http://localhost</code> to view the application.</li>
      </ol>
      <h2>Code Structure</h2>
      <p>The Random User application is structured as follows:</p>
      <ul>
        <li><code>src/main.js</code>: The entry point of the application.</li>
        <li><code>src/layouts/App.vue</code>: The root component of the application.</li>
        <li><code>src/components/Card.vue</code>: The component responsible for retrieving the user's information from the randomuser.me API and displaying the user's information on a card.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>The Random User application is a simple, yet effective example of how to retrieve and display data from an API using Vue.js. By following the steps outlined in this documentation, you should be able to run the application on your local machine and experiment with its features.</p>
    </div>
  </div>
</template>
