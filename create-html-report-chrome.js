const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'report',
  reportPath: 'report',
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '68',
    },
    device: 'Local',
    platform: {
      name: 'ubuntu',
      version: '18.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [{
        label: 'Project',
        value: 'AT Web UI - DAYTONA'
      },
      {
        label: 'Written by',
        value: 'Astra International'
      },
    ],
  },
});