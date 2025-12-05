// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mytestsdk3 from 'mytestsdk3';

const client = new Mytestsdk3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.chat.completions.create({
      messages: [{ content: 'Explain the importance of low latency LLMs', role: 'user' }],
      model: 'meta-llama/Llama-3.3-70B-Instruct',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.chat.completions.create({
      messages: [{ content: 'Explain the importance of low latency LLMs', role: 'user', name: 'name' }],
      model: 'meta-llama/Llama-3.3-70B-Instruct',
      allowed_token_ids: [0],
      best_of: 0,
      chat_template_kwargs: { foo: 'bar' },
      extra_args: { foo: 'bar' },
      frequency_penalty: -2,
      ignore_eos: true,
      include_stop_str_in_output: true,
      logit_bias: { foo: 0 },
      logits_processors: ['string'],
      logprobs: true,
      max_tokens: 0,
      min_p: 0,
      min_tokens: 0,
      n: 0,
      output_kind: 'cumulative',
      presence_penalty: -2,
      prompt_logprobs: 0,
      reasoning_effort: 'low',
      repetition_penalty: 0,
      response_format: {
        type: 'text',
        json_schema: { name: 'name', description: 'description', schema: { foo: 'bar' }, strict: true },
      },
      seed: 0,
      skip_special_tokens: true,
      spaces_between_special_tokens: true,
      stop: '\n',
      stop_token_ids: [0],
      stream: true,
      stream_options: { continuous_usage_stats: true, include_usage: true },
      temperature: 1,
      tool_choice: 'none',
      tools: [
        {
          function: { name: 'name', description: 'description', parameters: { foo: 'bar' } },
          type: 'function',
        },
      ],
      top_k: 0,
      top_p: 0,
      truncate_prompt_tokens: -1,
    });
  });
});
