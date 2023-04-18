'use strict';

/**
 * cipr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cipr.cipr');
