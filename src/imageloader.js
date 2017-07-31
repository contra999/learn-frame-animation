
'use strict';

/**
 * 预加载图片函数
 * @param iamges 加载图片的数组或对象
 * @param callback 全部图片加载完毕后调用的回调函数
 * @param timeout 加载超时的时长
 */
function loadImage(iamges, callback, timeout) {
    // 加载完成图片的计数器
    var count = 0;
    // 全部图片加载成功的一个标志位
    var success = true;
    // 超时timer的id
    var timeoutId = 0;
    // 是否加载超时的标志位
    var isTimeout = false;

    // 对图片数组（或对象）进行遍历
    for(var key in images) {
        // 过滤prototype上的属性
        if(!images.hasOwnProperty(key)) {
            continue;
        }
        // 获得每个图片元素
        // 期望格式是个object: {src:xxx}
        var item = iamges[key];

        if (typeof item === 'string') {
            item = images[key] = {
                src: item
            };
        }

        // 如果格式不满足期望，则丢弃此条数据进行下一次遍历
        if (!item || !itme.src) {
            continue;
        }

        // 计数+1
        count++;
        // 设置图片元素的id
        item.id = '__img__' + key + getId();
    }
}

var __id = 0;
function getId () {
    return ++__id;
}

module.exports = loadImage;