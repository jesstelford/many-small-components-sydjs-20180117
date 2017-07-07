Let's talk about the evolution of frontend at Domain.com.au over the last 2.5
years. And, spoiler alert, let's talk about the solution we came up with:
Creating many small components.

For those that don't know, Domain is a property listing and research site for
buying, renting, or sharing.

Domain has been growing as both a product and as a company for a number of years
now.
To put it into perspective, I joined Domain 2.5 years ago. At the time, it was
myself and one other dev on frontend. The entire product & dev team was only
about 20. Today, in 2017, we have over 25 full time frontend devs, and the whole
product and tech team is now over 160!

It's excellent growth, and we've benefited from it hugely. Today, I wanted to
share with you some big lessons we've learned. We didn't always get it right, so
hopefully this will help as others embark on their journey!

I should point out that while I haven't spoke about this publicly before, this
is approximately the same intro I give to every new starter on the frontend team
at Domain, so after this talk, consider yourselves onboarded!

Starting at the top; In Jan 2015, we were only 2 FE devs. At the time, we had a
handful of pages to look after, the main ones being Home -> Search -> Property
Details, plus a few ancilliary ones around that such as admin areas, etc.

It was managable if things weren't changing, or if we didn't have to add
anything new. But, like I said; Domain was growing; we had an excellent Design &
UX team who were constantly improving and refining the experience across our
products, which was having excellent positive benefits! While the UI was
improving, our code was suffering from increasing technical debt - mostly it was
outgrowing the initial decisions made to build the pages.

