/*!
 * Copyright (c) https://github.com/lutinglt
 *
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

declare namespace NodeJS {
  interface ProcessEnv {
    /** 开发环境主题名称 */
    DEV_THEME?: string;
    /** 主题编译后上传的服务器地址 (通过 SCP 上传) */
    SSH_SERVER?: string;
    /** 主题编译后上传的服务器用户名 (不支持密码, 请确保有 SSH 免密登录) */
    SSH_USER?: string;
    /** 上传到服务器的主题目录 (请确保目录存在并使用绝对路径) */
    GITEA_THEME_PATH?: string;
    /** 上传到服务器的 Gitea 目录 (请使用绝对路径)
     * 用于上传模板, 翻译文件
     */
    GITEA_PATH?: string;
    /** 是否同步模板 */
    SYNC_TMPL?: string;
  }
}
