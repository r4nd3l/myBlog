---
layout: post
title: "Hide mounted drives"
description: "Practical way to hide mounted drives on Linux via terminal"
tags: [ Linux , Shell , command, terminal ]
---

# Hide Mounted Drives

Open a new Terminal window `(Ctrl + Alt + t)` and run this command:
`$ gsettings set org.gnome.shell.extensions.dash-to-dock show-mounts false`

The change will take effect instantly and mounted drives showing on the Ubuntu Dock will instantly disappear from view.

If you change your mind and want to re-enable mounted drives on the Ubuntu Dock in future, just rerun the same command, omitting the ‘false’ switch at the end like so:

`$ gsettings set org.gnome.shell.extensions.dash-to-dock show-mounts true`

You can access the same setting via a GUI if you install the `dconf-editor` tool and navigate to the `org > gnome shell > extensions > dash-to-dock` page, switching the `show-mounts` toggle to the off position.