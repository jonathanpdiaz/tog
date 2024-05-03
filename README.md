## Modern Toggl API wrapper and Timer.
This package wraps the Toggl API with a promised based approach. This makes the usage of async/await straight forward.

It also has timer functionality build in to easily start, stop and update the a time entry.

[![Build Status](https://travis-ci.org/jamiter/tog.svg?branch=master)](https://travis-ci.org/jamiter/tog)

## Requirements
This package requires node 8 or higher, because of async/await usage.

## Installation
```
npm install tog
```

## Usage

### Initialisation
```javascript
import { Toggl } from 'tog'

// Using your API token
const toggl = new Toggl({ apiToken: 'YOUR_API_TOKEN' })

// Using your credentials
const toggl = new Toggl({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
})
```

### Getting data
```javascript
const { data: clients } = await toggl.getClients(workspaceId)
```

### Using a timer
```javascript
// Starting a timer
const timer = await toggl.startTimer({ description: 'I\'m very busy' })

// Updating the time entry
await timer.update({ description: 'Still very busy' })

// When you're done
await timer.stop()

// Get details of the timer
console.log(timer.entry)
```
