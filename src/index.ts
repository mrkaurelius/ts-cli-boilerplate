// cli app main entry
import { program } from 'commander';

program
    .name('deneme')
    .description('ts cli boilerpalte deneme')
    .version('0.0.1');

program.command('denemecmd')
    .description('deneme cmd desc');

program.parse();

// const currentDateAndTime = new Date().toISOString()
// console.log(currentDateAndTime)