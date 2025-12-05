// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Mytestsdk3 } from '../client';

export abstract class APIResource {
  protected _client: Mytestsdk3;

  constructor(client: Mytestsdk3) {
    this._client = client;
  }
}
