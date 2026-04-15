# Linux / Git 命令速查

## 最重要的习惯

当你不知道自己当前状态时，优先执行：

```bash
pwd
ls -la
which python
which pip
git status
```

## Linux 基础命令

### 看当前位置

```bash
pwd
```

### 看当前目录内容

```bash
ls
ls -la
```

### 切换目录

```bash
cd ~
cd ~/projects
cd ..
```

### 创建目录

```bash
mkdir -p ~/projects
```

### 看文件内容

```bash
cat README.md
```

### 复制、移动、删除

```bash
cp old.txt new.txt
mv old.txt new.txt
rm file.txt
```

提醒：

`rm` 没有回收站，不确定时不要乱删。

### 看命令帮助

```bash
git --help
pip --help
conda --help
```

## `apt` / `brew` 速查

### Ubuntu / WSL

```bash
sudo apt update
sudo apt install -y git curl wget
sudo apt remove git
apt search python
```

### macOS

```bash
brew install git
brew update
brew upgrade
```

## Conda 速查

### 查看已有环境

```bash
conda env list
```

### 创建环境

```bash
conda create -n workshop-demo python=3.11 -y
```

### 激活环境

```bash
conda activate workshop-demo
```

### 退出环境

```bash
conda deactivate
```

### 删除环境

```bash
conda remove -n workshop-demo --all -y
```

### 看当前 `python` / `pip` 指向哪里

```bash
which python
which pip
python --version
```

## pip 速查

### 升级 pip

```bash
python -m pip install --upgrade pip
```

### 按项目清单安装

```bash
pip install -r requirements.txt
```

### 查看已安装包

```bash
pip list
pip show streamlit
```

### 查看当前配置

```bash
pip config list
```

### 导出当前环境

```bash
pip freeze > requirements-lock.txt
```

## Git 的四层工作流

先把这个画面记住：

1. 工作区：你正在改的文件
2. 暂存区：你选中准备提交的改动
3. 本地仓库：已经 commit 的历史
4. 远程仓库：GitHub 上的版本

对应的核心命令是：

```bash
git add .
git commit -m "message"
git push
```

重点：

- `add` 不是提交
- `commit` 还只是本地
- `push` 才会到远程

## Git 最常用命令

### 仓库初始化和克隆

```bash
git init
git clone <repo-url>
```

### 看状态

```bash
git status
```

### 看历史

```bash
git log --oneline --graph --decorate -5
```

### 看改动

```bash
git diff
git diff --staged
```

### 选择改动

```bash
git add main.py
git add .
```

### 提交

```bash
git commit -m "write a clear message"
```

### 看远程

```bash
git remote -v
```

### 拉取和推送

```bash
git pull
git push
```

## Git 分支命令

### 看分支

```bash
git branch
```

### 新建并切换分支

```bash
git checkout -b my-change
```

或：

```bash
git switch -c my-change
```

### 切回主分支

```bash
git checkout main
```

或：

```bash
git switch main
```

## Git 进阶但常见的命令

这些命令真实工程里很常见，但不要在没理解前乱用。

### `git stash`

临时收起未完成改动：

```bash
git stash
git stash list
git stash pop
```

### `git cherry-pick`

只拿某一个提交过来：

```bash
git cherry-pick <commit-id>
```

### `git rebase`

整理历史，让当前分支接到新的基线上：

```bash
git rebase main
```

提醒：

`rebase` 会改写历史。公共分支不要乱做。

### `git revert`

新增一个“反向提交”，适合公共历史：

```bash
git revert <commit-id>
```

### `git reset`

撤回本地历史：

```bash
git reset --soft HEAD~1
git reset HEAD~1
```

强提醒：

```bash
git reset --hard HEAD~1
```

会直接丢掉工作区改动，不要在没搞清楚前照抄。

## Git Example

```bash
git clone <repo-url>
cd <repo-dir>
git status
git diff
git add .
git commit -m "my first commit"
git log --oneline --graph --decorate -5
```

## 常见误区

### 误区 1：`commit` 了就等于 GitHub 上有了

不对。`commit` 是本地，`push` 才是远程。

### 误区 2：不会 Git 就先乱 `reset --hard`

不对。很多改动是能恢复的，但你一旦 `--hard`，可能直接丢数据。

### 误区 3：遇事先背命令

更稳的方式是先看状态：

```bash
git status
```
