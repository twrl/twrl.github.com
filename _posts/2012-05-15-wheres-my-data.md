---
layout: post
title: "Where's my Data!"
tags: ['The Cloud', 'Web Architecture']
---
I have Facebook. I have Google+, Google Docs, Google Play, GMail, Blogger, Picasa and various other Google products. I have a Live@edu email account. I have a github account, a SourceForge account, a cloud9 account, and a Hojoki account. I have an account with Ocado and another with Tesco, and one with Amazon. I have at least two OpenIDs, and a dozen more services which I routinely use by federated logon to one of the above.

I have accounts with online services that I don't even remember exist.

My online identity is no longer a discrete thing. It's a big ball of fuzz, at best. And because of the overload of accounts none of them use any sort of particularly strong credentials. I choose decent passwords, but that's a good as it gets.

The problem is data. I've recently become acutely aware of how spread out my data is across so many different services. My contacts experience five-way synchronisation between Google, Live, Facebook, my Laptop and my Phone - and I have this sneaking suspicion that I've missed some. I don't even know where my data is any more, I can't use half of it when I want it because even if I do remember where it is, access is only ensured by the stored passwords and cookies in my web browser.

We have an architectural problem. I want my data! It's mine! I want to use your services to work with my data - I don't want to use your services to work with your copy of a subset of my data.

Oh, and it would be nice if it were all transparent. If I could chop and change services, just like I can now but without the hassle of exporting and re-importing all my data.

Technologically speaking this is pretty easy. A triplestore in the cloud, augmented by some sort of bulk storage. OAuth to control access by different service providers, data synchronisation so that I can keep my data (or subsets of it) available offline. OpenID to federate your login to everything, and X.509 certificates, or even a hardware token, to authenticate to your identity provider.

None of this actually requires any new breakthrough - but 'the cloud' is primarily an infrastructure for service providers, rather than one for users. The money is in selling multiply-redundant block storage by the trillions of bytes, or processor-hours by the hundred thousand a month. It's not in providing semi-structured storage (with the overheads that entails) for a steady 300-500GB of my accumulated junk.