import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { SizableText } from "tamagui";

// Definindo os tipos para Stack e XStack
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
    <Stack color="white" cellPadding={16}>
      <SizableText
        color="white"
        textAlign="center"
        fontSize={64}
        marginTop={160}
      >
        To-Do List
      </SizableText>
      <XStack className="mb-4 space-x-2">
        <Input
          size={40}
          color="white"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow"
        />
        <Button onClick={addTask}>Add</Button>
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
    </Stack>
  );
}
