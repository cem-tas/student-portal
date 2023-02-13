<template>
    <div class="change-password">
      <form @submit.prevent="submitHandler">
        <div class="form-group">
          <label>Old Password</label>
          <input type="password" v-model="oldPassword" />
          <p v-if="errorOldPassword" class="error-message">Incorrect old password</p>
        </div>
        <div class="form-group">
          <label>New Password</label>
          <input type="password" v-model="newPassword" />
          <p v-if="errorPasswordLength" class="error-message">Password must be at least 8 characters long</p>
          <p v-if="errorPasswordNumber" class="error-message">Password must contain at least one number</p>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" v-model="confirmPassword" />
          <p v-if="errorPasswordMatch" class="error-message">Passwords do not match</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        errorOldPassword: false,
        errorPasswordLength: false,
        errorPasswordNumber: false,
        errorPasswordMatch: false
      };
    },
    methods: {
      submitHandler() {
        this.errorOldPassword = false;
        this.errorPasswordLength = false;
        this.errorPasswordNumber = false;
        this.errorPasswordMatch = false;
  
        if (!this.checkOldPassword(this.oldPassword)) {
          this.errorOldPassword = true;
          return;
        }
  
        if (!this.checkPasswordLength(this.newPassword)) {
          this.errorPasswordLength = true;
          return;
        }
  
        if (!this.checkPasswordNumber(this.newPassword)) {
          this.errorPasswordNumber = true;
          return;
        }
  
        if (!this.checkPasswordMatch(this.newPassword, this.confirmPassword)) {
          this.errorPasswordMatch = true;
          return;
        }
  
        // Add code here to submit the form
      },
      checkOldPassword(password) {
        // Add code here to check if the old password is correct
        return true;
      },
      checkPasswordLength(password) {
        return password.length >= 8;
      },
      checkPasswordNumber(password) {
        return /\d/.test(password);
      },
      checkPasswordMatch(password, confirmPassword) {
        return password === confirmPassword;
      }
    }
  };
  </script>
  
  <style scoped>
  .change-password {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .form-control {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 1rem;
  }
  
  .form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .error {
    color: #dc3545;
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
  
  .submit-button {
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    transition: all 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0069d9;
  }
  
  .submit-button:active {
    transform: scale(0.95);
  }
  
  .submit-button:disabled {
    background-color: #ddd;
    color: #333;
    cursor: not-allowed;
  }
</style>