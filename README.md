# README
Project README for the `ze-ui` repo

## ze-ui
Ze is a platform for building a Zettelkasten. This repository contains the UI code for the project.

## What is Vite?
Vite is, in short, a build tool. It is described as a 'native-ESM powered web dev build tool'. It has a nice dev experience. It is well
designed. It is fast, highly configurable and widely approved. 

### Config

When running vite from the command line, Vite will automatically try to resolve a config file named vite.config.js inside project root 
(other JS and TS extensions are also supported).

## Getting started
If you are spinning this up as a devcontainer this is largely managed for you. Use the following steps to get the UI server running. 

### Steps


### Notes
See `postStartCommand` of the project devcontainer for workaround to address Git dubious ownership errors that crop up typically in 
devcontainers because of their separation from the filesystem they belong to. To understand this in more depth see the following
article: 

https://www.kenmuse.com/blog/avoiding-dubious-ownership-in-dev-containers/