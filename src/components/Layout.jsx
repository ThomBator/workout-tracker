export default function Layout(props) {
  const header = (
    <header>
      <h1 className="text-gradient">EZ Workouts</h1>
      <p><strong>30 Easy workouts to kickstart your fitness journey</strong></p>
    </header>
  );
  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a href="https://thombator.github.io" target="_blank" rel="noreferrer">
          Thom Bator
        </a>
      </p>
    </footer>
  );

  return (
    <>
      {header}
      {props.children}
      {footer}
    </>
  );
}
