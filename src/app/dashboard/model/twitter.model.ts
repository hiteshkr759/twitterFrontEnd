export interface User {
    id?:number;
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
}

export interface Post{
    id: number;
    message?:string;
    isMultiMedia ?: boolean;
    mediaUrl?:string;
    postdate?:Date;
    authorName?:string;
    authorScreenName?:string;
    authorAvatarUrl?:string;
}