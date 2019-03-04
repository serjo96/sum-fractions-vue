<template>
  <div class="fraction">
      <div v-if="indx>0" class="fraction__plus">+</div>
      <div class="fraction__wrapper">
        <div class="fraction__numerator">
            <input
                    @change="changeFraction"
                    name="numerator"
                    type="number"
                    v-model.number="fraction.numerator"
            >
        </div>

          <div class="fraction__separator"/>

          <div class="fraction__denominator">
              <input
                      @change="changeFraction"
                      name="denominator"
                      type="number"
                      v-model.number="fraction.denominator"
              >
        </div>
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
        numerator: '',
        denominator: '',
      },
    };
  },
  props: [
    'numerator',
    'denominator',
    'id',
    'onClick',
    'indx',
  ],
  methods: {
    changeFraction(e) {
      const el = e.target;
      if (!/[0-9]/g.test(+this.fraction[el.name])) {
        e.preventDefault();
      }

      this.$parent.changeFractionInput({
        id: this.id,
        [el.name]: +this.fraction[el.name],
        key: el.name,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


    .fraction {
        display: flex;
        align-items: center;
        &:not(:first-child) {
            margin-left: 25px;
        }

        &__plus {
            font-weight: bold;
            font-size: 17px;
            margin-right: 25px;
        }

        &__numerator, &__denominator {
            padding: 0 5px;
            width: 70px;
        }

        &__separator {
            width: 100%;
            height: 2px;
            background: #000;
            margin: 6px 0;
        }

        input {
            display: block;
            width: 100%;
            padding: 5px 0;
            padding-left: 5px;
        }
    }


</style>
