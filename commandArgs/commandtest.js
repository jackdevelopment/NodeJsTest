var program = require('commander')
program.version(require('./package.json').version)
       .usage('[options]')
       .option('-p, --path [value]', 'input file path')
       .option('-o, --output [value]', 'out file path')

program.parse(process.argv);

//run args length
console.log(program.args.length);
console.log(program.output);

//convert array
var opts = {
  path: program.path,
  output: program.output
}
console.log(opts);
