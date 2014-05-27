'use strict';

//////////////////////////////////////////
// dao
//////////////////////////////////////////
var dao = require('./index.js').dao;

function pageDao_test(){
    var params={'id':1,'name':'aa','page':2};
    var obj = dao.pageDao(params);
    console.log(obj);

    obj = dao.pageDao(params, 1, 30);
    console.log(obj);

    obj = dao.pageDao(params, 1, 40, 'name', 'ASC');
    console.log(obj);
}

pageDao_test();

function whereDao_test(){
    var params1={'id':1,'name':'aa','page':2};
    var obj = dao.whereDao(params1,['id','name']);
    console.log(obj);
}
whereDao_test();



