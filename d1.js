// advent of code 2021 day 1
// This report indicates that, scanning outward from the submarine, the sonar sweep found depths of 199, 200, 208, 210, and so on.

// The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.

// To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:

// 199 (N/A - no previous measurement)
// 200 (increased)
// 208 (increased)
// 210 (increased)
// 200 (decreased)
// 207 (increased)
// 240 (increased)
// 269 (increased)
// 260 (decreased)
// 263 (increased)
// In this example, there are 7 measurements that are larger than the previous measurement.

// How many measurements are larger than the previous measurement?


const fs = require('fs');
const inputFile = 'out.json';
const fileContent = fs.readFileSync(inputFile);
const data = JSON.parse(fileContent);

const generateDesiredOut = () => { 

  let maxPings = 1;
  
  if (data && Array.isArray(data) && data.length > 0) { 

    data.forEach((element, index) => {

      console.log(index, data[index])

      if (!data[index - 1] || index <= 0) return

      const first = parseInt(data[index])
      const second = parseInt(data[index+1])

      if (
        second &&
        first &&
        second > first) {
          maxPings++;
          
        console.log('is larger, so increase', second, first, maxPings)
      }

    })
  }

  return maxPings ?? null;
}


console.log(`max dist is ${generateDesiredOut()}`)
