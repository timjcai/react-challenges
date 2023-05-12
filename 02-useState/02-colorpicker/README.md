# How to run:
1. Clone Github Repo
> gh repo clone timjcai/react-challenges

2. Navigate to colorpicker
> cd react-challenges/02-useState/02-colorpicker

3. Run server
> npm run start

# Tasks/Stories to recreate this project
Step 1:
> create a color picker bar - this is a CSS thing
https://www.rgbtohex.net/
RGB to hex-converter (simple tool that you could build as well)

Step 2:
> implement a pointer that moves as mouse clicks over the colorpicker bar

Step 3:
> create logic for handling height and mapping that to changes in RGB values

Step 4:
> useState to collect and display the changing values in the color picker

Step 5:
> improve functionality and smoothness of the colorpicker

Bonus:
> - Implment a button that allows user to copy the color to their cntrl c cntrl v (whatever this is called)
> - Implement a converter for RGB > HSL > HEX
> - Implement div gradient that allows us to change the tone/darkness
> - implement the logic of different colour sets (complementary colors etc)

Inspiration App:
> https://htmlcolorcodes.com/color-picker/


# Code Review - Next Up: (lessons learnt)
12th May - changes that need to be made
> - when working with React, we want to stop using document.querySelector all together
> - naming for colorHandler should change to describe the output it's creating
> - utilise setState or props instead of regular javascript assignments (avoid using querySelector or get element by ID at all costs -> utilise setState and props)

Solution:
