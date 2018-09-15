[Polkadot JS API](../README.md) > [Api](../classes/api.md)

# Class: Api

*__example__*: ```javascript
import Api from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';
const provider = new WsProvider('http://127.0.0.1:9944');
const api = new Api(provider);
```

## Hierarchy

**Api**

## Implements

* `object`

## Index

### Constructors

* [constructor](api.md#constructor)

### Properties

* [author](api.md#author)
* [chain](api.md#chain)
* [state](api.md#state)
* [system](api.md#system)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Api**(provider: *`ProviderInterface`*): [Api](api.md)

*Defined in [index.ts:26](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api/src/index.ts#L26)*

*__constructor__*: Default constructor for the Api Object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| provider | `ProviderInterface` |  An API provider using HTTP or WebSocket |

**Returns:** [Api](api.md)

___

## Properties

<a id="author"></a>

###  author

**● author**: *[ApiInterface$Section](../#apiinterface_section)*

*Defined in [index.ts:23](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api/src/index.ts#L23)*

___
<a id="chain"></a>

###  chain

**● chain**: *[ApiInterface$Section](../#apiinterface_section)*

*Defined in [index.ts:24](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api/src/index.ts#L24)*

___
<a id="state"></a>

###  state

**● state**: *[ApiInterface$Section](../#apiinterface_section)*

*Defined in [index.ts:25](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api/src/index.ts#L25)*

___
<a id="system"></a>

###  system

**● system**: *[ApiInterface$Section](../#apiinterface_section)*

*Defined in [index.ts:26](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api/src/index.ts#L26)*

___

