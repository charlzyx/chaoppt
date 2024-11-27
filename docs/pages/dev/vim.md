# .vimrc

```bash
" ------------------------------------------------------------
" -- Layer base config --------------------------------------------
" ------------------------------------------------------------
"允许 Neovim 使用真正的 24 位颜色。
let $NVIM_TUI_ENABLE_TRUE_COLOR = 1
"设置 Vim 的领导键（mapleader）为空格。
let mapleader=' '
"高亮显示搜索结果
set hlsearch
"在编辑器中显示行号
set number
"设置滚动偏移量为 8
set scrolloff=8
"将制表符（Tab）转换为空格。
set expandtab
"设置制表符的宽度为 2 个空格。
set sw=2
"设置 Tab 键的宽度为 2 个空格。
set tabstop=2
"设置在插入模式下，Tab 键和退格键的行为，使其相当于 2 个空格。
set softtabstop=2
"启用 Vim 的模式，而不是传统的 vi 模式。
set nocompatible               " Be iMproved
"允许隐藏缓冲区而不是在离开时保存或放弃更改。
set hidden
"关闭备份文件的创建。
set nobackup
"关闭写入备份文件。
set nowritebackup
"设置命令行的高度为 2 行。
set cmdheight=2
"设置自动命令的更新时间间隔为 300 毫秒。
set updatetime=300
"改变信息性消息的显示方式，使它们更短。
set shortmess+=c

" ------------------------------------------------------------
" -- Layer key mapping ---------------------------------------
" ------------------------------------------------------------
" Vim Settings
"将可视模式下的 ? 映射为 *。
nnoremap ? *
"将可视模式下的 ? 映射为 *
vnoremap ? *
"将普通模式下的 * 映射为 ?
nnoremap * ?
"将可视模式下的 * 映射为 ?。
vnoremap * ?
"在普通模式下，U 被映射为撤销操作（Ctrl+R）。
nnoremap U <c-r>
"在可视模式下，v 被映射为退出可视模式（Esc）。
vnoremap v <esc>
"在普通模式下，Y 被映射为复制到系统剪贴板。
nnoremap Y "+y<cr>
"在可视模式下，Y 被映射为复制选中文本到系统剪贴板。
vnoremap Y "+y<cr>
"在普通模式下，P 被映射为粘贴系统剪贴板内容。
nnoremap P "+p<cr>
"在可视模式下，P 被映射为粘贴系统剪贴板内容。
vnoremap P "+p<cr>
"使用领导键加 w 执行窗口切换操作。
nnoremap <leader>w <c-w>
"使用领导键加 wd 执行退出当前窗口操作。
nnoremap <leader>wd :q<cr>
"使用领导键加 jj 列出所有的跳转点。
nnoremap <leader>jj :jumps<cr>
"使用领导键加 mm 列出所有的标记。
nnoremap <leader>mm :marks<cr>
```
