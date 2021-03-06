// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from './index';

describe('onConnect', () => {
  let mock;

  beforeEach(() => {
    mock = mockWs([]);
  });

  afterEach(() => {
    if (mock) {
      mock.done();
      mock = null;
    }
  });

  it('sets up the on* handlers', () => {
    const ws = new Ws(TEST_WS_URL, false);

    ws.connect();

    expect(ws.websocket.onclose[0]).toBeDefined();
    expect(ws.websocket.onerror[0]).toBeDefined();
    expect(ws.websocket.onmessage[0]).toBeDefined();
    expect(ws.websocket.onopen[0]).toBeDefined();
  });
});
