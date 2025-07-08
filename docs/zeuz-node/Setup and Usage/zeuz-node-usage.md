---
id: zeuz-node-usage
title: ZeuZ Node usage
sidebar_label: Install and connect
sidebar_position: 1
---

ZeuZ Node can be launched via the CLI from any terminal/cmd prompt.
`node_cli.py` file is the entry point of ZeuZ Node.

## Command Line Interface

- Run zeuz node: `uv run node_cli.py`
- Get help/see all available commands: `uv run node_cli.py -h`
- Logoout and re-enter credentials: `uv run node_cli.py -l`
- Login with API key and server: `uv run node_cli.py -s https://zeuz-server.com
  -k API-KEY-ABC-XYZ-QWERTY`
- Local Run/Re-run previous deployment offline: `uv run node_cli.py -r`
