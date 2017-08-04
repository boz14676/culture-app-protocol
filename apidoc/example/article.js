/**
 * @api {get} /articles 获取文章列表
 * @apiVersion 0.1.0
 * @apiName GetArticle
 * @apiGroup Articles
 * @apiPermission none
 *
 * @apiDescription 文章列表标准接口
 *
 * @apiParam {Number} page                      当前页数
 * @apiParam {Number} per_page=10               每页显示的数量
 * @apiParam {Number} q[article_category_id]    文章分类ID
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
 * @apiParam (距离排序) {String='desc', 'asc'}  s[distance]                 距离排序
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
 * @apiParam (文章分类主页 - 推荐位1（近期热门、热门服务、热色推荐）入口) {Number}     numbers=5               显示的数量
 * @apiParam (文章分类主页 - 推荐位1（近期热门、热门服务、热色推荐）入口) {Number}     q[article_category_id]  文章分类ID
 * @apiParam (文章分类主页 - 推荐位1（近期热门、热门服务、热色推荐）入口) {Boolean}    q[is_hot]=1             推荐位1
 *
 * @apiParam (文章分类主页 - 推荐位2（信息公开）入口) {Number}     numbers=5               显示的数量
 * @apiParam (文章分类主页 - 推荐位2（信息公开）入口) {Number}     q[article_category_id]  文章分类ID
 * @apiParam (文章分类主页 - 推荐位2（信息公开）入口) {Boolean}    q[is_hot2]=1            推荐位2
 *
 * @apiExample Example usage:
 * curl -i http://localhost/articles?q[article_category_id]=1&page=1&per_page=10
 *
 * @apiUse Article
 *
 * @apiUse BadRequestError
 */
function GetArticle() { return; }