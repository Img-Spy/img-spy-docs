// Play it on JsFiddle: http://jsfiddle.net/mc4eekcp/7
Rx.Observable
    .fromEvent(btn, "click")
    .scan(
        (info, i) => ({ curr: new Date(), last: info.curr }),
        { curr: new Date(), last: null } // Initial "info" value
    )
    .map((info) => (info.curr - info.last) / 1000)
    .subscribe(
        (diff) => text.innerHTML = diff + " seconds since last click"
    )
