
const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'https://sonar.ci.rfsc.cl',
       options : {
       'sonar.sources': 'src',
       'sonar.inclusions' : 'src/**', // Entry point of your code
       'sonar.exclusions': '**/*.test.*',
       'sonar.tests': 'src',
       'sonar.test.inclusions': '**/*.test.js',
       'sonar.testExecutionReportPaths': 'output/coverage/jest/sonar-report.xml',
       'sonar.javascript.lcov.reportPaths': 'output/coverage/jest/covertura-coverage.xml'

       }
     }, () => {});
