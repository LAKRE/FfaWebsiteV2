<template>
  <div >
        <transition appear name="fade1">
          <div class= "mma">
            <span class="title">Mixed Martial &nbsp;Arts</span>
            <div class="line">
              <!--<img  src="../../public/img/mma/sergiu.jpg">-->
              <p class="text"><br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
            </div>
          </div>
        </transition>
        
        <transition  name="slide-fade">
           <div class= "thai" v-show ="thai.position < scrollPosition">
            <span class="title">Boxe Thai</span>
            <div class="line">
              <p class="text">MMA<br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
              <!--<img  src="../../public/img/professors/franck.jpg">-->
            </div>
           </div>
        </transition>

        <transition  name="slide-fade">
           <div class= "grappling" v-show ="luta.position < scrollPosition">
            <span class="title">Grappling/LutaLivre</span>
            <div class="line">
              <!--<img  src="../../public/img/professors/nico_nb.jpg">-->
              <p class="text">MMA<br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
            </div>
           </div>
        </transition>
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
      mma:{
        position:0,
        show:true
        },

      thai:{
        position:300,
        show:false
        },

      luta:{
      position:750,
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

    .mma{
      margin-top: 2em;
      padding-top: 2em;
      padding-bottom: 2em;
      background-image: url("../../public/img/wallpaper/mma2.png");
      background-position: center;
     //  background-size: 100%;
      clip-path:polygon(0 20%, 100% 0, 100% 80%, 0 100%);
    }

    .thai{
      margin-top: 2em;
      padding-top: 2em;
      padding-bottom: 2em;
      background-image: url("../../public/img/wallpaper/thai_opacity.png");
      background-position: center;
      clip-path:polygon(0 20%, 100% 0, 100% 80%, 0 100%);
    }

    .grappling{
      margin-top: 2em;
      background-image: url("../../public/img/wallpaper/grappling1.png");
      background-position: center;
      background-size: 100%;
      clip-path:polygon(0 20%, 100% 0, 100% 80%, 0 100%);
    }


    .title{
      font-family: "Shogun";
      font-size: 5em;
      color:yellow;
      font-size: 4em;
      letter-spacing: 0.05em;
      text-align: right;
       text-shadow: 1px 1px 1px black;
       text-rendering: optimizeLegibility;
       -webkit-font-smoothing: antialiased;
    }

  .line {
    display:flex;
    padding-right: 5em;
    flex-wrap: nowrap;
    margin-top: 1em;
    height: 20em;
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
  transition: opacity 3s;
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
