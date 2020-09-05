module.exports = class Employee {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		return `Name:${this.name}`;
	}
};
