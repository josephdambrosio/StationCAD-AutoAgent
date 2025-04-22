
# RainbowCAD-AutoAgent


RainbowCAD AutoAgent  is a chrome browser extension based off Ir8Coder's IAR-Injection project.  

RainbowCAD AutoAgent is designed as a solution for Tyler Tech's NewWorld WebCAD to automatically log in users based on preset credentials. 

This is ideal for vehicle MDTs and other installed displays where keeping a system logged in after power failure or device reboot.
 



## To Install...

Download the most recent .zip package from the deployments tab to right.

Extract the ZIP archive to your downloads folder.

Using the text editor of your choice, change the following files:

/js/content.js
    on line 17 & line 19
    Change "CADHOSTNAMEHERE" to reflect the hostname or IP address of your instance of WebCAD

/js/options.js
    on line 62
    Change "CADHOSTNAMEHERE" to reflect the hostname or IP address of your instance of WebCAD

Open Chrome, and go to: chrome://extensions/

Select "load unpacked" from the top left, and naviage to the newly unzipped folder.

You will be prompted for your WebCAD login credentials.

Select Save & Close.

Enjoy!

