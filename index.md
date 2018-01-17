title: Many Small Components
class: animation-fade center middle
layout: true

<!-- This slide will serve as the base layout for all your slides -->

.twitter[
@jesstelford
]

---

class: impact

# {{title}}

## @ Domain.com.au

### [msc-sydjs.now.sh](https://msc-sydjs.now.sh)

---

class: impact

# Hi

<img class="emoji" style="max-height:50vh" src="./files/emoji/1f44b.svg" />

---

class: impact

# Jess Telford

# <a href="http://twitter.com/jesstelford" class="nolink">@jesstelford</a>

???

- My creds
- Full stack
- Frontend only for 6yrs
- Domain for 3yrs

Dad joke channel:

---

class: impact

<img style="height:45vh" src="./files/wonderwall.png" />

<img class="emoji" style="max-height: 25vh" src="./files/emoji/1f923.svg" />

???

- Feeling lyrical today:
- My friend told me to stop singing "Wonderwall" by Oasis
- 🎜 I said _maybeeeee_...

---

class: impact

# {{title}}

## @ Domain.com.au

### [msc-sydjs.now.sh](https://msc-sydjs.now.sh)

???

- Evolution of FE at Domain over 3yrs
- 9 Lessons:
  - Tooling
  - Processes
  - Styling
  - Theming
  - Server Side Rendering
- This is Onboarding

---

![Domain Group](./files/domain-responsive-20170719.png)

???

- What is Domain.com.au?
- Growth
- Over 35 FE devs

---

class: flex-slide flex-column

# c. 2015

.big[
- Homepage
- Search results
- Property details
- ... plus others
]

???

- A few core pages
- Great BE
- microservices: lots of effort
- FE: 1 person, not well designed

---

# `main.css`
# &nbsp;
# &nbsp;
# `main.js`

???

- Everything shared
- Single bundle
- Manual build / concat
- Outgrowing initial decisions
- Bug whack-a-mole (image gallery)

---

# `common.css`
# &nbsp;
# &nbsp;
# `main.js`

???

- The fix
- Extract base styles

---

# `common.css`
# `search-page.css`
# `property-details.css`
# `main.js`

???

- But: dupe on page 1/2/3/etc
- Differences creep in
- Fix after the fact
- Outgrew this choice too
- Added some tools to help build

---

class: lesson impact

# Lesson #1

## Don't leave frontend till last

???

- Evolution over 6mo? 2yr? 5yr?
- Can it grow?
- Ours couldn't.
- Copy+Paste doesn't scale
  - Bug in gallery? Fix multiple times
  - Tech debt is exponential

---

<img class="emoji" style="max-height:75vh" src="./files/emoji/1f914.svg" />

???

- Domain growing
- HPG / CRE
- Price Finder end 2013
- AllHomes mid 2014
- MyDesktop
- Unified UX & Design

---

<img class="emoji" style="max-height:50vh" src="./files/emoji/1f914.svg" />

## How do we scale Frontend?

???

- _Pause_
- Design + UX thinking same
- Lots of research
- Not many folks talking

---

<img style="max-height:80vh" src="./files/atomic-design-title.png" />

---

> we can break entire interfaces down into .alt[**fundamental building blocks**] and work
> up from there.

.attribution[Brad Frost]

???

- Instantly clicked with me
- Design / UX + FE agree

---

![Atomic Design](./files/atomic-design.png)

???

- Atoms, Molecules, Organisms, Templates, Pages
- Blocks that can be put together
- Defined our FE strategy

---

### Atoms

<img alt="Atoms" style="max-height:70vh" src="./files/atoms.jpg" />

