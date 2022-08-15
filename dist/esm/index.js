import { registerPlugin } from '@capacitor/core';
const BranchDeepLinks = registerPlugin('BranchDeepLinks', {
    web: () => import('./web').then(m => new m.BranchDeepLinksWeb()),
});
export { BranchDeepLinks };
//# sourceMappingURL=index.js.map