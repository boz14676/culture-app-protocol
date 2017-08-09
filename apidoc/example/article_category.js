/**
 * @apiDefine ARTICLE_CATEGORY
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}         showing_type_list   文章列表展示类型
 * @apiSuccess {Number=1,2,3,4} showing_type_infor  文章详情展示类型（介绍类型、场馆类型、预订类型、播放类型）
 * @apiSuccess {String}         name                名称
 * @apiSuccess {String}         icon                图标
 * @apiSuccess {String}         banner              banner
 * @apiSuccess {String}         desc                简介
 */
/**
 * @api {get} /article_categories 获取文章分类列表
 * @apiVersion 0.1.0
 * @apiName GetArticleCategories
 * @apiGroup ArticleCategory
 * @apiPermission none
 *
 * @apiDescription 文章分类标准接口
 *
 * @apiParam {Number}  q[topid]=0            上一级ID
 * @apiParam {Number}  [numbers]             显示数量，不传则返回全部
 *
 * @apiParam (文章分类 - 首页入口) {Boolean} [q[is_top_showing]=1] 是否展示在首页
 * @apiParam (文章分类 - 首页入口) {Number}  [numbers]             显示数量，不传则返回全部
 *
 * @apiExample Example usage:
 * curl -i http://localhost/article_categories?q[topid]=0
 *
 * @apiUse ARTICLE_CATEGORY
 *
 * @apiUse BadRequestError
 */
function GetArticleCategories() { return; }