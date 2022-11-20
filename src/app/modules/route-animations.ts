import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const routingAnimation = trigger('routing', [
  transition('* <=> *', [
    style({opacity: 0, transform: 'translateY(50%)'}),
    animate('400ms', style({opacity: 1, transform: 'translateY(0%)'})),
  ]),
]);
