const getter = {
  takeSum(state) {
    return state.fractions.reduce((prev, curr) => {
      const newSum = { ...prev };

      if (!prev.denominator && !curr.denominator) { return newSum; }

      if (prev.denominator === curr.denominator) {
        newSum.numerator = prev.numerator + curr.numerator;
        newSum.denominator = curr.denominator;
      } else {
        newSum.numerator = (curr.denominator * prev.numerator) + (prev.denominator * curr.numerator);
        newSum.denominator = prev.denominator * curr.denominator;
      }

      return newSum;
    });
  },
};

export default getter;
