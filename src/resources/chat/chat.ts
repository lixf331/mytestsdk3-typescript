// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from './completions';
import {
  ChatCompletionContentPartTextParam,
  ChatCompletionLogProb,
  CompletionCreateParams,
  CompletionCreateResponse,
  Completions,
  FunctionCall,
} from './completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

Chat.Completions = Completions;

export declare namespace Chat {
  export {
    Completions as Completions,
    type ChatCompletionContentPartTextParam as ChatCompletionContentPartTextParam,
    type ChatCompletionLogProb as ChatCompletionLogProb,
    type FunctionCall as FunctionCall,
    type CompletionCreateResponse as CompletionCreateResponse,
    type CompletionCreateParams as CompletionCreateParams,
  };
}