[.attribution[Atomic Design]](http://bradfrost.com/blog/post/atomic-web-design/)

---

### Molecule

<img alt="Molecule" style="max-height:70vh" src="./files/molecule.jpg" />

[.attribution[Atomic Design]](http://bradfrost.com/blog/post/atomic-web-design/)

---

### Organism

<img alt="Organism" style="" src="./files/organism.jpg" />

[.attribution[Atomic Design]](http://bradfrost.com/blog/post/atomic-web-design/)

???

- Good strategy

---

class: lesson impact

# Lesson #2

## Your Frontend strategy is more than tools & code

???

- Design, UX, backend
- buy-in makes it easier
- _Pause_

---

![Atomic Design](./files/atomic-design.png)

???

- Challenge: Practical application in code?
- Q: Boundaries?
- Eg: Button with an Icon + text
- Theming?

---

> Will it be reused?

.attribution[Me. Most days.]

???

- Rule: Everything as simple as logical.
- Boundaries case-by-case
- Called "Components"

---

class: lesson impact

# Lesson #3

![Atomic Design](./files/atomic-design-components.png)

## Everything is a component

???

- ✓ Strategy
- ✓ Aligned to Design / UX
- I Nerded out over possibilities
- Start somewhere small

---

<img src="./files/region-map.jpg" />

???

- Region search
  - Select state
  - populates list
  - select boxes
  - search
- Needed to be built anyway
- Spend a little extra time

---

<img class="emoji" style="max-height:75vh" src="./files/emoji/1f914.svg" />

???

- But first, what tech?

---

<img style="max-height: 75vh" src="./files/flash.png" />

---

<img style="width: 100vw" src="./files/react.png" />

???

- Investigation
- Stable? Support? Match our strategy?
- Angular: Popular, No small blocks
- Ember: DX++, no small blocks
- Polymer: Small blocks, No browser support
- React: ✓✓✓
  - \+ SSR & existing components!

---

<img src="./files/region-map.jpg" />

???

- Built it
- Great? No.
- Lots of learning
- Wasn't thinking in components

---

>  Why this framework was able to be successful at Facebook: We didn't have to
>  convert everything, we could .alt[**use it kind of piecemeal**].

.attribution[Tom Occhino]

???

- Didn't realize till too late
- Piecemeal + Fundamental building blocks == success
- Iterative

---

class: lesson impact

# Lesson #4

## Build it to be replaceable

???

- Not "Build to throw away"
  - Implies less effort
- Quality is important
- Boundaries are important
- Components have clear boundaries

---

# Tooling

???

- So far:
  - Frontend Strategy
  - Picked our tech (React)
  - Built a project
  - We're focused on tooling
- FB's motto?

---

> Move fast .alt[**with stable infrastructure**]

[.attribution[Facebook]](http://mashable.com/2014/04/30/facebooks-new-mantra-move-fast-with-stability/#yXFxrbsX9PqN)

???

- Not "break things"
- Tooling enables this
  - Infrastructure
  - Building
  - Testing, etc
- API contracts, etc
- Automate all the things
- Lesson #3 "Everything Component"
  - Tools for "Components"?

---

## Components

<img style="max-height:75vh" src="./files/infra1-component.png" />

???

- Basic flow
- Component used inside another project
- Private `npm`

- Automate as much as possible
- Best practice: one, easy command
  - Eg: `create-react-app` / `ember-cli`

---

## Components

<img style="max-height:75vh" src="./files/infra2-component+details.png" />

???

- Look inside a component

---

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
└── test
```
]

???

- Standard layout

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
*├── src
*│   ├── js
│   ├── sass
│   └── static
└── test
```
]

???

- Look at `src/js`

--

.no-margin.big.code-center[
```
*src/js
  ↓
eslint
  ↓
babel
  ↓
lib/js
```
]

???

- `eslint` for styling errors + gotchyas
- `babel` to convert to supported JS
- `lib/js/` published to `npm`

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
*├── lib
*│   └── js
└── test
```
]

.no-margin.big.code-center[
```
src/js
  ↓
eslint
  ↓
babel
  ↓
*lib/js
```
]

???

- Added `lib/js/`
- Eg: `lib/js/index.js`

---

class: flex-slide

.no-margin.large.code-center[
```
*├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
│   └── js
└── test
```
]


.large.no-margin.code-center[
```json
{
  "name": "foobar",
  "main": "lib/js/index.js",
  ...
}
```
]

???

- When `npm install`'d, will find correct file

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
│   └── js
└── test
```
]

.no-margin.big.code-center[
```
*src/js
* ↓
*eslint
* ↓
*babel
  ↓
lib/js
```
]

???

- Lots of steps
- Can we automate?
- Assumptions (directory locations)

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
│   └── js
└── test
```
]

.no-margin.big.code-center[
```
*fe-build
   ↓
 lib/js
```
]

???

- `fe-build` codifies it all

---

class: flex-slide

.no-margin.large.code-center[
```
*├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
│   └── js
└── test
```
]

.large.no-margin.code-center[
```json
{
  "name": "foobar",
  "main": "lib/js/index.js",
* "scripts": {
*   "build": "fe-build"
* }
  ...
}
```

```bash
$ npm run build
```
]

???

- `fe-build`
  - Over 200 private packages!

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
*├── src
*│   ├── js    ✓
│   ├── sass
│   └── static
├── lib
│   └── js
└── test
```
]

???

- That's `src/js/` done

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
*├── src
│   ├── js
*│   ├── sass
│   └── static
├── lib
│   └── js
└── test
```
]

???

- How do we build SASS?
- Like JS?

--

.no-margin.big.code-center[
```
*src/sass
    ↓
scss_lint
    ↓
   sass
    ↓
lib/css
```
]

???

- Like JS
- `lib/css/` published to `npm`

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
*├── lib
*│   ├── css
│   └── js
└── test
```
]

