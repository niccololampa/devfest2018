# Development Environment

You can skip this step if you already have the environment and you can submit code that is up to our
coding pattern and standards.

## OS

We recommend that you use the following OS

- Linux (prerefably Ubuntu 16.x)
- Mac OSX (preferably latest)

The reason is that we are using a UNIX based system and most of our tutorials and examples
run smoothly under this environment. If you are going to use a Windows-based system,
we recommend that you use Bash on Windows. You can follow any of the following tutorials online,

- https://docs.microsoft.com/en-us/windows/wsl/install-win10
- https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/

But be warned that we haven't fully tested installing needed dependencies
(especially for testing the frontend part) on Bash on Windows. Additionally,
we might deal with line-endings that might change when commiting / pulling the the repo
from your repo. https://help.github.com/articles/dealing-with-line-endings/

## IDE and Extensions

For faster implementation with less errors, we recommend using [VSCode](https://code.visualstudio.com/), with the following extensions:
- .ejs (Qassim Farid) For EJS language support and syntax highlighting https://marketplace.visualstudio.com/items?itemName=QassimFarid.ejs-language-support
- Debugger for Chrome (Microsoft) For using the debugger on Chrome https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
- ESLint (Dirk Baeumer) For linting https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Firebase (toba) For firebase rules syntax highlighting https://marketplace.visualstudio.com/items?itemName=toba.vsfire
- Github Issues (Microsoft) For viewing Github issues at your lower left sidebar (when at explorer tab) https://marketplace.visualstudio.com/items?itemName=ms-vscode.github-issues-prs
- GitLens - Git supercharged (Eric Amodio) For viewing authorship of specific lines in your code. https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
- Indent 4-to-2 (Compulim) For automatic indentation and changing from tabs/spaces of 4 to 2 (which is our standard) https://marketplace.visualstudio.com/items?itemName=Compulim.indent4to2
- Javascript Semistandard (flet) For using the Standard linting rules but with semicolon https://marketplace.visualstudio.com/items?itemName=flet.vscode-semistandard
- langugage-stylus (sysoev) For syntax highlighting on Stylus, our CSS preprocessor https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus
- lit-html (Matt Bierner) For syntax highlighting of html inside JS when using lit-html https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
- npm intellisense (Christian Kohler) For autocomplete when importing npm modules https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
- Path Intellisense (Christian Kohler) For autocomplete of file paths https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
- StandardJS - Javascript Standard Style (Sam Chen) For using the Standard linting rules (needed by Javascript Semistandard) https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs
- TSLint (egamma) - Typescript linting used for linting type script https://marketplace.visualstudio.com/items?itemName=eg2.tslint
- YAML Support by Red Hat (Red Hat) - For YAML syntax highlight https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml

The necessary extensions are needed to spot code errors while coding. If you can have similar extensions for your IDE, then that is also ok.

As for Windows users, you can use any other online Cloud IDE with Linux Environment like [Cloud9](https://c9.io) or [Codeanywhere](https://codeanywhere.com), but the necessary linting and other extension help is not available, you just need to run linting along with testing before doing a Pull Request.

## What's next?

Once you are ok with your development environment, you can go to [Installation and Requirements](Installation.md) on what you need to install to run this.