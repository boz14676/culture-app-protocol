/**
 * @apiDefine VIDEO
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess  {String}    id
 * @apiSuccess  {String}    name                    名称
 * @apiSuccess  {String}    thumbnail               缩略图
 * @apiSuccess  {String}    url                     视频地址
 * @apiSuccess  {Number}    has_commented_numbers   评论数量
 * @apiSuccess  {Number}    has_liked_numbers       点赞数量
 * @apiSuccess  {Boolean}   is_cur_user_liked       是否被当前用户点赞
 * @apiSuccess  {Boolean}   is_cur_user_collected   是否被当前用户收藏
 */

/**
 * @apiDefine MUSIC
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess  {String}    id
 * @apiSuccess  {String}    name                    名称
 * @apiSuccess  {String}    thumbnail               缩略图
 * @apiSuccess  {String}    url                     地址
 * @apiSuccess  {String}    singer_name             歌手名称
 * @apiSuccess  {String}    lenstening_numbers      观看次数
 * @apiSuccess  {Number}    has_commented_numbers   评论数量
 * @apiSuccess  {Number}    has_liked_numbers       点赞数量
 * @apiSuccess  {Boolean}   is_cur_user_liked       是否被当前用户点赞
 * @apiSuccess  {Boolean}   is_cur_user_collected   是否被当前用户收藏
 */


/**
 * @api {get} /musics 获取音乐列表
 * @apiVersion 0.1.0
 * @apiName GetMusics
 * @apiGroup Media
 * @apiPermission none
 *
 * @apiDescription 获取音乐列表
 *
 * @apiHeader   {String}                        [Authorization]       用户唯一访问密钥
 * @apiParam    {Number}                        page                当前页数
 * @apiParam    {Number}                        per_page=10         每页显示的数量
 * @apiParam    {Enum=article_category,article} q[musicable_type]   主题类型（文章分类、文章）
 * @apiParam    {Number}                        q[musicable_id]     主题ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/musics?q[musicable_type]=article_category&q[musicable_id]=1&page=1&per_page=10
 *
 * @apiUser MUSIC
 * @apiUse BadRequestError
 */
function GetMusics() { return; }

/**
 * @api {get} /music 获取音乐详情
 * @apiVersion 0.1.0
 * @apiName GetMusic
 * @apiGroup Media
 * @apiPermission none
 *
 * @apiDescription 获取音乐详情
 *
 * @apiHeader   {String}    [Authorization] 用户唯一访问密钥
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/music/1
 *
 * @apiUser MUSIC
 * @apiSuccess  {Number}    prev_id 上一个音乐对象ID
 * @apiSuccess  {Number}    next_id 下一个音乐对象ID
 *
 * @apiUse BadRequestError
 */
function GetMusic() { return; }

/**
 * @api {get} /videos 获取视频列表
 * @apiVersion 0.1.0
 * @apiName GetVideos
 * @apiGroup Media
 * @apiPermission none
 *
 * @apiDescription 获取视频列表
 *
 * @apiHeader   {String}                                [Authorization]       用户唯一访问密钥
 * @apiParam    {Number}                                page                当前页数
 * @apiParam    {Number}                                per_page=10         每页显示的数量
 * @apiParam    {Enum=article_category,article,stadium} q[videoable_type]   主题类型（文章分类、文章、文化场馆）
 * @apiParam    {Number}                                q[videoable_id]     主题ID
 *
 * @apiExample Example usage:
 * curl -i http://localhost/videos?q[videoable_type]=article_category&q[videoable_id]=15&page=1&per_page=10
 *
 * @apiUse VIDEO
 * @apiUse BadRequestError
 */
function GetVideos() { return; }

/**
 * @api {get} /video/:id 获取视频详情
 * @apiVersion 0.1.0
 * @apiName GetVideo
 * @apiGroup Media
 * @apiPermission none
 *
 * @apiDescription 获取视频详情
 *
 * @apiHeader   {String}    [Authorization]   用户唯一访问密钥
 *
 * @apiExample Example usage:
 * curl -i http://localhost/video/1
 *
 * @apiUse VIDEO
 * @apiSuccess  {Number}    prev_id 上一个视频对象ID
 * @apiSuccess  {Number}    next_id 下一个视频对象ID
 *
 * @apiUse BadRequestError
 */
function GetVideo() { return; }


/**
 * @api {get} /photos 获取图片列表
 * @apiVersion 0.1.0
 * @apiName GetPhotos
 * @apiGroup Media
 * @apiPermission none
 *
 * @apiDescription 获取图片列表
 *
 * @apiParam {Number}               page                当前页数
 * @apiParam {Number}               per_page=10         每页显示的数量
 * @apiParam {Enum=article,stadium} q[imageable_type]   主题类型（文章、文化场馆）
 * @apiParam {Number}               q[imageable_id]     主题ID
 *
 * @apiSuccess {String} id
 * @apiSuccess {String} name        名称
 * @apiSuccess {String} url         图片地址
 * @apiSuccess {String} url.thumb   缩略图
 * @apiSuccess {String} url.large   原图
 *
 * @apiExample Example usage:
 * curl -i http://localhost/videos?q[imageable_type]=article_category&q[imageable_id]=1&page=1&per_page=10
 *
 * @apiUse BadRequestError
 */
function GetPhotos() { return; }