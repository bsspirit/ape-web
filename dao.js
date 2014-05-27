'use strict';

/////////////////////////////////////////////////
// DAO layer
/////////////////////////////////////////////////
var _ = require('underscore')

/**
 * 分页对象
 *
 * @params 参数对象，可空
 * @page 第几页
 * @limit 每页几条
 * @order 按哪列排序
 * @dir 排序的方向
 */
exports.pageDao = function (params, page, limit,order,dir){
    var obj = _.clone(params)||{};

    obj.page = obj.page || (page || 1);
    obj.limit = obj.limit || (limit || 10);
    obj.offset = (obj.page-1) * obj.limit;
    obj.offset= obj.offset<0 ? 0:obj.offset;

    obj.order = obj.order || (order || "id");
    obj.dir = obj.dir || (dir || "DESC");

    obj.order_sql =" ORDER BY a." + obj.order+" "+obj.dir;
    obj.limit_sql =" LIMIT " + obj.offset+","+obj.limit;
    obj.order_limit =  obj.order_sql + obj.limit_sql;
    return obj;
}

/**
 * 条件查询，拼接SQL条件语句
 *
 * @params 条件对象
 * @arr 需要拼接和字段
 */
exports.whereDao = function(params,arr){
    var where = '';
    _.each(arr, function (item) {
        if(params[item]){
            var colon = "'";
            switch(typeof(params[item])){
                case 'number':colon="";break;
                case 'string':colon="'";break;
            }
            where += " AND a."+item+ "=" + colon +  params[item] + colon;
        }
    });
    return where;
}
