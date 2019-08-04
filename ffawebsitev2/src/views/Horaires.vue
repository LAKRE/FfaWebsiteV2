<template>
  <div >
    <transition appear name="fade1">
        <div class = "discipline lieux">
        <div class = "title">Les lieux</div>
            <p class="text">En cours de construction !!</p>
            <!--<div class="grid">
                <div class="header">
                    <ul>
                        <li>Horaires Vitry-sur-Seine</li>
                        <li>Lundi</li>
                        <li>Mardi</li>
                        <li>Mercredi</li>
                        <li>Jeudi</li>
                        <li>Vendredi</li>
                        <li>Samedi</li>
                        <li>Dimanche</li>
                    </ul>
                </div>
                <div class="side">
                    <ul>
                        <li>MMA Pancrace Tous niveaux</li>
                        <li>Boxe Thaï</li>
                        <li>Grappling / Luta Livre</li>
                        <li>Boxe Thaï-Pancrace Enfants de - de 14 ans</li>
                        <li>Cross-training "Sportiate"</li>
                        <li>Musculation Cardio-training</li>
                    </ul>
                </div>
                <div class="values">
                    <ul>
                        <li>à  Paris</li>
                        <li>20h30 22h00</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>18h30 22h00</li>
                    </ul>
                    <ul>
                        <li>19h00 20h30</li>
                        <li></li>
                        <li>20h30 22h00</li>
                        <li></li>
                        <li>20h30 22h00</li>
                        <li>18h30 22h00</li>
                    </ul>
                    <ul>
                        <li>à  Paris</li>
                        <li>20h30 22h00</li>
                        <li></li>
                        <li>17h30 19h00</li>
                        <li></li>
                        <li>18h30 22h00</li>
                    </ul>
                    <ul>
                        <li>20h30 22h00</li>
                        <li></li>
                        <li>19h00 20h30</li>
                        <li></li>
                        <li></li>
                        <li>18h30 22h00</li>
                    </ul>
                    <ul>
                        <li>MMA Pancrace Tous niveaux</li>
                        <li>Boxe Thaï</li>
                        <li>Grappling / Luta Livre</li>
                        <li>Boxe Thaï-Pancrace Enfants de - de 14 ans</li>
                        <li>Cross-training "Sportiate"</li>
                        <li>Musculation Cardio-training</li>
                    </ul>
                    <ul>
                        <li>MMA Pancrace Tous niveaux</li>
                        <li>Boxe Thaï</li>
                        <li>Grappling / Luta Livre</li>
                        <li>Boxe Thaï-Pancrace Enfants de - de 14 ans</li>
                        <li>Cross-training "Sportiate"</li>
                        <li>Musculation Cardio-training</li>
                    </ul>
                    <ul>
                        <li>MMA Pancrace Tous niveaux</li>
                        <li>Boxe Thaï</li>
                        <li>Grappling / Luta Livre</li>
                        <li>Boxe Thaï-Pancrace Enfants de - de 14 ans</li>
                        <li>Cross-training "Sportiate"</li>
                        <li>Musculation Cardio-training</li>
                    </ul>
                </div>
            </div>-->
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
      luta:{
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

  .lieux{
    padding-top: 5em;
    background-image: url("../../public/img/club/vitry1.jpg");
    background-position: center;
    background-size: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }


    .discipline{
      display:flex;
      flex-direction: column;
      align-items:center;
      height: 33em;
    }

    .grid{
        display:grid;
        grid-template-columns: repeat(8 , auto) 10%;
        grid-template-rows: auto;
    }

    ul{
        display:grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: auto;
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
