"use strict";
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
/**
 * @typedef {Object} Student
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} [age]
 * @property {string} location
 * @property {boolean} contract
 */
var student1 = {
    firstName: 'Gary',
    lastName: 'Doe',
    age: 23,
    location: 'London',
    contract: false,
};
var student2 = {
    firstName: 'Mary',
    lastName: 'Joe',
    age: 23,
    location: 'London',
    contract: true,
};
var studentsList = [student1, student2];
console.log(student1);
console.log(student2);
module.exports = {
    entry: "./js/main.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: "./dist"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    mode: "development"
};
// should printevelopment"
// Object
// contract: false
// firstName: "John"
// fullTimeStudent: false,
// lastName: "Doe"olve(__dirname, "dist")
// location: "London"
// Create and append a table of students to the document body
function renderStudentsTable(students) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var thName = document.createElement('th');
    thName.textContent = 'First Name';
    var thLocation = document.createElement('th');
    thLocation.textContent = 'Location';
    headerRow.appendChild(thName);
    headerRow.appendChild(thLocation);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    var tbody = document.createElement('tbody');
    students.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}
renderStudentsTable(studentsList);
//# sourceMappingURL=webpack.config.js.map