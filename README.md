# websh-deno 🦕

A command line [websh](https://github.com/jiro4989/websh) client powered by deno

## Usage

```
$ websh-deno --help
  Usage:   websh-deno <code:string>
  Version: v0.0.1

  Description:

    A command line websh client powered by Deno

  Options:

    -h, --help     - Show this help.
    -V, --version  - Show the version number for this program.
```

## Installation

Requires [deno](https://deno.land/deno), testing on `v1.16.1`.

```bash
deno install --allow-net --name websh-deno \
    https://raw.githubusercontent.com/sheepla/websh-deno/master/cli.ts
```

... or clone this repository then run below.

```bash
make build && sudo make install
```
