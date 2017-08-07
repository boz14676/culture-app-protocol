/**
 * @apiDefine USER_LIKE
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Object} original_user   用户对象
 */

/**
 * @api {get} /likes 获取主题的点赞
 * @apiVersion 0.1.0
 * @apiName GetLikes
 * @apiGroup UserLike
 * @apiPermission none
 *
 * @apiDescription 获取主题（文章、文化场馆、活动、视频、评论、音乐）的点赞
 *
 * @apiHeader   {String}                                                    [Authorization]     用户唯一访问密钥
 * @apiParam    {Number}                                                    page                当前页数
 * @apiParam    {Number}                                                    per_page            每页显示的数量
 * @apiParam    {Enum=article,stadium,activity,video,user_comment,music}    q[likesable_type]   主题类型（文章、文化场馆、活动、视频、评论、音乐）
 * @apiParam    {Number}                                                    q[likesable_id]     主题ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/likes?q[likesable_type]=activity&q[likesable_id]=1&page=1&per_page=10
 *
 * @apiUse USER_LIKE
 * @apiUse BadRequestError
 */
function GetLikes() { return; }

/**
 * @api {post} /user/like 点赞主题
 * @apiVersion 0.1.0
 * @apiName PostUserLike
 * @apiGroup UserLike
 * @apiPermission CurUser
 *
 * @apiDescription 用户对主题（文章、文化场馆、活动、视频、评论、音乐）进行点赞
 *
 * @apiHeader   {String}                                                    Authorization   用户唯一访问密钥
 * @apiParam    {Enum=article,stadium,activity,video,user_comment,music}    likesable_type  主题类型（文章、文化场馆、活动、视频、评论、音乐）
 * @apiParam    {Number}                                                    likesable_id    主题ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/like?likesable_type=stadium&likesable_id=1
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function PostUserLike() { return; }

/**
 * @api {delete} /user/like 取消点赞主题
 * @apiVersion 0.1.0
 * @apiName DeleteUserLike
 * @apiGroup UserLike
 * @apiPermission CurUser
 *
 * @apiDescription 用户取消对主题（文章、文化场馆、活动、视频、评论、音乐）的点赞
 *
 * @apiHeader   {String}                                                    Authorization   用户唯一访问密钥
 * @apiParam    {Enum=article,stadium,activity,video,user_comment,music}    likesable_type  主题类型（文章、文化场馆、活动、视频、评论、音乐）
 * @apiParam    {Number}                                                    likesable_id    主题ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/like?likesable_type=stadium&likesable_id=1
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function DeleteUserLike() { return; }