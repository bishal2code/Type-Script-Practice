"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums 
var Category;
(function (Category) {
    Category["FOOD"] = "Food";
    Category["TRANSPORT"] = "Transport";
    Category["ENTERTAINMENT"] = "Entertainment";
    Category["OTHERS"] = "OTHERS";
})(Category || (Category = {}));
var Filters;
(function (Filters) {
    Filters["LOW_TO_HIGH"] = "Low To High";
    Filters["HIGH_TO_LOW"] = "High To Low";
    Filters["CATEGORY"] = "BY CATEGORY";
})(Filters || (Filters = {}));
let expenses = [
    { id: 101, title: "Nasta", amount: 50, category: Category.FOOD, date: new Date() },
    { id: 102, title: "Bus Fare", amount: 20, category: Category.TRANSPORT, date: new Date() },
    { id: 103, title: "Clothes", amount: 500, category: Category.OTHERS, date: new Date() },
    { id: 104, title: "Donated", amount: 240, category: Category.OTHERS, date: new Date() },
    { id: 105, title: "Water Bottle", amount: 50, category: Category.OTHERS, date: new Date() }
];
function filter(by, cat) {
    switch (by) {
        case Filters.LOW_TO_HIGH:
            return expenses.sort((a, b) => a.amount - b.amount);
            break;
        case Filters.HIGH_TO_LOW:
            return expenses.sort((a, b) => b.amount - a.amount);
            break;
        case Filters.CATEGORY:
            return expenses.filter((exp) => exp.category === cat);
            break;
    }
}
let filterByPricelToh = filter(Filters.LOW_TO_HIGH);
let filterByCatogery = filter(Filters.CATEGORY, Category.FOOD);
console.log(filterByCatogery);
console.log(filterByPricelToh);
//# sourceMappingURL=expenseTracker.js.map