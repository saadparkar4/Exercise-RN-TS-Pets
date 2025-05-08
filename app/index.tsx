import PetList from "@/components/PetList";
import { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

export default function Index() {
	// const [toggle, setToggle] = useState(false);

	return (
		<View style={styles.container}>
			<PetList />

			{/* <Switch value={toggle} onChange={() => setToggle(!toggle)} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f9e3be",
	},
});
