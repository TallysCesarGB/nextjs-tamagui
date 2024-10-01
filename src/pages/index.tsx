import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { SizableText, YStack } from "tamagui"; // Importando YStack

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
      <XStack>
        <Input
          size={40}
          color="white"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow"
        />
        <Button onClick={addTask} className="bg-black text-white">
          Add
        </Button>
      </XStack>
      <Stack className="space-y-2">
        {tasks.map((task, index) => (
          <XStack
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
