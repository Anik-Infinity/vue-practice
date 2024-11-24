<template>
  <section class="user-data">
    <h2>Add New User</h2>
    <input
      type="text"
      placeholder="Enter Name"
      v-model="enteredName"
      class="input"
    />
    <input
      type="number"
      placeholder="Enter Age"
      v-model="enteredAge"
      class="input"
    />
    <button @click="submitUserData" class="button">Add User</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  emits: ["submit-user"],
  methods: {
    submitUserData() {
      if (this.enteredName && this.enteredAge) {
        this.$emit("submit-user", {
          id: this.enteredName,
          name: this.enteredName,
          age: Number(this.enteredAge),
        });
        // Clear the form after submission
        this.enteredName = "";
        this.enteredAge = "";
      }
    },
  },
};
</script>

<style scoped>
.user-data {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.1);
}

/* Remove spinner from number input */
.input[type="number"]::-webkit-inner-spin-button,
.input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #3aa876;
}

.button:active {
  background-color: #359469;
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}
</style>