A great example of this is when I had to play Bug whack-a-mole! We had an image
gallery that needed a design tweak to add a clickable video thumbnail. Great! I
can add the JS to the jQuery powering the gallery, update the SASS to support a
button overlay, etc. Done. Works great. Ship it. Immediately got a bug report
that in some cases, image galleries on other pages were suddenly broken. Wha? I
didn't modify the code there. I was careful to make sure the JS was isolated to
the page I was modifying (which itself wasn't easy). Turns out I named the new
button class with the same name as one used by some other feature in the other
galleries, resulting in that new style breaking the functionality there. Since
all image galleries used the same jQuery and base SASS, it wasn't as easy as
just changing the classname, because if I did that, the original gallery would
have some new bug, and so on back and forth. Hence: Bug whack-a-mole!

The underlying reason this bug occured is due to sharing JS & CSS across pages.
We were bundling everything up into a common `main.js` and `main.css` for
everything shared across pages. (and, btw, this was a manual bundling process;
concatenating JS files essentially, no Webpack, browserify, imports, etc). The
actual fix here, was to remove the new gallery code from the shared bundles and
put it only on the one page it was used on.

But now we have two copies of the same gallery, with minor differences, and no
real way (other than scouring the git log) to know that there was ever a
difference at a glance. So, while the initial decisions to just use the one
gallery everywhere, and simply concatenate everything to make a single bundle
were valid choices for the small volume of pages Domain started with, it quickly
outgrew those decisions. Which leads me to:

# Lesson #1

**Don't leave frontend till last**

Spend some time to think about your frontend codebase. Will you be creating more
pages / experiences in the next 6months? 2 years? 5 years? How do you see your
processes and tooling evolving over that time? Can what you've got today stand
the test of growth?

Ours couldn't, but we hadn't thought about an alternative. We needed a better
way than copy+paste to solve bugs. What happens if some time in the future we
find a bug in the gallery? Then we'd have to go test every copy of the gallery
and fix it multiple times. Not a sustainable way of building things. Technical
debt piles on exponentially quickly, so we needed to figure out a strategy going
forward that could grow with the company and product.

So I started thinking about these things. I knew Domain was growing, adding new
pages such as the Home Price Guide where you can look up the sale or rent price
estimate of any property we know about in Australia, growing the commercial real
estate arm of the business, then there were the acquisitions. At the end of
2013, Domain acquired Price Finder, a data business, and in mid 2014, aquired
AllHomes, the leading property portal in our nation's capitol: Canberra.

How could we scale our frontend development to support all of these brands, plus
all the ancilliary pages that go with them? Our team was growing, but our tools
needed to grow too.

<!-- pause for a beat -->

While I was thinking about this, I was also working with our amazing Design & UX
teams on various projects. It turns out, they were thinking about similar
things, but from the perspective of a unified "Domain Group" design & experience
language across all the brands. It was the other side of the same coin!

Not too many big companies were talking about these things back in 2015, so it
was really up to us to do the research and piece together all the knowledge that
existed. One excellent piece is Brad Frost's "_Atomic Design_":

![Atomic Design](TODO: Atomic Design URL)

> we can break entire interfaces down into fundamental building blocks and work
> up from there.

- Brad Frost

- Atoms are the smallest part of a UI.
- Molecules are a combination of a couple of those parts.
- Organisms "form a distinct section of a page".
- Templates are your boxy / UX layouts, and
- Pages are the final product.

This was right up our alley! Both from a tech perspective, and from the design /
ux perspect, we instantly made the connections to Atomic Design from our current
and future situation.

> fundamental building blocks

This is the key notion. Thinking in the smallest pieces possible, and treating
them like blocks that can be put together really changes the way you approach
building user interfaces. It set us up with a strategy that we hoped (and later
proved true) to stand the test of time.

# Lesson #2

**Your FE strategy is more than tools & code**

It's also about design, ux, and even sometimes about backend infrastructure
(which we'll get into later). With everyone's buy-in, and everyone sharing the
same vision of the strategy, everything becomes easier.

Our next challenge was applying Brad Frost's guidelines in a practical manner:
How could we apply those 5 different parts of the Atomic Design ethos to our
codebase now and in the future?

That question then raises a lot of other questions: What are the boundaries
between Atoms & Molecules? Molecules and Organisms? The concept sounds great,
but it's not as black and white as it may seem at first. We quickly realised
situations such as an otherwise innocent button can cross the boundaries between
atom and molecule where in some cases (a plain button with text and a click
handler) is an atom, but in others (the button contains an icon, so is composed
with another atom) it's a molecule. How do you apply consistent patterns across
each type of UI element? What about branding / theming? How do we codify these
rules?

In the end, we came up with the rule "Atoms, Molecules & Organisms are the same,
but should be as small as possible". Or, to put it in more modern technical
parlance:

# Lesson #3

![Everything is a component](TODO: Atomic Design with "Component" overlay)

> Everything is a component

<!-- pause for a beat -->

We've now got our strategy sorted out, and we're aligned with Design & UX, but
where do we start? My engineering brain went bonkers on this one - I was coming
up with all sorts of grand visions; services to do rendering of components for
us; distributed components like we have distributed microservices; teams working
on individual components that everyone then consumes, but never break! I was in
nerd heaven.

I had to be grounded and start somewhere. So we picked a project that was coming
up soon. Something that wasn't too big, something that didn't have a huge
userbase, and something that we could throw away and start again on if we
needed.

I know a lot of folks don't have that luxury, but if you're looking for
somewhere to start, I recommend looking over your backlog and other commitments
to find a slot that you can spend more time doing the initial investigative
technical work.

Before even starting the project, we needed to pick a technology. So we chose
the best option at the time: Flash! No, I'm kidding. We chose React of course!
But the decision didn't come lightly. We investigated what options there were at
the time and asked a few basic questions of each; is it stable? Does it have
support? Does it enable our strategy of putting together component bricks?

For example; Angular (1.x) didn't quite meet the ability to piece together many
small chunks. The directives didn't quite cut it when it came to self contained
components. For a similar reason; Ember wasn't suitable, even though it had (and
still has) an excellent developer experience. Polymer was very close, although
it suffered from browsre support issues at the time.

React ticked all the boxes: Small, unopinionated about data handling, can piece
together components, huge browser support, and even came with some other
benefits for free: Server side rendering, and an ecosystem of existing
components.

And off we went! We built a product following our Atomic Design / components
strategy using React. Then we all lived happily ever after. No, the first thing
I did was ask if we had the time to refactor what I'd just created? I feel dirty
just thinking about most of the code I wrote then. It functioned, it was bug
free, the codebase wasn't that big, but it didn't have easily replacable parts:
A lot of the logic was tied tightly to a flux model that wasn't well thought
out, components leaked their logic instead of requiring callbacks to signal
events, etc.

These were mistakes I found exceptionally valuable to learn, ones I strive to
avoid in every project I now build.

# Lesson #4

**Build it to be replaceable**

You'll often hear this as "Build it to be thrown away", but I don't like that
version; it implies there's less effort put into the thing knowing it'll be
thrown away, which is not the goal. We want to make a high quality production
app. But sometimes, we want to replace bits of it. Sometimes we notice
similarities between things that can be refactored into one that can replace the
original. This plays very nicely into the "Everything is a component" mindset,
especially when the boundaries of a component are clearly defined.

That frist project yielded an important result: a working product! Equally as
importantly, We also learned a lot from the experiment of using React. It
integrated very nicely into our current codebase (the jQuery / SASS / manual
bundling ... thing), reflecting what Tom Occhino said when React was first open
sourced at JSConf in 2013:

>  Why this framework was able to be successful at Facebook: We didn't have to
>  convert everything, we could use it kind of piecemeal.

- Tom Occhino

It also spawned some basic toolsets that we still use today.

# Tooling

We were already using a lot of different tools for different tasks while
building frontends at Domain: We had Sass for compiling to CSS, we had the
manual script concatenation tool, and others like it, etc. What we didn't have,
was one coherent command to run which would do everything at once without any
those annoying things like temporarily setting things to production mode, or
turning off some step manually, and so on.

Thanks to the new project, I was able to start from scratch, pulling in all the
best practices from my time working on other more modern codebases. One common
feature was the `create-react-app`/ember cli like experience: Many basic
assumptions are made about how you're doing things, to make the development
experience buttery smooth.

Our result was a tool we imaginatevely called `fe-build`! As of today, it is a
dependency of over 200 private packages!

# Lesson #5

Tooling is important

> Move fast ~~and break things~~ _with stable infrastructure_

- [Facebook's motto](http://mashable.com/2014/04/30/facebooks-new-mantra-move-fast-with-stability/#yXFxrbsX9PqN)

That means, tools for building, tools for testing, tools for provisioning new
servers, tools for setting up your new projects, and so on. At Domain, we have
that motto split into 2:

> Eliminate the Humans

Ie; Automate as much as you can

> Build for replacability

Ie; Create standard API contracts. Use standard tools. Make each piece
replacable (see: Lesson #4)

Our tool, like `create-react-app` et al. (which, by the way, we created
`fe-build` before `create-react-app` existed), makes some assumptions about the
filesystem layout (a `src/` folder containing `js/`, `scss/`, etc):

```
.
├── package.json
├── README.md
├── src
│   ├── html
│   ├── js
│   ├── scss
│   └── static
└── test
```

Somewhat standard as far as code repo layouts go. We'd also have two output
folders: `lib/` for all the code that gets published to `npm`, and `build/` for
the output of a fully bundled component ready to be added to a html document.

While it may not seem like a big deal, these assumptions allowed us to codify a
lot of the things that would otherwise be passed in as options, leaving the
developer to worry only about the project they're building, not what to name
their folders (naming things is hard), or where should the output of the
component go, etc. Optimizations could then be made to the steps in our build
pipeline resulting in speed ups and new use-cases!

There were downsides to some of the choices we made, but over time we've evolved
the tool as the product has grown, and as developers have demanded more from it.

One of the invisible assumptions that we baked into our build tool is bundling
sass. There's a unique problem with sass that isn't available with JS; you
_must_ compile your SASS in one single go to share variables, etc, as the output
is static, so doesn't support variables at run time like you can with JS.

The JS build process we came up with looks like:

```
 src/
  ↓
eslint
  ↓
babel
  ↓
 lib/
  ↓
 npm
```

We could have made the SASS bundler run in each component like we do for JS:

```
  src/
   ↓
scss_lint
   ↓
  sass
   ↓
  lib/
   ↓
  npm
```

But now when we do an `npm install`, our component will live somewhere like:

```
.
├── package.json
├── node_modules
│   └── my-component
│       └── lib
│           └── css
└── src
    └── scss
```

How do we then combine the variables / mixins / placeholders from `src/scss`
with the css in `node_modules/my-component/lib/css`? We can't.

The solution here is to publish the unconverted SASS to npm:

```
  src/
   ↓
scss_lint
   ↓
   cp
   ↓
  lib/
   ↓
  npm
```

Now, we end up with sass that can be imported and compiled all at the same time
in our parent component.

```
.
├── package.json
├── node_modules
│   └── my-component
│       └── lib
│           └── scss
└── src
    └── scss
```

Then our child component's styling is only an `@import` away:

```
@import 'node_modules/my-component/lib/scss/styles.scss
```

This issue really rears its head when dealing with theming. Anyone who's dealt
with theming will tell you just how frustrating it can be to get right, and our
experience was no different. But I'm happy to report that following this model
we're able to support theming really well!

In our SASS, we use variables for a lot of colours, fonts, etc:

```scss
section {
  background-color: $c-primary;
}

button {
  background-color: $c-secondary;
}

.box {
  border-color: $c-neutral;
}
```

Then, we create theme specific sets of overrides:

```scss
// theme-domain.scss
$c-primary: #0b2047 !default;
$c-secondary: #0ea800 !default;
$c-neutral: #7e8594 !default;
```

```scss
// theme-allhomes.scss
$c-primary: #0b2047 !default;
$c-secondary: #0063e6 !default;
$c-neutral: #7e8594 !default;
```

Now, when we compile, we allow setting a theme option, which will load the
requested `theme-X.scss` file, resulting in final output containing the correctly
themed values no matter how deep in the `node_modules` tree a component might be (as long as it's published its sass).

# Lesson #6

Think about theming

_(Only if you have to)_

But hang on, haven't we just ended up back where we started with a `main.css`,
and sharing class names, etc? Yes! So we still needed a strategy for handling
that situation. Thankfully there have been many other very smart folks thinking
about this for longer than we have, so we were able to stand on the shoulders of
giants.

The option we went with is [BEM - Block Element Modifier](http://getbem.com/introduction/) as it provides the best balance between mental model and flexibility.

The basic premise is writing out your classnames in the format:

```css
.block__element--modifier { }
```

Where a _block_ is any unique group of common UI, an _element_ is a child in
that block, and a _modifier_ is something such as sizing or colour, etc. 

Remember lesson #3 (_everything is a component_)? Turns out BEM was a match made
in heaven for that notion: Every component has its own unique name, which gives
us the _block_. Then the parts of that component are each _elements_, and
finally _modifiers_ can be applied.

Now we have composable CSS (thanks to publishing our `lib/scss/` folder to npm),
which wont ever suffer from colliding classnames thanks to BEM!

Thanks to React, we've also got composable JS which outputs our HTML. How can we
start fitting all these pieces together?

I touched on it earlier; we take advantage of the power that npm provides thanks
to the CommonJS module format. Our workflow goes like so:

- Create a new component, A
- hack hack hack
- build `src/` -> `lib/`
- `npm publish`
- Create a new component, B
- `npm install A`
-
  ```
  const ComponentA = require('A');
  ...
  @import 'node_modules/A/lib/scss/styles.scss'
  ```

CommonJS ensures the JavaScript never collides (no more jQuery plugin hell!),
and the BEM convention ensures the CSS never collides (no more CSS whack-a-mole
bugs!). And all this is handled by `fe-build`.

We can do this `npm publish` + `npm install` combo infinitely, but at some point
we need to stop and render an actual HTML page.

<!-- pause for a beat -->

# Server Side Rendering (SSR)

A whole other chapter of our frontend development was server side rendering.

There's an eternal debate about if server side rendering is actually necessary -
after all, Googlebot can execute JS, right? ... Right? The answer is a resoundin
g _maybe_. Modern experiments (TODO: Link) seem to suggest that, yes, googlebot
will happily execute your JS, and index based on that. But it also anecdotally
appears that if you're competing for keywords (which these demos/examples never
are), you'll be beaten by a SSR app. And we all love Google SEO, right? We must
appease the Google Gods to ensure we're ranked at position zero (_above the
regular results_), or at the very least, on the first page.

Ranking often _is_ important, but there are other equally important factors that
need to be considered: Page load speed, accessibility, network, and JS errors.

The perceived page load speed can be greatly improved if server rendering is
added to the mix - acheiving an earlier first paint is an important metric in
Lighthouse / other perf tools. It also makes the user feel like the page loaded
faster, even if the time to first interaction is the same.

Accessibility is sadly often one that gets left off of the discussion. Some
scree nreaders aren't that great at dealing with JS still. Most are much much
better, but it can be a challenge still for some.

Network and JS errors are so readily brushed off by developers because they have
Fiber connections on MacBook Pros, something something millenials. Think about
your target demographic; could they be on public transport with spotty wifi that
might drop out half-way through downloading your JS bundle? What if it does
download, but then throws an error because the network is too slow? Does your
page always render on the client? It's summarised best by Stuart Langridge
([@sil](https://twitter.com/sil)) in ["Everyone has JavaScript,
right?"](https://kryogenix.org/code/browser/everyonehasjs.html)

This is all important to us at Domain, and formed part of our decision tree from
the early days.

# Lesson #7

Think about Server Side Rendering

React comes with server side rendering baked in as a first class citizen. It
doesn't even require node.js with projects like React.NET and `react-rails`!
This is an important point because at Domain we have many different backend
technologies: Perl for MyDesktop, PHP for our news site, .net for our legacy
pages, Java for our data business, and node for our modern pages.

We were in a predicament; do we let each team use their server rendering tool of
choice, or do we create one tool to handle it all, a-la `fe-build` for the
backend?

If we _did_ create one tool to do the SSR, how would that work? Would it wrap
each of the SSR implementations? Or could it be a standalone tool? Preferably in
node for best JS compatability.

If it _was_ in JS, how would a non-node.js backend execute it? A co-process on
the same machine? That would require setting it up for every language now and in
the future, plus ensuring it scales correctly (doesn't eat up memory, CPU, etc).
How have we handled this elsewhere? Databases were set up as microservices...

A-hah! A service! This was our big realisation; We had a highly reusable tool to
do JS bundling, SASS compilation, etc, that worked on a set of assumptions all
of our components followed. We can leverage those same assumptions to now do
server side rendering predictably on a remote service. Every application already
speaks HTTP/JSON, and every application knows how to handle/serve HTML.

And so was born _Renderizr_, a React Renderer As A Service (RRAAS)!

# Lesson #8

Re-use proven patterns.
