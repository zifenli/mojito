module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'mojito',
      script: './bin/www',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'ubuntu',
      host: '140.143.187.20',
      ref: 'origin/master',
      repo: 'git@github.com:zifenli/mojito.git',
      path: '/home/ubuntu/projects/mojito/',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
