import json;

filename = 'inp.txt'
newfile = 'out.json'

with open(filename) as f:
  lines = f.read().splitlines()
    
with open(newfile, 'w') as json_file:
  json.dump(lines, json_file)
      


print(lines)