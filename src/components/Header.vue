<template>
<div id="nav">
      <router-link to="/" style="t">HOME</router-link> 
      <router-link to="/about">ABOUT</router-link> 
      <img alt="Vue logo" src="../assets/cent.png" />
      <router-link to="/gallery">GALLERY</router-link> 
      <router-link to="/contact">CONTACT</router-link> 
</div>
</template>

<script>
    export default {
      name: "Header"  
    };
</script>

<style lang="scss" scoped>

#nav{

    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    margin: 0 270px 0 330px;
    align-items: center;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 18px;
    font-weight: lighter;
    font-style: normal;
    font-variant: normal;
    letter-spacing: 3px; 
    text-decoration-color: transparent;
    
}
</style>