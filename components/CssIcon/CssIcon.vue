
<template>
  <div
    class="icon pattern-diagonal-stripes-sm"
    :style="{'background-color':bacground, color:color}"
  >
    <div class="inside-icon">
      幸
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bacground: 'rgba(200,255,255,1.0)',
      color: 'rgba(100,200,200,1.0)'
    }
  }
}
</script>

<style lang="scss">
.icon {
  height:50px;
  width:50px;
  border-radius: 10px;
  justify-content: center;
  align-items:center;
  display: flex;
  margin: auto auto;
}

.inside-icon{
  height:40px;
  width:40px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.8);
  justify-content: center;
  align-items:center;
  display: flex;
  font-size:1.5rem;
  color:rgb(30, 50, 200);
  font-family: 'MPLUS 1p';
  font-weight: bold;
}

</style>
