/**
 * @api {get} /hotsearches 获取热搜列表
 * @apiVersion 0.1.0
 * @apiName GetHotSearches
 * @apiGroup Others
 * @apiPermission none
 *
 * @apiDescription 获取热搜列表
 *
 * @apiParam {Number} numbers=6                 显示的数量
 * @apiParam {Number} q[article_category_id]    文章分类ID
 *
 * @apiExample Example usage:
 * curl -i http://localhost/hotsearches?q[article_category_id]=1&numbers=6
 *
 * @apiSuccess id
 * @apiSuccess article_category_id  文章分类ID
 * @apiSuccess name                 名称
 *
 * @apiUse BadRequestError
 */
function GetHotSearches() { return; }

/**
 * @api {get} /home_sections 获取首页推荐栏目
 * @apiVersion 0.1.0
 * @apiName GetHomeSection
 * @apiGroup Others
 * @apiPermission none
 *
 * @apiDescription 获取首页推荐栏目
 *
 * @apiParam {Number} confs[1] 位置1显示的数量
 * @apiParam {Number} confs[2] 位置2显示的数量
 *
 * @apiExample Example usage:
 * curl -i http://localhost/home_sections?confs[1]=3&confs[2]=5
 *
 * @apiSuccess {Number} id
 * @apiSuccess {String} name        名称
 * @apiSuccess {String} thumbnail   缩略图
 * @apiSuccess {String} extra       用于：人气
 * @apiSuccess {String} url         跳转链接
 *
 * @apiUse BadRequestError
 */
function GetHomeSection() { return; }

/**
 * @api {get} /areas 获取地区
 * @apiVersion 0.1.0
 * @apiName GetAreas
 * @apiGroup Others
 * @apiPermission none
 *
 * @apiDescription 获取地区
 *
 * @apiParam {String}   q[parent_id]    上一级地区ID
 *
 * @apiExample Example usage:
 * curl -i http://localhost/areas?q[parent_id]=24
 *
 * @apiSuccess {Number} id
 * @apiSuccess {String} name        名称
 * @apiSuccess {String} region      大区名称
 * @apiSuccess {String} parent_id=24   上一级区域ID
 *
 * @apiUse BadRequestError
 */
function GetAreas() { return; }

/**
 * @api {get} /labels 获取标签
 * @apiVersion 0.1.0
 * @apiName GetLabels
 * @apiGroup Others
 * @apiPermission 获取标签
 *
 * @apiDescription 获取地区
 *
 * @apiParam {String=1,2,3}   q[article_category_id]  文章`一级`分类ID
 *
 * @apiExample Example usage:
 * curl -i http://localhost/labels?q[article_category_id]=1
 *
 * @apiSuccess {Number} id
 * @apiSuccess {String} name    名称
 *
 * @apiUse BadRequestError
 */
function GetLabels() { return; }