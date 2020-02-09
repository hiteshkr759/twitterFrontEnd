export interface User {
    id?:number;
    id_str? : string;
    userName ?: string;
    name?:string;
    screen_name?:string;
    description?:string;
    protected?:boolean;
    verified?:boolean;
    followers_count?:number;
    friends_count?:number;
    statuses_count?:number;
    profile_banner_url?:string;
    profile_image_url_https?:string;
    following?:Boolean;
}

export interface Post{
    id?: number;
    status?:string;
    media ?: boolean;
    mediaFile?:FileList;
    postdate?:Date;
    authorName?:string;
    authorScreenName?:string;
    authorAvatarUrl?:string;
}