# Commit Conventions

Here we will talk about how to do a proper commit.

Although we have already established how to write a proper commit message in [CONTRIBUTING](../../CONTRIBUTING.md), we want to establish the steps involved in a commit.

## Adding files to your Commit

Once you have your local branch, you can start working on your computer. After editing your files,
you can commit your files that you have saved. Committing is like saving into the history of your edits.
Remember to always commit what you have written aside from just saving.

To check the files that you have saved, in your command line, type this:

```
git status
```

It will show up like this:

```
On branch [branch-name]
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   [edited.file]
        deleted:    [deleted.file]

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        [added.file]

no changes added to commit (use "git add" and/or "git commit -a")
```

What it means is that on your current branch, you have a list of modified, deleted, or added files.
You can then add them on your commit one by one using this command

```
git add [file]
```

and you can also recover files you have deleted (provided they exist from a previous commit of your branch) by doing this command

```
git checkout -- [deleted.file]
```

Lastly, if you want an easy command to add all changes, you can just do this

```
git add --all
```

## Creating a commit message

Creating a commit message follows this format:

```
git commit -m "[verb] [description]"
```

You can see examples from [CONTRIBUTING](../../CONTRIBUTING.md), but rule of thumb: Make it concise.
You can also follow the commit guidelines from http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

## Pushing to your repo

Once you are done, you can push your commits to your remote repo.

```
git push
```

## Rules on Commit message

Our only rules for commit message are that if you do some small chunks, describe what you have updated with using a verb (present) at the start of the sentence. But if you think you are done, do the following format:

```
git commit -m "Fix #[issue] - [verb] [description]"
```

Use the keyword `Fix` with the issue number that is same as the last number on your branch (you can check your branch using `git branch`). Then after that, you add the last action you did with the verb-description pair.

## Recommended Steps in finishing a branch

For those who are looking for steps on how to do this, you can start do the following:

Let's say you are to add a component, what you can do once you have created your local branch is:
1. Create file stucture and initial code structure of the component
2. Add test cases of the component
3. Implement logic on the component
4. Add documentation on the component
5. (Other chores...)
6. Fix #[issue] Run final tests for component

In essence, it would be better for us to read code or do code review if we can see that you started with creation of structure, test case, implementation procedures, and documentation. You can always have some issues in better but it should always start with creation of file structure and ends with a `Fix` keyword at start of sentence.

## What's next?

Once you are ready to merge your commits to our `develop` branch, you are ready to do a [Pull Request](./Pull-Request.md)
