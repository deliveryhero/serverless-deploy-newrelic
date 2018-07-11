'use strict';
const https = require('https');

class DeployNewRelicPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'after:deploy:deploy': this.callNewRelic.bind(this),
    };
  }

  callNewRelic() {
    const applicationId = this.serverless.service.custom['serverless-deploy-newrlic'].application_id;
    const adminApiKey = this.serverless.service.custom['serverless-deploy-newrlic'].admin_api_key;
    const user = this.serverless.service.custom['serverless-deploy-newrlic'].user || '';
    const revision = this.options['new-relic-revision'] || 'no-revision-specified';
    const description = this.options['new-relic-release-description'] || '';
    const changelog = this.options['new-relic-release-changelog'] || '';
    if (!applicationId || !adminApiKey) {
      this.serverless.cli.warn('application_id and admin_api_key must be defined');
      return;
    }

    const options = {
      hostname: 'api.newrelic.com',
      port: 443,
      path: `/v2/applications/${applicationId}/deployments.json`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key' : adminApiKey,
      }
    };
    const postData = JSON.stringify({
      deployment : {
        revision: revision,
        description: description,
        changelog: changelog,
        user: user,
      },
    });
    const req = https.request(options, (res) => {
      res.on('data', (data) => {
        this.serverless.cli.log(`New Relic response: ${data}`);
      })
    });

    req.on('error', (e) => {
      this.serverless.cli.error('Error when calling New Relic: ', e);
    });

    req.write(postData);
    req.end();
  }
}
module.exports = DeployNewRelicPlugin;
