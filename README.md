# serverless-deploy-newrelic
Tiny Serverless plugin which calls New Relic deployment api after a deployment

## Setting up
### Add plugin to your repo
yarn add serverless-deploy-newrelic --dev

### Add plugin to serverless.yml
```yaml
plugins:
  - serverless-deploy-newrelic
```

### Add plugin parameters
```yaml
custom:
  serverless-deploy-newrlic:
    application_id: {your-applicaiton-id} # mandatory
    admin_api_key: ${env:NEW_RELIC_API_KEY} # mandatory
    user: ${env:USER} # not mandatory
```

## Usage
serverless deploy --new-relic-revision=v1.1.1 --new-relic-release-description=some-description --new-relic-release-changelog=some-changelog 

### Supported parameters
- --new-relic-revision # falls back to 'no-revision-specified' if empty
- --new-relic-release-description # falls back to empty string if empty
- --new-relic-release-changelog # falls back to empty string if empty
