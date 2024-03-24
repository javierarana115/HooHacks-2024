const Nightmare = require('nightmare');
const fs = require('fs');

const nightmare = Nightmare({ show: false });

nightmare
  .goto('https://en.wikipedia.org/wiki/Environmental_Performance_Index')
  .wait('body') // Wait for the body element to ensure page is fully loaded
  .wait(4000) // Additional wait time if needed
  .evaluate(() => {
    const objectives = {};

    const objectiveElements = document.querySelectorAll('.wikitable tbody > tr');
    let currentObjective = '';

    objectiveElements.forEach(element => {
      const cells = element.querySelectorAll('td');
      if (cells.length === 1) {
        // This is an objective row
        currentObjective = cells[0].textContent.trim();
        objectives[currentObjective] = {};
      } else if (cells.length === 3 && currentObjective) {
        // This is an issue category row
        const issueCategory = cells[0].textContent.trim();
        objectives[currentObjective][issueCategory] = {};

        // Extract the indicator and its value
        const indicator = cells[1].textContent.trim();
        const value = cells[2].textContent.trim();

        // Add the indicator and its value to the current issue category
        objectives[currentObjective][issueCategory][indicator] = value;
      }
    });

    return objectives;
  })
  .end()
  .then(result => {
    fs.writeFile('epi_data.json', JSON.stringify(result, null, 2), err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data saved to epi_data.json');
      }
    });
  })
  .catch(error => {
    console.error('Scraping failed:', error);
  });
