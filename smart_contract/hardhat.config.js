// https://eth-ropsten.alchemyapi.io/v2/1TF-aN0QEh8aeI38F0tATNmEyCh1TCVa

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1TF-aN0QEh8aeI38F0tATNmEyCh1TCVa',
      accounts: [ 'b6e32518ebf2783256ba4d911c41f3272b5c41c620af0eafca13d16e33abd73e' ]
    }
  }

}