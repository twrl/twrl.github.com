---
layout: post
tags: [AMD, Javascript, 'Web Standards', 'Web Workers']
---
I've had tonsillitis over the last 5 days or so, so I've spent most of the last few days in a bit of a daze, idly tinkering with random things to pass the time. As with much idle tinkering, it's all a bit rough and ready, but here is one snippet which might prove useful.

I was tinkering with Web Workers and I wanted to be able to load up Require.js in a worker and then pass it the name of a main module. So I wrote this stub, lets call it w.js, which goes in the same directory as require.js (which will be Require's baseDir - told you it was a bit rough). You can then create your worker by doing

{% highlight js %}
var worker = new Worker('scripts/w.js?main=myapp/main');
{% endhighlight %}

and Require.js will be loaded into your module, which will in turn load your main. As a fringe benefit you get a nice global object called query which contains all parameters passed in the query string.

{% highlight js %}
var params = self.location.search.substring(1).split('&'), query = {};
 
for (var i in params) {
    var sp = params[i].split('='),
        n = sp[0],
        v = unescape(sp[1]);
    query[n] = v;
}
 
delete params;
 
var require = { deps : [ query.main ] };
 
importScripts('require.js');
{% endhighlight %}

Now I know this is not terribly exciting - parsing a query string is pretty basic stuff in Javascript - but when I first tried this I was looking at a one-off message handler to initialise the global context in the worker. Because workers share so few API's with an ordinary web page, it's easy to forget the few that they have in common, and one of them is location.

For some more advanced cases the message handler might still be the best way forward, but to get a few name-value pairs in this is a lovely little trick.