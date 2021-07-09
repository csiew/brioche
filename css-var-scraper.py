#!/usr/bin/env python
import argparse
import json

raw_css_variables = []
sanitized_variables_dict = {}

def scrape_css_variables(filename):
  with open(filename, "r") as content_file:
    contents = content_file.read().strip().split("\n")
    for line in contents:
      split_line = line.strip(' ').split(':')
      if (split_line[0].startswith('--')):
        raw_css_variables.append(split_line[0])

def jsonify_variable_name(raw_variable_name):
  split_variable = [i for i in raw_variable_name.split('-') if len(i) > 0]
  sanitized_variable = ""
  for i, word in enumerate(split_variable):
    sanitized_word = word.lower()
    if (i == 0):
      sanitized_variable += sanitized_word
    else:
      sanitized_variable += sanitized_word.capitalize()
  return sanitized_variable

def dict_to_file(content, filepath):
  with open(filepath, "w") as fp:
    json.dump(content, fp)

if __name__ == "__main__":
  parser = argparse.ArgumentParser()
  parser.add_argument("--target", required=True, help="Intended destination of JSON file")
  parser.add_argument("--source", required=True, nargs="+", help="CSS definition files")

  args = parser.parse_args()
  target = args.target
  files = args.source

  for filename in files:
    scrape_css_variables(filename)
  for variable in raw_css_variables:
    sanitized_variables_dict[jsonify_variable_name(variable)] = variable
  
  dict_to_file(sanitized_variables_dict, target)
