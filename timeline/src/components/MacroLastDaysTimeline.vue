<script>
import {Travail, MacroLastDaysTimeline} from "./../apollo/queries/queries"
export default {
  name: 'MacroLastDaysTimeline',
  props: {
    msg: String
  },
  mounted(){
    MacroLastDaysTimeline()
    Travail()
  }
}
</script>
<template>
  <div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
