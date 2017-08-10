/**
 * @apiDefine ACTIVITY
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}     id
 * @apiSuccess {Enum}       status                      活动状态（1、可预约；2、已订满；3、未开始；4、已结束）
 * @apiSuccess {Oject}      original_article_category   所属文章分类对象
 * @apiSuccess {Boolean}    is_free                     是否为免费
 * @apiSuccess {String}     name                        名称
 * @apiSuccess {Array}      labels                      标签(s)
 * @apiSuccess {Number}     thumbnail                   缩略图
 * @apiSuccess {Number}     banner                      banner
 * @apiSuccess {Number}     price                       价格（0为免费）
 * @apiSuccess {Number}     address                     地址
 * @apiSuccess {Number}     registered_at               活动的开始和结束时间
 * @apiSuccess {Number}     contact                     咨询电话
 * @apiSuccess {Number}     details                     内容
 * @apiSuccess {Number}     has_read_numbers            阅读数量
 * @apiSuccess {Number}     has_commented_numbers       评论数量
 * @apiSuccess {Number}     has_liked_numbers           点赞数量
 * @apiSuccess {Boolean}    is_cur_user_liked           是否被当前用户点赞
 * @apiSuccess {Boolean}    is_cur_user_collected       是否被当前用户收藏
 */

/**
 * @api {get} /activities 获取活动列表
 * @apiVersion 0.1.0
 * @apiName GetActivities
 * @apiGroup Activity
 * @apiPermission none
 *
 * @apiDescription 获取活动列表
 *
 * @apiParam {Number}                               page                    当前页数
 * @apiParam {Number}                               per_page=10             每页显示的数量
 * @apiParam {Enum="article_category","stadium"}    q[activitiable_type]    主题类型（article_category: 文章分类、stadium: 文化场馆）
 * @apiParam {Number}                               q[activitiable_id]      主题ID
 *
 * @apiParam (区域筛选) {Number}    page                      当前页数
 * @apiParam (区域筛选) {Number}    per_page=10               每页显示的数量
 * @apiParam (区域筛选) {Number}    q[article_category_id]    文章分类ID
 * @apiParam (区域筛选) {Number}    q[area_id]                区域ID
 *
 * @apiUse ACTIVITY
 *
 * @apiExample Example usage:
 * curl -i http://localhost/activities?q[activitiable_type]=stadium&q[activitiable_id]=1&page=1&per_page=10
 *
 * @apiUse BadRequestError
 */
function GetActivities() { return; }

/**
 * @api {get} /activity/:id/relateds 获取相关活动列表
 * @apiVersion 0.1.0
 * @apiName GetRelatedActivities
 * @apiGroup Activity
 * @apiPermission none
 *
 * @apiDescription 获取相关活动列表
 *
 * @apiParam {Number}   page        当前页数
 * @apiParam {Number}   per_page=10 每页显示的数量
 *
 * @apiUse ACTIVITY
 *
 * @apiExample Example usage:
 * curl -i http://localhost/activity/1/relateds
 *
 * @apiUse BadRequestError
 */
function GetRelatedActivities() { return; }

/**
 * @api {get} /activity/:id 获取活动详情
 * @apiVersion 0.1.0
 * @apiName GetActivity
 * @apiGroup Activity
 * @apiPermission none
 *
 * @apiDescription 获取活动详情
 *
 * @apiHeader   {String}    [Authorization] 用户唯一访问密钥
 *
 * @apiUse ACTIVITY
 *
 * @apiExample Example usage:
 * curl -i http://localhost/activity/1
 *
 * @apiUse BadRequestError
 */
function GetActivity() { return; }