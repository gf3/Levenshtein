import expect from 'expect.js';
import Levenshtein, { compute } from './levenshtein';

describe('levenshtein module', () => {
  describe('compute()', () => {
    it('should correct compute the distance', () => {
      const [d1, m1] = compute('kitten', 'sitting');
      const [d2, m2] = compute('Saturday', 'Sunday');
      const [d3, m3] = compute('sup', 'hello there');
      const [d4, m4] = compute('hey', 'hey');
      const [d5, m5] = compute('', 'butts');
      const [d6, m6] = compute('fronts', '');

      expect(d1).to.be(3, 'kitten <=> sitting');
      expect(d2).to.be(3, 'Saturday <=> Sunday');
      expect(d3).to.be(11, 'sup <=> hello there');
      expect(d4).to.be(0, 'hey <=> hey');
      expect(d5).to.be(5, 'butts <=>');
      expect(d6).to.be(6, '<=> fronts');

      [m1, m2, m3, m4, m5, m6].forEach(a => expect(a).to.be.an('array'));
    });
  });

  describe('Levenshtein', () => {
    it('should correct compute the distance', () => {
      const l1 = new Levenshtein('kitten', 'sitting');
      const l2 = new Levenshtein('Saturday', 'Sunday');
      const l3 = new Levenshtein('sup', 'hello there');

      expect(l1.distance).to.be(3, 'kitten <=> sitting');
      expect(l2.distance).to.be(3, 'Saturday <=> Sunday');
      expect(l3.distance).to.be(11, 'sup <=> hello there');
    });

    describe('toString()', () => {
      it('should properly coerce to a string', () => {
        const l1 = new Levenshtein('kitten', 'sitting');
        expect(String(l1)).to.eql(l1.toString());
      });
    });

    describe('valueOf()', () => {
      it('should properly coerce to a number', () => {
        const l1 = new Levenshtein('kitten', 'sitting');
        expect(l1 + 0).to.be(l1.distance);
      });
    });

    describe('get matrix()', () => {
      it('should return the built matrix', () => {
        const l1 = new Levenshtein('kitten', 'sitting');

        expect(l1.matrix).to.be.an('array');
        expect(l1.matrix[0]).to.have.length(7);
        expect(l1.matrix[0]).to.be.an('array');
      });
    });
  });
});
