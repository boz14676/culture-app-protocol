/**
 * @api {get} /hotsearches 获取热搜列表
 * @apiVersion 0.1.0
 * @apiName GetHotSearches
 * @apiGroup Others
 * @apiPermission none
 *
 * @apiDescription
 *
 * @apiParam {Number} page                      当前页数
 * @apiParam {Number} per_page=10               每页显示的数量
 * @apiParam {Number} q[article_category_id]    文章分类ID
 *
 * @apiExample Example usage:
 * curl -i http://localhost/articles?q[article_category_id]=1&page=1&per_page=10
 *
 * @apiUse Article
 *
 * @apiUse BadRequestError
 */
function GetHotSearches() { return; }