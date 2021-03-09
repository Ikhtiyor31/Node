import express from 'express';
import postRouter from './postRouter.js'

const allRouter = express.Router({mergeParams: true});


allRouter.use('/', postRouter);

export default allRouter;