#[derive(pest_derive::Parser)]
#[grammar = "grammar.pest"]
struct CalcParser;
CalcParser::parse(Rule::Program, source)