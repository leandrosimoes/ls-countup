# Ls Countup

Just a simple count up.

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e18a901c88cd4aa882c98cb0bbdfb4f1)](https://www.codacy.com/gh/leandrosimoes/ls-countup/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=leandrosimoes/ls-countup&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/ls-countup.svg)](https://badge.fury.io/js/ls-countup) 
![Node CI](https://github.com/leandrosimoes/ls-countup/workflows/Node%20CI/badge.svg)
[![Node.js Package](https://github.com/leandrosimoes/ls-countdown/actions/workflows/npmpublish.yml/badge.svg)](https://github.com/leandrosimoes/ls-countdown/actions/workflows/npmpublish.yml)

### Instalation

`npm i ls-countup`

### How to:

```javascript
// Import all stuff
const { LsCountup, LsCountupOptions, LsCountupSufixes } = require('ls-countup')

// Target date to be the reference for the countup
const targetDate = new Date(/* MUST BE A BACKWARD DATE */)

// Event dispatched right after the countup starts
const onStart = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// Event dispatched ever 1 second
const onTick = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// Event dispatched right after the countup stops
const onStop = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// You can use the LsCountupSufixes class to change the sufixes of the tick on return
// This is the defaults: { days: 'd', hours: 'h', minutes: 'm', seconds: 's' }
const sufixes = new LsCountupSufixes({ days: ' days', hours: ' hours', minutes: ' minutes', seconds: ' seconds' })

// Create a new options class with the parameters
const options = new LsCountupOptions({ targetDate, onStart, onTick, onStop, sufixes })

// Create a new countup class
const countup = new LsCountup(options)

// starts to countup
countup.start();

// changes countup target date
const newTargetDate = new Date(/* MUST BE A BACKWARD DATE */)
countup.changeTargetDate(newTargetDate)

// stops to countup
countup.stop()
```