.no-margin.big.code-center[
```
src/sass
    ↓
scss_lint
    ↓
   sass
    ↓
*lib/css 
```
]

???

- But, a problem!

---

class: flex-slide

.no-margin.large.code-center[
```
*├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
│   ├── css
│   └── js
└── test
```
]

.large.no-margin.code-center[
```json
{
  "name": "foobar",
  "main": "lib/js/index.js",
* "??": "lib/css/styles.css",
  "scripts": {
    "build": "fe-build"
  }
  ...
}
```
]

???

- No way to compose css
- no standard for "main" field

---

.no-margin.big.code-center[
```bash
$ npm install foobar
```
]

.no-margin.big.code-center[
```
├── package.json
├── node_modules
│   └── foobar
│       └── lib
│           └── css
└── src
    └── sass
```
]

???

- Another problem
- Combine sass variables?

---

class: force-top

.large.no-margin[
```scss
// foobar/src/sass/styles.scss
.foo__button {
  color: $text-colour;
}
```
]

???

- Regular sass variable
- Parent can overwrite the value

--

.large.no-margin.space-top[
```scss
// src/sass/styles.scss
$text-colour: #fff;
@import 'node_modules/foobar/lib/css/styles.css';
```
]

???

- Remember: Compiled sass -> css

--

.large.no-margin.space-top[
```scss
// node_modules/foobar/lib/css/styles.css
.foo__button {
  color: ???;
}
```
]

???

- What's the value?
- An error?
- Fallback?
- Parent can't overwrite

---

<img class="emoji" style="max-height:75vh" src="./files/emoji/1f622.svg" />

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
*│   ├── css
│   └── js
└── test
```
]

.no-margin.big.code-center[
```
 src/sass
    ↓
scss_lint
    ↓
*  sass
*   ↓
*lib/css
```
]

???

- Instead of this

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
*│   ├── sass
│   └── js
└── test
```
]

.no-margin.big.code-center[
```
 src/sass
    ↓
scss_lint
    ↓
*   cp
*   ↓
*lib/sass
```
]

???

- Get this

---

.no-margin.big.code-center[
```
├── package.json
├── node_modules
│   └── foobar
│       └── lib
*│           └── css 
└── src
    └── sass
```
]

???

- Instead of this

---

.no-margin.big.code-center[
```
├── package.json
├── node_modules
│   └── foobar
│       └── lib
*│           └── sass
└── src
    └── sass
```
]

???

- Get this

---

