#!/bin/sh
git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "s_liaowenjiang@wps.cn" ];
        then
                GIT_AUTHOR_NAME="wenjiang";
                GIT_AUTHOR_EMAIL="fireworksman@163.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
