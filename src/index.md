---
layout: base.webc
---
# Index page

This was generated from `index.md`.

To start building, run:

```bash
docker-compose run --rm site npm run serve
```

- [x] Get a simple layout working
- [x] Get a basic WebC component to work in an `.md` file
- [x] Get PCSS to compile into CSS
  - [ ] Get the css to spit out in the generated page

{% renderTemplate "webc" %}
<site-footer></site-footer>
{% endrenderTemplate %}