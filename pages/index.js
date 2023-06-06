import useNewLocalStorage from "../hooks/useNewLocalStorage";
import styles from "../styles/Home.module.css";
import useLocalStorageState from "use-local-storage-state";

export default function Home() {
  const [color, setColor] = useLocalStorageState("customStorageColor", {
    defaultValue: "#ccc",
  });

  console.log(color);

  const stylingObject = { backgroundColor: color };

  function handleOnChange(event) {
    const colorValue = event.target.value;
    setColor(colorValue);
  }

  return (
    <div className={styles.container} style={stylingObject}>
      <input type="color" value={color} onChange={handleOnChange} />
      <input type="text" value={color} onChange={handleOnChange} />
    </div>
  );
}
