# A JavaScript Fundamental

# Hello, World!

This part of the tutorial is about core JavaScript, the language itself.

But we need a working environment to run our scripts and, since this book is online, the browser is a good choice. We’ll keep the amount of browser-specific commands (like alert) to a minimum so that you don’t spend time on them if you plan to concentrate on another environment (like Node.js).

So first, let’s see how we attach a script to a webpage. For server-side environments (like Node.js), you can execute the script with a command like <kbd>"node my.js"</kbd>.

## [The “script” tag](./readme.md#the-script-tag)
JavaScript programs can be inserted almost anywhere into an HTML document using the `<script>` tag.

For instance: [alert.html](./alert.html)

You can run the example alert.html in your browser.

The `<script>` tag contains JavaScript code which is automatically executed when the browser processes the tag.

## [Modern Markup](./readme.md#modern-markup)

The `<script>` tag has a few attributes that are rarely used nowadays but can still be found in old code:

The type attribute: `<script type=…>`

The old HTML standard, HTML4, required a script to have a <kbd>type</kbd>. Usually it was `type="text/javascript"`. It’s not required anymore. Also, the modern HTML standard totally changed the meaning of this attribute. Now, it can be used for JavaScript modules. But that’s an advanced topic, we’ll talk about modules in another part of the tutorial.

The language attribute: `<script language=…>`

This attribute was meant to show the language of the script. This attribute no longer makes sense because JavaScript is the default language. There is no need to use it.

Comments before and after scripts.

In really ancient books and guides, you may find comments inside `<script>` tags, like this:

    <script type="text/javascript"><!--
        ...
    //--></script>

This trick isn’t used in modern JavaScript. These comments hide JavaScript code from old browsers that didn’t know how to process the `<script>` tag. Since browsers released in the last 15 years don’t have this issue, this kind of comment can help you identify really old code.