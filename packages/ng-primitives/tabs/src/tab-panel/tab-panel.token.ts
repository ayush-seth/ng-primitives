/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the CC BY-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InjectionToken, inject } from '@angular/core';
import type { NgpTabPanelDirective } from './tab-panel.directive';

export const NgpTabPanelToken = new InjectionToken<NgpTabPanelDirective>('NgpTabPanelToken');

/**
 * Inject the TabPanel directive instance
 * @returns The TabPanel directive instance
 */
export function injectTabPanel(): NgpTabPanelDirective {
  return inject(NgpTabPanelToken);
}
