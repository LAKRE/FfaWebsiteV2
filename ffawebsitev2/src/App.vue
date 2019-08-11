<template>
    <div>
      <header class= "banner">
        <span class = "link" @click = "redirect({routerLink:'accueil'})">Accueil</span>
        <span>
        <DropdownVue  :options="martialArtsArray"  :selected="martialArtsTitle" v-on:updateOption="redirect"></DropdownVue>
        </span>
        <span class= "link" @click = "redirect({routerLink:'horaire'})">Horaires/Lieux</span>
        <DropdownVue  :options="signUpArray"  :selected="signUpTitle" v-on:updateOption="redirect"></DropdownVue>
      </header>
      <router-view></router-view>
      <footer class= "banner" v-show ="footer.position < scrollPosition" > 
        <span class = "link" @click = "redirect({externalLink:url.facebook})">Facebook</span>
        <span>
        </span>
        <span class= "link" @click = "redirect({routerLink:'horaire'})">Nous-Contacter</span>
        <span class= "link" @click = "redirect({routerLink:'horaire'})">Mentions Légales</span>
      </footer>
    </div>
</template>

<script>

import DropdownVue from './components/Dropdown';
import router from './router';
export default {
  name: 'app',
  components: {
    DropdownVue,
    router
  },
  created(){
     // window.onscroll=this.scrolled;
     document.addEventListener('scroll',this.scrolled,true);
   },
   beforeDestroy(){
     document.removeEventListener('scroll',this.scrolled,true);
   },
  data:() =>{return {
    url:{
      facebook : 'https://fr-fr.facebook.com/pages/category/Gym-Physical-Fitness-Center/Mathieu-Nicourt-Free-Fight-Academy-106360246605658/',
    },
    martialArtsArray:[{name :'Mma', routerLink :'mma'},
                    {name : 'Boxe Thaï', routerLink :'boxeThai'}, 
                    {name : 'Grappling', routerLink :'grappling'}
                  ],
    martialArtsTitle:{
      name:'Disciplines'
    },
    signUpArray:[{name :'Paris', externalLink: 'https://www.e-cotiz.com/app/site/575-FFAparis13&a=aymQus2cKYw6fjC11V25wojm7jhyEbZkdzQvOU-qMNQ'},
                    {name : 'Vitry', externalLink :'https://www.e-cotiz.com/app/site/575-FFAparis13&a=aymQus2cKYw6fjC11V25wojm7jhyEbZkdzQvOU-qMNQ'}
                  ],
    signUpTitle:{
      name:'Inscription'
    },
    scrollPosition:0,
      footer:{
        position:2400,
        show:true
      }
    
    }
  },

  methods:{
    redirect(page){
      console.log(page)
      if(page.routerLink!==undefined){
         router.push({name : page.routerLink});
      }
      if(page.externalLink!==undefined){
        window.location.href = page.externalLink;
      }
    },
    scrolled(){
        console.log('evt',window.scrollY);
        this.scrollPosition=window.scrollY;
        console.log('show',this.scrollPosition);
      },
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
height: 200em;
}
.banner{
    display: flex;
    font-size: 1.3em;
    height: 4.5em;
    width: inherit;
    justify-content: space-between;
    align-items: center;
}

.link{
      font-family: "Roboto";
      padding: 10px;
      height: auto;
      transition: background 1s ease-out;
      cursor: pointer;
      color: grey;
}

.link:hover{
  background: #e1e1e1;
}


.link{
      /*color:grey;*/
    }


  
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
