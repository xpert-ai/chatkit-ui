import type { XpertAIChatKit } from './index';

declare global {
  interface HTMLElementTagNameMap {
    'xpert-ai-chatkit': XpertAIChatKit;
  }

  namespace JSX {
    interface IntrinsicElements {
      'xpert-ai-chatkit': Partial<XpertAIChatKit>;
    }
  }
}

export {};
