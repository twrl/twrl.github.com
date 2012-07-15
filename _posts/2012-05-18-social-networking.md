---
layout: post
tags: [Diaspora, Facebook, Google, 'Semantic Web', 'Social Networking', 'The Cloud', 'Web Architecture']
---
I like Google+. There's a very good reason for this: integration.

I use Google Reader, Google Search, Google Drive, Google Calendar, Google Mail, Google Play, Google Chrome and Blogger. I use these things because Google is becoming the Unix of the web - a large set of simple, single-purpose tools that play nicely together.

So it's only natural that I also want to use Google+ too. It would be so very convenient.

There are two problems. First off, I've become too used to clicking "Log on with Facebook". For a lot of services that I use, I've never actually created an account. This is not an insurmountable problem, I'll live with more passwords in my life.

The second is more substantial: I have around 350 Facebook friends. I have six friends who use Google+.   The update streams, photos, and so on I can work around or live without - but realtime interaction? I communicate a lot through facebook messages.

Since Facebook exposes it's chat services through XMPP and social graph as a RESTful JSON service, you would think something could be done about this. But no, Facebook isn't willing to play this game because they don't want to loose users.

Which brings me back to the idea of Data Portability. Why can't I keep my own little corner of the social graph, and Facebook and Google just provide services on top of it? In spite of the technical difficulties this is not such a crazy idea - there are plenty of solutions for distributed data storage and aggregation.

Part of the necessary technology already exists in the Diaspora project. Diaspora is distributed, but it still requires servers. It isn't peer-to-peer in the way that we more usually associate with file sharing. You don't run a Diaspora application on your PC when you want to access it - you have to run a well-connected server all the time.

There are schemes which could overcome the always-connected architecture for distributing social graph data, but doing the same thing for realtime interaction is more difficult. Keeping track of my chat and realtime messaging activities when I have hundreds of friends is much easier when there is a single, co-ordinating hub. It becomes next to impossible when there is no server and I'm using multiple clients on multiple devices.

So that's the challenge - can you keep distributed, continuously updated realtime data without some form of server infrastructure?