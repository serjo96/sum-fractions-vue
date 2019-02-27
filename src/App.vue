<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div class="fraction-list">
      <Fraction
              v-for="(fraction, index) in fractions"
              :key="index"
              :numerator=fraction.numerator
              :denominator=fraction.denominator
              :id="fraction.id"
              :indx="index"
              @changeFractionInput=changeFractionInput
              v-bind:onClick="deleteFraction"
      />
    </div>

    <div>sum: {{takeSum}}</div>

  <button :disabled="fractions.length > 5" @click="addFraction">add new fraction</button>
  </div>

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import Fraction from './components/Fraction';
import store from './store/index';


export default {
  name: 'App',
  computed: {
    ...mapState([
      'fractions',
    ]),

    ...mapGetters([
      'takeSum',
    ]),

  },
  components: {
    Fraction,
  },
  methods: {
    ...mapActions([
      'changeInput',
      'addFraction',
      'deleteFraction',
    ]),

    changeFractionInput(value) {
      store.commit('changeInput', value);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 60px;
}

  .fraction-list{
    display: flex;
    justify-content: space-between;
  }
</style>
