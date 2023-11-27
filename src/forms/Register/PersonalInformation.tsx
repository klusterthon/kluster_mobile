import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { Formik } from "formik";

import styles from "../../../styles";
import { DefaultSelectInput } from "../../components";
import { Gender } from ",,/../../lib";

export function PersonalInformation() {
    const initialValues = {
        first_name: "",
        last_name: "",
        sex: "Female",
        dob: undefined,
    }

    return (
        <View className="flex flex-col space-y-4 p-4">
            <View>
                <Text
                    style={{ fontFamily: "WorkSans-Regular", fontWeight: "900" }}
                    className="text-2xl">Let's set up your profile</Text>
                <Text>This will allow more personalization for you</Text>
            </View>
            <View className="flex flex-col">
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => {

                    }}>
                    {
                        ({ handleChange, handleBlur, handleSubmit, values, }) => (
                            <>
                            
                                <View>
                                    <View className={styles.inputContainer}>
                                        <Text className={styles.label}>First name*</Text>
                                        <TextInput
                                            onBlur={handleBlur("first_name")}
                                            onChangeText={handleChange('first_name')}
                                            className={styles.input}
                                            value={values.first_name} />
                                    </View>
                                    <View className={styles.inputContainer}>
                                        <Text className={styles.label}>Last name*</Text>
                                        <TextInput
                                            onBlur={handleBlur("last_name")}
                                            onChangeText={handleChange('first_name')}
                                            className={styles.input}
                                            value={values.first_name} />
                                    </View>
                                    <View className={styles.inputContainer}>
                                        <Text className={styles.label}>First name*</Text>
                                        <TextInput
                                            onBlur={handleBlur("first_name")}
                                            onChangeText={handleChange('first_name')}
                                            className={styles.input}
                                            value={values.first_name} />
                                    </View>
                                    <DefaultSelectInput
                                        label="Sex*"
                                        selected={values.sex}
                                        options={Object.values(Gender)}
                                        onSelect={(value) => handleChange('sex')(value)}
                                        getDisplayName={value => value}
                                        buildOptions={(value) => <Text className="flex-1">{value}</Text>} />
                                </View>
                                <Button
                                    color="#06b6d4"
                                    onPress={() => handleSubmit()}
                                    title="Next" />
                            </>
                        )
                    }
                </Formik>
            </View>
        </View>
    );
}
