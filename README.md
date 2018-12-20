# Ls Countup

Just a simple count up.

[![Build Status](https://travis-ci.org/leandrosimoes/ls-countup.svg?branch=master)](https://travis-ci.org/leandrosimoes/ls-countup) 
[![npm version](https://badge.fury.io/js/ls-countup.svg)](https://badge.fury.io/js/ls-countup) 
[![CircleCI](https://circleci.com/gh/leandrosimoes/ls-countup.svg?style=svg)](https://circleci.com/gh/leandrosimoes/ls-countup)

### Instalation

`npm i ls-countup`

### How to:

```javascript
// Import all stuff
const { LsCountup, LsCountupOptions, LsCountupSufixes } = require('ls-countup')

// Target date to be the reference for the countup
const targetDate = new Date(/* MUST BE A FOWARD DATE */)

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