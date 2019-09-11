<template>
  <div >
    <transition appear name="fade1">
        <div class = "discipline lieux">
        <div class = "title">Les lieux</div>
            <p class="text">Vitry sur seine</p>
            <ul id = "header">
              <li v-for="header in headers">
                {{header}}
              </li>
            </ul>
            <ul v-for="line in lines">
              <li v-for="element in line">
                {{element}}
              </li>
            </ul>
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
      headers:[
        "Discipline",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
        ],
      lines:[
        ["MMA","1","2","3","4","5","6","7"],
        ["Boxe Thai","1","2","3","4","5","6","7"],
        ["Grappling","1","2","3","4","5","6","7"],
        ["Musculation","1","2","3","4","5","6","7"]
      ]
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
      height: 40em;
    }
    ul{
        display:table;
        width: 80%;
        table-layout: fixed;

    }
    li{
         display: table-cell;
         padding: 0.5em;
         border:5px double floralWhite;
         width: 50%;
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
