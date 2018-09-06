# Forking and Branching Guidelines
This section guides contributors through the naming convention and processess that will be followed when contributing fixes and enhancements to  Devfest 2018 repository.

## Contributing to the DevFest 2018 Code

## 1. Setting Up Your System

1.1 Install [Git](https://git-scm.com/) or your choice Git client.

1.2 (Optional) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.  

## 2 Forking GDG the project

2.1 Go to  the top level [devfest2018](https://github.com/gdgphilippines/devfest2018) repository.

2.2 Click the "Fork" Button in the upper right hand corner of the interface ([More Details Here](http://help.github.com/fork-a-repo))

2.3 After the repository (repo) has been forked, you will be taken to your copy of the devfest2018 repo at https://github.com/yourUsername/freeCodeCamp

## 3  Create a local clone of your fork

3.1 On GitHub, navigate to your fork of the devfest2018 repository.

3.2 Under the repository name, click Clone or download.

3.3 In the Clone with HTTPs section, click  to copy the clone URL for the repository.

3.4 Open a **Terminal** / **Command Line** / **Bash Shell** in your projects directory (i.e.: /yourprojectdirectory/)

3.5 Clone your fork of the devfest 2018 repo

    $ git clone https://github.com/yourUsername/devfest2018.git
**(make sure to replace `yourUsername` with your GitHub username)**

This will then download the entire devfest2018 repo to your local machine


## 4 Setting up the Upstream

4.1 Navigate to your newly cloned directory
    
    cd devfest2018

4.2 Add a remote to the official devfest2018 repo:

    $ git remote add upstream https://github.com/gdgphilippines/devfest2018.git

4.3 (Optional) To get the latest changes from upstream
    
    git checkout <dev-branch>
    git pull upstream <dev-branch>

## 5 Maintaining your own fork

### 5.1 Rebasing from upstream

Do this prior to everytime you create a branch for Pull RequestS:
    
5.1.1 To check on which branch you are on

```
$ git status
On branch staging
Your branch is up-to-date with 'origin/develop'.
```

5.1.2 Locally merge(or rebase) the upstream development branch into your own dev branch,  without making an additional commit in your local repo:

    git pull [--rebase] upstream <dev-branch>



### 5.2 Creating a Branch

5.2.1 Name and create your own branch, different from the main development branch of the repo to contain your updates, this will also make you switch to it

    git checkout -b <topic-branch-name>

- Commit your changes in chunks
- Please adhere to these [git commit message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) or your code will not be merged to the main project
- You can use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits making them public
- Resolve outstanding files and  or commits and checkout your own `dev-branch`

5.2.2 Change working branch

    $ git checkout [topic-branch-name]


5.2.3 Push your own dev branch up to your own fork

    git push origin <topic-branch-name>

## 6 Checking the tasks 

- Tasks can be viewed here [waffle.io](https://waffle.io/gdgphilippines/devfest2018)
- Can also be checked on the [issues](https://github.com/gdgphilippines/devfest2018/issues) tab of the devfest2018 repo
- Or some tasks will be assigned accordingly