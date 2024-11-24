# App.vue
<template>
  <div class="container">
    <!-- Left side - Fixed -->
    <div class="section section-fixed">
      <user-data @submit-user="handleUserDataInput" />
    </div>

    <!-- Right side - Scrollable -->
    <div class="section section-scroll">
      <div class="scroll-container">
        <active-user
          v-for="friend in friends"
          :key="friend.id"
          :name="friend.name"
          :age="friend.age"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          age: 30,
        },
      ],
    };
  },
  methods: {
    handleUserDataInput(userData) {
      this.friends.push(userData);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh; /* Use full viewport height */
}

.section {
  flex: 1;
  min-width: 0;
}

/* Fixed section styles */
.section-fixed {
  position: sticky;
  top: 2rem; /* Matches container padding */
  height: fit-content;
  max-height: calc(100vh - 4rem); /* Account for padding */
}

/* Scrollable section styles */
.section-scroll {
  max-height: calc(100vh - 4rem); /* Account for padding */
  overflow: hidden; /* Hide overflow */
}

.scroll-container {
  height: 100%;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 1rem; /* Add space for scrollbar */
}

/* Scrollbar styling */
.scroll-container::-webkit-scrollbar {
  width: 8px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Rest of the styles remain the same */
.active-user,
.user-data {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.active-user {
  margin-bottom: 1rem;
}

.active-user:last-child {
  margin-bottom: 0;
}

.active-user h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.active-user h3 {
  color: #34495e;
  font-weight: normal;
}

.user-data input {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.user-data input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.1);
}
</style>