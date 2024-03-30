import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image } from "react-native";
import { userpageStyles } from "../StyleSheets";

const Question2 = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        setError("There was a problem with the fetch operation:" + error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  const renderItem = (item) => (
    <View style={userpageStyles.item}>
      <Image source={{ uri: item.avatar }} style={userpageStyles.avatar} />
      <View style={userpageStyles.userInfo}>
        <Text style={userpageStyles.name}>
          {item.first_name} {item.last_name}
        </Text>
        <Text style={userpageStyles.email}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <View style={userpageStyles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Question2;
