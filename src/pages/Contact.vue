<script>

  export default {
    name: 'ContactPage',
    methods: {
      submit: function (){
        alert('your message has been sent')
      }
    }
  }

</script>

<template>
  <div class="page">
    <div class="page-container">

      <form @submit.prevent="submit">
        <div style="font-size:2.4rem;text-align: center;">Contact Us</div>

        <input placeholder="your name..." type="text" name="name">

        <input placeholder="your email..." type="email" name="email">

        <button type="submit" class="btn btn-primary">Send Your Message</button>
      </form>
    </div>
  </div>
</template>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 32em;
    padding: 4rem 1rem;
  }

  form input {
    width: 100%;
    font-size: 1.4rem;
  }
</style>