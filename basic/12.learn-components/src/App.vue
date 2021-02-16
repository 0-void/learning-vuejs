<template>
  <div>
    <friend-contact
      v-for="friend of friends"
      :key="friend.key"
      :name="friend.name"
      :email="friend.email"
      :phone-number="friend.phoneNumber"
    ></friend-contact>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "suki",
          phoneNumber: "1212341234192743",
          email: "test@test.com",
        },
        {
          id: 2,
          name: "mathi",
          phoneNumber: "1341234192743",
          email: "test@google.com",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
