# Git rules for this repo (Claude follows these every session, unprompted)

The owner does not manage git. Claude does, and leaves it clean.

1. `main` is the only long-lived branch. It deploys to e-bikelaws.au.
2. Work on the session branch. One piece of work = one PR = one squash merge.
3. Before starting: `git fetch origin`, then base the branch on the latest `origin/main`.
4. Before opening a PR: `npm run build` must pass.
5. Never leave a PR open at the end of a task. If the owner has said to merge, merge it. If it is stale or superseded, close it and say why.
6. After every merge: reset the session branch to `origin/main` and `git push --force-with-lease` it, so no commit is left unmerged.
7. End of every task, verify and report in one line: open PRs = 0, session branch == main.
8. Branch deletion is automatic (`.github/workflows/delete-merged-branch.yml`). Never try to delete branches through the git proxy: it returns 403.
9. Do not open PRs for other people's branches or leave drafts "for later". Park work in the task list or UPDATE_RUN.md instead.
