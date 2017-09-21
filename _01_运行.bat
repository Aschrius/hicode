@echo off
mode con cols=60 lines=20
title = ATools
cd bin
:loop
echo ==================================
taskkill /F /im atools.exe
start atools.exe
echo ---------------------- run success!
:pause>nul
:goto loop
