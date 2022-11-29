let obj = JSON.parse($response.body);

obj = {
  "message": "请求成功",
  "data": [
  ],
  "code": 20000
}
$done({body: JSON.stringify(obj)});
