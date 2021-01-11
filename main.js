//Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
//Servendoci di Vue JS stampiamo tutto a schermo.

let app = new Vue({
  // options object
  el: "#app",
  data:{
    cd: ""
  },
  methods:{

  },
  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(random => {
      this.cd = random.data.response;
      console.log(this.cd);
  });
  }

});
