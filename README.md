# 🎴 Pokémon Memory Card Game

## 🌐 Live Demo
👉 [Play the Game](https://pokemon-tcg-memo-cards.netlify.app/)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Status](https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge)

![Game responsiveness](/doc/responsive.png)

## 👋 Introduction
**Pokémon Memory Card Game** is an interactive browser game designed to challenge players' memory and attention through decision making and constantly changing card positions. Inspired by the popularity of Pokémon cards and classic memory games, this project adds a dynamic twist - after every selection, the cards reshuffle, forcing players to rely on recognition rather than position.

### 💡 Why This Project Matters
This project was created to deepen my understanding of building interactive applications using **React** and modern front-end development principles. The game logic is driven entirely through React hooks, allowing state and UI behaviour to remain predictable and maintainable.

Through this project, I explored key concepts including:
- `useState` - managing player selections, cards, scores and game progress
- `useEffect` - handling side effects such as fetching Pokémon data from the **TCGdex API** and reshuffling cards after state updates
- **Component-based architecture** for reusable UI elements
- **Event handling** to control gameplay flow
- **Dynamic rendering** driven by state changes

The result is a fully interactive browser game that demonstrates practical state management and reactive UI design.

### Gameplay Overview
🎯 **Goal:** Select every unique Pokémon without repeating a choice.

The game is designed to be simple to learn while encouraging memory and pattern recognition. 

1. 🃏 A grid of Pokémon cards is displayed at the start of the game.
2. 👆 Click any card to select it.
3. 🔀 After each selection, the cards flip and reshuffle into a new random order.
4. ☠️ Clicking a card that has already been selected ends the game and records your best score.
5. 🏆 Successfully select every unique card without repeating one to win.

Each round becomes progressively more challenging as players must remember previous selections while adapting to constantly changing card positions.

## 📑 Table of Contents
- [The Vision](#-the-vision)
- [Features](#-features)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Tech Stack](#️-tech-stack)

## 🎯 The Vision
The primary goal of this project was to build an engaging and fully playable memory card game that combines clean UI design with structured game logic and dynamic interactivity.

Rather than relying on external game engines or heavy frameworks, the project focuses on implementing core front-end concepts using React, emphasising predictable state management, reusable components, and a responsive user experience.

**Key objectives:**
- Build a functional memory game from scratch using React
- Fetch and display Pokémon data dynamically via an external API
- Implement responsive design across mobile, tablet, and desktop devices
- Develop clear, maintainable game logic driven by application state
- Deploy a fully functional, production-ready web application

## ✨ Features
- 🎴 **Dynamic Memory Gameplay** - select unique Pokémon cards without repeating previous choices
- 🔀 **Automatic Card Reshuffling** - cards randomise after every selection, increasing difficulty
- 💫 **Card Flip Animations** - smooth CSS transitions provide visual feedback after each selection
- 🧠 **Score Tracking System** - tracks current score and records the best score achieved
- ⚛️ **State-Driven Gameplay** - game logic fully managed using React hooks
- 🌐 **Live API Integration** - Pokémon data dynamically fetched from the TCGdex API
- 📱 **Fully Responsive Design** - optimised for mobile, tablet, and desktop devices
- ⚡ **Fast and Lightweight** - built with Vite for rapid development and optimised performance
- 🎨 **Interactive UI Feedback** - responsive visual interactions enhance player engagement

## 🏗️ Architecture
### Component Structure 
- **App** – Manages API fetch, global game state, and overall application flow.
- **Loading** – Displays a loading state while Pokémon data is fetched.
- **Modal** – Shows end-of-game messages and scores.
- **PokemonCards** – Reusable component for rendering individual Pokémon cards and handling clicks.
- **Scoreboard** - Displays current score and best score dynamically.

### State Management
Game state is fully managed using React hooks:

- `useState` tracks selected cards, current score, best score, and gameplay status.
- `useEffect` handles side effects such as fetching Pokémon data from the TCGdex API and filtering it before storing in state.

State updates drive UI changes, ensuring predictable and reactive gameplay behaviour.

### Data Flow
1. Pokémon data is fetched from the TCGdex API based on the user's Pokémon type selection.
2. The data is filtered and stored in application state.
3. Cards are dynamically rendered from state.
4. User interactions update state and trigger reshuffling logic.
5. The UI re-renders automatically based on updated state, providing immediate feedback to the player.

### File Structure
```
src/
├── assets
│   ├── font
│   └── image
├── components 
│   ├── game-interface.jsx
│   ├── loading.jsx
│   ├── pokemon-cards.jsx
│   └── scoreboard.jsx
├── style
│   ├── game-interface.css
│   ├── loading.css
│   └── navigation.css
├── app.jsx
└── main.jsx
```

### Key Principles
- Separation of Concerns - JSX components and logic are clearly separated from styling (CSS).
- Component reusability - Each UI element is modular and reusable.
- Predictable State - Application state drives UI rendering, ensuring consistent and reliable gameplay.
- Responsive Design - Layout adjusts seamlessly across mobile, tablet and desktop devices.

## 🚀 Getting Started
⚡ **Quick Start:** `npm install && npm run dev`

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- **npm** (included with Node.js)

### Installation & Setup
1. Clone the repository
```bash
git clone https://github.com/jpholdsworth/pokemon-memo-cards.git
cd pokemon-memo-cards
```
2. Install dependencies
```bash
npm install
```
3. Start the development server
```bash
npm run dev
```
4. Open your browser and visit 
```
http://localhost:5173
```

## 🛠️ Tech Stack
| Category | Technology | Purpose |
| --- | --- | --- |
| **Frontend** | React | Component-based UI, state management and dynamic rendering |
| **State Management** | `useState` / `useEffect` | Handle card selections, scores, card shuffling and game progress |
| **Styling** | CSS3 / Flexbox / Grid | Layout, responsive design and card animations |
| **Data** | TCGdex API | Fetch Pokémon names and artwork dynamically |
| **Deployment** | Netlify | Hosting the live game |
| **Development Tools** | VSCode | Local development and code editing |
