---
layout: post
tags: [CommonJS, Javascript, OSID, Programming]
---
Five years ago, or so, we had a wonderful suite of open, abstract API's developed by a group led out of MIT and calling themselves the Open Knowledge Initiative. These API's were the Open Service Interface Definitions, and although they had a definite flavour of Java about them, the specs were deliberately designed to be platform neutral.

OKI now appears to be defunct, but a lot of what they produced is still [sitting there on SourceForge](http://sourceforge.net/projects/okiproject).

Now a lot of this was useless nonsense, at least, outside of certain specialist applications. I know there are people that do, but I personally have no wish to keep track of who is enrolled on which course. Application specific is not general purpose. However, there are some very good general purpose abstractions in there.

Filing, for example, provides a highly abstracted representation of any filing system (which is anything which consists of trees of containers and byte-streams). Hierarchy is not dissimilar, abstracting anything which is hierarchical.

### And your point is...

Javascript. My point is Javascript.

Until relatively recently, Javascript was a domain specific language. It was used for scripting, in particular in the context of web browsers. Suddenly, Javascript is seeing general purpose use - largely due to the introduction of Node and Rhino. Equally, we're seeing the boundary between web and desktop applications blurring, courtesy of HTML5 amongst others. The use cases for Javascript have exploded, they're vast, they're everywhere.

And the only fully standardised API we have is DOM, and nobody fully complies with that.

I have a soft spot for OSID, because it was in vogue a the time when I was teaching myself concepts like middleware and n-tier architecture. However, clean, pure and platform neutral abstractions like those which make up a large part of the OSID specs are a perfect starting point if we're going to build up standard APIs for Javascript. CommonJS is achieving great things, but CommonJS is more concerned with the concept of a module than the content of a module.

The hint of Java in OSID only adds to the attraction, because Javascript is so frequently sandboxed. A Java-like API has an advantage getting around this, because most sandboxing environments support some kind of Java liveconnect or equivalent, allowing us to use Java to implement any privileged elements (with associated benefits of code signing and code security policies being built into the JVM). As TiddlyWiki was forced to do, we can implement things like low-level filesystem access as a Java applet.

### But...

Javascript's type system is prototype-based, not class-based. This means that there is no native concept of an interface, nor can types be attributed in a standard way like they can in environments such as CLI. So defining a load of interfaces and implementations of those interfaces is not something which makes sense in the context of Javascript.

Alas, there is no standard API in Javascript for emulating these things either. Various projects like Joose provide a metaobject framework, but there isn't a common (or even a bunch of broadly similar) API for it in Javascript. So our interfaces are effectively just exercises in duck-typing.

So that's where we start. In the first instance, our interfaces aren't interfaces at all but a set of functions which test that an object conforms to the specification we've given.

I've begun sketching this out as [a set of AMD modules on Github](http://github.com/twrl/osid.js), but for the time being it's all very basic.