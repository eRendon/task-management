import { ApplicationRef, ComponentRef, createComponent, Injectable, Type, ViewContainerRef } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalComponentRef!: ComponentRef<any>
  private childComponentRef!: ComponentRef<any>
  private rootViewContainerRef!: ViewContainerRef
  private responseSubject: Subject<any> = new Subject();

  constructor(
    private appRef: ApplicationRef
  ) { }

  /**
   * Set Container ref to render ModalComponent
   * @param viewContainerRef
   */
  setRootViewContainerRef(viewContainerRef: ViewContainerRef): void {
    this.rootViewContainerRef = viewContainerRef
  }

  /**
   * create instance for ModalComponent and ChildComponent to render into modal the ChildComponent
   * assign optionals parameters for children components
   * @param modalComponent
   * @param childComponent
   * @param data
   */
  open(modalComponent: Type<any>, childComponent: Type<any>, data?: any): Subject<any> {
    this.modalComponentRef = createComponent(modalComponent, {
      environmentInjector: this.appRef.injector
    })
    this.rootViewContainerRef.insert(this.modalComponentRef.hostView)

    this.childComponentRef = createComponent(childComponent, {
      environmentInjector: this.appRef.injector
    })
    if (data) {
      Object.assign(this.childComponentRef.instance, { data })
    }

    this.childComponentRef.instance.responseSubject = this.responseSubject;


    this.modalComponentRef.instance.viewContainerRef.insert(this.childComponentRef.hostView)

    return this.responseSubject;
  }

  /**
   * destroy ref for ModalComponent and ChildComponent
   */
  close(): void {
    if (this.childComponentRef) {
      this.childComponentRef.destroy()
    }
    if (this.modalComponentRef) {
      this.rootViewContainerRef.detach(this.rootViewContainerRef.indexOf(this.modalComponentRef.hostView))
      this.modalComponentRef.destroy()
    }
  }
}
