# serverless-deploy-newrelic

## Setting up
### Add plugin to your repo
yarn add serverless-deploy-newrelic --dev

### Add plugin to serverless.yml
plugins:
  - serverless-deploy-newrelic

### Add plugin parameters
custom:
  serverless-deploy-newrlic:
    application_id: {your-applicaiton-id} #mandatory
    admin_api_key: ${env:NEW_RELIC_API_KEY} #mandatory
    user: ${env:USER} #not mandatory

## Usage
serverless deploy --new-relic-revision=v1.1.1 --new-relic-release-description=some-description --new-relic-release-changelog=some-changelog 

### Supported parameters
--new-relic-revision
--new-relic-release-description
--new-relic-release-changelog
