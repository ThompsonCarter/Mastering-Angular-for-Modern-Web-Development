import {
  Directive, Input, TemplateRef, ViewContainerRef
} from '@angular/core';

@Directive({ selector: '[appUnless]', standalone: true })
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.vcr.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.vcr.clear();
      this.hasView = false;
    }
  }
}