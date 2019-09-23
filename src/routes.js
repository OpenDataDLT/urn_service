import { Router } from 'express';
import { create, resolve } from './urn';
import * as STATUS from 'http-status-codes';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'ODPID REST API SERVICE' });
});

routes.post('/', (req, res) => {
  if(!req.body.dataset_name) {
    res.status(STATUS.BAD_REQUEST).send('dataset_name is missing');
  }else if(!req.body.dataset_type) {
    res.status(STATUS.BAD_REQUEST).send('dataset_type is missing');
  }else {
    create(req.body.dataset_name, req.body.dataset_type, (result) => {
      res.status(STATUS.CREATED).json(result);
    }, (err) =>{
      res.status(STATUS.INTERNAL_SERVER_ERROR).json(err);
    });
  }
});

routes.get('/:urn', (req, res) => {
  if(!req.params.urn) {
    res.status(STATUS.BAD_REQUEST).send('urn is missing');
  } else {
    resolve(req.params.urn, (result) => {
      res.status(STATUS.OK).json(result);
    }, (err) => {
      res.status(STATUS.INTERNAL_SERVER_ERROR).json(err);
    });
  }
});


export default routes;
