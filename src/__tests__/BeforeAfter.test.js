describe('Math exam', () => {
    beforeEach(() => {
        console.log('beforeEach');
    });

    beforeAll(() => {
        console.log('beforeAll');
    });

    afterEach(() => {
        console.log('afterEach');
    });

    afterAll(() => {
        console.log('afterAll');
    });

    it('should answer the question', () => {
        expect(2 + 3).toEqual(5);
    });

    it('should wprl', () => {
        expect(2 + 3).toEqual(5);
    });
});