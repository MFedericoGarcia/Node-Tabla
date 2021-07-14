const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Its the base of the Multiplication table'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Shows table in console'
                    })     
                    .option('h',{
                        alias: 'hasta',
                        type: 'numbre',
                        demandOption: true,
                        describe: 'Multiply for this number of times'
                    })               
                    .check((argv, options)=>{
                       if ( isNaN (argv.b)){
                           throw 'Base must be a number'
                       }
                       return true;
                    })
                    .argv; 

module.exports= argv;