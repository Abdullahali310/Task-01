"use strict";
const yargs = require("yargs")
const actions = require('./actions')

yargs.command({
    command: 'add',
    describe: "Adding data to the list",
    builder: {
        id: {
            describe: "Student Id",
            demandOption: true,
            type: 'Nmber'
        },
        name: {
            describe: "Student Name",
            demandOption: true,
            type: "string"
        },
        grade: {
            describe: "Grades of Students",
            demandOption: true,
            type: "number"
        },
        subject: {
            describe: "Subject Name",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        actions.addData(argv.id, argv.name, argv.grade, argv.subject)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove data',
    builder: {
        id: {
            describe: 'remove by id',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'remove by name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        actions.removeData(argv.id)
    }
})


yargs.command({
    command: 'read',
    describe: 'Read data',
    builder: {
        id: {
            describe: 'read by id',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'read by name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        actions.readInfo(argv.id)
    }
})

yargs.command({
    command: 'list',
    describe: 'List data',
    handler: (argv) => {
        actions.infoList()
    }
})

// console.log(yargs.argv);
yargs.parse();