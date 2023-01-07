oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g misskeyInstanceManager
$ mim COMMAND
running command...
$ mim (--version)
misskeyInstanceManager/0.0.0 linux-x64 node-v18.12.1
$ mim --help [COMMAND]
USAGE
  $ mim COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mim hello PERSON`](#mim-hello-person)
* [`mim hello world`](#mim-hello-world)
* [`mim help [COMMAND]`](#mim-help-command)
* [`mim plugins`](#mim-plugins)
* [`mim plugins:install PLUGIN...`](#mim-pluginsinstall-plugin)
* [`mim plugins:inspect PLUGIN...`](#mim-pluginsinspect-plugin)
* [`mim plugins:install PLUGIN...`](#mim-pluginsinstall-plugin-1)
* [`mim plugins:link PLUGIN`](#mim-pluginslink-plugin)
* [`mim plugins:uninstall PLUGIN...`](#mim-pluginsuninstall-plugin)
* [`mim plugins:uninstall PLUGIN...`](#mim-pluginsuninstall-plugin-1)
* [`mim plugins:uninstall PLUGIN...`](#mim-pluginsuninstall-plugin-2)
* [`mim plugins update`](#mim-plugins-update)

## `mim hello PERSON`

Say hello

```
USAGE
  $ mim hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/sim1222/misskeyInstanceManager/blob/v0.0.0/dist/commands/hello/index.ts)_

## `mim hello world`

Say hello world

```
USAGE
  $ mim hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mim hello world
  hello world! (./src/commands/hello/world.ts)
```

## `mim help [COMMAND]`

Display help for mim.

```
USAGE
  $ mim help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mim.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `mim plugins`

List installed plugins.

```
USAGE
  $ mim plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mim plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.9/src/commands/plugins/index.ts)_

## `mim plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mim plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mim plugins add

EXAMPLES
  $ mim plugins:install myplugin 

  $ mim plugins:install https://github.com/someuser/someplugin

  $ mim plugins:install someuser/someplugin
```

## `mim plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mim plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mim plugins:inspect myplugin
```

## `mim plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mim plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mim plugins add

EXAMPLES
  $ mim plugins:install myplugin 

  $ mim plugins:install https://github.com/someuser/someplugin

  $ mim plugins:install someuser/someplugin
```

## `mim plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mim plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ mim plugins:link myplugin
```

## `mim plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mim plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mim plugins unlink
  $ mim plugins remove
```

## `mim plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mim plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mim plugins unlink
  $ mim plugins remove
```

## `mim plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mim plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mim plugins unlink
  $ mim plugins remove
```

## `mim plugins update`

Update installed plugins.

```
USAGE
  $ mim plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
