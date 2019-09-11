# &lt;form&gt;.requestSubmit() polyfill

> **[`form.requestSubmit([submitter])`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-requestsubmit-dev)**
>
> Requests to submit the form. Unlike [`submit()`](https://html.spec.whatwg.org/multipage/forms.html#dom-form-submit), this method includes interactive constraint validation and firing a `submit` event, either of which can cancel submission.
>
> The *submitter* argument can be used to point to a specific submit button, whose `formaction`, `formenctype`, `formmethod`, `formnovalidate`, and `formtarget` attributes can impact submission. Additionally, the submitter will be included when constructing the entry list for submission; normally, buttons are excluded.

## References
- https://github.com/whatwg/html/issues/4187
- https://github.com/whatwg/html/pull/4597
- https://www.chromestatus.com/feature/6097749495775232

---

Distributed under the MIT license. See [LICENSE](LICENSE) for details.

© 2019 Javan Makhmali
