# :horse_racing: Valid Chess Knight Moves

This project has been created to complete a challenge from [AE Studio](https://ae.studio/).

## What's in This Document
- [The Challenge](#computer-the-challenge)
  - [Requirementes](#requirements)
- [How the Algorithm Works](#gear-how-the-algorithm-works)
- [How This Repository is Organized](#file_folder-how-this-repository-is-organized)
  - [API routes](#api-routes)
  - [Test files](#test-files)
- [Get Up and Running](#rocket-get-up-and-running)
  - [Additional commands](#additional-commands)
- [Running the Tests](#test_tube-running-the-tests)
- [How to Contribute](#handshake-how-to-contribute)
- [License](#memo-license)
- [NextJs Boilerplate](#nextjs-boilerplate)

## :computer: The Challenge
Chess is a two-player strategy board game played on a chessboard, a checkered game board with 64 squares/cells arranged in an 8x8 grid. Algebraic notation in chess is a method to map cells using A to H as columns (left to right) and 1 to 8 as rows (bottom to top).

In a chess game there are many different pieces. **In this test we will be using the piece called Knight**. A knight can move either 2 squares horizontally and 1 square vertically OR 2 squares vertically
and 1 square horizontally.

### Requirements

- The user should be able to click/tap a button. The cell should be highlighted and have the app highlight all cells where the Knight can move in exactly 2 turns.

- Only one cell should be selected at a time.

- The app should make an API call to get the cells it has to highlight and the logic to calculate possible positions should be in the backend.

- The Knight position should be sent to the API in Algebraic notation (D4, A5, H8, A1, ...). If the position is not in Algebraic notation, the backend should return an error.

- There should be an introduction page in a form of a steps wizard that illustrates how the app works and what to expect.

- The wizard page should be responsive and work on all devices and written in clear English that a non-technical client would be able to understand.

## :gear: How the Algorithm Works
In order to build the chessboard grid, we have an array of `columns` and an array of `lines` that hold all of the possible positions:
```js
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const lines = ['8', '7', '6', '5', '4', '3', '2', '1']
```
Besides that, we already know that the knight piece can move, at most (it depends on the knight current position), **8 positions**. The algorithm has these possible moves defined in an array that contains another array (`[row, column]`) on each position:
```js
const knightMovements = [
  [-2, -1], //1st movement
  [-1, -2], //2nd movement
  [1, -2],  //...
  [2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1]
]
```

To explain it, let's say the algorithm received `[C7]` as the starting position. The algorithm will run the steps below:

1. For each of the `positions` it receives as argument (array of positions), it will find the index of the the characters that compose the position:
    ```js
    positions.forEach((position) => {
      const columnIndex = columns.indexOf(position.charAt(0)) //C7 will return 2 as columnIndex
      const rowIndex = lines.indexOf(position.charAt(1))      //C7 will return 1 as lineIndex
    ```

2. Loops through the movements array to get the next **possible** move of the knight. To achieve this, on each iteration, it sums the `columnIndex` and `lineIndex` with the current movement value:
    ```js
    const letterIndex = columnIndex + knightMovements[movement][1]  //1st iteration: 2 + (-1) = 1
    const numberIndex = rowIndex + knightMovements[movement][0]     //1st iteration: 1 + (-2) = -1
    ```

3. Makes sure both values from step 2 are inside the chessboard limit before inserting it in the list. In the example case, `numberIndex` (-1) is not inside the chessboard limit, since there's no negative index inside the `linesArray`.
    ```js
    if (isValidIndex(letterIndex) && isValidIndex(numberIndex)) { //In the example, the numberIndex (-1) is not valid
      //Rest of the code...
    }
    ```

4. In case it's a valid position (inside the chessboard), the algorithm gets the position from the `columns` and `lines` arrays and saves it by using a `Set` structure (to avoid repeated values):
    ```js
    if (isValidIndex(letterIndex) && isValidIndex(numberIndex)) {
      const newPosition = `${columns[letterIndex]}${lines[numberIndex]}`
      positionsSet.add(newPosition)
    }
    ```

5. After looping through all of the `positions` received as argument, the algorithm returns the list of valid positions as an array:
    ```js
    return Array.from(positionsSet)
    ```
6. The returned list will be included in a result list and used as the incoming argument list for the next turn. This process is repeated `turns` times (2, by default). By the end, the algorithm returns an array with all the possible positions the `knight` can move to in `turns` times.
    ```js
    //For each of the next turns
    for (let turn = 1; turn < turns; turn++) {
      positions = [...positions, ...getKnightPositions(positions)]
    }

    //Resulting positions array
    return positions
    ```

## :file_folder: How This Repository is Organized

The main files of the project can be found in the `src` folder:
- `components`: React components that can be reused to build other components and pages.
- `hooks`: custom hooks created to make easier reusing component logic.
- `pages`: available pages ([home](src/pages/index.tsx) and [game](src/pages/game.tsx) pages).
- `services`: miscellaneous utilities.
- `styles`: files related to the project styling (e.g.: ThemeProvider, global style etc).
- `tests`: test configuration files (e.g.: utils) and test files that can't be included in the original folder of the file that is being tested (Ex.: api tests).
- `utils`: reusable functions.

### API routes
The API routes can be found in the [src/pages/api](src/pages/api) folder. Any file inside this folder is mapped to `/api/*` and will be treated as an API endpoint instead of a page.

There is only one route so far: `/api/piece/$[piece]/position/[position]`. So, if you want to get the possible positions for the `knight` piece, starting from the position `A1`, you can send a get request to `/api/piece/knight/position/A1`. By default, the route will provide the positions that the piece can move in exactly 2 turns. However, you can switch this behaviour by providing a `turns` query param: `/api/piece/knight/position/A1?turns=3`.

### Test files
All the files whose names are `test.ts` or `test.tsx` will be executed when you run the tests. In most of the cases, you'll find the test file inside the function/page/component that is being tested. However, in some cases, this can't be achieved. For example, we can't insert test files in the pages folder (the framework will try to build the file as a page). For those cases, the test files will be available in the [src/tests](src/tests) folder.

## :rocket: Get Up and Running
You can run this project on your local environment by following the simple steps below:

1. **Clone the project.**
    ```shell
    git@github.com:lcnogueira/valid-chess-knight-moves.git
    ```
2. **Install the dependencies**
    ```shell
    cd valid-chess-knight-moves/
    yarn install
    ```

3. **Start the site in `develop` mode.**
    ```shell
    yarn dev
    ```

4. **Visit the website!**

    The site is now running on `http://localhost:3000`.

### Additional commands
You can find additionals commands inside the [package.json](package.json) file:

- `build`: creates the production build version.
- `start`: starts a simple server by running the build version (make sure you have created the build version before running this script).
- `lint`: runs the linter against components and pages.
- `storybook`: runs storybook on develop mode.
- `build-storybook`: creates the build version of storybook.


## :test_tube: Running the Tests
This project includes unit and snapshot tests. In order to run all of them you can use one of the following scripts:
- `test`: runs the tests for all components and pages;
- `test:watch`: runs tests in watch mode.


## :handshake: How to Contribute
If you want to contribute to this project, please take a look at the [contributing guidelines](CONTRIBUTING.md). It explains the whole process and will help you get set up locally.

## :memo: License

Licensed under the [MIT License](LICENSE).

### NextJs Boilerplate

This project was bootstrapped by using my own [nextjs-boilerplate](https://github.com/lcnogueira/nextjs-boilerplate)
