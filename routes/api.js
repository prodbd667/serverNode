/**
 * Created by prodb on 14.05.2017.
 */
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const TestS = require('../models/testModel');

router.get('/', function (req, res, next) {
    TestS.find().then(lists => res.json(lists));
});

router.post('/', function (req, res, next) {
    console.log('req.body', req.body);
    TestS.create(req.body, function (err, post) {
        if (err) return next(err);
        TestS.find(function (err, lists) {
            if (err) return next(err);
            res.json(lists);
        });
    });
});

router.put('/:id', function (req, res, next) {
   TestS.findByAndUpdate(req.params.id, req.body, function (err, post) {
       if (err) return next(err);
       console.log('post', post);
       res.json(post);
   });
});

module.exports = router;