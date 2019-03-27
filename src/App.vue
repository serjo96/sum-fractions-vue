<template>
  <div id="app">
    <div class="fractions">
      <div class="fractions__list">
        <Fraction
                v-for="(fraction, index) in fractions"
                :key="index"
                :numerator=fraction.numerator
                :denominator=fraction.denominator
                :id="fraction.id"
                :indx="index"
                @changeFractionInput=changeFractionInput
                v-bind:onClick="DELETE_FRACTION"
        />
      </div>

      <div class="fractions__sum">
        <div class="fractions__sum-equal">=</div>
        <div class="fractions__sum-fraction">
          <div class="fractions__sum-denominator">{{takeSum.numerator}}</div>
          <div class="fractions__sum-separator"></div>
          <div class="fractions__sum-numerator">{{takeSum.denominator}}</div>
        </div>
      </div>
    </div>

    <button
            class="add-fraction-button"
            :disabled="fractions.length > 5"
            @click="ADD_FRACTION"
    >
      add new fraction
    </button>
  </div>

</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import Fraction from './components/Fraction';
import { ADD_FRACTION, CHANGE_INPUT, DELETE_FRACTION } from './store/constants';


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
    ...mapMutations([
      CHANGE_INPUT,
      ADD_FRACTION,
      DELETE_FRACTION,
    ]),
    changeFractionInput(value) {
      this.CHANGE_INPUT(value);
    },
  },
};
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
  }

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

  .fractions {
    display: flex;
    &__list {
      display: flex;
    }

    &__sum {
      display: flex;
      align-items: center;
      margin-left: 5px;
    }

    &__sum-equal {
      margin: 0 25px;
    }

    &__sum-separator {
      height: 2px;
      background: #000;
      margin: 6px 0;
    }
  }

  .add-fraction-button{
    float: left;
    margin-top: 25px;
  }

</style>
