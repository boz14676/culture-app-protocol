/**
 * @apiDefine USER_COLLECT
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}                                     id
 * @apiSuccess {Object}                                     original_collectable    收藏的主题对象
 * @apiSuccess {Enum=article,activity,video,stadium,music}  collectable_type        主题类型（文章、活动、视频、场馆、音乐）
 * @apiSuccess {Number}                                     collectable_id          主题ID
 */

/**
 * @api {get} /user/collects 获取用户的收藏列表
 * @apiVersion 0.1.0
 * @apiName GetUserCollects
 * @apiGroup UserCollect
 * @apiPermission CurUser
 *
 * @apiDescription 获取收藏列表
 *
 * @apiHeader   {String}                                    Authorization           用户唯一访问密钥
 * @apiParam    {Number}                                    page                    当前页数
 * @apiParam    {Number}                                    per_page                每页显示的数量
 * @apiParam    {Enum=article,activity,video,stadium,music} [q[collectable_type]]   主题类型（文章、活动、视频、场馆、音乐）
 * @apiParam    {Number}                                    [q[collectable_id]]     主题ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/collects?q[collectable_type]=activity&q[collectable_id]=1&page=1&per_page=10
 *
 * @apiUse USER_COLLECT
 * @apiUse BadRequestError
 */
function GetUserCollects() { return; }

/**
 * @api {post} /user/collect 收藏主题
 * @apiVersion 0.1.0
 * @apiName PostUserCollect
 * @apiGroup UserCollect
 * @apiPermission CurUser
 *
 * @apiDescription 用户对主题（文章、预约、视频、音乐）进行收藏
 *
 * @apiHeader   {String}                                    Authorization       用户唯一访问密钥
 * @apiParam    {Enum=article,activity,video,stadium,music} collectable_type    主题类型（文章、活动、视频、场馆、音乐）
 * @apiParam    {Number}                                    collectable_id      主题ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/collect?collectable_type=stadium&collectable_id=1
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function PostUserCollect() { return; }

/**
 * @api {delete} /user/collect 取消收藏主题
 * @apiVersion 0.1.0
 * @apiName DeleteUserCollect
 * @apiGroup UserCollect
 * @apiPermission CurUser
 *
 * @apiDescription 用户取消对主题（文章、预约、视频、音乐）的收藏
 *
 * @apiHeader   {String}                                    Authorization       用户唯一访问密钥
 * @apiParam    {Enum=article,activity,video,stadium,music} collectable_type    主题类型（文章、活动、视频、场馆、音乐）
 * @apiParam    {Number}                                    collectable_id      主题ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/collect?collectable_type=activity&collectable_id=1
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function DeleteUserCollect() { return; }