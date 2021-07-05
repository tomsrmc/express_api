import express from 'express';

var router = express.Router();

router.put('/test', async ({body}, res, next) => {
  res.send('ok')
});

export default router
