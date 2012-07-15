---
layout: post
title: "Ajax and file&#58;// URIs"
tags: [Ajax, Javascript, jQuery, Programming]
---
Ajax is becoming the dominant method, if it isn't already, of getting data in and out of a web application. But Ajax is built on top of XMLHttpRequest, which as the name suggests is only really well defined if the underlying protocol is HTTP.

So what about local files? The new Filesystem API's are coming, but they sandbox us heavily. At least for the time being, if we want to muck about with self-modifying code or local file-based data sources we have to hack it, which means using any one of half a dozen browser and/or os specific methods.

I quite like having a consistent API to work with, which you can't easily have under these circumstances. Fortunately, the lovely folks at TiddlyWiki have provided [a jQuery plugin](http://jquery.tiddlywiki.org/twFile.html) which abstracts their general purpose file load and save functionality, so you have a load and a save function exposed and how those are best implemented is determined for you automatically.

However, it's still not a single consistent API for getting data in and out. Having load and save methods for the local filesystem is lovely if all I want to do is load and save from the local filesystem, but what if I want to use a resource which may or may not be local. I would like to treat a directory full of JSON files on the local system the same as a REST interface on a remote server, and the only thing I want to change is the base URI.

jQuery now supports the `$.ajaxTransport` method, which allows us to define custom ways in which jQuery's `$.ajax` method is implemented for different circumstances. It's relatively easy to use this to intercept Ajax queries to file:// URIs, and translate them into load and save calls based on whether they're GET or PUT. I've hacked together a [jQuery plugin](https://github.com/twrl/tinker/blob/master/js/jquery/localJax.js) to do just that, remapping Ajax queries on local files to the equivalent calls on TiddlyWiki's twFile plugin.

As cool as this is, it's only half the story. We don't just use Ajax to GET and PUT to RESTful data, we use it for all sorts of other things. It makes no sense to define a behaviour for a POST to local files in general. However, Web Workers potentially change that. An Ajax post to a local javascript could be interpreted as a command to load that javascript as a web worker, and then pass the query data into the worker as a message and wait for a response. Or it could not. The scenario is rather complicated, but certainly worth thinking about.