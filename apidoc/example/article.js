/**
 * @apiDefine ARTICLE
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}     id
 * @apiSuccess {Number}     article_category_id         所属文章分类ID
 * @apiSuccess {Object}     original_article_category   所属文章分类对象
 * @apiSuccess {String}     name                        名称（包含：姓名）
 * @apiSuccess {String}     thumbnail                   缩略图（包含：大师头像）
 * @apiSuccess {String}     banner                      banner（包含：背景图）
 * @apiSuccess {String}     labels                      标签
 * @apiSuccess {String}     lat                         坐标精度
 * @apiSuccess {String}     lng                         坐标纬度
 * @apiSuccess {String}     address                     位置
 * @apiSuccess {String}     desc                        用于：内容描述、专题简介、内容年代、主题、个人简介
 * @apiSuccess {Timestamp}  client_timed_at             时间
 * @apiSuccess {Boolean}    has_videos                  是否包含视频
 * @apiSuccess {Boolean}    has_photos                  是否包含视频
 * @apiSuccess {String}     details                     内容
 * @apiSuccess {Mixed}      extra                       扩展字段
 * @apiSuccess {Number}     has_commented_numbers       评论数量
 * @apiSuccess {Number}     has_liked_numbers           点赞数量
 * @apiSuccess {Number}     has_read_numbers            阅读数量
 * @apiSuccess {Number}     has_activity_numbers        活动数量
 * @apiSuccess {Boolean}    is_cur_user_liked           是否被当前用户点赞
 * @apiSuccess {Boolean}    is_cur_user_collected       是否被当前用户收藏
 */

/**
 * @api {get} /articles 获取文章列表
 * @apiVersion 0.1.0
 * @apiName GetArticles
 * @apiGroup Article
 * @apiPermission none
 *
 * @apiDescription 文章列表标准接口
 *
 * @apiParam {Number} page                      当前页数
 * @apiParam {Number} per_page=10               每页显示的数量
 * @apiParam {Number} q[article_category_id]    文章分类ID
 *
 * @apiParam (关键字模糊查询)  {String}    q[keywords] 关键字
 *
 * @apiParam (点赞量排序) {Number}               page                        当前页数
 * @apiParam (点赞量排序) {Number}               per_page=10                 每页显示的数量
 * @apiParam (点赞量排序) {Number}               q[article_category_id]      文章分类ID
 * @apiParam (点赞量排序) {String='asc', 'desc'} s[has_liked_numbers]=desc   点赞数量排序
 *
 * @apiParam (评论量排序) {Number}               page                            当前页数
 * @apiParam (评论量排序) {Number}               per_page=10                     每页显示的数量
 * @apiParam (评论量排序) {Number}               q[article_category_id]          文章分类ID
 * @apiParam (评论量排序) {String='asc', 'desc'} s[has_commented_numbers]=desc   评论数量排序
 *
 * @apiParam (距离排序) {Number}                page                       当前页数
 * @apiParam (距离排序) {Number}                per_page=10                每页显示的数量
 * @apiParam (距离排序) {Number}                q[article_category_id]     文章分类ID
 * @apiParam (距离排序) {String='desc', 'asc'}  s[distance]                距离排序
 * @apiParam (距离排序) {String}                user_lat                   用户坐标精度
 * @apiParam (距离排序) {String}                user_lng                   用户坐标纬度
 *
 * @apiParam (距离排序) {Number}                page                        当前页数
 * @apiParam (距离排序) {Number}                per_page=10                 每页显示的数量
 * @apiParam (距离排序) {Number}                q[article_category_id]      文章分类ID
 * @apiParam (距离排序) {String='desc', 'asc'}  s[distance]                 距离排序
 * @apiParam (距离排序) {String}                user_lat                    用户坐标精度
 * @apiParam (距离排序) {String}                user_lng                    用户坐标纬度
 *
 * @apiParam (首页入口 - 猜你喜欢) {Number}     numbers=5       显示的数量
 * @apiParam (首页入口 - 猜你喜欢) {Boolean}    q[is_guess]=1   猜你喜欢
 *
 * @apiParam (文章分类主页 - 附近推荐入口) {Number}                 numbers=5               显示的数量
 * @apiParam (文章分类主页 - 附近推荐入口) {Number}                 q[article_category_id]  文章分类ID
 * @apiParam (文章分类主页 - 附近推荐入口) {String='desc', 'asc'}   s[distance]             距离排序
 * @apiParam (文章分类主页 - 附近推荐入口) {String}                 user_lat                用户坐标精度
 * @apiParam (文章分类主页 - 附近推荐入口) {String}                 user_lng                用户坐标纬度
 *
 * @apiParam (附近推荐列表) {Number}                  page                    当前页数
 * @apiParam (附近推荐列表) {Number}                  per_page=10             每页显示的数量
 * @apiParam (附近推荐列表) {Number}                  q[article_category_id]  文章分类ID
 * @apiParam (附近推荐列表) {String='desc', 'asc'}    s[distance]             距离排序
 * @apiParam (附近推荐列表) {String}                  user_lat                用户坐标精度
 * @apiParam (附近推荐列表) {String}                  user_lng                用户坐标纬度
 *
 * @apiParam (区域筛选) {Number}        page                      当前页数
 * @apiParam (区域筛选) {Number}        per_page=10               每页显示的数量
 * @apiParam (区域筛选) {Number}        q[article_category_id]    文章分类ID
 * @apiParam (区域筛选) {Number}        q[area_id]                区域ID
 *
 * @apiParam (标签筛选) {Number}        page                      当前页数
 * @apiParam (标签筛选) {Number}        per_page=10               每页显示的数量
 * @apiParam (标签筛选) {Number=1,2,3}  q[article_category_id]    文章分类ID
 * @apiParam (标签筛选) {Number}        q[label_id]               标签ID
 *
 * @apiParam (文章分类主页 - 推荐位1（近期热门、热门服务、特色推荐）入口) {Number}     numbers=5               显示的数量
 * @apiParam (文章分类主页 - 推荐位1（近期热门、热门服务、特色推荐）入口) {Number}     q[article_category_id]  文章分类ID
 * @apiParam (文章分类主页 - 推荐位1（近期热门、热门服务、特色推荐）入口) {Boolean}    q[is_hot]=1             推荐位1
 *
 * @apiParam (文章分类主页 - 推荐位2（信息公开）入口) {Number}     page=1                  当前页数
 * @apiParam (文章分类主页 - 推荐位2（信息公开）入口) {Number}     per_page=5              每页显示的数量
 * @apiParam (文章分类主页 - 推荐位2（信息公开）入口) {Number}     q[article_category_id]  文章分类ID
 * @apiParam (文章分类主页 - 推荐位2（信息公开）入口) {Boolean}    q[is_hot2]=1            推荐位2
 *
 * @apiExample Example usage:
 * curl -i http://localhost/articles?q[article_category_id]=1&page=1&per_page=10
 *
 * @apiUse ARTICLE
 *
 * @apiUse BadRequestError
 */
function GetArticles() { return; }

/**
 * @api {get} /article/:id 获取文章详情
 * @apiVersion 0.1.0
 * @apiName GetArticle
 * @apiGroup Article
 * @apiPermission none
 *
 * @apiDescription 获取文章详情
 *
 * @apiExample Example usage:
 * curl -i http://localhost/article/1
 *
 * @apiUse ARTICLE
 *
 * @apiUse BadRequestError
 */
function GetArticle() { return; }