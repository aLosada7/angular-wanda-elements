import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({ providedIn: "root" })
export class SharedService {
    // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();

    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }

    capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