.large.no-margin[
```json
// package.json
{
  "name": "foobar",
  "main": "lib/js/index.js",
  "scripts": {
    "build": "fe-build",
*   "build:sass": "cp -r src/sass lib/sass"
  }
  ...
}
```
]

???

- Combine into one `fe-build` command

---

.large.no-margin[
```json
// package.json
{
  "name": "foobar",
  "main": "lib/js/index.js",
  "scripts": {
*   "build": "fe-build"
  }
  ...

}
```
]

???

- Codified another assumption

---

.large.no-margin[
```scss
$text-colour: #fff;
@import 'node_modules/foobar/lib/sass/styles.scss
```
]

.row[
.col-9.large[
&nbsp;

&nbsp;

&nbsp;

&nbsp;
]
]

???

- Our code example again:

---

.large.no-margin[
```scss
*$text-colour: #fff;
@import 'node_modules/foobar/lib/sass/styles.scss
```
]

.row[
.col-9.large.no-margin.space-top[
```scss
.foo__button {
* color: #fff;
}
```
]

.col-3[
<img class="emoji" style="max-height:40vh" src="./files/emoji/1f389.svg" />
]
]

???

- Now variables work

---

class: flex-slide flex-column

## Theming

???

- Why sass variables?
- Theming is hard
- Lots of Domain brands

--

![Domain Auctions](./files/auction-domain.png)

![Allhomes Auctions](./files/auction-allhomes.png)

???

- Eg: 2 items the same

---

.large.no-margin.code-center[
```scss
.auction-results__container {
  background-color: $c-primary;
}

.auction-results__stats {
  color: $c-secondary;
}

.auction-reuslts__separator {
  border-color: $c-neutral;
}
```
]

---

.large.no-margin.code-center[
```scss
// theme-domain.scss
$c-primary: #0b2047 !default;
$c-secondary: #0ea800 !default;
$c-neutral: #7e8594 !default;
```
]

.large.no-margin.code-center.space-top[
```scss
// theme-allhomes.scss
$c-primary: #fff !default;
$c-secondary: #0063e6 !default;
$c-neutral: #7e8594 !default;
```
]

???

- Only `secondary` diff
- In library `fe-brary`

---

.big[.large[`fe-build --theme domain`]]

.big[↓]

.no-margin.large.code-center[
```scss
@import 'fe-brary/themes/theme-domain.scss'
@import './src/sass/styles.scss'
```
]

???

- Constructs this entry point
- not in `package.json` (done in SSR)

---

class: lesson impact

# Lesson #5

## Plan your theming

.large[_(Only if you have to)_]

---

### Automated during publish

<img style="max-height:75vh" src="./files/infra1-component.png" />

???

- When to do this?

---

.large.no-margin[
```json
// package.json
{
  "name": "foobar",
  "main": "lib/js/index.js",
  "scripts": {
*   "build": "fe-build"
  }
  ...

}
```
]

???

- Not really 'build'

---

.large.no-margin[
```json
// package.json
{
  "name": "foobar",
  "main": "lib/js/index.js",
  "scripts": {
*   "prepublish": "fe-build"
  }
  ...

}
```
]

???

- Just before publishing to npm

---

class: lesson impact

# Lesson #6

## Tooling is important

???

- Manual sucks
  - Building
  - Linting
  - Testing
  - new servers
  - boilerplates
  - etc
Joke:

---

class: lesson impact

???

- I thought my friend wasn't serious when she said "Stop singing songs by The
Monkees"
- 🎜 And then I saw her face...

---

class: impact

<img style="height:45vh" src="./files/monkees.png" />

