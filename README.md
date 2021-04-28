**💛 You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/egoist).**

---

# node-apikit

[![npm version](https://badgen.net/npm/v/node-apikit)](https://npm.im/node-apikit)

## Install

```bash
npm i node-apikit
```

NOTE: this library requires a `fetch` polyfill if you're running it in Node.js. Despite being named `node-apikit`, it actually supports browser and Deno too.

## API

### `getHTML`

Get HTML for specific URL:

```ts
import { getHTML } from 'node-apikit'

const html = await getHTML(url)
```

Arguments:

- `url`: URL
- `options`:
  - `js`: `boolean` Run JavaScript on this page, default to `false`

### `screenshot`

Screenshot specific URL:

```ts
import { screenshot } from 'node-apikit'

const { getBuffer } = await screenshot(url)
const arrayBuffer = await getBuffer()
```

Arguments:

- `url`: URL
- `options`:
  - `fullPage`: `boolean` screenshot the full page, default to `false`

### `getRealURL`

Get the final URL, i.e. after redirection.

```ts
import { getRealURL } from 'node-apikit'

const url = await getRealURL(url)
```

Arguments:

- `url`: URL

### `seo`

Get SEO information for specific URL:

```ts
import { seo } from 'node-apikit'

const info = await seo(url)
```

Arguments:

- `url`: URL
- `options`:
  - `js`: `boolean` Run JavaScript on this page, default to `false`

Returns:

```ts
interface Info {
  title?: string
  description?: string
  image?: string
  og: {
    title?: string
    description?: string
    image?: string
  }
  twitter: {
    creator?: string
    site?: string
    title?: string
    description?: string
    image?: string
  }
}
```

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
