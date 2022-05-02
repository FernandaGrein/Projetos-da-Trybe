const data = require('./data');
const { species } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;
const hoursArray = Object.entries(hours);

// ex.1
function getSpeciesByIds(...ids) {
    if (ids.length === 0) {
        return [];
    }
    const filterSpecies = species.filter((element) => ids.includes(element.id));
    return filterSpecies;
}
getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d', '78460a91-f4da-4dea-a469-86fd2b8ccc84');

// ex. 2 
function getAnimalsOlderThan(animal, age) {
    const getSpecie = species.filter((element) => element.name === animal);
    const getOlder = getSpecie[0].residents.every((animals) => animals.age >= age);
    return getOlder;
}
getAnimalsOlderThan('lions', '7');

// ex. 3
function getEmployeeByName(employeeName) {
    if (employeeName === undefined) {
        return {};
    }
    return employees
        .find((element) => employeeName === element.firstName || employeeName === element.lastName);
}
console.log(getEmployeeByName('Emery'));

// ex. 4 
function isManager(id) {
    const findManager = employees.some((person) => person.managers.includes(id));
    return findManager;
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
    if (isManager(managerId) === true) {
        const relatedEmployee = employees.filter((employ) => employ.managers.includes(managerId));
        const fullName = relatedEmployee
            .map((employName) => `${employName.firstName} ${employName.lastName}`);
        return fullName;
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// ex. 5
// https://www.google.com/search?q=how+to+check+if+object+contains+key&oq=h&aqs=chrome.1
// .69i60j69i59j69i57j35i19i39j69i60l4.2437j0j7&sourceid=chrome&ie=UTF-8
function countAnimals(animal) {
    if (animal === undefined) {
        const getElemenst = species.reduce((acc, specieAnimal) => {
            if (!acc[specieAnimal.name]) {
                acc[specieAnimal.name] = specieAnimal.residents.length;
            }
            return acc;
        }, {});
        console.log(getElemenst);
        return getElemenst;
    }
    if (!animal.sex) {
        const findSpecie = species.find((specieName) => specieName.name === animal.specie);
        return findSpecie.residents.length;
    }
    const findAnimal = species.find((specieName) => specieName.name === animal.specie);
    const countAnimal = findAnimal.residents.filter((element) => element.sex === animal.sex);
    return countAnimal.length;
}
console.log(countAnimals());

function countEntrants(entrants) {
    const firstValue = {
        child: 0,
        adult: 0,
        senior: 0
    };
    const counting = entrants.reduce((acc, curr) => {
        if (curr.age < 18) {
            acc.child += 1;
        } else if (curr.age >= 18 && curr.age < 50) {
            acc.adult += 1;
        } else if (curr.age >= 50) {
            acc.senior += 1;
            return acc;
        }
        return acc;
    }, firstValue);
    return counting;
}

function calculateEntry(entrants) {
    let calculate = 0;
    if (entrants !== undefined && Object.keys(entrants).length > 0) {
        const objEnrants = countEntrants(entrants);
        const {
            child,
            adult,
            senior
        } = objEnrants;
        calculate = child * prices.child + adult * prices.adult + senior * prices.senior;
        return calculate;
    }
    return calculate;
}
console.log(calculateEntry({}));

// ex. 7
const getCompletSchedule = hoursArray.reduce((dayAcc, hoursValue) => {
    const accDay = dayAcc;
    const animalDay = species.filter((animal) => animal.availability.includes(hoursValue[0]));
    const animalName = animalDay.map((elemento) => elemento.name);
    if (hoursValue[0] === 'Monday') {
        accDay[hoursValue[0]] = {
            officeHour: 'CLOSED',
            exhibition: 'The zoo will be closed!',
        };
    } else {
        accDay[hoursValue[0]] = {
            officeHour: `Open from ${hoursValue[1].open}am until ${hoursValue[1].close}pm`,
            exhibition: animalName,
        };
    }
    return accDay;
}, {});

const compleScheduleArray = Object.entries(getCompletSchedule);

function getDaySchedule(scheduleTarget) {
    const param = scheduleTarget;
    const filterSchedule = compleScheduleArray.filter((dayElement) => dayElement[0] === param);
    const newObj = {
        [filterSchedule[0][0]]: filterSchedule[0][1],
    };
    return newObj;
}

function getAnimalDays(scheduleTarget) {
    const param = scheduleTarget;
    const filterDays = species.filter((animal) => animal.name === param);
    const [{
        availability
    }] = filterDays;
    const animalDays = availability;
    return animalDays;
}

function getSchedule(scheduleTarget) {
    if (hoursArray.find((day) => day.includes(scheduleTarget))) {
        return getDaySchedule(scheduleTarget);
    }
    if (species.find((animal) => animal.name === scheduleTarget)) {
        return getAnimalDays(scheduleTarget);
    }
    return getCompletSchedule;
}
console.log(getSchedule());

// ex. 8
function getOldestFromFirstSpecies(id) {
    const getEmployee = employees.find((person) => person.id === id);
    const findAnimal = species.find((animal) => animal.id.includes(getEmployee.responsibleFor[0]));
    const getOldest = findAnimal.residents.reduce((acc, element) => {
        let accumulator = acc;
        if (accumulator.age < element.age) {
            accumulator = element;
        }
        return accumulator;
    });
    const result = Object.values(getOldest);
    return result;
}
console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

// ex. 9
function getAnimalSpecie(responsible) {
    const nomes = [];
    responsible.forEach((element) => {
        const animalName = species.find((animal) => animal.id === element);
        nomes.push(animalName.name);
    });
    return nomes;
}

function getAnimalLocation(responsible) {
    const location = [];
    responsible.forEach((element) => {
        const animalLocation = species.find((animal) => animal.id === element);
        location.push(animalLocation.location);
    });
    return location;
}

function getAllEmployeesCoverage() {
    const result = [];
    const employeesReduce = employees.reduce((accEmploy, curEmployee) => {
        let acc = accEmploy;
        const responsible = curEmployee.responsibleFor;
        acc = {
            id: curEmployee.id,
            fullName: `${curEmployee.firstName} ${curEmployee.lastName}`,
            species: getAnimalSpecie(responsible),
            locations: getAnimalLocation(responsible),
        };
        result.push(acc);
        return result;
    }, {});

    return employeesReduce;
}
const allEmp = getAllEmployeesCoverage();

function getEmployeeCoverage(param) {
    const pVal = Object.values(param);
    const filterParam = allEmp.filter((person, idx) => allEmp[idx].fullName
        .includes(pVal) || allEmp[idx].id.includes(pVal));
    return filterParam[0];
}

function getEmployeesCoverage(param) {
    if (param === undefined) {
        return getAllEmployeesCoverage();
    }
    const getFirstName = employees.find((person) => person.firstName === param.name);
    const getLastName = employees.find((person) => person.lastName === param.name);
    const getId = employees.find((person) => person.id === param.id);

    if (getFirstName || getLastName || getId) {
        return getEmployeeCoverage(param);
    }

    throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage({
    name: 'Sharonda'
}));