<img class="emoji" style="max-height: 25vh" src="./files/emoji/1f923.svg" />

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
│   ├── css
│   └── js
└── test
```
]

.large.no-margin[
```json
// package.json
{
  "name": "foobar",
  "main": "lib/js/index.js",
  "scripts": {
    "prepublish": "fe-build"
  }
  ...
}
```
]

???

- Assumptions
- Hard to setup
- not going to change
- Already codified cli options info `fe-build`

---

&nbsp;

<img style="width: 25%" src="./files/yeoman-character.png" />

[.big[yeoman.io]](http://yeoman.io/)

???

- Scaffolding tool

---

.no-margin.big.code-center[
```
$ mkdir foo
$ cd foo
*$ yo fe-boilerplate
```
]

<img src="./files/yeoman-character.png" />

[.big[yeoman.io]](http://yeoman.io/)

???

- Answer Q's
- Creates dirs
- fill `package.json`
- install deps
- Less thought necessary
- scales well

---

class: flex-slide

.no-margin.large.code-center[
```
├── package.json
├── README.md
├── src
│   ├── js
│   ├── sass
│   └── static
├── lib
│   ├── css
│   └── js
└── test
```
]

.large.no-margin[
```json
// package.json
{
  "name": "foobar",
  "main": "lib/js/index.js",
  "scripts": {
    "prepublish": "fe-build"
  }
  ...
}
```
]

???

- `yo` get this

- Quick review of where we're up to

---

<img style="max-height:75vh" src="./files/infra1-component.png" />

???

- `yo` to create
- `npm publish`
- `npm install`

---

.no-margin.large[
```javascript
// src/js/index.js
const FooBar = require('foobar');
...
```
]

&nbsp;

.no-margin.large[
```scss
// src/sass/styles.scss
@import 'node_modules/foobar/lib/scss/styles.scss'
...
```
]

???

- hack hack hack
- `publish` + `install` infinitely

---

<img class="emoji" style="max-height:75vh" src="./files/emoji/1f389.svg" />

---

# How do we render a page?

???

- components === great
- not enough on own

---

class: impact

## Server Side Rendering

???

- Mentioned react SSR possible
- Necessary?
- debate

---

## SEO

???

- Important!
- Google runs JS
- Perf: TTFP

--

### ... _maybe?_

---

[.large[kryogenix.org/code/browser/everyonehasjs.html]](kryogenix.org/code/browser/everyonehasjs.html)

<img style="height: 90vh" src="./files/everyone-has-js.png" />

???

- Stuart Langridge
- Devs:
  - Fiber connection
  - MacBook Pro
- Users:
  - Flaky connection
  - Old laptop

---

## ✔ Server Side Rendering

???

Yes. Domain needs SSR

---

# React <img style="height: 1em;" src="./files/emoji/2764.svg" /> SSR

--

.big[
`ReactDOMServer.renderToString()`
]

--

.big[
`React.NET`
]

--

.big[
`java`?
]

--

.big[
`perl`?
]

--

<img class="emoji" style="max-height:50%; position: absolute; top: 35%; left: 0; max-width: 100%" src="./files/emoji/1f914.svg" />

???

- Every stack different?
- Or like `fe-build` for BE?
  - Wrap each SSR impl?
  - node?
  - co-process? (devops nightmare)

---

class: lesson impact

# Lesson #7

## Think about Server Side Rendering

???

- Don't be handwavey
- We thought lots
- What's similar?

---

<img class="emoji" style="max-height:70%; position: absolute; top: 15%; left: 0; max-width: 100%; z-index: -1" src="./files/emoji/1f4a1.svg" />

???

- We've done this before

--

## _Microservices_

---

## _Rendering As A Service_

???

- an API that returns HTML

---

class: lesson impact

# Lesson #8

## Re-use proven patterns

---

<img style="max-height:75vh" src="./files/infra5-renderer.png" />

???

- "Renderer"
- S3 backing store
- Autoscale, etc
- How do we render a page?
  - Still unanswered
  - Server uses html returned
  - wraps in `<html>` tags, etc

---

<img style="max-height:75vh" src="./files/infra6-renderer+client.png" />

???

- Client gets full doc
- Client fetches JS/CSS from S3
- Bigger picture?

---

<img style="max-height:75vh" src="./files/infra7-complete.png" />

???

- SSR on top
- `npm` part on bottom
- new part on right
  - the "glue"
  - "Bundler"

---

<img style="max-height:75vh" src="./files/infra4-component+details+bundler.png" />

???

- Forget about service for now
- We'll come back to it

---

<img style="max-height:75vh" src="./files/infra3-bundler.png" />

???

- Already talked about `npm publish`
- npm hook
- Automation FTW
- Saves output in S3

---

.no-margin.big.code-center[
```
styles.scss -> styles.css
index.js -> client.js
index.js -> server.js
foo.png -> foo_aa34f8.png
```
]

???

- guts of bundler

---

.no-margin.big.code-center[
```
*styles.scss -> styles.css
index.js -> client.js
index.js -> server.js
foo.png -> foo_aa34f8.png
```
]

???

- Earlier, removed sass
- This is where it's back

---

.no-margin.big.code-center[
```
styles.scss -> styles.css
*index.js -> client.js
index.js -> server.js
foo.png -> foo_aa34f8.png
```
]

???

- Webpack bundle output

---

.no-margin.big.code-center[
```
styles.scss -> styles.css
index.js -> client.js
*index.js -> server.js
foo.png -> foo_aa34f8.png
```
]

???

- The thing "renderer" executes
- SSR

---

.no-margin.large.code-center[
```javascript
import ReactDOMServer from 'react-dom/server'

