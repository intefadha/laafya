# Contributing to Laafya

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue.
- Discussing the current state of the code.
- Submitting a fix.
- Proposing new features.
- Becoming a maintainer.

## Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Our Development Process

All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly [here](https://github.com/rofazayn/laafya/pulls), and after review, these can be merged into the project.

## Using the Project's Standard Commit Messages

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your
commit messages are standardized:

1. Make sure your shell path is in the root of the project (not inside any of the packages).
2. Run `yarn`.
3. Stage the files you are committing with `git add [files]`.
4. Run `git cz`. This will start an interactive prompt that generates your commit message:
   1. Select the type of change.
   2. Type the scope. This is either `global` for project-wide changes or one of the packages (api, web, mobile, etc...).
   3. Write a short, imperative tense description of the change.
   4. If the above was not sufficient, you may now write a longer description of your change (otherwise press enter to leave blank).
   5. y or n for whether there are any breaking changes (e.g. changing the props of a component, changing the JSON structure of an API response).
   6. y or n for whether this change affects an open issue, if positive you will be prompted to enter the issue number.
5. Your commit message has now been created, you may push to your fork and open a pull request (read below for further instructions).

## Pull Requests

1. Fork the repo and create your branch (usually named `patch-%the number of PRs you've already made%`) from `staging`.
2. If you've added code that should be tested, add some test examples.
3. Ensure to describe your pull request.
