---
layout: post
tags: [Javascript, Programming]
---
Over the last four weeks I've been rather busy with exams, but now that's over I'm thinking computer again.

I've been looking at some of the alternatives to JavaScript. In many ways JavaScript is a lovely little language, it's incredibly flexible. But, the same dynamic type system that makes it so flexible also makes certain things very difficult (like writing or consuming modular APIs), and the prototype-based object system obscures many of the benefits of object-oriented programming. For some purposes these are strengths, because JavaScript can glue so many different things together without casting and without wrestling with common OO patterns like adapter or facade. Modularisation and componentisation are difficult, because with such weak typing it's very difficult to check that interfaces are compatible.

There are many alternatives out there, the big ones of the moment being Opa, Google Dart, and CoffeeScript. VBScript is also out there if you know you're dealing with purely Internet Explorer clients, but the less said about VBScript the better.

I do not particularly like CoffeeScript. It has some very neat design ideas, but I personally find it less readable than regular JavaScript. I'm a curly bracket language boy, I like my start and end delimiters and consider indenting to be a style and readability thing. So while I can't actually find anything to complain about with CoffeeScript, it just doesn't suit my coding style.

On to Dart. Syntactically, it's like a hybrid of C# and JavaScript, with a pinch of PHP. Which is fine, I have no objection to any of that. However, there are several things about Dart which make me rather uncomfortable. For a start I don't agree with Google's design decisions about the Dart VM, although that's minor. Dart is designed to operate in the client, with a Dart-to-JavaScript transpiler as a transition measure, but I don't expect to see a Dart VM implemented in anything but Google Chrome any time soon. It's also far from clear how Dart interoperates with JavaScript - especially when the JavaScript comes packaged in AMD or CommonJS modules.

Which brings me to Opa. It's rather neat, I was impressed. There are so many clever things in Opa, not least of which is the way it hides the details of communication between client and server. However, I'm not so keen on the way the markup tends to become fragments embedded in the program rather than the other way around - ASP.Net and PHP have done that pattern to death - and Opa leaves me feeling like I'm not entirely in control of the code that I'm writing. The point of Opa is to hide tricky details, especially of middleware, but it's actually too good at what it does for comfort.

Which brings me back to JavaScript, but then I'm still stuck with the clunkyness of JavaScript for certain applications. Still, while it might not always be elegant, it does work. So for the time being, I'll stick with JavaScript.