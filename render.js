const fs = require('fs');
const theme = require('jsonresume-theme-stackoverflow');

// Read language from environment variable, default to 'en'
const language = process.env.LANGUAGE === 'pt' ? 'pt' : 'en';
const resume = require(`./resume-${language}.json`);

theme.changeLanguage(language);

const html = theme.render(resume);

fs.writeFile(`resume-${language}.html`, html, function (err) {
  if (err) throw err;
});
