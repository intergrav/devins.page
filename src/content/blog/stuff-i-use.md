---
title: "stuff i use"
description: "a list of most of the stuff i use, including hardware and software"
pubDate: 2025-10-6
categories:
  [
    "hardware",
    "software",
    "music",
    "macos",
    "linux",
    "open-source",
    "productivity",
  ]
---

i often get asked about the stuff that i use so i wanted to make a comprehensive post listing mostly everything. i will probably update this list over time as it also helps me keep track of what i'm using - and maybe it'd be useful to help some people discover new software and hardware aswell. this may be a bit messy.

yes this will get nerdy.

## hardware

my main computer is an _M1 Pro MacBook Pro_ configured with 16gb of memory and 1tb of storage. i run both MacOS and [Asahi Linux](https://asahilinux.org) on here. i use [Nix](https://nixos.org) and [nix-darwin](https://github.com/nix-darwin/nix-darwin), along with [Homebrew](https://brew.sh) for GUI applications. i mostly went for a MacBook because I wanted to use Logic Pro, but also because i haven't been really enjoying Windows lately. i also love the hardware (the trackpad, display, battery life, and speakers are great)

i also have a _Surface_ laptop, running Windows, which i use for games. but i don't really do much else on there. i would like to install Linux on there, but it doesn't really play nicely with my dock (Dell WD19TB). also for whatever reason on Linux it always runs the NVIDIA GPU at the lowest power setting, making games unplayable.

i also play games and emulate games on my _[Steam Deck](https://store.steampowered.com/steamdeck)_ very often. it's a 256GB LCD model. this has been a very good purchase and i'd heavily recommend it if you're into pc gaming :)

i have my old desktop which i use as my main server since i don't really have any other use for it. it's running [NixOS](https://nixos.org). i run [Jellyfin](https://jellyfin.org) for movies/tv, [Navidrome](https://www.navidrome.org) for streaming my music library, [restic](https://restic.net) and [Time Machine](<https://en.wikipedia.org/wiki/Time_Machine_(macOS)>) backup shares, and Minecraft servers for my friends. i also run [Samba](https://www.samba.org) shares.

i also have an _Intel NUC_ (i forgot exactly which generation) which was the previous computer i used as my server before i upgraded to my old desktop. this is currently unused.

i have a _Raspberry Pi 4_ which i used to run RetroPie on. currently it's unused though, and i'm thinking of ways i could use it.

i have an _iPhone 14 Pro_, mainly because i wanted GarageBand at the time but it also plays nicely with my Mac. i'm considering switching to a Pixel at some point though.

i also enjoy messing with retro/vintage hardware and have some older computers:

- sometimes i use my _4th gen iPod Touch_ for distraction-free music listening. i do quite miss when mobile devices were small and easier to handle, and this is nice to bring to places where i don't want my phone
- i have a _Gateway_ laptop from 2003 that i don't really use, but sometimes mess around with it for shits and giggles

also here's the gear i use for music:

- audio workstation: i mostly use [Logic Pro](https://www.apple.com/logic-pro) or [Bitwig](https://www.bitwig.com) or [FL Studio](https://www.image-line.com)
- instruments: i have a Squier stratocaster, some acoustic Yamaha, a ukulele, and a Yamaha keyboard.
- virtual plugins: Logic's stock, ValhallaDSP, MeldaProduction, Spitfire Audio LABS
- midi controller: i use that Yamaha keyboard along with my [Arturia Minilab 3](https://www.arturia.com/products/hybrid-synths/minilab-3/overview).
- microphone: i typically use an [AKG P120](https://www.akg.com/microphones/condenser-microphones/P120-.html).
- audio interface: i use a [Focusrite Scarlett Solo 3rd Gen](https://us.focusrite.com/products/scarlett-solo-3rd-gen). however, sometimes on the go, i just plug in my [Fender Mustang Micro](https://www.fender.com/products/mustang-micro) and start recording, but the latency is sometimes kinda bad when plugged into the laptop

## software

### operating systems

i mostly prefer MacOS or Fedora, but for servers i run NixOS or Debian. i also run Windows for gaming. i previously used Arch rather than NixOS but it was far too unstable for my liking and i prefer the declarative approach that NixOS offers.

### desktop

on linux i typically use [GNOME](https://en.wikipedia.org/wiki/GNOME), but i've also been switching between [KDE](https://en.wikipedia.org/wiki/KDE) and GNOME ever since KDE 6 released. i also use [Sway](https://swaywm.org). when using KDE i often enjoy [AeroThemePlasma](https://gitgud.io/wackyideas/aerothemeplasma) ;)

### programs

<ul style="column-count: 2">
<li><a href="https://www.affinity.studio">Affinity</a></li>
<li><a href="https://en.wikipedia.org/wiki/Apple_Mail">Apple Mail</a> or <a href="https://www.thunderbird.net">Thunderbird</a></li>
<li><a href="https://github.com/mhaeuser/Battery-Toolkit">Battery Toolkit</a></li>
<li><a href="https://cinny.in">Cinny</a></li>
<li><a href="https://discord.com">Discord</a></li>
<li><a href="https://www.apple.com/final-cut-pro">Final Cut Pro</a> or <a href="https://www.blackmagicdesign.com/products/davinciresolve/">Davinci Resolve</a></li>
<li><a href="https://ghostty.org">Ghostty</a></li>
<li><a href="http://inkscape.org">Inkscape</a> or <a href="https://www.figma.com">Figma</a></li>
<li><a href="https://en.wikipedia.org/wiki/ITunes">iTunes</a> (<code>Music.app</code>) or <a href="https://www.strawberrymusicplayer.org">Strawberry</a></li>
<li><a href="https://www.jetbrains.com/idea">JetBrains IDEA</a></li>
<li><a href="https://www.apple.com/logic-pro">Logic Pro</a> or <a href="https://www.bitwig.com">Bitwig</a> or <a href="https://www.image-line.com">FL Studio</a> or <a href="https://www.apple.com/mac/garageband">GarageBand</a></li>
<li><a href="https://musescore.org/en">MuseScore</a></li>
<li><a href="https://neovim.io">Neovim</a></li>
<li><a href="https://netnewswire.com">NetNewsWire</a></li>
<li><a href="https://nixos.org">Nix</a> and <a href="https://github.com/nix-darwin/nix-darwin">nix-darwin</a></li>
<li><a href="https://obsidian.md">Obsidian</a></li>
<li><a href="https://www.titanium-software.fr/en/onyx.html">OnyX</a></li>
<li><a href="https://www.pixelmator.com/photomator">Photomator</a> or <a href="https://lightroom.adobe.com">Adobe Lightroom</a></li>
<li><a href="https://prismlauncher.org">Prism Launcher</a></li>
<li><a href="https://signal.org">Signal</a></li>
<li><a href="https://steampowered.com">Steam</a></li>
<li><a href="https://tailscale.com">Tailscale</a></li>
<li><a href="https://transmissionbt.com">Transmission</a></li>
<li><a href="https://code.visualstudio.com">Visual Studio Code</a></li>
<li><a href="https://www.videolan.org/vlc">VLC</a></li>
</ul>

(there may also be some other software i forgot to mention, but thats most of it)

### services

these are services hosted on my NUC. i connect everything using Tailscale. (i luv tailscale!!!!!)

- [Jellyfin](https://jellyfin.org), for streaming my movies/TV shows
- [Navidrome](https://www.navidrome.org), for streaming my music library
- [slskd](https://github.com/slskd/slskd) for music downloading and sharing (soulseek daemon)
- Minecraft or other game servers for friends
- shares for [restic](https://restic.net) Linux backups and [Time Machine](<https://en.wikipedia.org/wiki/Time_Machine_(macOS)>) MacOS backups
