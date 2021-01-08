<template>
  
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h2> {{ name }} </h2>

    <div class="img-wrapper"> 
      <img id="img-logo" alt="Vue logo" src="../assets/center.png" />
     
     

      <div class="social" >
        <span><instagram :url="url" subject="Hello" scale="3"></instagram></span>
        <span><twitter :url="url" title="Check me on Github" scale="3"></twitter></span>
        <span><snapchat :url="url" subject="Hello" scale="3"></snapchat></span>
        <span><email :url="url" subject="Hello" scale="3"></email></span>
        <!-- <p v-for="(value, propertyName) in soci" :key="value.id" >
          {{ propertyName }}: {{ value }}
        </p> -->
      </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    </div>      
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import axios from "axios";
import Twitter from '@/components/Twitter';
import Email from '@/components/Email';
import Instagram from '@/components/Instagram';
import Snapchat from '@/components/Snapchat';

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Header,
    Twitter,
    Email,
    Snapchat,
    Instagram
  },

  data () {
    return {
      name: "",
      soci: "",
      sharing: {
        url: 'https://news.vuejs.org/issues/180'
      },
      networks: [
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' }
      ]
    }
  },

created () {
  axios.get("https://hirng-x2021.glitch.me/api")
  .then( res => {
    // console.log(res)
    const data = res.data
    // console.log(data)
    const socials = []
    
    for (let key in data) {
      const social = data[key]
      // social.id = key
      socials.push(social)
    }
  
    // console.log(socials)
    // console.log(socials[0])
    console.log(socials[1])
    this.name = socials[0]
    this.soci = socials[1]
    })
  .catch(error=> console.log(error))
}
};
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    min-height: 100vh;
}

.img-wrapper{
  position: relative;
}
.social{
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 2rem;
  position: absolute;
  right: 1%;
  top: 25%;
  /* float: right;*/
} 

#img-logo {
    
    justify-content: center;
    align-items: center;
-webkit-box-shadow: -9px -1px 27px 0px rgba(50, 50, 50, 0.64);
-moz-box-shadow:    -9px -1px 27px 0px rgba(50, 50, 50, 0.64);
box-shadow:         -9px -1px 27px 0px rgba(50, 50, 50, 0.64);
}

h2{
  justify-content: str-length($string: "6");
  font-size: 30px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight:lighter;
  font-style: normal;
  font-variant: normal;
  letter-spacing: 15px;
  margin-right: -60px;
}

Header{
  display: flex;
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  text-decoration: none;

  color: #FFFFFF;
} 

/* input{
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    height: 60px;
    width: 100%;
}  */

</style>