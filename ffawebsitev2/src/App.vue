<template>
    <div id>
      <header>
        <span class= "link">Accueil</span><span><DropdownVue  :options="arrayOfObjects"  :selected="object"></DropdownVue></span><span class= "link">Horaires/Lieux</span><span class= "link">Inscription</span>
      </header>
      <router-view></router-view>
    </div>
</template>

<script>

import DropdownVue from './components/Dropdown'
export default {
  name: 'app',
  components: {
    DropdownVue
  },
  data:() =>{return {

    arrayOfObjects:[{name:'Mma'}, {name: 'Boxe Thaï'}, {name:'Grappling'}],
    object:{}
    }
  } 
}
</script>

<style>
body{
color: white;
padding-left: 5em;
padding-right: 5em;
background-color:black;
background-image: linear-gradient(to right, black , rgb(15, 15, 15));
height: 125em;
}
header{
    display: flex;
    height: 4.5em;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

.link{
      color:grey;
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
