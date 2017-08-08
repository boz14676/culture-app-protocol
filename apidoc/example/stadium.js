/**
 * @apiDefine STADIUM
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String}   id
 * @apiSuccess {Object}   original_article_category   文章分类 对象
 * @apiSuccess {String}   name                        名称
 * @apiSuccess {String}   thumbnail                   缩略图
 * @apiSuccess {String}   banner                      banner（包含：背景图）
 * @apiSuccess {String}   labels                      标签
 * @apiSuccess {String}   opening_hours               营业时间
 * @apiSuccess {String}   contact                     联系方式
 * @apiSuccess {String}   transport                   公共交通
 * @apiSuccess {String}   lat                         坐标精度
 * @apiSuccess {String}   lng                         坐标纬度
 * @apiSuccess {String}   address                     位置
 * @apiSuccess {Boolean}  has_photos                  是否包含图片
 * @apiSuccess {Boolean}  has_videos                  是否包含视频
 * @apiSuccess {String}   details                     内容
 * @apiSuccess {Number}   has_read_numbers            阅读数量
 * @apiSuccess {Number}   has_commented_numbers       评论数量
 * @apiSuccess {Number}   has_liked_numbers           点赞数量
 * @apiSuccess {Boolean}  is_cur_user_liked           是否被当前用户点赞
 * @apiSuccess {Boolean}  is_cur_user_collected       是否被当前用户收藏
 */

/**
 * @api {get} /stadiums 获取场馆列表
 * @apiVersion 0.1.0
 * @apiName GetStadiums
 * @apiGroup Stadium
 * @apiPermission none
 *
 * @apiDescription 获取场馆列表
 *
 * @apiParam    {Number}    page                    当前页数
 * @apiParam    {Number}    per_page                每页显示的数量
 * @apiParam    {String}    q[article_category_id]  文章分类ID
 * @apiParam    {String}    [user_lat]              用户坐标精度
 * @apiParam    {String}    [user_lng]              用户坐标纬度
 *
 * @apiParam (区域筛选) {Number}    page                      当前页数
 * @apiParam (区域筛选) {Number}    per_page=10               每页显示的数量
 * @apiParam (区域筛选) {Number}    q[article_category_id]    文章分类ID
 * @apiParam (区域筛选) {Number}    q[area_id]                区域ID
 *
 * @apiExample Example usage:
 * curl -i http://localhost/stadiums?q[article_category_id]=33&page=1&per_page=10
 *
 * @apiUse STADIUM
 * @apiUse BadRequestError
 */
function GetStadiums() { return; }

/**
 * @api {get} /stadium/:id 获取场馆详情
 * @apiVersion 0.1.0
 * @apiName GetStadium
 * @apiGroup Stadium
 * @apiPermission none
 *
 * @apiHeader   {String}    [Authorization] 用户唯一访问密钥
 *
 * @apiDescription 获取场馆详情
 *
 * @apiExample Example usage:
 * curl -i http://localhost/stadium/1
 *
 * @apiUse STADIUM
 * @apiUse BadRequestError
 */
function GetStadium() { return; }