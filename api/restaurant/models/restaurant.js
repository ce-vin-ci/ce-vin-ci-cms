'use strict';

const axios = require('axios')
require('dotenv').config()

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

let notifyGithub = () => {
    axios.post('https://api.github.com/repos/ce-vin-ci/ce-vin-ci-static/dispatches',
    {
        event_type: 'content-updated'
    },
    {
        headers: {
            'Authorization': `token ${process.env.GITHUB_PAT || ''}`
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

/**
 * Lifecycle callbacks
 */
module.exports = {

    /**
     * Triggered before creation.
     */
    lifecycles: {

        afterCreate: async (result, data) => {
            console.log('afterCreate')
            notifyGithub()
        },

        afterUpdate: async (result, params, data) => {
            console.log('afterUpdate')
            notifyGithub()
        },

        afterDelete: async (result, params) => {
            console.log('afterDelete')
            notifyGithub()
        },
    },
};
