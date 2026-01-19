interface GithubButtonProps {
  href: string;
}

export function GithubButton(props: GithubButtonProps) {
  return (
    <a
      className="absolute right-5 top-5 text-white w-8 h-8 bg-amber-300/50 rounded-full flex items-center justify-center"
      target="_blank"
      href={props.href}
    >
      G
    </a>
  );
}
