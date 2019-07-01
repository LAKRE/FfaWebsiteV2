<template>
    <div id>
      <header>
        <span><a href="/#/">Accueil</a></span><span><a href="/#/disciplines">Disciplines</a></span><span><a href="/lieuxHoraires">Horaires/lieux</a></span></span><span><a href="/inscription">Inscription</a></span>
      </header>
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
body{
color: white;
background-color:black;
background-image: linear-gradient(to right, black , rgb(15, 15, 15));
height: 250em;
}
header{
    display: flex;
    height: 4.5em;
    width: 100%;
    justify-content: center;
    align-items: center
    
  }
span{
    font-size: 1.3em;
    font-family: "Roboto";
    margin-left: 10em;
    color: yellow;
}
  
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
