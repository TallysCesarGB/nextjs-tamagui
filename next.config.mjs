import { withTamagui } from "@tamagui/next-plugin";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,

    // ...sua configuração
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
}
