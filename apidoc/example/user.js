/**
 * @apiDefine USER
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String}     nickname                        用户昵称
 * @apiSuccess {Enum=0,1,2} gender                          性别（未选择、男、女）
 * @apiSuccess {String}     signature                       个性签名
 * @apiSuccess {Url}        avatar                          用户头像
 * @apiSuccess {Number}     integral_quantities             积分
 * @apiSuccess {Boolean}    is_bind                         是否绑定
 * @apiSuccess {Enum=0,1,2} identification_status           认证状态（0、未提交申请；1、等待管理员审核；2、审核通过）
 * @apiSuccess {Array}      numbers_count                   数量集合统计
 * @apiSuccess {Number}     numbers_count.order             订单总数量
 * @apiSuccess {Number}     numbers_count.order_wait_pay    订单待支付数量
 * @apiSuccess {Number}     numbers_count.order_paid        订单已预订数量
 * @apiSuccess {Number}     numbers_count.order_refunded    订单已退款数量
 * @apiSuccess {Number}     numbers_count.enshrine          收藏数量
 * @apiSuccess {Number}     numbers_count.comment           评论数量
 * @apiSuccess {String}     token                           用户唯一访问密钥
 *
 */

/**
 * @api {post} /user/login 登录
 * @apiVersion 0.1.0
 * @apiName Login
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription 登录
 *
 * @apiParam {Number}   mobile      用户手机号
 * @apiParam {Number}   [password]  密码（当`code`不存在时，此字段为必填）
 * @apiParam {Number}   [code]      手机验证码（当`password`不存在时，此字段为必填）
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/login?mobile=18518093124&password=123456
 *
 * @apiUse USER
 * @apiUse BadRequestError
 */
function Login() { return; }

/**
 * @api {post} /user/login/social 第三方授权登录
 * @apiVersion 0.1.0
 * @apiName LoginSocial
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription 第三方授权登录
 *
 * @apiParam {Number=1,2,3} vendor  平台（微信、微博、QQ）
 *
 * @apiParam    (微信授权)  {Number=1,2,3} vendor=1 平台（微信、微博、QQ）
 * @apiParam    (微信授权)  {Number=1,2,3} code     CODE
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/login/social?vendor=<VENDOR>
 *
 * @apiUse USER
 * @apiUse BadRequestError
 */
function LoginSocial() { return; }

/**
 * @api {post} /user/code 发送验证码
 * @apiVersion 0.1.0
 * @apiName SendCode
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription 发送验证码
 *
 * @apiParam {Number}   mobile  用户手机号
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/code?mobile=18518093124
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function SendCode() { return; }

/**
 * @api {post} /user/register 注册
 * @apiVersion 0.1.0
 * @apiName Register
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription 注册
 *
 * @apiParam {Number}   mobile      用户手机号
 * @apiParam {Number}   password    密码
 * @apiParam {Number}   code        验证码
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/register?mobile=18518093124&password=123456&code=xxxxxx
 *
 * @apiUse USER
 * @apiUse BadRequestError
 */
function Register() { return; }

/**
 * @api {get} /user/check_original_password 验证原始密码
 * @apiVersion 0.1.0
 * @apiName CheckOriginalPassword
 * @apiGroup User
 * @apiPermission CurUser
 *
 * @apiDescription 验证原始密码
 *
 * @apiHeader   {String}    Authorization       用户唯一访问密钥
 * @apiParam    {String}    original_password   原始密码
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/check_original_password?original_password=123456
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function CheckOriginalPassword() { return; }

/**
 * @api {put} /user/password 修改密码
 * @apiVersion 0.1.0
 * @apiName PutPaswword
 * @apiGroup User
 * @apiPermission CurUser
 *
 * @apiDescription 修改密码
 *
 * @apiHeader   {String}    Authorization       用户唯一访问密钥
 * @apiParam    {String}    password            新密码
 * @apiParam    {String}    repeat_password     重复新密码
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/password?password=123456&repeat_password=123456
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function PutPaswword() { return; }

/**
 * @api {put} /user/profile 修改用户资料
 * @apiVersion 0.1.0
 * @apiName PutUserProfile
 * @apiGroup User
 * @apiPermission CurUser
 *
 * @apiDescription 修改用户资料
 *
 * @apiHeader   {String}        Authorization   用户唯一访问密钥
 * @apiParam    {String}        nickname        昵称
 * @apiParam    {Enum=1,2}      gender          性别
 * @apiParam    {File}          avatar          头像
 * @apiParam    {Stirng}        signature       个性签名
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/profile
 *
 * @apiUse RequestSuccess
 * @apiUse BadRequestError
 */
function PutUserProfile() { return; }

/**
 * @api {post} /user/identification 提交实名认证
 * @apiVersion 0.1.0
 * @apiName PutIdentification
 * @apiGroup User
 * @apiPermission CurUser
 *
 * @apiDescription 提交实名认证
 *
 * @apiHeader   {String}    Authorization   用户唯一访问密钥
 * @apiParam    {String}    name            名称
 * @apiParam    {Number}    id_number       身份证ID
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/identification?name=Taylor&id_number=xxxxxxxxx
 *
 *
 * @apiUse BadRequestError
 */
function PutIdentification() { return; }

/**
 * @api {post} /user/feedback 意见反馈
 * @apiVersion 0.1.0
 * @apiName PostFeedback
 * @apiGroup User
 * @apiPermission CurUser
 *
 * @apiDescription 意见反馈
 *
 * @apiHeader   {String}    Authorization   用户唯一访问密钥
 * @apiParam    {String}    details         内容
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/feedback?details=xxxxx
 *
 *
 * @apiUse BadRequestError
 */
function PostFeedback() { return; }

/**
 * @api {get} /integral_tasks 获取积分任务
 * @apiVersion 0.1.0
 * @apiName GetIntegralTasks
 * @apiGroup User
 * @apiPermission CurUser
 *
 * @apiDescription 获取积分任务
 *
 * @apiHeader   {String}    Authorization   用户唯一访问密钥
 *
 * @apiExample Example usage:
 * curl -i http://localhost/integral_tasks
 *
 * @apiSuccess {Number}     id
 * @apiSuccess {String}     name        名称
 * @apiSuccess {Enum=1,2}   type        任务类型（首次、每日）
 * @apiSuccess {Number}     quantities  积分量
 *
 * @apiUse BadRequestError
 */
function GetIntegralTasks() { return; }

/**
 * @api {get} /user/integrals 获取用户的积分明细
 * @apiVersion 0.1.0
 * @apiName GetUserIntegrals
 * @apiGroup User
 * @apiPermission CurUser
 *
 * @apiDescription 获取用户的积分明细
 *
 * @apiHeader   {String}    Authorization   用户唯一访问密钥
 * @apiParam    {Number}    page            当前页数
 * @apiParam    {Number}    per_page=10     每页显示的数量
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/integrals
 *
 * @apiSuccess {Number}     id
 * @apiSuccess {String}     name        名称
 * @apiSuccess {String}     quantities  积分量
 * @apiSuccess {Timestamp}  created_at  增加积分时间
 *
 * @apiUse BadRequestError
 */
function GetUserIntegrals() { return; }