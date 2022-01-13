<h1 align="center">
  🕹️ State Driven Game Development Starter
</h1>

<p align="center">
  A template repository to kick start modern game development on the web built using HTML5 Canvas, TypeScript & Webpack.
</p>

---

- [Quick Start](#quick-start)
- [Overview](#overview)
- [Libraries](#libraries)
- [Game States](#game-states)
- [Example Projects](#examples)

---

<h2 id="quick-start">🚀 Quick Start</h2>

### 🛑 Prerequisites

- `node` >= 14
- `npm` >= 6

### 🖥️ Local Development

Install dependencies.

```bash
npm i
```

Start the development server.

```bash
npm run start
```

See your game by opening your browser at `localhost:5000`.

Changes made to the source files will trigger a recompilation. Refresh the browser to see the changes.

### 🛠️ Building

Building the project.

```bash
npm run build
```

The output will be located at `/dist`.

<h2 id="overview">📖 Overview</h2>

A game is comprised of stacked states, responsible for their own behaviours, rendering and lifecycle. All the states exist in a single stack which is processed on every animation frame.

Game state is managed by manipulating the `stack`; A first in, last out data structure.

Below is a short example flow.

| Step                                                                                               | Stack                                          | State            |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------- |
| Stack is initialised.                                                                              | `[]`                                           | `null`           |
| `StartState` is pushed onto the stack to start the game.                                           | `[StartState]`                                 | `StartState`     |
| `OverworldState` is pushed onto the stack.                                                         | `[StartState, OverworldState]`                 | `OverworldState` |
| An in-game battle occurs and `BattleState` is pushed onto the stack.                               | `[StartState, OverworldState, BattleState]`    | `BattleState`    |
| The battle ends and the stack is popped.                                                           | `[StartState, OverworldState]`                 | `OverworldState` |
| The player opens their inventory menu to heal themselves. `InventoryState` is pushed to the stack. | `[StartState, OverworldState, InventoryState]` | `InventoryState` |

<h2 id="libraries">📚 Libraries</h2>

### `@game`

Exposes the global `game` object exported from `game.ts`.

### `@core`

Directory of core features.

### `@models`

Directory of model definitions used by the game implementation.

### `@state`

Directory of game states.

<h2 id="game-states">🧩 Game States</h2>

Game states are located in `src/state` and provide frame by frame functionality for your game.

They may implement a number of handler methods as described below.

### 🔄 Lifecycle Methods

A game state can implement the following optional lifecycle methods, called by the `stack`.

| Method                                        | Description                                                                                                                                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enter(): void`                               | Called when this state is pushed to the stack, before its first `update`.                                                                                                                                                    |
| `update(frame: Frame): void`                  | Called with each invoke of `requestAnimationFrame` by the `game`. `Frame` data is provided which includes a current timestamp as well as a delta time. `update` is only called on the state that is at the top of the stack. |
| `render(ctx: CanvasRenderingContext2D): void` | Called after each `update` on the same frame. Provides the canvas rendering context as an argument.                                                                                                                          |
| `exit(): void`                                | Called when this state is popped off the stack.                                                                                                                                                                              |

### 🎮 Input Handling

If your state is interested in mouse and keyboard events, implement the following methods.

| Method                                 | Description        |
| -------------------------------------- | ------------------ |
| `keyup(event: KeyboardEvent): void`    | Key up event.      |
| `keydown(event: KeyboardEvent): void`  | Key down event.    |
| `keypress(event: KeyboardEvent): void` | Key press event.   |
| `mouseup(event: MouseEvent): void`     | Mouse up event.    |
| `mousedown(event: MouseEvent): void`   | Mouse down event.  |
| `mouseenter(event: MouseEvent): void`  | Mouse enter event. |
| `mouseleave(event: MouseEvent): void`  | Mouse leave event. |
| `mouseout(event: MouseEvent): void`    | Mouse out event.   |
| `mouseover(event: MouseEvent): void`   | Mouse over event.  |
| `mousemove(event: MouseEvent): void`   | Mouse move event.  |

<h2 id="examples">💡 Example Projects</h2>

- tic-tac-toe - [[GitHub]](https://github.com/brookesb91/tic-tac-toe)
