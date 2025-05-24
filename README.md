TypeScript Foundations — ALX Frontend JavaScript
Welcome to the TypeScript module of the ALX Frontend track. This project introduces the fundamentals of TypeScript, an essential tool for scalable and reliable front-end JavaScript development.

📚 Resources
TypeScript in 5 minutes

Official TypeScript Documentation

🎯 Learning Objectives
By the end of this project, you should be able to:

Explain the basic types in TypeScript

Use interfaces, classes, and functions in a typed context

Interact with the DOM using TypeScript

Implement generic types

Use namespaces and declaration merging

Create ambient namespace declarations to use external JS libraries

Understand nominal typing using branding

🛠️ Project Requirements
Editors: vi, vim, emacs, Visual Studio Code

TypeScript Files: All code should use the .ts extension where applicable

Code Compilation: Targeted for Ubuntu 18.04

Testing: Jest version 24.9.*

Linting: ESLint with @typescript-eslint

Build Tool: Webpack

Compilation: No TypeScript errors or warnings on build

📁 Project Structure
Copy
Edit
0x04-TypeScript/
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
└── task_5/
Each task folder includes its own:

package.json

webpack.config.js

tsconfig.json

JavaScript/TypeScript source files

Any additional interfaces, modules, or type declarations

🧪 Configuration Files
These configurations are reused across tasks:

package.json
json
Copy
Edit
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
.eslintrc.js
js
Copy
Edit
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
tsconfig.json
json
Copy
Edit
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}
webpack.config.js
js
Copy
Edit
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Development" })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
✅ Tasks Overview
Task	Description
task_0	Create a Student interface and render it as a table in the DOM
task_1	Define and extend a Teacher interface; build class structures
task_2	Implement advanced types and function-based type guards
task_3	Use ambient namespaces to simulate DB operations with CRUD
task_4	Build a subject management system using namespaces and declaration merging
task_5	Implement nominal typing via TypeScript branding

Each directory includes specific TypeScript and Webpack configurations necessary for its functionality.

🚀 Getting Started
To build and run the TypeScript code for any task:

bash
Copy
Edit
cd task_0  # or task_1, task_2, etc.
npm install
npm run build
To start the development server:

bash
Copy
Edit
npm run start-dev
To run tests (if applicable):

bash
Copy
Edit
npm run test
🧼 Code Quality
All code should:

Be linted with @typescript-eslint

Show no TypeScript compile-time errors

Follow consistent naming and interface standards

Be modular, using proper import/export structures

💬 Author & Credits
This project is part of the ALX Frontend Curriculum and designed to solidify TypeScript fundamentals for scalable frontend development.

