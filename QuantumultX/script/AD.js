let obj = JSON.parse($response.body);

obj = {
  "msg": "广告列表",
  "data": [
  ],
  "code": 1
}
$done({body: JSON.stringify(obj)});
