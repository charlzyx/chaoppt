# .zshrc

```bash
# Chao's ZSH
# --------------------------------------------------------------------------
# MIRRORS
# --------------------------------------------------------------------------

# -- for node

# --------------------------------------------------------------------------
# PATH, ENV
# --------------------------------------------------------------------------
# -- go
# export GO_HOME=/usr/local/go
# export GOPATH=$HOME/go
# export GO111MODULE=on
# export PATH=$GO_HOME/bin:$PATH
# -- java
# export JAVA_HOME=$(/usr/libexec/java_home -v 11);
# export CLASSPATH=.:$JAVA_HOME/libn/dt.jar:$JAVA_HOME/lib/tools.jar;
# export MAVEN_HOME=$HOME/Library/maven;
# export PATH=$JAVA_HOME/bin:$PATH
# android
# export ANDROID_HOME=$HOME/Library/Android/sdk;
# export PATH=$ANDROID_HOME:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH

# --------------------------------------------------------------------------
# ZSH CONFIG
# See https://github.com/ohmyzsh/ohmyzsh/blob/master/templates/zshrc.zsh-template
# --------------------------------------------------------------------------

export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="candy"
zstyle ':omz:update' mode auto
ENABLE_CORRECTION="false"
DISABLE_UNTRACKED_FILES_DIRTY="true"
HIST_STAMPS="yyyy/mm/dd"
plugins=(
  # ga, gc....
  git
  # quick cd
  z
  # cp with progress bar
  cp
  # history only in current dir
  per-directory-history
  # tip for not found commond
  # command-not-found
  safe-paste
  vi-mode
  # search history: by  cmd+P, cmd+N
)

bindkey '^P' history-substring-search-up
bindkey '^N' history-substring-search-down

source $ZSH/oh-my-zsh.sh

# --------------------------------------------------------------------------
# SSH
# --------------------------------------------------------------------------

# --------------------------------------------------------------------------
# ALIAS
# --------------------------------------------------------------------------

alias vi="code-insiders"
alias vim="nvim"
alias ip="ipconfig getifaddr en0"
alias ssr="export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=http://127.0.0.1:7890"
alias nossr="export https_proxy= http_proxy= all_proxy="
# node cli alias replace plugins git alias for git commit, by npm install git-cz
alias gc="git cz"
alias live="browser-sync start --server"
```
