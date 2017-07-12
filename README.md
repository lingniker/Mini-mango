# 项目名称：Mini-mango问答系统
## 功能简介：
* 实现登录（需要后台验证）和注册功能
* 主页面有问题列表（问题排序可根据发布时间，浏览次数排序）
* 提问页面（需要设置悬赏）
* 回答页面
* 用户个人信息页面
## 小组成员及任务分配
姓名 | 任务 | 职务 | 备注
-----|------|-----|-----
凌远平 | 个人信息页面 | 首席执行官 |CEO|
刘增印 | 提问页面 | 首席运营官 |COO|
赵宏 | 回答页面 | 首席信息官 |CIO|
黄文倩 | header和footer两部分 | 首席财务官 |CFO|
肖金红 | 主页面 | 首席财务官 |CFO|
邵旭 | 登录注册页面以及辅助其他组员的页面设计 | 首席技术官 |CTO|
林小龙 | 搭建后台环境以及数据库设计 | 首席技术官 |CTO|
## 数据库设计
#### 用户信息集合(users)
| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 |
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 |
| 账号 | phone | String | 是 |  | 唯一，手机号 |
| 昵称 | nick | String | 是 |  |  |
| 密码 | password | String | 是 |  |  |
| 被点赞数 | likes | Number | 否 | 0 |  |
| 被关注数 | focus | Number | 否 | 0 |  |
| 关注列表 | focuslist | Array | 否 | [] | 关注用户的_id |
| 关注的标签 | tagfocuslist | Array | 否 | [] | ['php'] |
| 被举报次数 | bads | Number | 否 | 0 |  |
| 关注的问题 | issuesf | Array | 否 | [] | 问题的_id |
| 收藏的问题 | issuesc | Array | 否 | [] | 问题的_id |
| 回答过的问题 | issuesr | Array | 否 | [] | 问题的_id |
| 个人信息 | info | Object | 否 | {} | {address:,school:,company:,website:,des:''} |
| 个人账户余额 | balance | Number | 否 | 1000 |  |
| 主页浏览次数 | times | Number | 否 | 0 |  |
| 参与社区互动 | bbs | Object | 否 | {} | 如:{php:3} |
| 创建时间 | ctime | Date | 是 |  | 在注册成功时写入 |
| 最近登录时间 | ltime | Date | 是 |  | 在登录成功时写入 |
#### 问题集合(questions)
| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 |
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 |
| 标题 | title | String | 是 |  |  |
| 内容 | content | String | 是 |  |  |
| 问题标签 | tags | Array | 是 | [] |  |
| 发布人 | puber | Array | 是 | [] | 存入发布人_id nick |
| 发布时间 | ctime | Date | 是 |  |  |
| 问题悬赏 | offered | Number | 是 | 0 | 发布问题时存入 |
| 最近回答用户 | ansuser | Array | 否 | [] | 最近回答用户_id nick time |
| 最近操作时间 | ltime | Date | 是 |  | 最近的操作时间 |
| 投票数 | votes | Number | 否 | 0 |  |
| 回答数 | answers | Number | 否 | 0 |  |
| 浏览数 | scans | Number | 否 | 0 |  |
| 关注数 | focus | Number | 否 | 0 |  |
| 收藏数 | collects | Number | 否 | 0 |  |
| 是否解决 | issolve | Boolean | 否 | false |  |

#### 回答集合(answers)
| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 |
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 |
| 问题ID | issuesid | String | 是 |  |  |
| 回答内容 | content | String | 是 |  |  |
| 回答时间 | ctime | Number | 是 |  |  |
| 回答用户 | ansuser | Array | 是 | [] | 用户_id nick |
| 被评论数 | comments | Number | 否 | 0 |  |
| 有价值数 | likes | Number | 否 | 0 |  |
| 无价值数 | unlikes | Number | 否 | 0 |  |
| 是否被采纳 | isaccept | Boolean | 否 | false |  |
#### 标签集合(tags)
| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 |
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 |
| 标签名 | tag | String | 是 |  | 如javascript |
| 标签属性 | tagtags | Array | 否 | [] | ['前端开发','javascript开发'] |
| 关注量 | focus | Number | 否 | 0 |  |
| 描述 | des | String | 否 | "" |  |
## 技术支持
#### 前台技术
* HTML+ CSS3 + JS
* jquery
* bootstrap
#### 后台技术
* nodejs
* express
* ejs模板
* 其它node第三方库(body-parser,mongodb,mongoose,socket.io)
#### 数据库
* mongodb数据库
* 本地数据库url("mongodb://127.0.0.1:27017/Mango")
* 远程数据库url("mongodb://mango:1@ds155132.mlab.com:55132/mini-mango")
#### 前后端数据交互
* socket.io
* AJAX
