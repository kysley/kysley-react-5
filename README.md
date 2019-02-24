<div align="center">

  ### kysley-react-5... now with Typescript!

</div>

This is repo for the 5th iteration of Typescript

## Docs
- [About](#About)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
  - [First time setup](#first-time-setup)
  - [Running the app locally](#running-the-app-locally)

## About
This repo is mostly a _very_ basic Typescript practice area. Unfortunately there isn't much to type (to my beginner TS eyes) but it is more for working on the build tooling.

Regardless, this codebase is the next iteration... And I'll be attempting to expand typing where possible.

## Codebase

#### Technologies

- **ES6/7/Next**: React for the frontend, Typescript, Babel and webpack for everything else

Better List
- **Typescript**: Typed superset of JS
- **emotion**: CSS-in-JS
- **babel/preset-typescript**: Parse TS files using webpack + babel@7
- **typescript-eslint/parser**: Parser for ESLint to handle both ES and TS code

#### Folder Structure
Not very consistent compared to other folder structures I've created. I wanted to play around with having all _styling_ etc files living inside the single Component folder- but I'm still not sold on it as it causes a lot of file name ambiguity.


#### First Time Setup
1. Clone/download the project to your pc
2. run `yarn` to download all necessary packages
3. you should be good to continue to [Running the App locally](#running-the-app-locally)

#### Running the App locally
_Development_
1. `yarn start` after you completed [First Time Setup](#first-time-setup)

_Production_
1. `yarn build` after you completed [First Time Setup](#first-time-setup).