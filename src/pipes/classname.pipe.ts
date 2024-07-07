import { Pipe, PipeTransform } from '@angular/core';
import { getKcClsx } from 'keycloakify/login/lib/kcClsx';

@Pipe({
  name: 'kcClass',
  standalone: true,
})
export class KcClassPipe implements PipeTransform {
  kcClsx: (...args: any[]) => string;

  constructor() {
    const params = {
      doUseDefaultCss: false,
      classes: {
        "kcLoginClass": "lux-container-additional lux-flex lux-flex-col lux-items-center lux-justify-center",
        "kcHeaderClass": "kc-header lux-grid lux-grid-cols-12 lux-auto-cols-max lux-header-additional",
        "kcHeaderImageClass": "lux-col-span-2 lux-flex lux-items-center",
        "kcHeaderWrapperClass": "lux-col-span-8 lux-flex lux-items-center lux-justify-center"
       },
    };
    this.kcClsx = getKcClsx(params).kcClsx;
  }

  transform(value: string): string {
    return this.kcClsx(value);
  }
}