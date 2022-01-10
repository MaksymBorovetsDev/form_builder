import { Directive } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export abstract class Unsubscribe {
    protected ngUnsubscribe:Subject<void>  = new Subject();

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }

} 