#!/bin/bash
osascript <<EOD
  tell application "Figma" to activate
  tell application "System Events" to tell process "Figma"
      keystroke "p" using {command down, option down}
  end tell
EOD
