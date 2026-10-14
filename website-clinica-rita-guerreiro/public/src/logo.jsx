function LogoTile({ size = 44, inverted = false }) {
  return null;
}

function Wordmark({ inverted = false, stacked = false }) {
  return (
    <a href="/" style={{
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
    }}>
      <img
        src="/rita_guerreiro_logo.png"
        alt="Rita Guerreiro"
        style={{
          height: 64,
          width: 'auto',
          filter: inverted ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </a>
  );
}

Object.assign(window, { LogoTile, Wordmark });
