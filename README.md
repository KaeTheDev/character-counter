# React Lab – Interactive Character Counter

## Overview
In this lab, I built an interactive Character Counter application using React and TypeScript. This tool allows users to type text and immediately see statistics such as character count, word count, and estimated reading time. The goal of this lab was to help practice state management, event handling, and component communication using React hooks.

This feature simulates a real-world scenario where content writers need instant feedback as they draft articles or documentation inside a CMS.

## Workplace Context
Imagine you are a frontend developer working on a content management system. Your team needs a small but powerful component that helps content creators track their writing progress. Writers must meet specific content requirements—minimum word counts, readability targets, and estimated reading time.

Your task is to build a component that updates instantly as the user types, demonstrating your ability to create responsive, interactive UI using modern React patterns.

This lab prepares you for building user-facing features that react in real-time to user input—an essential skill in modern web applications.

## Learning Objectives
By the end of this lab, you will be able to:

* Implement state management using the useState hook.
* Handle user events effectively using controlled inputs.
* Build React components that update their UI based on state changes.
* Use the callback pattern to communicate between parent and child components.
* Create a clean, responsive, and user-friendly interface.

## Description
You will build a simple multi-component React application:

* TextInput — Accepts user text input and notifies the parent of changes.
* StatsDisplay — Shows character count, word count, and reading time.
* CharacterCounter — Parent component that manages state and passes data + callbacks to children.

This lab focuses on:

* State management
* Event handling
* Component interaction
* React hooks (useState)
* Communication between parent and child components

The project will help you understand how to update UI based on user interaction and how to keep components reusable and well-organized.

## Resources
* React Docs — https://react.dev
* TypeScript Handbook — https://www.typescriptlang.org/docs
* React Hooks Guide — Official Documentation
* TypeScript + React Cheatsheets (recommended)

## Getting Started
## Requirements

* Node.js v24+
* npm
* Git
* A code editor (VS Code recommended)
* TypeScript
* React

## OS Compatibility
This lab works on:

* Windows
* macOS
* Linux

## Installation
1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/character-counter.git)

2. Navigate into the project folder:

cd character-counter

## Setup

1. Install dependencies:

npm install


2. Run the project:

npm run dev

## Project Structure

/src
  /components
    /TextInput
      └── TextInput.tsx
    /StatsDisplay
      └── StatsDisplay.tsx
    /CharacterCounter
      └── CharacterCounter.tsx
  /types
    └── index.ts

README.md
package.json
tsconfig.json
vite.config.ts

* components/ — Contains all React components used in the app.
* types/ — Shared TypeScript types/interfaces used across components.