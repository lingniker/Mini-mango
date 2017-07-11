## git 使用时需要注意的几点
1. 远程提交时需要和组长协商，经过组长同意后方可提交;
2. 远程提交之前必须先进行git pull 指令,调试后确认没有问题再进行远程提交;
3. 远程提交之前需要查看当前的状态，看分支是否干净，确认已经本地提交过了再进行远程提交;

## 相关指令集合
* 链接远程github源
> git remote add origin https://github.com/lingniker/Mini-mango.git
* 将本地分支与服务器分支链接（本地必须有master）
> git branch --set-upstream-to=origin/master master
* 将源拉到本地
> git pull
* git提交到网站上
> git push -u origin master
* 忽略文件
> .gitignore
*  创建可执行文件
> gcc holle.c
* 查看提交
> git log
* 查看提交
> git reflog 
* 版本回退
> git rest --hard  as54646asda6s4da6sd4as56sdasd56
*   添加到库里
> git add .
* 提交（只有执行git add 的文件才能提交到仓库里）
> git commit 
* 删除文件名
> git rm <文件名>
* 恢复文件（但只有提交的文件 才可以恢复）
> git checkout  <文件名>

