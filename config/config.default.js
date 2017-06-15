'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1497449598379_9347';

  // news
  config.news = {
    pageSize: 50,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  // add your config here
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  return config;
};

