import { config } from "@tamagui/config/v3"; // Importa a configuração do Tamagui
import { createTamagui } from "tamagui"; // ou '@tamagui/core'

// Cria a configuração do Tamagui
const appConfig = createTamagui(config);

// Define o tipo da configuração
export type AppConfig = typeof appConfig;

// Declara o tipo TamaguiCustomConfig fora de um namespace
export type TamaguiCustomConfig = AppConfig;

// Exporta a configuração do aplicativo
export default appConfig;
