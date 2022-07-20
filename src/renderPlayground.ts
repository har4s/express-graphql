import { renderPlaygroundPage } from 'graphql-playground-html';
import type { MiddlewareOptions } from 'graphql-playground-html';

export type PlaygroundOptions = MiddlewareOptions;

/**
 * When express-graphql receives a request which does not Accept JSON, but does
 * Accept HTML, it may present Playground, the in-browser GraphQL explorer IDE.
 *
 * When shown, it will be pre-populated with the result of having executed the
 * requested query.
 */
export function renderPlayground(options: PlaygroundOptions): string {
  const playground = renderPlaygroundPage(options);
  return playground;
}
