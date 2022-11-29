let obj = JSON.parse($response.body);
obj = {
  {
  "msg" : "app配置",
  "data" : {
    "share_config" : {
      "app_invite_code_show" : "1",
      "app_share_img" : "https://sf1-scmcdn-tos.pstatp.com/obj/ad-tetris-site/file/1645033070725/88d45f7c59caa14fced50374e11917fc",
      "video_share_mode" : "1",
      "download_url" : "https://azx.me/",
      "share_link_content" : "",
      "video_url_template" : ""
    },
    "find_config" : {
      "title" : "",
      "url" : ""
    },
    "history_config" : {
      "type" : "null"
    },
    "contact_config" : {
      "prefix" : "",
      "text" : "",
      "link" : ""
    },
    "ck_config" : {
      "real_app_url" : null
    },
    "dm_config" : {
      "type" : "1",
      "external_api" : "",
      "external_type" : "1"
    },
    "advert_config" : {
      "config_start" : "1",
      "advert_sdk_open" : "0",
      "config_vip_advert" : "0",
      "config_mine_info" : "0",
      "config_video_close_advert_hour" : "0",
      "config_video_start" : "0",
      "config_search" : "0",
      "config_leave_msg" : "0",
      "config_video_start_day_num" : "0",
      "advert_sdk_app_id" : "0",
      "config_video_close_advert" : "0",
      "config_video_pause" : "0",
      "config_video_download" : "0",
      "config_urge" : "0",
      "config_video_info" : "0",
      "config_index_alert" : "0"
    },
    "modules_config" : {
      "find" : "on",
      "weekday" : null,
      "download" : "on",
      "push_screen" : "on",
      "rank" : "on",
      "vip" : "on",
      "topic" : "on",
      "share" : "on",
      "urge" : "on"
    },
    "img_config" : {
      "splash_img" : "https://mgtv-bbqn.oss-cn-beijing.aliyuncs.com/3/22030417202216D5902FA5F85F30A2245E0DAAAAFMjky/AUtzn30.png?ext=.gif",
      "portrait_img_loading_default" : "https://mgtv-bbqn.oss-cn-beijing.aliyuncs.com/3/220304175126B496B6DF19E25DCB85494B021010BNjEz/B1k4Kj0.png?ext=.gif",
      "rank_img" : "https://ugc.hitv.com/3/220411110620B496B6DF19E25DCB85494B021010BNjEz/X3TEs40.png",
      "landscape_img_loading_default" : "https://mgtv-bbqn.oss-cn-beijing.aliyuncs.com/3/220304180306B496B6DF19E25DCB85494B021010BNjEz/D0nFZ80.png?ext=.gif"
    },
    "reg_type" : "3",
    "pay_config" : {
      "pay_card_type" : "3",
      "pay_type" : "1",
      "pay_list" : "",
      "card_url" : null,
      "pay_platform" : "",
      "money_unit" : "元",
      "money_name" : "余额"
    },
    "parse_config" : {
      "enable" : "0"
    }
  },
  "code" : 1
}
$done({body: JSON.stringify(obj)});
