/**
 * @api {get} /article_categories 获取文章分类列表
 * @apiVersion 0.1.0
 * @apiName GetArticleCategories
 * @apiGroup ArticleCategories
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
 * @apiUse ArticleCategory
 *
 * @apiUse BadRequestError
 */
function GetArticleCategories() { return; }