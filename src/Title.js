export default function Title({ action, alert }) {
  function updateShow() {
    showNumber = Math.floor(Math.random() * 79955 + 1);
    console.log(showNumber);
    action(showNumber);
  }

  return (
    <>
      <header>
        <h1>Channel Surfer</h1>
        <img src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-purple-color-classic-tv-png-image_10017568.png" />
        <nav>
          <ul>
            <li onClick={alert}>Home</li>
            <li title="Work in progress!">Your Shows</li>
            <li onClick={updateShow}>Find A New Show!</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
