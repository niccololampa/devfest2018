# Tool Requirements

Here are the tools you need installed to be able to clone, develop, and run the project on your local computer.

## Git

### Installation

Install [Git](https://git-scm.com/) or your choice Git client.

#### For Mac OSX

You can either install using XCode (via installing XCode through the App Store) or via [Homebrew](https://gist.github.com/derhuerst/1b15ff4652a867391f03#installing-git-on-a-mac).

- When using Homebrew
```
brew install git
```

#### For Ubuntu / Bash on Windows

You can follow these commands outlined here: https://gist.github.com/derhuerst/1b15ff4652a867391f03#debian-based-linux-systems

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git
```

### (Optional) Setting up SSH

Follow these simple instructions so you can do SSH cloning and push on Github:
[Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

Note: This is good if you don't want to put in your username and password when you want to do any transactions with Github over the command line.

### (Optional) Setting up GPG for Auto-signing of your Commits

Signing your commits is a good way of telling us that it is you that are doing the commits. Follow the instructions here: https://medium.com/@tjmonsi/tjs-web-dev-logs-gpg-signing-and-my-paranoia-3ae7f2040f7a

## NVM

NVM or Node Version Manager is needed to be able to install and switch versions of Node JS with ease. You can follow the instructions at https://github.com/creationix/nvm#installation or see below...

Using Curl:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

or Wget:
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Then follow the instructions at the end of the installation...

## Node

To install Node and NPM, just use this command:

```
nvm install 10
```

This will install the latest version of Node version 10. We need Node version 10 for the frontend part.
For the backend, we will install Node version 6.

```
nvm install 6
```

Make the default version 10 as we will be using it more often. Only use Node version 6 when running the Firebase functions for local testing.

To make Node version 10 default
```
nvm use 10
nvm alias default 10
```

To use Node version 6
```
nvm use 6
```

## Firebase CLI

To install Firebase CLI for your functions, install using the command

```
npm i -g firebase-tools
```

@kuuurt please add more instructions on what they need to do to be able to code and test for functions

## What's Next?

After installing the requirements, it is time to pick your [tasks for forking and branching](Forking-and-Branching.md).