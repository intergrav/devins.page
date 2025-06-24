---
title: "git bisect is very useful"
description: "using binary search to find the commit that broke things"
image: "/blog/git-bisect.png"
imageAlt: "the git logo"
pubDate: 2025-06-25
categories: ["git", "debugging", "productivity"]
---

imagine this: something in a project was working perfectly last week, but now it's broken and there's been 50 commits since last week, and you have no clue which one broke it.

manually checking each commit would take forever, right?

wrong! git has this incredibly useful feature called `git bisect` that uses binary search to find the commit that is causing the issue in just a few steps.

here's how to use it:

```bash
git bisect start

# mark the current state as "bad" (or specify a "bad" commit with a hash)
git bisect bad

# mark a commit you know was working as "good"
git bisect good [commit-hash]

# git will now checkout a commit between "good" and "bad"
# test your code, then tell git if this commit is "good" or "bad"
git bisect bad # or good, if it works

# git will automatically pick the next commit to test
# repeat this until git finds the exact commit that broke things

# after you're done, clean up and reset back to what you had before
git bisect reset
```

the cool part is that if you have 1000 commits between good and bad, bisect will help you find the problem in about 10 tests max (since log base 2 of 1000 is about 10).

anyway, you can also fully automate this with `git bisect run`. give it a script that returns exit code `0` for good commits and non-zero (like `1`) for bad commits, and git will run it automatically:

```bash
# example: using a test script
git bisect run test.sh

# example: running a command
git bisect run make test
```

you can see the git-bisect [documentation](https://www.kernel.org/pub/software/scm/git/docs/git-bisect.html) for more info.
