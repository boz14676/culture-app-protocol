// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine RequestSuccess
 * @apiVersion 0.1.0
 *
 * @apiError error_codes   错误代码
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error_code": 0,
 *     }
 */

// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine BadRequestError
 * @apiVersion 0.1.0
 *
 * @apiError error_code 错误代码
 * @apiError error_desc 错误描述
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error_code": 400,
 *       "error_desc": "",
 *     }
 */

// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine general 通用
 * 登录用户与游客均可访问
 *
 * @apiVersion 0.1.0
 */

// ------------------------------------------------------------------------------------------
// Define for Models.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine ArticleCategory
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number} showing_type_list   文章列表展示类型
 * @apiSuccess {Number} showing_type_infor  文章详情展示类型
 * @apiSuccess {String} name                名称
 * @apiSuccess {String} icon                图标
 * @apiSuccess {String} banner              banner
 * @apiSuccess {String} desc                简介
 *
 */

/**
 * @apiDefine Article
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} article_category_id         所属文章分类ID
 * @apiSuccess {Object} original_article_category   所属文章分类对象
 * @apiSuccess {String} name                        名称（包含：姓名）
 * @apiSuccess {String} thumbnail                   缩略图（包含：大师头像）
 * @apiSuccess {String} banner                      banner（包含：背景图）
 * @apiSuccess {String} labels                      标签
 * @apiSuccess {String} lat                         坐标精度
 * @apiSuccess {String} lng                         坐标纬度
 * @apiSuccess {String} address                     位置
 * @apiSuccess {String} desc                        用于：内容描述、专题简介、内容年代、主题、个人简介
 * @apiSuccess {Timestamp} client_timed_at          时间
 * @apiSuccess {Boolean} has_videos                 是否有视频
 * @apiSuccess {Boolean} has_photos                 是否有视频
 * @apiSuccess {String} details                     内容
 * @apiSuccess {Mixed}  extra                       扩展字段
 * @apiSuccess {Number} has_commented_numbers       评论数量
 * @apiSuccess {Number} has_liked_numbers           点赞数量
 * @apiSuccess {Number} has_read_numbers            阅读数量
 *
 */



// ------------------------------------------------------------------------------------------
// History.
// ------------------------------------------------------------------------------------------
