import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { SizableText, YStack, Text } from "tamagui";

const Stack: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>;

const XStack: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div {...props} style={{ display: "flex", ...props.style }}>
    {children}
  </div>
);

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding={16}
      backgroundColor="$background"
      gap={50}
    >
      <SizableText textAlign="center" fontSize={64}>
        To-Do List
      </SizableText>
      <XStack
        style={{
          display: "flex",
          gap: "2vw",
        }}
      >
        <Input
          style={{
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 8,
            padding: 12,
            backgroundColor: "white",
            color: "black",
          }}
          size={40}
          color="white"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <Button
          onClick={addTask}
          style={{
            background: "black",
            color: "white",
            width: "8vw",
            textAlign: "center",
            borderRadius: 8,
          }}
        >
          <Text color={"white"}>Add</Text>
        </Button>
      </XStack>
      <Stack className="space-y-2">
        {tasks.map((task, index) => (
          <XStack
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.4vw",
              fontSize: "1.8rem",
            }}
            key={index}
            className="bg-secondary rounded-md p-2 justify-between items-center"
          >
            <span className="text-secondary-foreground">{task}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeTask(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </XStack>
        ))}
      </Stack>
    </YStack>
  );
}
