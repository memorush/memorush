@echo off
set "d=D:\IdeaProjects\__projects\memorush-react\src"
for /f "delims=" %%a in ('dir/a-d/b/s "%d%\*.scss"') do ren "%%a" "%%~na.scss"
exit