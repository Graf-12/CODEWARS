function bouncingBall(h,  bounce,  window) {
    let bounces = -1
    if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
        while (h > window) {
            h = h * bounce
            bounces += 2
        }
    }
    return bounces
}
