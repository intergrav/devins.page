---
title: "check out fish shell (+ starship)"
description: "a smart, user-friendly command line shell w/ a really good out-of-box experience"
image: "/blog/fish-and-starship.svg"
imageAlt: "a picture of the fish and starship icons, with a plus symbol"
pubDate: 2025-06-24
categories: ["terminal", "fish", "starship", "productivity"]
---

fish (**f**riendly **i**nteractive **sh**ell) is a "smart and user-friendly command line shell for Linux, macOS, and the rest of the family". it contains so many useful features built-in, which you usually have to configure to add to other shells, and is overall much easier to work with than others.

## features

### autosuggestions

start typing any command and fish will try it's best to complete the command for you. it also gets auto suggestions from your history. for example, lets say you had a long command that you ran a month ago and you wanna run it again:

```console
❯ git log --au
    fish autocompletes for you based on history
❯ git log --author "intergrav" --since "1 year"
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                         (suggested completion)
```

then, you can just press right arrow to accept the suggested completion, saving much more time than rewriting the entire command.

### syntax highlighting

fish will automatically highlight valid commands in one color and invalid ones in another. you'll know if you made a typo in a command before you press enter.

### (good) tab completion

fish can complete a ton of things. some examples include file paths, commands and flags, git branches, environment variables, scripts from your package.json, and more. the completions for commands and flags are generated automatically based on man pages, so you can view what they do.

an example showing the tab completion for `git commit -`:

```console
❯ git commit - # press tab here
-a  --all                     (Automatically stage modified and deleted files)
-C  --reuse-message   (Reuse log message and authorship of an existing commit)
-c  --reedit-message  (Like --reuse-message, but allow editing commit message)
-e  --edit                 (Further edit the message taken from -m, -C, or -F)
-h  --help                                   (Display manual of a Git command)
-m  --message                    (Use the given message as the commit message)
-p  --patch                        (Use interactive patch selection interface)
…and 14 more rows
```

an example showing the tab completion for `$` (environment variable):

```console
❯ echo $ # press tab here
$COLORTERM                                               (Variable: truecolor)
$COLUMNS                                                        (Variable: 78)
$EDITOR                                                       (Variable: nano)
$EUID                                                          (Variable: 501)
…and 114 more rows
```

### better scripting syntax

i think the scripting syntax in fish is a lot better, more readable, and easier to understand than what bash has. here's an example, taken from their website:

```fish
function detect_os
    switch (uname)
        case Linux
            echo "You're on Linux!"
        case Darwin
            echo "You're on macOS!"
        case '*'
            echo "Unknown OS: "(uname)
    end
end
```

compared to bash:

```bash
detect_os() {
    case "$(uname)" in
        "Linux")
            echo "You're on Linux!"
            ;;
        "Darwin")
            echo "You're on macOS!"
            ;;
        *)
            echo "Unknown OS: $(uname)"
            ;;
    esac
}
```

### configuration through web browser

run `fish_config` and it opens a web interface where you can customize colors and prompt. you can still configure it without a web browser if you want though.

## installation

you can easily install fish on Linux, MacOS and BSD. see their [home page](https://fishshell.com) for installation info. the [documentation](https://fishshell.com/docs/current) also has much more information about what it can do, how to use it, and how to set it as your default shell.

### starship

after installing fish, you can use [starship](https://starship.rs) with it, which is a prompt thats very fast, customizable, and intelligent. it shows various things to you such as git status (current branch, changes, ahead/behind), language/package versions, ssh status, and a bunch of other information, all in a concise way.

starship is **not** a shell, its a _prompt_ for any shell. i got confused about that when i heard of these two being used together, as i thought they were both shells. you can also use it with bash, zsh, powershell, etc.

for example, here im connected to my server (coolbox) with ssh, currently in a git repository (nixflake) on the main branch, and starship lists all of that information:

```console
devin in 🌐 coolbox in nixflake on 🪾 main
❯ echo "hi"
```

to use it with fish after installing starship, just add this to your `~/.config/fish/config.fish` so it runs:

```fish
starship init fish | source
```

hopefully this helps!! :) this is my first blog post so if there's anything i need to correct then please lmk
