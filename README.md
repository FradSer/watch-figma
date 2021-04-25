# watch-figma

"Run last plguin" in Figma.

## Synopsis

Install it:

``` bash
yarn add -D watch-figma npm-watch
```

Add a top-level `"watch"` config to your `package.json` and a `"watch"` script to your `"scripts"`:

``` json
"watch":{
  "dev":{
      "patterns":[
        "src",
        "test"
      ],
      "extensions":"*",
      "quiet":true,
      "runOnChangeOnly":false
  }
},
"scripts":{
  "dev": "webpack --mode development && watch-figma",
  "start": "npm-watch"
}
```
