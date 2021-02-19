# Git Conventions

The following is the agreed git branching norms for the GitHubTracker React Native mobile application. We are heavily inspired from the [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model.

## Commits

-   commit by context: one commit should contain only one change (multiple files, one change in terms of context)
-   [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative)
    -   eg: `TICKET-256 fix bug y` instead of `TICKET-256 fixed bug y`
-   [Use the body to explain  _what_  and  _why_  vs.  _how_](https://chris.beams.io/posts/git-commit/#why-not-how)
-   read this: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

## Branching

-   **develop**
    -   for code that is ready for a new build
-   **master**
    -   for code that is in production
    -   never push directly to **master branch**
    -   when a release arrives in production, the **release branch** is merged into **master** and tagged (tag with the version number x.y.z)
-   **release/x.y.z**
    -   code for testing builds
    -   code is merged here from develop
    -   eg: release/2.5.0
-   **feature/TICKET-xxx**
    -   all **feature branches** start from **develop** and end up back in **develop**
-   **hotfix/Ticket-xxx**
    -   should contain capitalised JIRA ticket number

## Pull requests

-   name all your PRs by the following rule: `<feature|hotfix>/<ticket-number> <ticket-title>`
    -   eg: hotfix/TICKET-456 fix whatever issue

-   no PRs should be merged without approval. There should be at least 1 reviewer on a PR and no less than 1 approve
-   never push directly to **master branch**. Even the smallest change requires a PR
