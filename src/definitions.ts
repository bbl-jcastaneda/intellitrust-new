declare module '@capacitor/core' {
  interface PluginRegistry {
    Intelcap: IntelcapPlugin;
  }
}

export interface IntelcapPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
