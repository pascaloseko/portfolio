<template>
  <dir id="Header">
    <nav>
      <router-link to="/">
        <img src="logo-white.png" alt="no pic" class="logo">
      </router-link>

      <router-link to="/contact" class="items">Contact</router-link>
      <router-link to="/projects" class="items">Projects</router-link>
      <router-link to="/skills" class="items">Skills</router-link>
      <router-link to="/me" class="items">About Me</router-link>
    </nav>
  </dir>
</template>

<style lang="scss">

  #Header nav {
    width: 95%;
    color: white;
    min-height: 50px;
    font-family: teko;
  }

  #Header .logo {
    margin-left: 1.5em;
    margin-top:   0.6em;
    float: left;
    height: 35px;
  }

  #Header .items {
    margin-top: 1.4em;
    float: right;
    margin-left: 15px;
    outline: none;
    font-size: 19px;
    color: white;

    text-decoration: none;

      &:hover {
        outline: none;
        color: #1fee29;
        text-decoration: none;
      }

      &:focus {
        outline: none;
        color: #1fee29;
        text-decoration: none;
      }

      &:active {
        outline: none;
        color: #1fee29;
        text-decoration: none;
      }
  }
</style>
