---
layout: post
tags: ['Web Standards', XML]
---
I find it interesting sometimes to consider, if I were starting over and designing *xyz-thing* from scratch, what would I do differently to what we already have. Recently I've been considering this with XML.

The trouble with XML is that it's a vast stack of standards. In some ways this is a good thing, because at least in theory it adds a lot of flexibility for different use cases. But it does result in duplication and redundancy, because document authors never know exactly which editions of which specs are being used by which processors and vice versa. How often do we see patterns like the common one for the language attribute on the HTML tag:

``<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">``

The common `id` attribute is the same. It sounds like a trivial niggle, but actually it's a design flaw in how these applications (XHTML and XML in this case) are layered one on top of the other.

Then we have the DOM, the XML Infoset, EXI, Canonical XML, XML Namespaces, XML Schema and so on. It's a dizzying array of specs, each with complex demands, which is partly why WHATWG have moved away from the idea of XHTML and put their efforts into HTML5's SGML derived syntax instead. Complying with the existing stack of XML specifications is too onerous, and the specs themselves are not always neatly joined up.

Throw in stuff from the edges of the XML world - the development of IRIs, XRIs and CURIEs, the semantic models of RDF, the multipart MIME types and the data: URI scheme, and so on - and it's a recipe for migraines and sleepless nights.

For all it's flaws however, XML has a whole host of benefits too. There is a very good reason why it's so widely adopted, it's is very flexible and it is human readable, it is (relatively) easy to parse, validate and transform. There various stable and well understood means to map programmatic objects into XML serialisations and back, enabling everything from RPC to Active Record to be done using it.

So if I was going to redesign XML from scratch, what would I do? Well, here are my main thoughts:

* Scrap DTDs, completely. I'm sure there's been other occasions, but the last time that I can think of when I saw a DTD used seriously was when XHTML 1.1 was published, and XML Schema wasn't considered 'mature' at the point.
* Design the Infoset first. Infoset is supposed to represent the logical model of a document, which XML serialises and DOM provides programmatic access to. Standard XML syntax need not be the only serialisation of an XML Infoset, and the DOM can be made to converge more closely with the underlying model.
* Take a cue from Architecture of the World Wide Web, and consider information items in your infoset as akin to resources. That means that an element might be considered to have a set of zero or more Descriptions, Identifiers, and Representations. Identifiers can be XPath expressions, IDs or any other unique reference to an element. Descriptions are any old metadata, and Representations correspond to different serialisations.
* Design a processing model to go with the infoset. XML Schema defines the PSVI, XSLT defines the post transformation infoset, XML Encryption defines post encryption/decryption infosets. A general model for the transformation of one infoset into the next, and pipelining those transformations, would be very useful.
* Consider all element and attribute names as URIs. Instead of QName we can use URIorCURIE as the type of all namespace qualified names.
* Use processing instructions for instructions to the processor. That means rather than xmlns:foo="..." on an element we insert a processing instruction <?namespace foo="..."?>. If qualified names are now URIs, then we are telling the processor how to expand any CURIEs that we are using. We might also have processing instructions for associating schemas, transforms, even linkbases. Processing instructions can be used to set up the document-specific processing pipeline described above, linking together various flavours of infoset transformation as well as controlling how the infoset is generated from the serialised document. Anything which alters the processing of the document when viewed as a series of parser events. Using attributes for this sort of thing should be limited strictly to when we are giving an element specific instruction.

One day I might do a skunk works and draft something along these lines, until then I can but rant.