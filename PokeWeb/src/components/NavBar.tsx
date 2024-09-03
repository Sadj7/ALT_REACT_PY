interface NavBarProps {
  title: string;
}

export function NavBar(props: NavBarProps) {
  return <h1>{props.title}</h1>;
}
