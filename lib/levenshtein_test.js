import expect from 'expect.js';
import Levenshtein from './levenshtein';

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
