# 11ty Base Build

I'm new to [11ty](https://www.11ty.dev/), this project is purely about getting a "minimal sensible blank slate" for myself to use on future projects.

When I say minimal; I've learned over years that staying as close as possible to the raw "W3C base technologies" and doing progressive enhancement is the simplest, most flexible, and longest lasting way of building sites. So; no frameworks - JS, CSS, or otherwise. I don't like them.

This project is using the "surely about to be released" 11ty 2.0 branch, not the older 1.0 one.

## Goals

- [x] Use Docker controlled via a Makefile, so I don't have to deal with the nightmare mess of native node/npm
- [x] Use PCSS, not SCSS so we're far closer to native CSS techniques
  - BUG: Ok, why won't it output anything using `--serve` though...
- [x] Use [WebC](https://www.11ty.dev/docs/languages/webc/) as the main templating language
  - WebC allows making "components" and literal Web Components; this is a good bet.
- [x] Use markdown as the main data language for ingest
  - Because MD is much lower friction for my writing, so using it will result in me posting more content

Docker strategy stolen from [Andrew Welch's base](https://github.com/nystudio107/eleventy-base-blog/tree/feature/docker), with details in his [blog post](https://nystudio107.com/blog/run-your-node-js-apps-buildchains-via-docker)

Run things as:

- `make docker` (once only to build the dockerfile)
- `make npm install` (to install the NPM stuff)
  - BUG: this seems to loop forever?
- `make npm run xxx` xxx is any script in the config

## Notes

- `src` is the place all work is done
- `dist` is where the generated site lives
- `config` is where I'm stuffing all 11ty specific config
