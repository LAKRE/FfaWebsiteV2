<template>
  <div >
        <transition appear name="fade1">
          <div class = "discipline thai">
            <div class="title">>Boxe Thai</div>
            <p class="text"><br/>Boxe Thai, Grappling, Lutte Libre & Jiu-Jitsu Brésilien). La Free Fight Academy est gérée par une équipe de professeurs
                  diplômés d'Etat. Elle entraïne une équipe de combattants professionnels mais s'adresse aussi aux pratiquants loisir</p>
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
      thai:{
        position:0,
        show:true
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

   .thai{
      // margin-top: 2em;
      // padding-top: 2em;
      // padding-bottom: 2em;
      background-image: url("../../public/img/wallpaper/thai_opacity.png");
      background-position: center;
      // background-position: center;
      clip-path:polygon(0 0, 100% 0, 100% 80%, 0 100%);
    }

    .discipline{
      padding-top: 7em;
      display:flex;
      flex-direction: column;
      align-items:center;
      height: 22em;
      //clip-path:polygon(0 0, 100% 0, 100% 80%, 0 100%);
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
