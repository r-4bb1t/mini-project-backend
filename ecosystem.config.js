module.exports = {
  apps: [
    {
      name: 'express-test',
      cwd: 'src',
      script: 'ts-node src/index.ts',
      autorestart: true,
      instances: 1, // 0 means making process the number of core.
    },
  ],
};