module.exports = function render(props) {
  return ReactDOMServer.renderToString(...)
}
```
]

???

- Simplified
- props to service passed in here
- returns HTML

---

.no-margin.big.code-center[
```
styles.scss -> styles.css
index.js -> client.js
index.js -> server.js
*foo.png -> foo_aa34f8.png
```
]

???

- static assets
- fingerprint on file contents
- uploads to S3

---

.no-margin.large.code-center[
```html
<img src="../static/foo.png" />
```

.big[↓]

```html
<img src="http://S3-URL/foobar/foo_aa34f8.png" />
```
]


???

- rewrites \*.js & \*.scss
- `foobar` is component name

---

.no-margin.big.code-center[
```
styles.scss -> styles.css
index.js -> client.js
index.js -> server.js
foo.png -> foo_aa34f8.png
```
]

???

- Main steps only
- Details? Ask after talk.

---

<img style="max-height:75vh" src="./files/infra3-bundler.png" />

???

- `npm publish` triggers build
- build pushes into S3
- On other side of S3...

---

<img style="max-height:75vh" src="./files/infra6-renderer+client.png" />

???

- Service fetches `server.js`
- Executes `server.js`
- Client fetches:
  - client.js / css
  - static assets

---

<img style="max-height:75vh" src="./files/infra7-complete.png" />

???

- Final walk through
- Split "bundle" / "render" good
- Devs can focus
  - FE on UI
  - BE make service calls
  - Ops keeping renderer running

---

## Live _now_

### 10,000 rpm
### 5ms

???

- averages
- Lots more to do!
- Last lesson...

---

class: lesson impact

# Lesson #9

## Iterate and Improve

???

- Iterating:
  - Browserify -> Webpack
  - Bundle splitting
  - SPA
  - CSS-in-JS
- Do once, works everywhere
  - Thanks to assumptions

---

## Lessons Learned @ Domain

.big.left.space-left[
.space-left[
1. Don't leave frontend till last
2. Your Frontend strategy is more than tools & code
3. Everything is a component
4. Build it to be replaceable
5. Plan your theming
6. Tooling is important
7. Think about Server Side Rendering
8. Re-use proven patterns
9. Iterate and Improve
]
]

???

Take away this one thing: [joke]

---

class: impact

<img style="height:65vh" src="./files/lion.png" />

<img class="emoji" style="max-height: 10vh" src="./files/emoji/1f923.svg" />

???

- At any given time, the urge to sing "The Lion Sleeps Tonight" is just a whim
  away
- 🎜 a-whim-away a-whim-away a-whim-awy a-woo-oooooo-ooOOooo

---

class: impact

<h1 style="margin: 1.7em 0">fin.</h1>

[.attribution[Emoji by Twitter / CC BY 4.0 <img class="emoji" style="width: 1.5em; margin-left: 0.5em" src="./files/emoji/1f60d.svg" />]](https://github.com/twitter/twemoji)
