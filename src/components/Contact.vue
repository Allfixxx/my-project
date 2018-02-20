<template>

  <div class="wrapper">

    <div class="navBackground"></div>

    <div class="contactForm">

      <form @submit.prevent="submitForm" novalidate v-if="!isSubmitted">

        <div>
          <label for="firstname">First name</label>
          <input type="text" v-model.lazy="form.firstname" id="firstname" v-validate="'required'" name="firstname">
          <span v-show="errors.has('firstname')" class="help is-danger">{{ errors.first('firstname') }} </span>
        </div>

        <div>
          <label for="email">Email</label>
          <input type="text" v-model.lazy="form.email" id="email" v-validate="'required|email'" name="email">
          <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </div>
        <div>
          <label for="subject">Choose a subject</label>
          <select name="subject" id="subject" v-model="subject">
            <option>Problem with payment</option>
            <option>Problem with an order</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label for="email">Email</label>
          <textarea rows="6" cols="75" type="text" v-model.lazy="form.textarea" id="textarea" v-validate="'required'" name="textarea"></textarea>
          <span v-show="errors.has('textarea')" class="help is-danger">{{ errors.first('textarea') }}</span>
        </div>

        <button type="submit" :disabled="errors.any()">Submit</button>

      </form>

      <div v-else>
        Thanks for submitting!
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'my-form',
    data: function () {
      return {
        form: {
          firstname: '',
          email: ''
        },
        isSubmitted: false
      }
    },
    methods: {
      submitForm: function () {
        this.isSubmitted = true;
        this.form = null;
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
