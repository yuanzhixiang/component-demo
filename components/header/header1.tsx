"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X, Menu } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log(isMobileMenuOpen);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navLinks = [
    { title: "What is ChatGPT", href: "#what-is-chatgpt" },
    { title: "How to use", href: "#how-to-use" },
    { title: "FAQ", href: "#faq" },
  ];
  return (
    // 这里之所以会额外套一层 header 是因为内部存在两个，
    // 一个是 desktop，还有一个是移动端
    // fixed 让整个 header 脱离文档流，让其相对整个视窗不发生移动
    // top-0 让 header 紧贴浏览器上方，但这里其实也可以不设置，写上语义更清晰
    // right-0 left-0 很关键，由于 header 没有设置宽度，设置这两个相当于帮内部设置了宽度
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-white/5 bg-[#0F1115]/80 py-3 backdrop-blur-md"
          : "border-transparent bg-transparent py-5"
      }`}
      // 这里我手动将背景设置为黑色，这样才能看到效果
      style={{ background: "#0f1115" }}
    >
      {/* max-w-7xl 控制 header 的最大宽度*/}
      {/* mx-auto   让组件内容居中，两边的 margin 自动计算，(父元素宽度 - 子元素宽度) / 2 */}
      {/* px-6      设置两边的 padding */}
      {/* md:px-8   表示在 768px 屏幕以上时 px-8 生效*/}
      {/* items-center 表示元素在垂直方向居中 */}

      {/* justify-between 表示元素在水平方向上均匀分布 */}
      {/* https://tailwindcss.com/docs/justify-content#space-between */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <div className="flex cursor-pointer items-center gap-2">
          <div className="bg-accent flex h-8 w-8 items-center justify-center rounded-full">
            <MessageSquare className="h-5 w-5 text-[#0F1115]" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            ChatGPT Online
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.href}
                className="hover:text-accent text-sm font-medium text-gray-300 transition-colors"
              >
                {link.title}
              </a>
            );
          })}
        </nav>

        {/* 这和上面 nav 里面的 hidden md:flex 时对应的，当屏幕尺寸达到 md 时 md:flex 会生效覆盖 hidden 出现 */}
        {/* 而当屏幕尺寸小于 md 时，下面的 md:hidden 失效，于是 这个移动端的菜单就出现了 */}
        <button
          className="text-white md:hidden"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 flex flex-col gap-4 border-b border-white/10 bg-[#0F1115] p-6 md:hidden">
          {navLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.href}
                className="hover:text-accent py-2 text-gray-300"
              >
                {link.title}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
