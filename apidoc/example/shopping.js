/**
 * @api {post} /shopping/orders 下单（预约）
 * @apiVersion 0.1.0
 * @apiName PostOrder
 * @apiGroup Shopping
 * @apiPermission none
 *
 * @apiDescription 预约活动
 *
 * @apiHeader   {String}    Authorization                   用户唯一访问密钥
 * @apiParam    {Number}    goods_id                        商品（活动）ID
 * @apiParam    {Number}    goods_numbers                   商品（活动）数量
 * @apiParam    {String}    extra[booking_person_name]      预约人姓名
 * @apiParam    {String}    extra[booking_person_mobile]    预约人手机号
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/shopping/orders?goods_id=1&goods_numbers=2&extra[booking_person_name]=Taylor&extra[booking_person_mobile]=185****3124
 *
 * @apiUse ORDER
 * @apiUse BadRequestError
 */
function PostOrder() { return; }

/**
 * @api {post} /shopping/pays 支付
 * @apiVersion 0.1.0
 * @apiName PostPays
 * @apiGroup Shopping
 * @apiPermission none
 *
 * @apiDescription 支付预约的活动
 *
 * @apiHeader   {String}                    Authorization   用户唯一访问密钥
 * @apiParam    {Number}                    order_id        订单ID
 * @apiParam    {Enum=alipay.app,wxpay.app} payment_type    支付方式（支付宝App支付、微信App支付）
 * @apiParam    {String}                    [openid]        OPENID（当`payment_type`为`wxpay.app`时此字段为必填）
 * @apiParam    {String}                    [referer_url]   回调跳转URL（当`payment_type`为`alipay.app`时此字段为必填）
 *
 * @apiSuccess {Enum=alipay.app,wxpay.app} payment_type 支付方式（支付宝App支付、微信App支付）
 * @apiSuccess {Object} [weipay]                微信App支付结构体（当`payment_type`为`wxpay.app`时此字段存在）
 * @apiSuccess {object} weipay.config_data      返回支付配置
 * @apiSuccess {String} weipay.openid_needed    是否需要openid
 * @apiSuccess {Object} [alipay]                支付宝App支付结构体（当`payment_type`为`alipay.app`时此字段存在）
 * @apiSuccess {object} alipay.html             支付宝返回的HTML页面
 *
 * @apiUse BadRequestError
 */
function PostPays() { return; }