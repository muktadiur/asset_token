const AssetToken = artifacts.require('AssetToken');

contract('AssetToken', accounts => {
    const _name = 'AssetToken';
    const _symbol = 'AT';
    const _decimals = 2;

    before(async () => {
        this.token = await AssetToken.new();
    });

    describe('token attributes', () => {
        it('has contract name', async () => {
            const name = await this.token.name();
            assert.equal(name, _name);
        });
        it('has contract symbol', async () => {
            const symbol = await this.token.symbol();
            assert.equal(symbol, _symbol);
        });
        it('has contract decimals', async () => {
            const decimals = await this.token.decimals();
            assert.equal(decimals, _decimals);
        });
    })
})