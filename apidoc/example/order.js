/**
 * @apiDefine ORDER
 *
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}                         id
 * @apiSuccess {Number}                         serial_number           订单编号
 * @apiSuccess {Enum=-1,0,1,2,3,4}              status                  订单状态（已取消、等待支付、已支付、退款中、退款成功、退款失败）
 * @apiSuccess {Decimal}                        goods_price             商品单价
 * @apiSuccess {Number}                         goods_numbers           商品数量
 * @apiSuccess {Decimal}                        amount                  订单总金额
 * @apiSuccess {String}                         pay_serial_number       第三方交易编号
 * @apiSuccess {Enum=alipay.app,wxpay.app}      payment_type            支付方式（支付宝App支付、微信App支付）
 * @apiSuccess {Number}                         expire_time             过期的时间戳（下单操作中存在）
 * @apiSuccess {Timestamp}                      paid_at                 支付时间
 * @apiSuccess {Timestamp}                      created_at              下单时间
 * @apiSuccess {String}                         booking_person_name     预约人姓名
 * @apiSuccess {String}                         booking_person_mobile   预约人电话
 * @apiSuccess {Object}                         original_activity       活动对象
 */

/**
 * @api {get} /user/orders 获取订单列表
 * @apiVersion 0.1.0
 * @apiName GetUserOrders
 * @apiGroup Order
 * @apiPermission none
 *
 * @apiDescription 获取用户的订单列表
 *
 * @apiHeader   {String}                        Authorization   用户唯一访问密钥
 * @apiParam    {Number}                        page            当前页数
 * @apiParam    {Number}                        per_page=10     每页显示的数量题ID
 * @apiParam    {Enum=1,2,3}                    [status]        订单状态（已取消、等待支付、已支付）
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/orders?page=1&per_page=10
 *
 * @apiUse ORDER
 * @apiUse BadRequestError
 */
function GetUserOrders() { return; }


/**
 * @api {get} /user/order/:id 获取订单详情
 * @apiVersion 0.1.0
 * @apiName GetUserOrder
 * @apiGroup Order
 * @apiPermission none
 *
 * @apiDescription 获取用户的订单列表
 *
 * @apiHeader   {String}    Authorization   用户唯一访问密钥
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/orders?page=1&per_page=10
 *
 * @apiUse ORDER
 * @apiUse BadRequestError
 */
function GetUserOrder() { return; }

/**
 * @api {delete} /user/order/:id 取消订单
 * @apiVersion 0.1.0
 * @apiName DeleteOrder
 * @apiGroup Order
 * @apiPermission CurUser
 *
 * @apiDescription 取消订单
 *
 * @apiHeader   {String}    Authorization   用户唯一访问密钥
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/order/1
 *
 * @apiUse ORDER
 * @apiUse BadRequestError
 */
function DeleteOrder() { return; }