import * as URN from 'urn-lib';
import axios from 'axios';
import {ODPID_SERVICE , URN_PROTOCOL, URN_TYPE , EXPLORE_SERVICE } from '../config';

module.exports = {
    create: (dataset_name, dataset_type, callback, error) => {
        try {
          const data = {
            name : dataset_name,
            type : dataset_type
          }
          axios.post(`${ODPID_SERVICE}/api/create`, data,{
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res)=> {
            res.data.urn = `${URN_PROTOCOL}:${URN_TYPE}:${res.data.uuid}`;
            callback(res.data);
          }).catch((err)=> {
            console.log(err);
            error(err);
          })
        } catch(e) {
          error(e);
        }
    },
    resolve: (urn, callback, error) => {
        var did = URN.create( URN_PROTOCOL, {
            components: [
              'type',
              'resource',
            ],
          });
          try {
            var str = urn;
            var parsed = did.parse(str);
            var validationErrors = did.validate(parsed);
            var formatted = did.format(parsed);
            var match = str === formatted;
            var obj = JSON.parse(JSON.stringify({ parsed, formatted, validationErrors, match }, null, 2));
            if(obj.parsed.type === URN_TYPE) {
              obj.url = `${EXPLORE_SERVICE}`;
              obj.href = `${EXPLORE_SERVICE}/${obj.parsed.resource}`;
              callback(obj);
            } else {
              error('URN TYPE not supported');
            }
          } catch(e) {
            error(e);
          }
    },
}