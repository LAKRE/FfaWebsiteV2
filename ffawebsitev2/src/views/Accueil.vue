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
        <div class= "bloc club" v-show ="intro.position < scrollPosition">
          <div class="title">Le Club</div>
          <p class="text">Créé en 1997 par Mathieu Nicourt et un noyau de passionnés de sports de combat, 
              la Free Fight Academy compte aujourd'hui plus de 150 licenciés. Elle propose plusieurs activités à ses adhérents (Mixed Martial Arts,
              Pancrace, Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir, hommes et 
                femmes recherchant une méthode d'entretien physique ou de self-défense. 
          </p>
        </div>
        </transition>

        <transition  name="slide-fade">
        <div class = "bloc lieux" v-show ="lieux.position < scrollPosition">
          <div class = "title">Les lieux</div>
            <p class="text">Vitry ou Paris 13 eme arrondissement, ce seront vos arènes d'entraînement. 
            </p>
              <!--<div class="grid">
              <div>toto</div>
              <div>2toto</div>
              <div>3toto</div>
              <div>4toto</div>
              <div>1toto</div>
              <div>2totototo</div>
              <div>3toto</div>
              <div>4toto</div>
              <div>1toto</div>
              <div>2toto</div>
              <div>3toto</div>
              <div>4toto</div>
              <div>1</div>
              <div>2</div>
              <div>3toto</div>
              <div>4</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>-->
          </div>
        </transition>

        <transition appear name="slide-fade">
          <div class = "bloc mma" v-show ="mma.position < scrollPosition">
            <div class="title">Mixed Martial &nbsp;Arts</div>
            <p class="text"><br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
          </div>        
        </transition>

        <transition  name="slide-fade">
          <div class = "bloc thai" v-show ="thai.position < scrollPosition">
            <div class="title">>Boxe Thai</div>
            <p class="text"><br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
          </div>
        </transition>

        <transition  name="slide-fade" >
           <div class = "bloc grappling" v-show ="grappling.position < scrollPosition">
            <div class="title">Grappling / Luta-Livre</div>
            <p class="text"><br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
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
      show: false,
      scrollPosition: 0,
      intro:{
        position:250,
        show: false
        },
      lieux:{
        position:660,
        show: false
        },
      mma:{
        position: 1120,
        show: false
        },
      thai:{
        position: 1560,
        show: false
        },
      grappling:{
        position: 2050,
        show: false
        }
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
      background-image: url("../../public/img/wallpaper/ffaTeamBackground_opacity.png");
    }

    .block2{
      margin-top: 5em;
      background-image: url("../../public/img/club/vitry1.jpg");
      background-size: 100%;
      background-position: center;
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

  .grid{
      display:grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(4, 1fr);

      div{
        border: solid;
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
      display:flex;
      flex-direction: column;
       position: relative;
       top: 0.6em;
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

  .bloc{
      padding-top: 4em;
      display:flex;
      flex-direction: column;
      align-items:center;
      height: 24em;
      background-position: center;
      
    }
  
  .club{
    margin-top: 2em;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    background-image: url("../../public/img/wallpaper/ffaTeamBackground_opacity.png");
  }

  .mma{
    background-image: url("../../public/img/wallpaper/mma2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    clip-path:polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  }

  .thai{
    background-image: url("../../public/img/wallpaper/thai_opacity.png");
    background-position: center;
    clip-path:polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  }

  .grappling{
      // margin-top: 2em;
      background-image: url("../../public/img/wallpaper/grappling1.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      clip-path:polygon(0 20%, 100% 0, 100% 100%, 0 100%);
    }
  
  .lieux{
    padding-top: 5em;
    background-image: url("../../public/img/club/vitry1.jpg");
    background-position: center;
    background-size: 100%;
    clip-path:polygon(0 20%, 100% 0, 100% 80%, 0 100%);

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
