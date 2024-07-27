import { Pipe, PipeTransform } from '@angular/core';
import { getKcClsx } from 'keycloakify/login/lib/kcClsx';
import { BehaviorSubject, filter, Observable, switchMap } from 'rxjs';
import { ExtraClassesService } from 'src/service/extra-classes.service';

@Pipe({
  name: 'kcClass',
  standalone: true,
})
export class KcClassPipe implements PipeTransform {
  private kcClsx!: (...args: any[]) => string;
  private classesSubject = new BehaviorSubject<any>(null);

  constructor(private extraClassesService: ExtraClassesService) {
    this.loadClasses();
  }

  private loadClasses(): void {
    this.extraClassesService.getClasses().subscribe(classes => {
      const params = {
        doUseDefaultCss: false,
        classes: {
          ...classes
        },
      };
      this.kcClsx = getKcClsx(params).kcClsx;
      this.classesSubject.next(classes);
    });
  }

  transform(value: any): Observable<string> {
    return this.classesSubject.pipe(
      filter(classes => classes !== null), // Wait until classes are loaded
      switchMap(classes => {
        return new BehaviorSubject<string>(this.kcClsx(value)).asObservable();
      })
    );
  
    
  
  }
}