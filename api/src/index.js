'use strict';
// const { faker } = require("@faker-js/faker");
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
  //  for (let i = 0; i < 100; i++) {
  //     await strapi.entityService.create("api::article.article",{
  //       data:{
  //         Title:"artigo "+i, // faker.word.adjective() + ' ' + faker.wrod.noun(),
  //         Description:"Artigo descrição"+i, // faker.lorem.paragraph(),
  //       }
  //     });
  //  }
  },
};
