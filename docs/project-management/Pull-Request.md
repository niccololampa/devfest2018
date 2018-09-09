# Doing A Pull Request

Doing a pull request means you want to merge your code branch back to the main develop branch.

To do this, you go back to the [main repository](https://github.com/gdgphilippines/devfest2018). And click on Pull Request.

Make sure your base branch is `[the main repository]/develop` and the branch that you want to merge is your feature branch that you have been working on.

Please do not delete the template as well, as it will automatically close the pull request and will have to ask you to do it again.

Here's an example of a basic Pull Request

```
### Description
This adds a new page in the system

### Related Issue
Fixes #45

### Motivation and Context
It solves the lack of this page in the system that is needed by the users

### How Has This Been Tested?
- The page loads when it goes to this url.
- The page component exists

### Screenshots (if appropriate):

### Types of changes
- [ ] Bug fix (non-breaking change which fixes an issue)
- [x] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)

### Checklist:
<!--- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!--- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->
- [x] My code follows the code style of this project. (delete if it is documentation)
- [x] I have updated the documentation accordingly.
- [x] I have read the **CONTRIBUTING** document.
- [x] I have added tests to cover my changes.
- [x] All new and existing tests passed.

### Reviewer Checklist:
<!--- This is for the reviewer -->
- [ ] Code follows the code style of the project (frontend/backend)
- [ ] Documentation updated
- [ ] DRY Code
- [ ] Added tests to cover changes
- [ ] All tests have passed
- [ ] Reviews have been done and approved
```

Note: Please don't do anything in the Reviewer's checklist, as it is for the reviewer

## Assign a Reviewer

The github repo is tasked to ask a reviewer before merging. You can always ask an admin to do it or somebody else. If the admin is full of tasks as of the moment, you can ask somebody to do the reviewer. We empower anybody who can follow the [Review](Review.md) instructions on how to check for code.

## What's Next?

Once you are done, you can go for another task that you think you can finish. If the reviewer needs you to do some changes, you need to do those changes before your pull request can be approved. If you think you have resolved a conversation, click resolved and tag the reviewer so that he/she can be notified. If you are asked to review, don't be afraid as there is a [checklist and guideline for you to follow to become an effective reviewer](Review.md)