var AssetTokenMigrations = artifacts.require('./AssetToken.sol')

module.exports = function(deployer) {
    deployer.deploy(AssetTokenMigrations);
}