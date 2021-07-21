@echo off
set "p=%~dp0"
for /f "delims=" %%i in ("%p:~0,-1%") do (set dd=%%~ni)


git archive --format zip --output %dd%-%date:~0,4%-%date:~5,2%-%date:~8,2%.zip main