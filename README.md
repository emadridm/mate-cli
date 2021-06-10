@mate/mate
==========

An office mate

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@mate/mate.svg)](https://npmjs.org/package/@mate/mate)
[![Downloads/week](https://img.shields.io/npm/dw/@mate/mate.svg)](https://npmjs.org/package/@mate/mate)
[![License](https://img.shields.io/npm/l/@mate/mate.svg)](https://github.com/emadridm/mate/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mate/mate
$ mate COMMAND
running command...
$ mate (-v|--version|version)
@mate/mate/1.0.0 linux-x64 node-v16.1.0
$ mate --help [COMMAND]
USAGE
  $ mate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mate account [NAME]`](#mate-account-name)
* [`mate hello [FILE]`](#mate-hello-file)
* [`mate help [COMMAND]`](#mate-help-command)
* [`mate init [FILE]`](#mate-init-file)

## `mate account [NAME]`

list, create, update, login, logout or delete accounts

```
USAGE
  $ mate account [NAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/account.ts](https://github.com/emadridm/mate/blob/v1.0.0/src/commands/account.ts)_

## `mate hello [FILE]`

describe the command here

```
USAGE
  $ mate hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mate hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/emadridm/mate/blob/v1.0.0/src/commands/hello.ts)_

## `mate help [COMMAND]`

display help for mate

```
USAGE
  $ mate help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `mate init [FILE]`

describe the command here

```
USAGE
  $ mate init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/emadridm/mate/blob/v1.0.0/src/commands/init.ts)_
<!-- commandsstop -->
