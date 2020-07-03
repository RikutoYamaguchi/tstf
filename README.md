# tstf

TypeScript for Terraform

## Useage

Initialize npm project:

```
npm init
```

Install this package into your project:

```
npm i -D git+https://github.com/RikutoYamaguchi/tstf.git
```

※ Not ye nt in the registry.

Install typescript and webpack into your project:

```
npm i -D typescript ts-loader webpack wepback-cli
```

Setup webpack.config.js:

ex)

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "node"
}
```

Implementing src/index.ts:

ex)

```js
import { AwsVpc, compile } from 'tstf'

const example1Vpc = new AwsVpc({
    cidrBlock: "10.0.0.0/16",
    enableDnsHostnames: true,
    enableDnsSupport: true,
    name: "example1",
    tags: {
        name: "example1"
    }
})

const example2Vpc = new AwsVpc({
    cidrBlock: "10.1.0.0/16",
    enableDnsHostnames: true,
    enableDnsSupport: true,
    name: "example2",
    tags: {
        name: "example2"
    }
})

// Set the directory you want to output
const outputPath = path.join(path.resolve(), '.tstf')
compile(outputPath, example1Vpc, example2Vpc)

```

Add npm script for your `package.json`

```json
{
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "generate": "npm run build && node dist/index.js"
  }
}
```

Generate tf file:

```
npm run generate
```

## API

※ In preparation.

### AwsVpc

create a resource `aws_vpc`

**constructors**

// TODO: write constructors

**methods**

// TODO: write methods
