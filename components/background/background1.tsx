// 这个默认是用在黑色背景下面的

export function Background() {
  return (
    <>
      {/* absolute inset-0 实现铺满屏幕，pointer-events-none 让鼠标选不中这个元素，overflow-hidden 则表示多余的全裁切掉 */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        // 这里我手动将背景设置为黑色，这样才能看到效果
        style={{ background: "#0f1115" }}
      >
        {/* absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 通过这些计算将元素的中心点设置到 x=50%, y=25% 的位置 */}
        {/* 这里说明他是怎么计算的，先看 top-1/4，他将元素顶部空出 25% 的空间，然后配合 -translate-y-1/2 将元素向上移动一半的自身高度，这样就实现了将中心点设置到 top-1/4 的位置 */}
        {/* left-1/2 则是先向右移动了 50%，左边的 50% 空出来，然后再 -translate-x-1/2 将元素一半的宽度移动回来，这样就实现了将中心点设置到 left-1/2 的位置 */}
        {/* bg-accent/5 是这个色块的颜色，rounded-full 是将其变成圆形，blur-[120px] 是打上高斯模糊 */}
        <div className="absolute top-1/4 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00e599]/5 blur-[120px]" />
        {/* 这里实现方式类似，最终加上了高斯模糊，这里是紫色 */}
        <div className="absolute right-0 bottom-0 h-150 w-150 rounded-full bg-[#7F56D9]/5 blur-[100px]" />
        {/* 下面是网格的实现 */}
        <svg
          className="absolute inset-0 h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 定义一个 40*40 的单元格 */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              // 这里表示的是单位，上面的 40 没写单位，我们这里用 userSpaceOnUse，那么他的单位就变成 40px
              patternUnits="userSpaceOnUse"
            >
              <path
                // 这里画的是上边和左边的线，平铺之后就变成网格了
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          {/* 画一个和 svg 一样大的矩形，然后用 #grid 在里面填充 */}
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </>
  );
}
