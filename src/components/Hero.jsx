export default function Hero() {
  return (
    <section className="hero">
      <h2>Complete this training program if you want to...</h2>
      <ol className="benefitsList">
        <li>Follow a simple program with gauranteed results</li>
        <li>Get fit, healthy and strong</li>
        <li>Learn more about resistance training and proper technique</li>
        <li>Build confidence in your fitness journey💪</li>
      </ol>

      <h2>The rules</h2>
      <p>
        To complete this program, you <strong>MUST</strong> follow these rules:
      </p>
      <ul className="rules-list">
        <li className="rule-item">
          Take a minimum of one rest day between workouts
        </li>
        <li className="rule-item">
          We recommend following a{" "}
          <abbr title="2 seconds down, 2 seconds hold, 2 seconds up">
            2-2-2 tempo
          </abbr>
        </li>
        <li className="rule-item">
          Select the maximum weight that allows you to complete your set with
          good form*
        </li>
        <li className="rule-item">
          Make sure to eat 30 grams of protein within 30 minutes after your
          workout
        </li>
      </ul>
      <small>
        *Maximum weight is only used for your last 2 sets, known as your
        "working sets". For your first 2 sets, select a weight between 60-80% of
        your working set weight
      </small>
      <h2>The Plan</h2>
      <p>This plan follows a simple rotation proven to get results:</p>
      <p>Push ➡️ Pull ➡️ Legs ➡️ Repeat</p>
    </section>
  );
}
