<template>
  <div class="fraction">
    <div>
        <input
                v-on:change="changeFraction"
                name="numerator"
                type="text"
                :value=numerator
        >
    </div>


      <div>
          <input
                  v-on:change="changeFraction"
                  name="denominator"
                  type="text"
                  :value=denominator
          >
    </div>
      <button v-if="indx>=2" @click='onClick(id)'>delete</button>

  </div>
</template>

<script>


export default {
  name: 'FractionItem',
  data() {
    return {
      fraction: {
        numerator: this.numerator,
        denominator: this.denominator,
      },
    };
  },
  props: [
    'numerator',
    'denominator',
    'id',
    'onClick',
      'indx'
  ],
  methods: {
    changeFraction(e) {
      const el = e.target;
      this.$parent.changeFractionInput({
        id: this.id,
        [el.name]: +el.value,
        key: el.name,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
