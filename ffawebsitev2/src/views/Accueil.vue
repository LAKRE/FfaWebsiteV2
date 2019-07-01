<template>
  <div >
    <div class="main">
      <div class = "ffa-home">
        <transition appear name="fade1">
          <div class="ffa_label-ff">FreeFight</div>
        </transition>
        <transition appear name="fade2">
          <div class="ffa_label-a">Academy</div>
        </transition>
      </div>
    </div>
      <transition  name="slide-fade">
        <div class= "block1" v-show ="intro.position < scrollPosition">
          <span class="title">Le Club</span>
          <div class="line">
            <p  class="text">Créé en 1997 par Mathieu Nicourt et un noyau de passionnés de sports de combat, 
              la Free Fight Academy compte aujourd'hui plus de 150 licenciés. Elle propose plusieurs activités à ses adhérents (Mixed Martial Arts,
              Pancrace, Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir, hommes et 
                femmes recherchant une méthode d'entretien physique ou de self-défense. 
            </p>
            <img  src="../../public/img/professors/mathieu.jpg">
          </div>
        </div>
        </transition>
        
        <transition  name="slide-fade">
          <div class= "block2" v-show ="mma.position < scrollPosition">
            <span class="title">Mixed Martial &nbsp;Arts</span>
            <div class="line">
              <img  src="../../public/img/mma/sergiu.jpg">
              <p class="text"><br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
            </div>
          </div>
        </transition>
        
        <transition  name="slide-fade">
           <div class= "block3" v-show ="thai.position < scrollPosition">
            <span class="title">Boxe Thai</span>
            <div class="line">
              <p class="text">MMA<br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
              <img  src="../../public/img/professors/franck.jpg">
            </div>
           </div>
        </transition>

        <transition  name="slide-fade">
           <div class= "block4" v-show ="luta.position < scrollPosition">
            <span class="title">Grappling/LutaLivre</span>
            <div class="line">
              <img  src="../../public/img/professors/nico_nb.jpg">
              <p class="text">MMA<br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
            </div>
           </div>
        </transition>

    <div class="footer">
    </div>
  </div>
</template>

<script>

import {Transitions} from 'vue-flux';


export default {
  name: 'Accueil',
  components:{
    Transitions
  },
  created(){
     // window.onscroll=this.scrolled;
     document.addEventListener('scroll',this.scrolled,true);
   },
   beforeDestroy(){
     document.removeEventListener('scroll',this.scrolled,true);
   },

  data:()=>{
    return{
      show:false,
      scrollPosition:0,
      intro:{
        position:350,
        show:false
        },

      mma:{
        position:900,
        show:false
        },

      thai:{
        position:1700,
        show:false
        },

      luta:{
      position:2400,
      show:false
      },
    }
  },

  
  methods:{
      scrolled(){
        console.log('evt',window.scrollY);
        this.scrollPosition=window.scrollY;
        console.log('show',this.scrollPosition);
      },

  }

}
</script >

<style scoped lang="scss">
 
  @font-face{
    font-family: "Shogun";
    src: url("../../public/font/livin-hell_shoguns-clan/Shoguns Clan.ttf");
  }

    .block{
      margin-top: 5em;
    }

    .block1{
      margin-top: 5em;
      background-image: url("../../public/img/wallpaper/ffaTeamBackground_opacity.png");
      background-size: 100%;
      background-position: center;
    }

    .block2{
      margin-top: 5em;
      display: inline-block;
      background-image: url("../../public/img/wallpaper/mma2.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
    }

    .block3{
      margin-top: 5em;
      background-image: url("../../public/img/wallpaper/thai_opacity.png");
      background-position: center;
    }

    .block4{
      margin-top: 5em;
      background-image: url("../../public/img/wallpaper/grappling1.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
    }


    .title{
      font-family: "Shogun";
      font-size: 5em;
      color:yellow;
      font-size: 4em;
      letter-spacing: 0.05em;
       text-shadow: 1px 1px 1px black;
       text-rendering: optimizeLegibility;
       -webkit-font-smoothing: antialiased;
    }

  .line {
    display:flex;
    padding-right: 5em;
    flex-wrap: nowrap;
    margin-top: 1em;
    height: 30em;
    width: 95%;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;

    p{
      flex-grow:2;
    }

    img{
      position: relative;
      border: 1px;
      border-style: double;
      border-color: white;
      min-height: 0;
      max-width: 30%;
    }
  }


  .main{
    width:100%;
    height:42em;
    background-image: url("../../public/img/FfaNicourtCebanFilipponi.jpg");
    background-position: center;
    background-size: cover;
    font-family: "Shogun";
    color:yellow;
    letter-spacing: 0.05em;
    
    .ffa-home{
       position:relative;
       top:0.6em;
       font-size: 9em;
       text-shadow: 1px 1px 1px  rgb(5, 5, 5);
       text-rendering: optimizeLegibility !important;
       -webkit-font-smoothing: antialiased !important;
      .ffa_label{

        &-ff{
          padding-left: 0.2em;
          
        }

        &-a{
          padding-left: 1em;
        }
      }
    }
  }

  .text{
    position:relative;
    text-align: center;
    padding-left: 5em;
    padding-right: 5em;
    font-size:1.3em;
    color:white;
     text-shadow: 1px 1px 1px  rgb(5, 5, 5);
     text-rendering: optimizeLegibility !important;
     -webkit-font-smoothing: antialiased !important;

  }

  .fade1-enter {
  opacity: 0;
  }
  .fade1-enter-active, .fade-leave-active {
  transition: opacity 5s;
  }

  .fade2-enter {
  opacity: 0;
  }
  .fade2-enter-active, .fade-leave-active {
  transition: opacity 5s;
  }

  .slide-fade-enter-active {
  transition: all 1s ease;
  
 }
 .slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(-50px);
  opacity: 0;
 }
 
</style>
