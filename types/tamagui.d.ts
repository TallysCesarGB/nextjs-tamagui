declare module "@tamagui/config/v3";
declare module "tamagui" {
  // Definindo um tipo para tamanhos de fonte
  interface TamaguiFontSizes {
    [key: number]: number; // Pode ser ajustado se houver um tipo específico
  }

  // Definindo a estrutura para fontes
  interface TamaguiFonts {
    body?: {
      size: TamaguiFontSizes;
    };
  }

  // Definindo a configuração do Tamagui
  interface TamaguiConfig {
    themes?: Record<string, unknown>; // Usando `unknown` em vez de `any`
    fonts?: TamaguiFonts;
  }

  // Ajuste o tipo de retorno de acordo com o que `createTamagui` realmente retorna
  type TamaguiReturn = object;

  export function createTamagui(config: TamaguiConfig): TamaguiReturn;

  // Definindo o tipo do TamaguiProvider
  export const TamaguiProvider: React.ComponentType<{ config: TamaguiConfig }>;
}
