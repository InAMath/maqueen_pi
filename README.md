
> Open this page at [https://inamath.github.io/maqueen_pi/](https://inamath.github.io/maqueen_pi/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/inamath/maqueen_pi** and import

## Edit this project ![Build status badge](https://github.com/inamath/maqueen_pi/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/inamath/maqueen_pi** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/inamath/maqueen_pi/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>


## INSTRUCTIONS

This is a program for micro:macqueen which starts automatically and reads the digits of the number Pi from the list (including the units digit and digits in the decimal part of the number) and behaves according to the rules given in the following table.

DIGIT	| MOVEMENT	| SOUND	| LED	RGB

0,1 |	Step forward |	Middle C	| Left – on, Right - on	blue

2,3,4 |	Step right |	Middle D	 | Left – off, Right - on	green

5,6	| Step backwards	| Middle E	| Left – off, Right - off	red

7, 8,9	| Step left | Middle F | Left – off, Right - on	yellow
