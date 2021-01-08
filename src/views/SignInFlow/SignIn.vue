<template>
    <div class="container">
    <div class="login"> 
        <img src="@/assets/Rectangle 6.svg">
        <h4> Sign into Design+Code HQ</h4>
        <input>
        <input>
    </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn"
    };
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
}

.login{
 
}

h4{
    margin: 0;
    line-height: 34px;
    font-size: 24px;
    text-align: center;

    color: #FFFFFF;
}

input{
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    height: 60px;
    width: 100%;
}
</style>