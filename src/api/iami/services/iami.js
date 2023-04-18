'use strict';

/**
 * iami service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::iami.iami');
