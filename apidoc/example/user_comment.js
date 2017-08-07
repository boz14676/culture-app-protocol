/**
 * @apiDefine USER_COMMENT
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}     id
 * @apiSuccess {Object}     original_user       用户对象
 * @apiSuccess {String}     detail              内容
 * @apiSuccess {Timestamp}  created_at          新增时间
 * @apiSuccess {Number}     has_liked_number    被赞数量
 * @apiSuccess {boolean}    is_cur_user_liked   是否被当前用户点赞
 */

/**
 * @api {get} /comments 获取评论列表
 * @apiVersion 0.1.0
 * @apiName GetComments
 * @apiGroup UserComment
 * @apiPermission none
 *
 * @apiDescription 获取主题（文章、活动、文化场馆、视频、音乐）的评论列表
 *
 * @apiHeader   {String}                                        [Authorization]        用户唯一访问密钥
 * @apiParam    {Number}                                        page                   当前页数
 * @apiParam    {Number}                                        per_page               每页显示的数量
 * @apiParam    {Enum=article,activity,stadium,video,music}     q[commentable_type]    主题类型（文章、活动、文化场馆、视频、音乐）
 * @apiParam    {Number}                                        q[commentable_id]      主题ID
 *
 * @apiParam    (热门评论) {Number}                                         page                        当前页数
 * @apiParam    (热门评论) {Number}                                         per_page                    每页显示的数量
 * @apiParam    (热门评论) {Enum=article,activity,stadium,video,music}      q[commentable_type]         主题类型（文章、活动、文化场馆、视频、音乐）
 * @apiParam    (热门评论) {Number}                                         q[commentable_id]           主题ID
 * @apiParam    (热门评论) {Number=asc,desc}                                s[has_liked_number]=desc    被赞数量
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/comments?q[commentable_type]=article&q[commentable_id]=1&page=1&per_page=10
 *
 * @apiUse USER_COMMENT
 * @apiUse BadRequestError
 */
function GetComments() { return; }

/**
 * @api {get} /user/comments 获取用户的评论列表
 * @apiVersion 0.1.0
 * @apiName GetUserComments
 * @apiGroup UserComment
 * @apiPermission CurUser
 *
 * @apiDescription 获取用户对主题（文章、活动、文化场馆、视频、音乐）评论的列表
 *
 * @apiHeader   {String}                                 Authorization          用户唯一访问密钥
 * @apiParam    {Number}                                 page                   当前页数
 * @apiParam    {Number}                                 per_page               每页显示的数量
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/comments?q[commentable_type]=article&q[commentable_id]=1&page=1&per_page=10
 *
 * @apiUse USER_COMMENT
 * @apiUse BadRequestError
 */
function GetUserComments() { return; }

/**
 * @api {post} /user/comment 用户对主题评论
 * @apiVersion 0.1.0
 * @apiName PostUserComment
 * @apiGroup UserComment
 * @apiPermission CurUser
 *
 * @apiDescription 用户对主题（文章、活动、文化场馆、视频、音乐）进行评论
 *
 * @apiHeader   {String}                                    Authorization       用户唯一访问密钥
 * @apiParam    {Enum=article,activity,stadium,video,music} commentable_type    主题类型（文章、活动、文化场馆、视频、音乐）
 * @apiParam    {Number}                                    commentable_id      主题ID
 * @apiParam    {String}                                    details             内容
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/comment?commentable_type=article&commentable_id=1
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function PostUserComment() { return; }