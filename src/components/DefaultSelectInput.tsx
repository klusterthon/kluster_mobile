import React from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";

import styles from "../../styles";


type DefaultSelectInputProps<T>  = {
	selected?: T,
	options: T[],
	label: React.ReactNode,
	placeholder?: React.ReactNode,
	onSelect: (value: T) => void,
	buildOptions: (value: T) => React.ReactNode,
	getDisplayName: (value: T) => string,
};

export function DefaultSelectInput<T>({ label, placeholder, options, buildOptions, selected, onSelect, getDisplayName }: DefaultSelectInputProps<T>) {
	const [dropdownVisible, setDropdownVisible] = React.useState(false);

	return (
		<View>
			{label && <Text className={styles.label}>{label}</Text>}
			<View className="relative">
				<Pressable
					onPress={() => setDropdownVisible(!dropdownVisible)}
					className="flex p-2">
					<Text className="flex-1">
						{selected ? getDisplayName(selected) : placeholder}
					</Text>
					{/* <Image source={{
						uri: dropdownVisible ? require('') : require('')
					}} /> */}
				</Pressable>
				{
					dropdownVisible &&
					<ScrollView className="absolute bg-white shadow rounded-b-xl border-x border-b overflow-y-scroll">
						{
							options.map((option, index) => (
								<Pressable
									key={index}
									className="flex space-x-2 p-2"
									onPress={() => onSelect(option)}>
									{buildOptions(option)}
								</Pressable>
							))
						}
					</ScrollView>
				}
			</View>
		</View>
	)
}
