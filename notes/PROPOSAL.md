# Title

Shipping Many Small React Components at Domain.com.au

# Abstract

More than just TodoMVC, This is a real-world story of how we've created over 220 components, by 22 developers, shared across 10 teams, working on 5 brands, within one company. Hear how we've succeeded (and failed) in tackling the sharing/re-use of components, consistent build tooling, theming, CI, Server Side Rendering (in 5 languages), and the processes we've put in place to manage all those components.
No matter your team size, big or small, this talk will leave you with practical knowledge you can take back to your team today!

# Details

This is a brand new talk, so the outline below is only rough:


- Greeting
- Intro
- [main body of talk]
- Wrap Up


---


**Greeting:** After introducing myself / my company, I will lead with an excellently lame (SFW) joke just to get everyone relaxed.


**Intro:** A recap of the promise made by React for what Many Small Components can do for you. I will also talk about the particular problems my company faced (multiple brands across many teams). This sets the presupposition for the rest of the talk.


Give an overview of the main points I'll be talking about (approx 10 minutes each):


- Tooling
- Styling
- Theming
- Processes
- Server Side Rendering


I will also explain that "Many Small Components" means: 1 component per codebase, each published to npm individually with a single export.


(See below for more details on each of those points)


**Wrap Up:** Recap the 5 areas spoken about. Offer Q&A after the conference. Thank the audience. Trigger the "Applause" sign.


---


**Tooling:** How creating an opinionated, reusable build tool is the best decision we made. Quickly followed by the second best decision we made; using Yeoman to generate new projects that include this build tool (very similar to `create-react-app` using `react-scripts` before it was a thing). It also includes setup for CI, PR templates, linting, etc.


**Styling:** We use SASS (_gasp!_ not a css-in-js solution!?) for various reasons. The biggest being variables and placeholders/extends. A base library holds all the common styles that will never change between projects. This includes a global reset, plus styles for different tags (`<a>`, `<button>`, `<h1|h2|h3|h4|h5|h6>`, `<p>`, etc). Styles are published with components, then compiled by SASS CLI only at the top level, allowing variable replacement, etc. (Especially useful for themes)


**Theming:** KISS: A HOC which provides a `theme` context (`themeRoot`). Then each component which wants to opt-in to theming, is wrapped in a `theme` HOC which reads the context, and passes it to the original component as a prop. Theming for styles is slightly trickier; our build tool extracts all the possible themes from our base library (`fe-brary`), and generates a variation of the compiled CSS, but with the theme specific variables applied. The CSS file loaded is then determined by the theme: `styles-<theme>.css`


**Processes:** Enforcing CI green tick (linting + unit tests) before merging PRs. PRs should have tests. Every new starter goes through a "Getting Started" tutorial on their first day which runs them through creating a component from scratch through the review cycle to publishing and rendering server side. Ownership of components is also important to consider - we have opted for a fuzzy ownership model where anyone can commit to any component at any time, and release a new version as long as it adheres to semver.


**Server Side Rendering:** We settled on a centralized service to do the server side rendering for us. Very similar to [AirBnB's HyperNova](https://github.com/airbnb/hypernova) (before it was a thing). Allows us to render in any language that can make a HTTP request. But makes assumptions about the components being in particular structures with particular features from each of the previous sections. Being this opinionated is ok as we're one single company with the same internal developers who talk to each other and read the same internal docs.

# Pitch

React is often touted as the tool you need if you want to create many small, reusable components, but rarely is it backed up with practical real-world examples. After seeing many honest, but ultimately failed, attempts with other tools / languages in my career, I have spent the last 2 years leading an excellent and growing team of 22 frontend developers to realise the utopia that is Many Small Components. We have succeeded, and even surpassed my own (high) expectations to now be serving these components on over 60 million page views per month. This is way more than just TodoMVC. This is a real world, publicly traded company with bottom lines and product goals. I want to share the "How", not just the "What" so others can imitate that success.

# Tagline


Frontend Lead at Domain.com.au


# Bio


Jess loves JavaScript and the open source community built around it. He has supported it by contributing to [200+ OSS projects](https://github.com/jesstelford?tab=repositories), founding 2 very popular Sydney meetups ([React Sydney](https://www.meetup.com/en-AU/React-Sydney/) & [Developer Drinkups](https://www.meetup.com/en-AU/Sydney-Developer-Drinkups/)), and teaching intro to JS classes!


A veteran of startups ([Zibbet](https://www.zibbet.com/), [Spreets](https://spreets.com.au), [Nnooo](http://www.nnooo.com/)) and big companies ([Yahoo!](https://au.yahoo.com/), [Groupon](https://www.groupon.com/)), Jess has most recently cultivated an elite team who are tackling challenges of scale when re-using React + Node.js across many sites and pages within the [Domain Group](https://www.domain.com.au/) with great success, and having fun doing it!
