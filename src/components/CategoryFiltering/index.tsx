import {useState} from "react";
import {View, Dimensions, Text, ScrollView} from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";

const {height} = Dimensions.get("window");

const CategoryBox = ({active, item}: {active: string; item: string}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 9,
        },
        item === active && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{fontSize: 14, color: "white", fontWeight: "600"}}>
        {item}
      </Text>
    </View>
  );
};

function index({category}: {category: string}) {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        <CategoryBox key={item.name} item={item.name} active={category} />
      ))}
    </ScrollView>
  );
}

export default index;
