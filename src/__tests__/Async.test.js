describe('Async examples', () => {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    it('is async test 1', (done) => {
        setTimeout(done, 100)
    });

    it('is async test 2', () => {
        return new Promise(
            (resolve) => setTimeout(resolve, 1000)
        );
    });

    it('is async test 3', async () => {
        await delay(1000);
    });
});