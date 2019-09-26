import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import 'prismjs';

/* global Prism */

export class PrismSnippet extends LitElement {
  static get properties() {
    return {
      _content: { type: String },
    };
  }

  _updateContent() {
    const code = this.querySelector('code').textContent;

    this._content = Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }

  render() {
    return html`
      <div class="raw">
        <slot @slotchange="${this._updateContent}"></slot>
      </div>

      <pre class="language-javascript">
        <code>
          ${unsafeHTML(this._content)}
        </code>
      </pre>
    `;
  }

  static get styles() {
    return [
      /** following yanked from prisma */
      css`
        /**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          background: none;
          text-shadow: 0 1px white;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          font-size: 1em;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection,
        code[class*='language-']::-moz-selection,
        code[class*='language-'] ::-moz-selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection,
        code[class*='language-']::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f2f0;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          border-radius: 0.3em;
          white-space: normal;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #905;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #690;
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: #9a6e3a;
          background: hsla(0, 0%, 100%, 0.5);
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #07a;
        }

        .token.function,
        .token.class-name {
          color: #dd4a68;
        }

        .token.regex,
        .token.important,
        .token.variable {
          color: #e90;
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }
      `,
      css`
        .raw {
          display: none;
        }
      `,
    ];
  }
}
