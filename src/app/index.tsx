import { useAppDispatch, useAppSelector } from "@/components/common/hooks";
import { ACTIONS, toggleTaskCompleted } from "@/components/tasks/slice";
import { FlatList, View } from "react-native";
import { Checkbox, List } from "react-native-paper";

export default function Index() {
  const tasks = useAppSelector((state) => state.tasks);
  const { dispatch } = useAppDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={item.description}
            right={() => (
              <Checkbox
                status={item.completed ? "checked" : "unchecked"}
                onPress={() => {
                  dispatch(toggleTaskCompleted({ id: item.id }));
                }}
              />
            )}
          />
        )}
      />
    </View>
  );
}
