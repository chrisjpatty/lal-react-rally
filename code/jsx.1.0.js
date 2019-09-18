const Button = () => {

  const [color, setColor] = React.useState("blue")

  return (
    <button
      onClick={() => setColor("red")}
      style={{ background: color }}
    >
      Click to turn red
    </button>
  )
}
