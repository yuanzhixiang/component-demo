interface GithubButtonProps {
  href: string;
}

export function GithubButton(props: GithubButtonProps) {
  return (
    <a
      className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-300/50 text-white"
      target="_blank"
      href={props.href}
    >
      G
    </a>
  );
}
