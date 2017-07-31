
'use strict';

var DEFAULT_INTERVAL = 1000 / 60;

// 初始化状态
var STATE_INITIAL = 0;
// 开始状态
var STATE_START = 1;
// 停止状态
var STATE_STOP = 2;

/**
 * raf
 */
var requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, callback.interval || DEFAULT_INTERVAL);
        };
})();

var cancelAnimationFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        function (id) {
            return window.clearTimeout(id);
        };
})();

/**
 * Timeline 时间轴类
 * @constructor
 */
function Timeline() {

};

/**
 * 时间轴上每一次回调执行的函数
 * @param time 从动画开始到当前执行的时间
 */
Timeline.prototype.onenterframe = function (time) {

};

/**
 * 动画开始
 * @param interval 每一次回调的间隔时间
 */
Timeline.prototype.start = function (interval) {
    if (this.state === STATE_START)
        return;
    this.state = STATE_START;

    this.interval = interval || DEFAULT_INTERVAL;
    // +new Date()比new Date().getTime()性能稍好
    startTimeline(this, +new Date());
};

/**
 * 动画停止
 */
Timeline.prototype.stop = function () {

};

/**
 * 重新开始动画
 */
Timeline.prototype.restart = function () {

};

/**
 * 时间轴动画启动函数
 * @param timeline 时间轴的实例
 * @param startTime 动画开始时间戳
 */
function startTimeline(timeline, startTime) {

    timeline.startTime = startTime;
    nextTick.interval = time.interval;

    // 记录上一次回调的时间戳
    var lastTick = +new Date();
    /**
     * 每一帧执行的函数
     */
    function nextTick() {

    }
}