import { WebPlugin } from '@capacitor/core';
import { IntelcapPlugin } from './definitions';

export class IntelcapWeb extends WebPlugin implements IntelcapPlugin {
  constructor() {
    super({
      name: 'Intelcap',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Intelcap = new IntelcapWeb();

export { Intelcap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Intelcap);
