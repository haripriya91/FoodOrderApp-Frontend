import { ErrorHandler,Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn:'root'
})

export class GlobalErrorHandler implements ErrorHandler {

    constructor(private snackBar:MatSnackBar, private zone: NgZone) {}
 
 
    handleError(error: unknown) {

        this.zone.run(() =>{
            this.snackBar.open(
                'error was detected and we are already working on it',
                'Close',
                {
                    duration :20000
                }
            )
        })       
        console.warn("Error Details:",error);
    }
    
}