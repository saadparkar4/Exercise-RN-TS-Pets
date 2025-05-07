import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import pets from "@/data/pets";
import PetItem from "./PetItem";

type PetType = "All" | "Dog" | "Cat" | "Rabbit";

const PetList = () => {
	const [query, setQuery] = useState("");
	const [type, setType] = useState<PetType>("All");

	const filteredPets = pets.filter((pets) => pets.name.toLowerCase().includes(query.toLowerCase()));
	const petList = filteredPets.map((pets) => <PetItem key={pets.id} pet={pets} />);

	const categoryPets = filteredPets
		.filter((pets) => pets.type.toLowerCase().includes(type.toLowerCase()))
		.map((pet) => {
			return <PetItem key={pet.id} pet={pet} />;
		});

	return (
		<ScrollView contentContainerStyle={styles.container} style={styles.containerStyle}>
			{/* Search Input */}
			<TextInput placeholder="Search for a pet" style={styles.searchInput} onChangeText={(text) => setQuery(text)} value={query}></TextInput>

			{/* Filter by type */}
			<ScrollView horizontal contentContainerStyle={styles.filterContainer}>
				<TouchableOpacity style={styles.filterButton} onPress={() => setType("All")}>
					<Text>All</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton} onPress={() => setType("Cat")}>
					<Text>Cat</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton} onPress={() => setType("Dog")}>
					<Text>Dog</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton} onPress={() => setType("Rabbit")}>
					<Text>Rabbit</Text>
				</TouchableOpacity>
			</ScrollView>

			{/* Pet List */}
			{/* {petList} */}
			{type === "All" ? petList : categoryPets}
		</ScrollView>
	);
};

export default PetList;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	containerStyle: {
		backgroundColor: "#f9e3be",
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 20,
	},
	searchInput: {
		width: "100%",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		backgroundColor: "#fff",
		borderColor: "#000",
	},
	filterTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBottom: 10,
	},
	filterButton: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		width: "20%",
		justifyContent: "center",
		alignItems: "center",
	},
});
