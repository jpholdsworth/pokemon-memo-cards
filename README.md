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

## 🛠️ Tech Stack
| Category | Technology | Purpose |
| --- | --- | --- |
| **Frontend** | React | Component-based UI, state management and dynamic rendering |
| **State Management** | `useState` / `useEffect` | Handle card selections, scores, card shuffling and game progress |
| **Styling** | CSS3 / Flexbox / Grid | Layout, responsive design and card animations |
| **Data** | TCGdex API | Fetch Pokémon names and artwork dynamically |
| **Deployment** | Netlify | Hosting the live game |
| **Development Tools** | VSCode | Local development and code editing |