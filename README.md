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

### 📹 Gameplay Preview
![Watch Gameplay](/doc/gameplay.gif)
*Video shows a live demo of reshuffling cards and score tracking*

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
- [Development Log](#-development-log)
- [Future Improvements](#-future-improvements)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

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

## 🐛 Development Log
During development, several notable issues were encountered and resolved. Here’s a summary of the key challenges and learnings:

1. API Fetch Performance Optimisation

    Commit: [`ebad6de`](https://github.com/jpholdsworth/pokemon-memo-cards/commit/ebad6de)

    **Issue:**
    Initially, the [PokémonTCG API](https://docs.pokemontcg.io/) was used to fetch card data. Over time, the API response grew larger due to updates, causing the loading screen to stall indefinitely. A `setTimeout` was used to fake a loading delay, which was inefficient and unreliable.
    
    ```jsx
    useEffect(() => {
        setLoading(true);
        const query = type ? `?q=types:${type}` : '';
        fetch(`https://api.pokemontcg.io/v2/cards${query}`, {
          headers: {
            'X-Api-Key': apiKey,
            mode: 'cors',
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log("Fetching a data...");
            const pokemonData = data.data;
            const currentPokemon = shuffleAndSlice(pokemonData, 30);
            setPokemon(currentPokemon);
          })
          .catch(err => console.log(err.message));
          setTimeout(() => setLoading(false), 7000);
      }, [type]);
    ```
    
    **Solution:**
    Switched to the [TCGdex API](https://tcgdex.dev/), which provides more manageable data. Removed the `setTimeout` and instead updated the loading state immediately after fetching data or on error, improving efficiency and user experience.
    
    ```jsx
    useEffect(() => {
        setLoading(true);
        const query = type ? `?types=${type}` : '';
        fetch(`https://api.tcgdex.net/v2/en/cards${query}`)
          .then(response => response.json())
          .then(data => {
            console.log("Fetching a data...");
            const pokemonData = data.filter(card => 'image' in card);
            const currentPokemon = shuffleAndSlice(pokemonData, 30);
            setPokemon(currentPokemon);
            setLoading(false);
          })
          .catch(err => {
            console.log(err.message);
            setLoading(false);
          });
      }, [type]);
    ```
    
    **Learning:**
    Switching to a more suitable API and removing unnecessary logic significantly improved loading performance. This not only enhanced the user experience but also simplified state management for the app.

2. localStorage Not Persisting Best Score

    Commit: [`bab0d17`](https://github.com/jpholdsworth/pokemon-memo-cards/commit/bab0d17)

    **Issue:**
    The game was not correctly persisting the high score. On game start, `localStorage` returned `null`, causing the best score to fail to display.
    
    ```jsx
    // App.jsx
    const oldHighScore = parseFloat(localStorage.getItem('score'));
    
    // scoreboard.jsx
    const bestScore = localStorage.getItem('score');
    ```
    
    **Solution:**
    Updated the logic to safely convert the stored value to a number, defaulting to `0` if no value exists. This ensures a valid number is always available for display and comparison.
    
    ```jsx
    // App.jsx
    const oldHighScore = Number(localStorage.getItem('score') || 0);
    
    // scoreboard.jsx
    const bestScore = Number(localStorage.getItem('score')) || 0;
    ```
    
    **Learning:**
    Even small bugs like this require thinking beyond default behaviour and considering edge cases. Always check for `null` or undefined values when using  browser storage.

3. `gameMode` State Refactor

    Commit: [`f74a5e5`](https://github.com/jpholdsworth/pokemon-memo-cards/commit/f74a5e5)

    **Issue:**
    The `gameMode` state was a simple string, which made the application flow harder to follow and less descriptive when controlling game logic.

    ```jsx
    const [gameMode, setGameMode] = useState('menu');
    ```
    
    **Solution:**
    Refactored `gameMode` into an object with multiple properties, improving readability and providing clearer control over game flow.
    
    ```jsx
    const [gameMode, setGameMode] = useState({
      status: 'menu',
      gameOver: false,
      win: false,
    });
    ```
    
    The object now contains:
    - `status` - a string representing the current game phase
    - `gameOver` - boolean indicating whether the game has ended
    - `win` - boolean indicating if the player won
    
    This makes it easier to manage end-of-game messages and gameplay logic.
    
    **Learning:**
    Experimenting with state shape can improve clarity and maintainability. Don't be afraid to change the data structure of a state value if it makes the logic more intuitive and easier to manage.

## 🔮 Future Improvements
- [ ] Add a timer and optional countdown mode to introduce additional gameplay challenge
- [ ] Improve accessibility with ARIA labels and full keyboard navigation support
- [ ] Add victory animations and enhanced visual feedback when the player wins
- [ ] Introduce optional sound effects for card interactions and game outcomes
- [ ] Add unit testing for core game logic using React Testing Library

## 🙏 Acknowledgements
I would like to thank my parents and friends for their valuable feedback, which helped improve the overall user experience and gameplay interactions.

I would also like to acknowledge the creators of the [TCGdex API](https://tcgdex.dev/) for providing free and accessible Pokémon card data and artwork used in this project.

## 📜 License
This project is licensed under the [MIT License](https://mit-license.org/).

> *Pokémon and all related names, images and trademarks are the property of Nintendo, Game Freak and The Pokémon Company. This project is a non-commercial fan project created for educational and portfolio purposes only.*

---

<div align="center">
**Made with ❤️ and ☕ by Jacob Holdsworth.**
    
[👆 Back to Top](#-pokémon-memory-card-game)
</div>
