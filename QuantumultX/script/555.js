let obj = JSON.parse($response.body);

obj = {
  "message": "公告列表",
  "data": [
  ],
  "code": 20000
}
$done({body: JSON.stringify(obj)});
