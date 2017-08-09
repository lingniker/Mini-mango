# Mango-app的相关API介绍(本地服务器)
##  用户信息相关API
1. 获取用户信息列表(get)
```
https://mango.cnstu.top/api/userslist
```
2. 登录判断API(post)
```
https://mango.cnstu.top/api/login
```
返回的数据类型：
```
{
  data1:boolen;
  nick:strting;//昵称是否存在的提示
  pw:string;//密码是否正确的提示
}
```
3. 用户信息注册(post)
```
https://mango.cnstu.top/api/register
```
返回的数据类型：
```
{
  data1:boolen;
  hint:strting;//昵称或手机号是否被注册的提示
}
```
## 问题相关API
1. 获取问题列表(get)
```
https://mango.cnstu.top/api/questionslist
```

## 回答相关API
1. 获取回答列表(get)
```
https://mango.cnstu.top/api/answerslist
```

## 标签相关API
1. 获取回答列表(get)
```
https://mango.cnstu.top/api/tagslist
```
## 注意
#### 其他未说明返回数据类型均如下所示：
```
返回的数据类型是个对象，别掉坑里了！
{
   datas:[.......]
}

```
