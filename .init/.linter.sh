#!/bin/bash
cd /home/kavia/workspace/code-generation/interactive-light-switch-185439-185448/animated_light_switch_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

