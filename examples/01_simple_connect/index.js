const createApi = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = createApi(provider);

api.system.chain()
  .then((chain) => {
    api.system.version()
      .then((version) => {
        console.log('Chain:', chain)
        console.log('Version:', version)
        process.exit(0)
      })
  })
