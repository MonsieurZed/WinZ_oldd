<template>
  <div class="nav">
    <div class="nav-content">
      <router-link to="/">
        <img class="logo" src="../assets/WinZ_logo.png" alt="WinZ Logo" />
      </router-link>
      <span>Your friendly OpenSource package manager.</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  background: rgb(223, 223, 223);
  margin: auto;
  width: 100%;
  height: 100px;
}
.nav-content {
  display: flex;
  height: 100%;
  width: 60%;
  margin: auto;
  align-items: center;
  justify-content: space-between;

  & span {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
  }
}
.logo {
  height: 40px;
  width: auto;
}
</style>
