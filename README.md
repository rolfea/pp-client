# Practial Pal Client

Client for running My Practice Pal (name pending!).

## TODO

### Infra

- [] Authentication
  - AWS Cognito?
  - Other Options?
  - Multiple Users, password setting, etc.
- [] Hosting
  - Netlify probably
  - simple CI/CD schtuff, prioritize easy deployment
- [] Testing
  - Service type of testing versus component testing
  - Not really sure pros/cons here, so determine what the biggest bang-for-buck is
  - E2E testing with Playwright type of tool could be useful too

### App

- [] UI for adding/deleting new Sessions
- [] should be able to switch between sessions seamlessly
  - two column set up, click other session to load
  - if current session is active, ask before swapping
- [] Timer advances through practice session
  - What's the UX here?
  - simple "Ready to move on?" prompt with an easy way to extend by set minutes or continue
  - "Save any new notes?" prompt
  - Update BPM Prompt
- [] Built in Metronome
  - KISS, basic taps for now
  - easy to adjust up/down
  - easy to input specific num
- [] Recording
  - start simple - no saving off to a DB, just in-memory, short recording
  - easy to start/stop, listen back
- [x] Dynamically pull in Practice Sessions
  - service layer? what's the idiomatic way to do this in react?
  - stub out call to server
