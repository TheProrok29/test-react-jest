describe('matchers', () => {
    it('not', () => {
        const x = 3;
        expect(x).not.toBe(4);
    });

    it('toBe vs equal', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        expect(arr1).toBe(arr1);
        expect(arr1).toEqual(arr2);
    });

    it('toBeCloseTo', () => {
        expect(0.2 + 0.1).toBe(0.2 + 0.1);
        expect(0.2 + 0.1).toBeCloseTo(0.3);
    });

    it('toContaint & toHaveLength', () => {
        const arr = ['a', 'b', 'c'];
        expect(arr).toContain('b');
        expect(arr).toHaveLength(3);
    });

});